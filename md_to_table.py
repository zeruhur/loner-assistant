#!/usr/bin/env python3
"""
Convert a markdown D66 table (Geared Towards Loner style) into a ready-to-use
Loner Assistant supplement file, and wire it up automatically.

The markdown may be a single "## Adventure Tables" file (the original format)
or a multi-section file that also carries character-generator data:

    ## Character Traits
    ### Concepts
    |   | 1 | 2 | ... |
    | 1 | ... |
    ...
    ### Skills / Frailties / Gear ...

    ## Names
    ### Female Names / Male Names / Surnames    (character generator)
    #### Settlement Names / Location Names ...   (world tables)

    ## Adventure Tables
    ### Adventure Seeds
    | 11 | ... |
    ...

Tables are routed to a `category` the app understands:
  - 'character'      -> Concepts/Skills/Frailties/Gear + Female/Male/Surnames
                        (consumed by the character generator)
  - 'random-tables'  -> Adventure Tables + world name tables
  - 'get-inspired'   -> Verbs/Adjectives/Nouns (split into a flavor file)

This will:
  1. Generate/refresh data/tables/supplements/<slug>.js as a proper ES module
     (export default { supplement, tables }), with per-table `category`. If the
     file already exists it is MERGED, not overwritten: tables in the markdown
     replace same-id tables, new ones are appended, and tables not present in
     the markdown are left untouched (so a partial file won't wipe the rest).
  2. Add (or update) the corresponding entry in data/table-registry.js. If the
     target file is already registered, its existing id/name are reused so the
     supplement id stays stable (character tables land in the SAME supplement).
  3. Add the new file to sw.js's PRECACHE_URLS so it works offline too,
     and bump CACHE_VERSION so installed PWAs pick it up.

Usage:
    python md_to_table.py markdown_file.md
"""

import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent
SUPPLEMENTS_DIR = REPO_ROOT / 'data' / 'tables' / 'supplements'
FLAVORS_DIR = REPO_ROOT / 'data' / 'tables' / 'flavors'
REGISTRY_FILE = REPO_ROOT / 'data' / 'table-registry.js'
SW_FILE = REPO_ROOT / 'sw.js'


def slugify(text):
    """kebab-case, ASCII-safe slug."""
    text = text.lower().strip()
    text = text.replace('–', '-').replace('—', '-').replace('&', 'and')
    text = re.sub(r"[‘’']", '', text)
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')


def strip_markdown_emphasis(text):
    """Remove inline **bold**/*italic* markers from table cell text - the
    app displays these as plain text (toasts, notes, event log), not
    markdown, so stray asterisks would otherwise show up literally."""
    text = re.sub(r'\*\*(.+?)\*\*', r'\1', text)
    text = re.sub(r'\*(.+?)\*', r'\1', text)
    return text


SMALL_WORDS = {'of', 'the', 'and', 'a', 'an', 'in', 'on', 'at', 'to', 'for'}


def titlecase(text):
    """Title-case a string, lowercasing minor words like 'of'/'the' except
    when they're first."""
    words = [w for w in text.split() if w]
    return ' '.join(
        w.capitalize() if i == 0 or w.lower() not in SMALL_WORDS else w.lower()
        for i, w in enumerate(words)
    )


def name_from_filename(markdown_file):
    """Title derived from the filename, e.g. 'arabian_nights_adventure.md'
    -> 'Arabian Nights'. Multi-section Geared Towards Loner files don't
    repeat the supplement title inside the file, so the filename is the
    reliable source of the setting name."""
    stem = Path(markdown_file).stem
    words = [w for w in re.split(r'[_\-]+', stem) if w]
    if words and words[-1].lower() == 'adventure':
        words = words[:-1]
    return titlecase(' '.join(words))


def detect_newline(path):
    """Return '\\r\\n' or '\\n' matching the file's existing convention,
    so edits to table-registry.js/sw.js don't turn into whole-file diffs
    (the repo is inconsistent: some files are CRLF, some are LF)."""
    raw = path.read_bytes()
    return '\r\n' if b'\r\n' in raw else '\n'


def write_matching_newline(path, content_with_lf):
    """Write content (built with plain '\\n') using the target file's
    existing line-ending convention."""
    newline = detect_newline(path) if path.exists() else '\n'
    if newline == '\r\n':
        content_with_lf = content_with_lf.replace('\n', '\r\n')
    with open(path, 'w', encoding='utf-8', newline='') as f:
        f.write(content_with_lf)


def js_string(s):
    """Single-quoted JS string literal with escaping."""
    escaped = s.replace('\\', '\\\\').replace("'", "\\'")
    return f"'{escaped}'"


# Get Inspired tables (Verbs/Adjectives/Nouns) live in their own flavor file,
# separate from the Adventure Tables supplement.
INSPIRATION_TABLE_NAMES = {'verbs', 'adjectives', 'nouns'}
DIVIDER_HEADERS = {'inspiration tables'}

# Name tables that feed the character generator (vs. world/place names, which
# are ordinary random tables).
CHARACTER_NAME_TABLES = {'female_names', 'male_names', 'surnames'}


def classify_domain(section_title):
    """Map a '## ' section header to a domain that drives table categories."""
    t = section_title.strip().lower()
    if 'character trait' in t:
        return 'character'
    if 'name' in t:
        return 'names'
    return 'adventure'


def parse_subtable(table_content):
    """Parse a single '###'/'####' table body into a 6x6 grid, or return
    None if it holds no rollable data. Supports two markdown shapes:
      - D66 code rows: | 11 | text |  ... | 66 | text |
      - 6x6 grid rows: | 1 | a | b | c | d | e | f |  (leading die 1-6)
    """
    entries = {}

    row_pattern = r'\|\s*(\d{2})\s*\|\s*(.+?)\s*\|'
    for match in re.finditer(row_pattern, table_content):
        code, desc = match.group(1), strip_markdown_emphasis(match.group(2).strip())
        if desc.startswith('---'):
            continue
        entries[code] = desc

    if not entries:
        grid_row_pattern = (
            r'^\|\s*\*{0,2}([1-6])\*{0,2}\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|'
            r'\s*(.+?)\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*$'
        )
        for match in re.finditer(grid_row_pattern, table_content, re.MULTILINE):
            row = match.group(1)
            for col in range(1, 7):
                entries[f'{row}{col}'] = strip_markdown_emphasis(match.group(col + 1).strip())

    if not entries:
        return None, 0

    expected_codes = [f"{i}{j}" for i in range(1, 7) for j in range(1, 7)]
    missing = [c for c in expected_codes if c not in entries]
    if missing:
        # Reported by the caller with the table name for context.
        pass

    grid = [[entries.get(f"{r}{c}", "") for c in range(1, 7)] for r in range(1, 7)]
    return grid, len(entries), missing


def parse_markdown(markdown_file):
    content = Path(markdown_file).read_text(encoding='utf-8')
    title = name_from_filename(markdown_file)

    # Split on '## ' section headers (but not '###'/'####').
    h2_matches = list(re.finditer(r'^##\s+(?!#)(.+?)\s*$', content, re.MULTILINE))
    if not h2_matches:
        raise ValueError("No section (## header) found")

    supplement_tables = {}   # everything that lives in the supplement file
    inspiration_tables = {}  # split out into the flavor file

    table_pattern = r'^#{3,4} \*?\*?(.+?)\*?\*?\s*\n((?:(?!^#{3,4} ).)*)(?=^#{3,4} |\Z)'

    for i, h2 in enumerate(h2_matches):
        section_title = h2.group(1).strip()
        start = h2.end()
        end = h2_matches[i + 1].start() if i + 1 < len(h2_matches) else len(content)
        body = content[start:end]
        domain = classify_domain(section_title)

        for section in re.finditer(table_pattern, body, re.MULTILINE | re.DOTALL):
            table_name = section.group(1).strip().replace('**', '').replace('*', '')
            table_content = section.group(2)

            parsed = parse_subtable(table_content)
            grid = parsed[0]
            if grid is None:
                if table_name.strip().lower() not in DIVIDER_HEADERS:
                    print(f"  Skipping '{table_name}' (no D66 entries found)")
                continue
            count, missing = parsed[1], parsed[2]
            if missing:
                print(f"  Warning: '{table_name}' missing codes: {missing}")

            table_id = slugify(table_name).replace('-', '_')

            if table_id in INSPIRATION_TABLE_NAMES:
                inspiration_tables[table_id] = {
                    'id': table_id, 'name': table_name, 'entries': grid,
                    'category': 'get-inspired'
                }
                label = 'Get Inspired'
            else:
                if domain == 'character':
                    category = 'character'
                elif domain == 'names':
                    category = 'character' if table_id in CHARACTER_NAME_TABLES else 'random-tables'
                else:
                    category = 'random-tables'
                supplement_tables[table_id] = {
                    'id': table_id, 'name': table_name, 'entries': grid,
                    'category': category
                }
                label = category

            print(f"  {table_name} ({label}): {count} entries")

    if not supplement_tables and not inspiration_tables:
        raise ValueError("No valid tables found")

    return title, supplement_tables, inspiration_tables


def generate_table_block(table_id, info, default_category):
    """Render one table as its `<id>: { ... }` block, without a trailing
    comma and without a trailing newline. This is the unit that both a fresh
    write and a merge splice together, so the two paths stay byte-identical."""
    category = info.get('category', default_category)
    lines = [
        f'    {table_id}: {{',
        f"      id: {js_string(info['id'])},",
        f"      name: {js_string(info['name'])},",
        f"      category: {js_string(category)},",
        "      rollType: '2d6',",
        '      entries: [',
    ]
    for row in info['entries']:
        escaped_row = ', '.join(js_string(e) for e in row)
        lines.append(f'        [{escaped_row}],')
    lines.append('      ]')
    lines.append('    }')
    return '\n'.join(lines)


def generate_js(supplement_id, supplement_name, tables, default_category, flavor_of=None):
    header_lines = [
        '/**',
        f' * {supplement_name}',
        ' * D66 random tables',
        ' */',
        '',
        'export default {',
        '  supplement: {',
        f'    id: {js_string(supplement_id)},',
        f'    name: {js_string(supplement_name)},',
        "    version: '1.0',",
        '    enabled: true' + (',' if flavor_of else ''),
    ]
    if flavor_of:
        header_lines.append(f"    flavorOf: {js_string(flavor_of)}")
    header_lines += ['  },', '', '  tables: {']

    header = '\n'.join(header_lines) + '\n'
    body = ',\n'.join(
        generate_table_block(tid, info, default_category)
        for tid, info in tables.items()
    )
    return header + body + '\n  }\n};\n'


# Matches one `    <id>: { ... }` table block in a generated supplement file.
# `^    }` (a 4-space-indented closing brace) only ever ends a table block -
# entries rows are indented deeper and the container braces are indented less -
# so a non-greedy match to the first one reliably captures a whole block.
TABLE_BLOCK_RE = re.compile(r'^    (\w+): \{\n.*?\n    \}', re.DOTALL | re.MULTILINE)


def merge_supplement_file(out_path, tables, default_category):
    """Merge freshly-parsed tables into an existing generated file: tables
    whose id already exists are replaced in place, new ones are appended, and
    tables not present in this markdown are left untouched. Returns
    (added, replaced) id lists, or None if the file has no parseable blocks
    (caller should then do a fresh write)."""
    existing = out_path.read_text(encoding='utf-8')  # universal newlines -> \n
    matches = list(TABLE_BLOCK_RE.finditer(existing))
    if not matches:
        return None

    ordered_ids = [m.group(1) for m in matches]
    block_map = {m.group(1): m.group(0) for m in matches}
    header = existing[:matches[0].start()]
    footer = existing[matches[-1].end():]

    added, replaced = [], []
    for tid, info in tables.items():
        block = generate_table_block(tid, info, default_category)
        if tid in block_map:
            replaced.append(tid)
        else:
            ordered_ids.append(tid)
            added.append(tid)
        block_map[tid] = block

    body = ',\n'.join(block_map[i] for i in ordered_ids)
    write_matching_newline(out_path, header + body + footer)
    return added, replaced


def find_registry_entry_by_file(relative_file_path):
    """If data/table-registry.js already has an entry pointing at this file,
    return its (id, name) so we reuse them - this keeps the supplement id
    stable when re-running (e.g. adding character tables to an existing
    Adventure Tables supplement). Returns None if not registered yet."""
    if not REGISTRY_FILE.exists():
        return None
    text = REGISTRY_FILE.read_text(encoding='utf-8')
    pattern = re.compile(
        r"\{[^{}]*?id:\s*'([^']+)'[^{}]*?name:\s*'([^']+)'[^{}]*?"
        r"file:\s*'" + re.escape(relative_file_path) + r"'[^{}]*?\}",
        re.DOTALL
    )
    m = pattern.search(text)
    if m:
        return m.group(1), m.group(2)
    return None


def update_registry(supplement_id, supplement_name, relative_file_path, description, flavor_of=None):
    text = REGISTRY_FILE.read_text(encoding='utf-8')

    if re.search(rf"id:\s*'{re.escape(supplement_id)}'", text):
        print(f"  data/table-registry.js already has '{supplement_id}' - leaving it alone")
        return False

    flavor_line = "    flavorOf: 'get-inspired',\n" if flavor_of else ""
    entry = (
        "  {\n"
        f"    id: '{supplement_id}',\n"
        f"    name: '{supplement_name}',\n"
        f"    file: '{relative_file_path}',\n"
        "    version: '1.0',\n"
        "    enabled: true,\n"
        f"{flavor_line}"
        f"    description: '{description}'\n"
        "  }"
    )

    marker = '\n  // Template for adding new supplements:'
    if marker not in text:
        raise ValueError("Could not find the template marker comment in table-registry.js - "
                          "add the entry manually this time.")

    before, after = text.split(marker, 1)
    before = before.rstrip()
    if not before.endswith(','):
        before += ','
    new_text = before + '\n' + entry + marker + after

    write_matching_newline(REGISTRY_FILE, new_text)
    return True


def update_service_worker(relative_file_path):
    text = SW_FILE.read_text(encoding='utf-8')
    entry_line = f"./data/{relative_file_path}"

    if entry_line in text:
        print(f"  sw.js already precaches {entry_line} - leaving it alone")
        return False

    idx = text.find('const PRECACHE_URLS = [')
    if idx == -1:
        raise ValueError("Could not find PRECACHE_URLS in sw.js - add the entry manually this time.")
    close_idx = text.find('\n];', idx)
    if close_idx == -1:
        raise ValueError("Could not find the end of PRECACHE_URLS in sw.js - add the entry manually this time.")

    before = text[:close_idx].rstrip()
    if not before.endswith(','):
        before += ','
    new_text = before + f"\n  '{entry_line}'" + text[close_idx:]

    version_match = re.search(r"const CACHE_VERSION = 'loner-v(\d+)';", new_text)
    if version_match:
        next_version = int(version_match.group(1)) + 1
        new_text = new_text.replace(
            version_match.group(0),
            f"const CACHE_VERSION = 'loner-v{next_version}';"
        )
        print(f"  Bumped sw.js CACHE_VERSION to loner-v{next_version}")

    write_matching_newline(SW_FILE, new_text)
    return True


def write_supplement(out_dir, relative_dir, filename, supplement_id, supplement_name,
                     tables, default_category, description, flavor_of=None):
    relative_file_path = f'{relative_dir}/{filename}'
    out_path = out_dir / filename
    rel = out_path.relative_to(REPO_ROOT)

    out_dir.mkdir(parents=True, exist_ok=True)

    # Merge into an existing file so tables not present in this markdown are
    # preserved (running on a partial file won't wipe the others). Only a
    # brand-new file is generated from scratch.
    merged = merge_supplement_file(out_path, tables, default_category) if out_path.exists() else None
    if merged is not None:
        added, replaced = merged
        print(f"\nMerged into {rel}: {len(replaced)} updated, {len(added)} added, "
              f"existing tables preserved")
        if added:
            print("  added: " + ", ".join(added))
    else:
        js_code = generate_js(supplement_id, supplement_name, tables, default_category, flavor_of)
        write_matching_newline(out_path, js_code)
        print(f"\nWrote {rel}")

    if update_registry(supplement_id, supplement_name, relative_file_path, description, flavor_of):
        print(f"Registered '{supplement_id}' in data/table-registry.js")

    update_service_worker(relative_file_path)


def main():
    if len(sys.argv) < 2:
        print("Usage: python md_to_table.py <markdown_file>")
        sys.exit(1)

    markdown_file = sys.argv[1]
    if not Path(markdown_file).exists():
        print(f"File not found: {markdown_file}")
        sys.exit(1)

    try:
        title, supplement_tables, inspiration_tables = parse_markdown(markdown_file)
        base_slug = slugify(title)

        if supplement_tables:
            filename = base_slug + '.js'
            relative_file_path = f'tables/supplements/{filename}'
            existing = find_registry_entry_by_file(relative_file_path)
            if existing:
                supplement_id, supplement_name = existing
                print(f"  Reusing registered supplement id '{supplement_id}' for {relative_file_path}")
            else:
                supplement_id = base_slug + '-adventure'
                supplement_name = f'{title} Adventure Tables'

            char_count = sum(1 for t in supplement_tables.values() if t['category'] == 'character')
            desc = f'{title} supplemental adventure tables'
            if char_count:
                desc += ' and character generator'

            write_supplement(
                out_dir=SUPPLEMENTS_DIR,
                relative_dir='tables/supplements',
                filename=filename,
                supplement_id=supplement_id,
                supplement_name=supplement_name,
                tables=supplement_tables,
                default_category='random-tables',
                description=desc
            )

        if inspiration_tables:
            filename = base_slug + '-inspired.js'
            relative_file_path = f'tables/flavors/{filename}'
            existing = find_registry_entry_by_file(relative_file_path)
            if existing:
                flavor_id, flavor_name = existing
                print(f"  Reusing registered flavor id '{flavor_id}' for {relative_file_path}")
            else:
                flavor_id = base_slug + '-inspired'
                flavor_name = f'{title} Inspiration'

            write_supplement(
                out_dir=FLAVORS_DIR,
                relative_dir='tables/flavors',
                filename=filename,
                supplement_id=flavor_id,
                supplement_name=flavor_name,
                tables=inspiration_tables,
                default_category='get-inspired',
                description=f'Get Inspired flavor themed for {title} adventures',
                flavor_of='get-inspired'
            )

        print("\nDone. Refresh the app to see it "
              "(if it's installed as a PWA, it'll pick up the new CACHE_VERSION on next load).")

    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)


if __name__ == '__main__':
    main()
