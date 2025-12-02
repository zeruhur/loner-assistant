#!/usr/bin/env python3
"""
Convert markdown D66 tables to JavaScript supplement files for Loner Assistant.

Usage:
    python md_to_table.py markdown_file.md [output_file.js]

Example:
    python md_to_table.py adventure_tables.md
    # Creates: adventure_tables.js
"""

import re
import sys
from pathlib import Path


def markdown_to_js(markdown_file, output_file=None):
    """Convert markdown D66 tables to JavaScript supplement file."""

    # Read markdown file
    with open(markdown_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract main supplement name from first ## header
    main_match = re.search(r'^## (.+?)$', content, re.MULTILINE)
    if not main_match:
        raise ValueError("❌ No main title (## header) found")

    supplement_name = main_match.group(1).strip()
    # Remove "Tables" suffix from name if present (will be added back in global variable name)
    id_base = supplement_name.lower().replace(' tables', '').replace(' Tables', '')
    supplement_id = id_base.replace(' ', '-').replace('–', '-')

    print(f"📚 Supplement: {supplement_name}")

    # Find all ### table sections (using negative lookahead to capture all content until next ###)
    table_pattern = r'^### \*?\*?(.+?)\*?\*?\s*\n((?:(?!^###).)*)(?=^###|$)'
    table_sections = list(re.finditer(table_pattern, content, re.MULTILINE | re.DOTALL))

    if not table_sections:
        raise ValueError("❌ No tables (### headers) found")

    tables = {}

    for section in table_sections:
        table_name = section.group(1).strip().replace('**', '').replace('*', '')
        table_content = section.group(2)

        # Extract D66 entries: | 11  | Description |
        entries = {}
        row_pattern = r'\|\s*(\d{2})\s*\|\s*(.+?)\s*\|'

        for match in re.finditer(row_pattern, table_content):
            code = match.group(1)
            desc = match.group(2).strip()
            # Skip header separators
            if desc.startswith('---'):
                continue
            entries[code] = desc

        if not entries:
            print(f"  ⚠️  Skipping '{table_name}' (no entries found)")
            continue

        # Validate all 36 D66 codes present
        expected_codes = [f"{i}{j}" for i in range(1, 7) for j in range(1, 7)]
        missing = [c for c in expected_codes if c not in entries]
        if missing:
            print(f"  ⚠️  Warning: '{table_name}' missing codes: {missing}")

        # Build 6x6 grid (rows 1-6, columns 1-6)
        grid = []
        for row in range(1, 7):
            row_data = []
            for col in range(1, 7):
                code = f"{row}{col}"
                desc = entries.get(code, "")
                row_data.append(desc)
            grid.append(row_data)

        # Create table ID (use underscores for valid JavaScript object keys, remove special chars)
        table_id = (table_name.lower()
                    .replace(' ', '_')
                    .replace('–', '_')  # en-dash
                    .replace('-', '_')  # hyphen
                    .replace('&', 'and')
                    .replace("'", '')   # apostrophe
                    .replace('\u2019', ''))  # right single quotation mark

        tables[table_id] = {
            'id': table_id,
            'name': table_name,
            'entries': grid
        }

        print(f"  ✅ {table_name}: {len(entries)} entries")

    if not tables:
        raise ValueError("❌ No valid tables found")

    # Generate class name: "Adventure Tables" -> "AdventureTablesTables"
    class_name = ''.join(word.capitalize() for word in supplement_id.split('-')) + 'Tables'

    # Generate JavaScript
    js_code = f"""/**
 * {supplement_name}
 * D66 random tables
 */

window.{class_name} = {{
  supplement: {{
    id: '{supplement_id}',
    name: '{supplement_name}',
    version: '1.0',
    enabled: true
  }},

  tables: {{
"""

    for table_id, table_info in tables.items():
        # Escape single quotes in table name and ID
        escaped_name = table_info['name'].replace("'", "\\'")
        escaped_id = table_info['id'].replace("'", "\\'")

        js_code += f"""    {table_id}: {{
      id: '{escaped_id}',
      name: '{escaped_name}',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
"""

        for row in table_info['entries']:
            # Escape quotes and format entries
            escaped_entries = []
            for entry in row:
                # Escape single quotes and backslashes
                escaped = entry.replace('\\', '\\\\').replace("'", "\\'")
                escaped_entries.append(f"'{escaped}'")

            js_code += f"        [{', '.join(escaped_entries)}],\n"

        js_code += """      ]
    },
"""

    js_code += """  }
};
"""

    # Determine output filename
    if output_file is None:
        output_file = Path(markdown_file).stem + '.js'

    # Write output
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(js_code)

    print(f"\n✅ Generated: {output_file}")
    print(f"   Tables: {len(tables)}")
    print(f"\n📝 Next steps:")
    print(f"   1. Move '{output_file}' to data/tables/supplements/")
    print(f"   2. Add to data/table-registry.js:")
    print(f"      {{")
    print(f"        id: '{supplement_id}',")
    print(f"        name: '{supplement_name}',")
    print(f"        file: 'data/tables/supplements/{output_file}',")
    print(f"        version: '1.0',")
    print(f"        enabled: true,")
    print(f"        description: 'D66 random tables'")
    print(f"      }}")
    print(f"   3. Refresh your app!")


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python md_to_table.py <markdown_file> [output_file.js]")
        print("\nExample:")
        print("  python md_to_table.py adventure_tables.md")
        print("  python md_to_table.py adventure_tables.md custom-tables.js")
        sys.exit(1)

    markdown_file = sys.argv[1]
    output_file = sys.argv[2] if len(sys.argv) > 2 else None

    try:
        if not Path(markdown_file).exists():
            raise FileNotFoundError(f"File not found: {markdown_file}")

        markdown_to_js(markdown_file, output_file)
    except Exception as e:
        print(f"❌ Error: {e}")
        sys.exit(1)
