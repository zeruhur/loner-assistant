# Adding New Tables & Get Inspired Flavors

This guide explains how to add new tables to the Loner Assistant system.

## Overview

The table system uses a **central registry** (`data/table-registry.js`) as the single source of truth. To add new tables:

1. **Create a data file** with your tables
2. **Add a script tag** to `index.html`
3. **Register in `table-registry.js`**
4. Done! Tables are auto-discovered on startup

## Adding a New Get Inspired Flavor

Get Inspired flavors provide thematic word prompts (verbs, adjectives, nouns) for open-ended story inspiration.

### Step 1: Create the Flavor File

Create a new file: `data/tables/flavors/your-flavor-name.js`

```javascript
/**
 * YOUR FLAVOR NAME
 * A Get Inspired flavor themed for [your theme]
 */

window.YourFlavorNameTables = {
  supplement: {
    id: 'your-flavor-name',
    name: 'Your Flavor Display Name',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired'  // ← This marks it as a Get Inspired flavor
  },

  tables: {
    verbs: {
      id: 'verbs',
      name: 'Action Verbs',
      category: 'get-inspired',
      rollType: 'subtable',
      entries: [
        // 6 rows, 6 items per row
        ['Verb1', 'Verb2', 'Verb3', 'Verb4', 'Verb5', 'Verb6'],
        ['Verb7', 'Verb8', 'Verb9', 'Verb10', 'Verb11', 'Verb12'],
        // ... 4 more rows (total 6 rows)
      ]
    },

    adjectives: {
      id: 'adjectives',
      name: 'Descriptive Words',
      category: 'get-inspired',
      rollType: 'random',
      entries: [
        'Adjective1', 'Adjective2', 'Adjective3', 'Adjective4',
        'Adjective5', 'Adjective6', 'Adjective7', 'Adjective8',
        // ... add as many as you want
      ]
    },

    nouns: {
      id: 'nouns',
      name: 'Objects & Concepts',
      category: 'get-inspired',
      rollType: 'random',
      entries: [
        'Noun1', 'Noun2', 'Noun3', 'Noun4',
        'Noun5', 'Noun6', 'Noun7', 'Noun8',
        // ... add as many as you want
      ]
    }
  }
};
```

### Step 2: Add Script Tag to index.html

In `index.html`, find the table supplements section (around line 603) and add your script tag:

```html
<!-- Phase 4: Table Supplements (MUST load before table-registry.js) -->
<script src="data/tables/core-loner.js"></script>
<script src="data/tables/flavors/space-opera-inspired.js"></script>
<script src="data/tables/core-inspired.js"></script>
<script src="data/tables/flavors/your-flavor-name.js"></script>  <!-- Add this -->
<script src="data/tables/supplements/sample-encounters.js"></script>
<script src="data/table-registry.js"></script>
```

### Step 3: Register in table-registry.js

In `data/table-registry.js`, add an entry to the `supplements` array:

```javascript
window.TableRegistry = {
  supplements: [
    // ... existing entries ...
    {
      id: 'your-flavor-name',
      name: 'Your Flavor Display Name',
      file: 'data/tables/flavors/your-flavor-name.js',
      version: '1.0',
      enabled: true,
      flavorOf: 'get-inspired',
      description: 'A brief description of this flavor'
    }
  ]
};
```

### Step 4: Done!

Refresh the app. Your new flavor will:
- ✅ Appear in the "Get Inspired Flavor" picker (Tools view)
- ✅ Be selectable and rollable immediately
- ✅ Auto-insert results into session notes
- ✅ Persist user's flavor selection

## Adding a New Random Table Supplement

Random tables provide themed tables for adventure generation, encounters, NPC details, etc.

### Step 1: Create the Supplement File

Create a new file: `data/tables/supplements/your-supplement-name.js`

```javascript
/**
 * YOUR SUPPLEMENT NAME
 * Description of what these tables provide
 */

window.YourSupplementNameTables = {
  supplement: {
    id: 'your-supplement-name',
    name: 'Your Supplement Display Name',
    version: '1.0',
    enabled: true
  },

  tables: {
    // Table 1: 2d6 Grid
    encounters: {
      id: 'encounters',
      name: 'Encounters',
      category: 'random-tables',
      description: 'Generate random encounters',
      rollType: '2d6',
      entries: [
        // 6 rows, 6 items per row (for 2d6)
        ['Encounter 1-1', 'Encounter 1-2', 'Encounter 1-3', 'Encounter 1-4', 'Encounter 1-5', 'Encounter 1-6'],
        ['Encounter 2-1', 'Encounter 2-2', 'Encounter 2-3', 'Encounter 2-4', 'Encounter 2-5', 'Encounter 2-6'],
        // ... 4 more rows (total 6 rows for a 6x6 grid)
      ]
    },

    // Table 2: 1d6 List
    motivations: {
      id: 'motivations',
      name: 'Character Motivations',
      category: 'random-tables',
      description: 'Random character motivations',
      rollType: '1d6',
      entries: [
        'Motivation 1',
        'Motivation 2',
        'Motivation 3',
        'Motivation 4',
        'Motivation 5',
        'Motivation 6'
      ]
    },

    // Table 3: Random Selection
    treasures: {
      id: 'treasures',
      name: 'Treasure List',
      category: 'random-tables',
      description: 'Generate random treasures',
      rollType: 'random',
      entries: [
        'Treasure item 1',
        'Treasure item 2',
        'Treasure item 3',
        'Treasure item 4',
        'Treasure item 5',
        // ... add as many as you want
      ]
    }
  }
};
```

### Step 2: Add Script Tag to index.html

In `index.html`, add your script tag before `table-registry.js`:

```html
<!-- Phase 4: Table Supplements -->
<script src="data/tables/core-loner.js"></script>
<script src="data/tables/flavors/space-opera-inspired.js"></script>
<script src="data/tables/core-inspired.js"></script>
<script src="data/tables/supplements/sample-encounters.js"></script>
<script src="data/tables/supplements/your-supplement-name.js"></script>  <!-- Add this -->
<script src="data/table-registry.js"></script>
```

### Step 3: Register in table-registry.js

In `data/table-registry.js`, add an entry to the `supplements` array:

```javascript
{
  id: 'your-supplement-name',
  name: 'Your Supplement Display Name',
  file: 'data/tables/supplements/your-supplement-name.js',
  version: '1.0',
  enabled: true,
  description: 'Brief description of what these tables are for'
}
```

### Step 4: Done!

Refresh the app. Your tables will:
- ✅ Appear in the Tools view under their category
- ✅ Appear in the Random Tables sidebar quick-selector
- ✅ Be rollable with auto-insert to notes
- ✅ Show in table browser and roll history

## Table Structure Reference

### Supplement Object Format

Every supplement file must define:

```javascript
window.SupplementNameTables = {
  supplement: {
    id: 'kebab-case-id',           // Unique identifier (no spaces, lowercase, hyphens)
    name: 'Display Name',           // Human-readable name
    version: '1.0',                 // Semantic version
    enabled: true,                  // Set to false to disable without removing
    flavorOf: 'get-inspired',       // Optional: marks as Get Inspired flavor
    description: 'Optional'         // Optional: brief description
  },

  tables: {
    table_id: {
      id: 'table_id',
      name: 'Table Display Name',
      category: 'get-inspired' OR 'random-tables' OR 'custom',
      description: 'Optional description',
      rollType: '1d6' | '2d6' | '1d66' | 'random' | 'subtable',
      entries: []
    }
  }
}
```

### Roll Types Explained

| Type | Use Case | Entry Format |
|------|----------|--------------|
| `1d6` | 6 options, roll 1d6 | Array of 6 strings |
| `2d6` | 6×6 grid, roll 2d6 | Array of 6 arrays, each with 6 strings |
| `1d66` | 36 options (like 2d6 but treated as list) | Array of 36 strings |
| `random` | Any number of options | Array of strings (any length) |
| `subtable` | Grouped options (Get Inspired style) | Array of 6 arrays (rows) |

## Naming Conventions

**Important:** Global variable names must follow this pattern:

```
ID: 'my-supplement-name'  →  Variable: window.MySupplementNameTables
ID: 'core-loner'          →  Variable: window.CoreLonerTables
ID: 'space-opera-inspired'→  Variable: window.SpaceOperaInspiredTables
```

Rule: Convert kebab-case to PascalCase, append "Tables"

- Split by hyphens
- Capitalize each word
- Join together
- Add "Tables" suffix

## Disabling Tables Temporarily

To disable a supplement without deleting it, set `enabled: false` in `table-registry.js`:

```javascript
{
  id: 'my-supplement',
  name: 'My Supplement',
  file: 'data/tables/supplements/my-supplement.js',
  version: '1.0',
  enabled: false,  // ← Won't load or register
  description: 'Disabled for now'
}
```

## Example: Complete Space Western Get Inspired Flavor

```javascript
/**
 * SPACE WESTERN GET INSPIRED
 * Combine Old West tropes with sci-fi for space western stories
 */

window.SpaceWesternInspiredTables = {
  supplement: {
    id: 'space-western-inspired',
    name: 'Space Western Inspiration',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired'
  },

  tables: {
    verbs: {
      id: 'verbs',
      name: 'Space Western Actions',
      category: 'get-inspired',
      rollType: 'subtable',
      entries: [
        ['Draw', 'Shoot', 'Escape', 'Rob', 'Defend', 'Pursue'],
        ['Wreck', 'Salvage', 'Betray', 'Duel', 'Bribe', 'Ambush'],
        ['Scout', 'Trade', 'Negotiate', 'Build', 'Destroy', 'Discover'],
        ['Hijack', 'Repair', 'Sabotage', 'Marshal', 'Outlaw', 'Settle'],
        ['Explore', 'Mine', 'Smuggle', 'Arrest', 'Escape', 'Revenge'],
        ['Protect', 'Hunt', 'Claim', 'Challenge', 'Investigate', 'Survive']
      ]
    },

    adjectives: {
      id: 'adjectives',
      name: 'Space Western Adjectives',
      category: 'get-inspired',
      rollType: 'random',
      entries: [
        'Dusty', 'Lawless', 'Desolate', 'Frontier', 'Rust-worn', 'Outlawed',
        'Dangerous', 'Corrupt', 'Prosperous', 'Abandoned', 'Volatile', 'Remote',
        'Isolated', 'Cursed', 'Hidden', 'Ancient', 'Technological', 'Savage',
        'Pristine', 'Decaying', 'Thriving', 'Dystopian', 'Mysterious', 'Notorious'
      ]
    },

    nouns: {
      id: 'nouns',
      name: 'Space Western Nouns',
      category: 'get-inspired',
      rollType: 'random',
      entries: [
        'Outlaw', 'Sheriff', 'Marshal', 'Outpost', 'Saloon', 'Ranch',
        'Spaceship', 'Colony', 'Asteroid', 'Station', 'Mine', 'Artifact',
        'Bounty', 'Secret', 'Treasure', 'Enemy', 'Ally', 'Stranger',
        'Gang', 'Corporation', 'Family', 'Rival', 'Legend', 'Mystery'
      ]
    }
  }
};
```

## Testing Your Tables

1. **Refresh the browser** (Ctrl+F5 or Cmd+Shift+R)
2. **Check the browser console** - should see:
   ```
   ✅ Registered: Your Supplement Display Name
   ```
3. **Open Tools view** - your tables should appear
4. **Try rolling** - click any table and verify results appear

If tables don't appear:
- Check browser console for errors
- Verify `window.YourVariableNameHere` is defined
- Confirm script tag was added to `index.html`
- Confirm entry was added to `table-registry.js` with `enabled: true`

## Quick Reference: Common Mistakes

| Problem | Solution |
|---------|----------|
| Tables don't appear | Check console for errors, verify `window.VarName` exists |
| Variable name error | Use PascalCase + "Tables" (e.g., `MyTablesName` → `window.MyTablesNameTables`) |
| Script doesn't load | Verify script tag in `index.html` is before `table-registry.js` |
| 1d6 table has wrong entries | Must have exactly 6 entries |
| 2d6 table has wrong entries | Must be 6 arrays, each with 6 entries |
| Flavor not in picker | Verify `flavorOf: 'get-inspired'` in supplement object |
