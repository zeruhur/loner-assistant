#!/usr/bin/env python3
"""
Convert a markdown D66 table (Geared Towards Loner style) into a ready-to-use
Loner Assistant supplement file, and wire it up automatically.

Given a markdown file shaped like:

    ## Some Supplement Tables

    ### Table One
    | 11  | Some result |
    | 12  | Another result |
    ...
    | 66  | Last result |

    ### Table Two
    ...

this will:
  1. Generate data/tables/supplements/<slug>.js as a proper ES module
     (export default { supplement, tables }), matching the exact shape
     tables.js/table-registry.js expect - not the old `window.X = {...}`
     classic-script format.
  2. Add (or update) the corresponding entry in data/table-registry.js.
  3. Add the new file to sw.js's PRECACHE_URLS so it works offline too,
     and bump CACHE_VERSION so installed PWAs pick it up.

Usage:
    python md_to_table.py markdown_file.md

No manual copy-pasting or reformatting needed afterward - just refresh
the app (a hard refresh / cache clear if it's already installed as a PWA).
"""

import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent
SUPPLEMENTS_DIR = REPO_ROOT / 'data' / 'tables' / 'supplements'
REGISTRY_FILE = REPO_ROOT / 'data' / 'table-registry.js'
SW_FILE = REPO_ROOT / 'sw.js'


def slugify(text):
    """kebab-case, ASCII-safe slug."""
    text = text.lower().strip()
    text = text.replace('–', '-').replace('—', '-').replace('&', 'and')
    text = re.sub(r"[‘’']", '', text)
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')


def strip_tables_suffix(name):
    return re.sub(r'\s+tables$', '', name, flags=re.IGNORECASE).strip()


def strip_markdown_emphasis(text):
    """Remove inline **bold**/*italic* markers from table cell text - the
    app displays these as plain text (toasts, notes, event log), not
    markdown, so stray asterisks would otherwise show up literally."""
    text = re.sub(r'\*\*(.+?)\*\*', r'\1', text)
    text = re.sub(r'\*(.+?)\*', r'\1', text)
    return text


SMALL_WORDS = {'of', 'the', 'and', 'a', 'an', 'in', 'on', 'at', 'to', 'for'}


def titlecase(text):
    """Title-case a string (or already-split words), lowercasing minor
    words like 'of'/'the' except when they're first - handles both
    ALL-CAPS headers ('THE THREADS OF SAGA') and filename-derived words."""
    words = [w for w in text.split() if w]
    return ' '.join(
        w.capitalize() if i == 0 or w.lower() not in SMALL_WORDS else w.lower()
        for i, w in enumerate(words)
    )


def name_from_filename(markdown_file):
    """Fallback title derived from the filename, e.g.
    'arabian_nights_adventure.md' -> 'Arabian Nights'. Used when the
    markdown's own '## ' header is just the generic 'Adventure Tables'
    label rather than a real supplement title (common in Geared Towards
    Loner-style files, which don't repeat the title inside the file)."""
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


# Get Inspired tables (Verbs/Adjectives/Nouns) are often bundled inside the
# same "## Adventure Tables" markdown as the D66 random tables, under a
# "### Inspiration Tables" divider that isn't itself a real table. Split
# these three out into their own flavor file - the app treats Get Inspired
# flavors and Adventure Tables supplements as separate things.
INSPIRATION_TABLE_NAMES = {'verbs', 'adjectives', 'nouns'}
DIVIDER_HEADERS = {'inspiration tables'}


def parse_markdown(markdown_file):
    content = Path(markdown_file).read_text(encoding='utf-8')

    main_match = re.search(r'^## (.+?)$', content, re.MULTILINE)
    if not main_match:
        raise ValueError("No main title (## header) found")
    supplement_name = main_match.group(1).strip()

    # Table headers are usually ###, but Inspiration Tables (Verbs/Adjectives/
    # Nouns) are sometimes nested one level deeper as #### under a
    # non-table "### Inspiration Tables" divider - match both levels.
    table_pattern = r'^#{3,4} \*?\*?(.+?)\*?\*?\s*\n((?:(?!^#{3,4} ).)*)(?=^#{3,4} |\Z)'
    table_sections = list(re.finditer(table_pattern, content, re.MULTILINE | re.DOTALL))
    if not table_sections:
        raise ValueError("No tables (### headers) found")

    adventure_tables = {}
    inspiration_tables = {}

    for section in table_sections:
        table_name = section.group(1).strip().replace('**', '').replace('*', '')
        table_content = section.group(2)

        entries = {}
        row_pattern = r'\|\s*(\d{2})\s*\|\s*(.+?)\s*\|'
        for match in re.finditer(row_pattern, table_content):
            code, desc = match.group(1), strip_markdown_emphasis(match.group(2).strip())
            if desc.startswith('---'):
                continue
            entries[code] = desc

        if not entries:
            # Some Inspiration Tables use a 6x6 row/column grid instead of
            # explicit D66 codes, e.g.:
            #   | 1 | Discover | Travel | Negotiate | Fight | Explore | Protect |
            # where the leading "1" is the row (first die) and each of the 6
            # cells after it is a column (second die).
            grid_row_pattern = (
                r'^\|\s*\*{0,2}([1-6])\*{0,2}\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|'
                r'\s*(.+?)\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*$'
            )
            for match in re.finditer(grid_row_pattern, table_content, re.MULTILINE):
                row = match.group(1)
                for col in range(1, 7):
                    entries[f'{row}{col}'] = strip_markdown_emphasis(match.group(col + 1).strip())

        if not entries:
            if table_name.strip().lower() not in DIVIDER_HEADERS:
                print(f"  Skipping '{table_name}' (no D66 entries found)")
            continue

        expected_codes = [f"{i}{j}" for i in range(1, 7) for j in range(1, 7)]
        missing = [c for c in expected_codes if c not in entries]
        if missing:
            print(f"  Warning: '{table_name}' missing codes: {missing}")

        grid = [[entries.get(f"{r}{c}", "") for c in range(1, 7)] for r in range(1, 7)]

        table_id = slugify(table_name).replace('-', '_')
        target = inspiration_tables if table_id in INSPIRATION_TABLE_NAMES else adventure_tables
        target[table_id] = {'id': table_id, 'name': table_name, 'entries': grid}
        label = 'Get Inspired' if target is inspiration_tables else 'Adventure Tables'
        print(f"  {table_name} ({label}): {len(entries)} entries")

    if not adventure_tables and not inspiration_tables:
        raise ValueError("No valid tables found")

    return supplement_name, adventure_tables, inspiration_tables


def generate_js(supplement_id, supplement_name, tables, category, flavor_of=None):
    lines = [
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
        lines.append(f"    flavorOf: {js_string(flavor_of)}")
    lines += [
        '  },',
        '',
        '  tables: {',
    ]

    table_ids = list(tables.keys())
    for i, table_id in enumerate(table_ids):
        info = tables[table_id]
        lines.append(f'    {table_id}: {{')
        lines.append(f"      id: {js_string(info['id'])},")
        lines.append(f"      name: {js_string(info['name'])},")
        lines.append(f"      category: {js_string(category)},")
        lines.append("      rollType: '2d6',")
        lines.append('      entries: [')
        for row in info['entries']:
            escaped_row = ', '.join(js_string(e) for e in row)
            lines.append(f'        [{escaped_row}],')
        lines.append('      ]')
        lines.append('    }' + (',' if i < len(table_ids) - 1 else ''))

    lines.append('  }')
    lines.append('};')
    lines.append('')
    return '\n'.join(lines)


def update_registry(supplement_id, supplement_name, relative_file_path, description, flavor_of=None):
    text = REGISTRY_FILE.read_text(encoding='utf-8')

    if re.search(rf"id:\s*'{re.escape(supplement_id)}'", text):
        print(f"  data/table-registry.js already has '{supplement_id}' - leaving it alone")
        return False

    flavor_line = f"    flavorOf: 'get-inspired',\n" if flavor_of else ""
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
    # relative_file_path is relative to data/, e.g. 'tables/supplements/foo.js'
    entry_line = f"./data/{relative_file_path}"

    if entry_line in text:
        print(f"  sw.js already precaches {entry_line} - leaving it alone")
        return False

    # Insert right before the closing `];` of PRECACHE_URLS, adding a
    # trailing comma to what was previously the last entry.
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

    # Bump CACHE_VERSION (format: 'loner-vN') so installed PWAs refetch it.
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


def main():
    if len(sys.argv) < 2:
        print("Usage: python md_to_table.py <markdown_file>")
        sys.exit(1)

    markdown_file = sys.argv[1]
    if not Path(markdown_file).exists():
        print(f"File not found: {markdown_file}")
        sys.exit(1)

    try:
        supplement_name, adventure_tables, inspiration_tables = parse_markdown(markdown_file)

        # Some files title their '## ' header "ADVENTURE TABLES: <real title>"
        # (often in all caps) rather than repeating a plain "Adventure Tables"
        # label - pull the real title out from after the colon.
        prefix_match = re.match(r'^adventure\s+tables\s*:\s*(.+)$', supplement_name, re.IGNORECASE)
        if prefix_match:
            id_base = titlecase(prefix_match.group(1))
            supplement_name = f'{id_base} Adventure Tables'
            print(f"  '## {prefix_match.group(0)}' header has an embedded title: '{id_base}'")
        else:
            id_base = strip_tables_suffix(supplement_name)
            if id_base.strip().lower() in ('adventure', ''):
                # Generic/uninformative '## ' header - fall back to the filename.
                id_base = name_from_filename(markdown_file)
                supplement_name = f'{id_base} Adventure Tables'
                print(f"  Generic '## Adventure Tables' header - using filename instead: '{id_base}'")

        base_slug = slugify(id_base)
        adventure_id = base_slug if base_slug.endswith('-adventure') else base_slug + '-adventure'

        if adventure_tables:
            write_supplement(
                out_dir=SUPPLEMENTS_DIR,
                relative_dir='tables/supplements',
                filename=base_slug + '.js',
                supplement_id=adventure_id,
                supplement_name=supplement_name,
                tables=adventure_tables,
                category='random-tables',
                description=f'{id_base} supplemental adventure tables'
            )

        if inspiration_tables:
            write_supplement(
                out_dir=REPO_ROOT / 'data' / 'tables' / 'flavors',
                relative_dir='tables/flavors',
                filename=base_slug + '-inspired.js',
                supplement_id=base_slug + '-inspired',
                supplement_name=f'{id_base} Inspiration',
                tables=inspiration_tables,
                category='get-inspired',
                description=f'Get Inspired flavor themed for {id_base} adventures',
                flavor_of='get-inspired'
            )

        print("\nDone. Refresh the app to see it "
              "(if it's installed as a PWA, it'll pick up the new CACHE_VERSION on next load).")

    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)


def write_supplement(out_dir, relative_dir, filename, supplement_id, supplement_name,
                      tables, category, description, flavor_of=None):
    relative_file_path = f'{relative_dir}/{filename}'
    out_path = out_dir / filename

    if out_path.exists():
        answer = input(f"{out_path.relative_to(REPO_ROOT)} already exists. Overwrite? [y/N] ")
        if answer.strip().lower() != 'y':
            print(f"Skipped {out_path.relative_to(REPO_ROOT)}")
            return

    out_dir.mkdir(parents=True, exist_ok=True)
    js_code = generate_js(supplement_id, supplement_name, tables, category, flavor_of)
    write_matching_newline(out_path, js_code)
    print(f"\nWrote {out_path.relative_to(REPO_ROOT)}")

    if update_registry(supplement_id, supplement_name, relative_file_path, description, flavor_of):
        print(f"Registered '{supplement_id}' in data/table-registry.js")

    update_service_worker(relative_file_path)


if __name__ == '__main__':
    main()
