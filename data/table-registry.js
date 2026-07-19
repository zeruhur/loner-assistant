/**
 * Central Registry of Table Supplements
 *
 * This is the SINGLE SOURCE OF TRUTH for all table supplements.
 * Each entry's `file` is a path (relative to this file's directory)
 * that js/tables.js dynamically `import()`s - no manual HTML edits
 * or global-variable naming conventions needed.
 *
 * To add a new supplement:
 *
 * 1. Create your supplement file (e.g., data/tables/flavors/my-flavor.js)
 *    - Must `export default { supplement: {...}, tables: {...} }`
 *
 * 2. Add entry below with enabled: true
 *    - It will load automatically on app startup
 *
 * Fields:
 * - id: unique identifier (kebab-case)
 * - name: human-readable name
 * - file: path to the file, relative to data/ (REQUIRED)
 * - version: semantic version
 * - enabled: boolean (set to false to disable without removing)
 * - flavorOf: (optional) 'get-inspired' to make it a Get Inspired flavor
 * - description: (optional) what this supplement provides
 */

export const supplements = [
  {
    id: 'core-loner',
    name: 'Loner Core Rules',
    file: 'tables/core-loner.js',
    version: '2.0',
    enabled: true,
    description: 'Adventure Maker and core game tables'
  },
  {
    id: 'core-inspired',
    name: 'Core Get Inspired',
    file: 'tables/core-inspired.js',
    version: '2.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Action, adjective, and noun prompts for inspiration'
  },
  {
    id: 'cozy-fantasy-inspired',
    name: 'Cozy Fantasy Inspiration',
    file: 'tables/flavors/cozy-fantasy-inspired.js',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Get Inspired flavor themed for cozy fantasy adventures'
  },
  {
    id: 'cozy-fantasy-adventure',
    name: 'Cozy Fantasy Adventure Tables',
    file: 'tables/supplements/cozy-fantasy.js',
    version: '1.0',
    enabled: true,
    description: 'Cozy Fantasy supplemental adventure tables'
  },
  {
    id: 'kwaidan-inspired',
    name: 'Kwaidan Inspiration',
    file: 'tables/flavors/kwaidan-inspired.js',
    version: '2.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Get Inspired flavor themed for kwaidan adventures'
  },
  {
    id: 'kwaidan-adventure-tables',
    name: 'Kwaidan Adventure Tables',
    file: 'tables/supplements/kwaidan.js',
    version: '2.0',
    enabled: true,
    description: 'Kwaidan supplemental adventure tables'
  },
  {
    id: 'cog-compass-inspired',
    name: 'Cog & Compass Inspiration',
    file: 'tables/flavors/cog-compass-inspired.js',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Get Inspired flavor themed for Cog & Compass adventures'
  },
  {
    id: 'cog-compass-adventure',
    name: 'Cog & Compass Adventure Tables',
    file: 'tables/supplements/cog-compass.js',
    version: '1.0',
    enabled: true,
    description: 'Cog & Compass supplemental adventure tables'
  },
  {
    id: 'arabian-nights-adventure',
    name: 'Arabian Nights Adventure Tables',
    file: 'tables/supplements/arabian-nights.js',
    version: '1.0',
    enabled: true,
    description: 'Arabian Nights supplemental adventure tables'
  },
  {
    id: 'arabian-nights-inspired',
    name: 'Arabian Nights Inspiration',
    file: 'tables/flavors/arabian-nights-inspired.js',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Get Inspired flavor themed for Arabian Nights adventures'
  },
  {
    id: 'legends-of-camelot-adventure',
    name: 'Legends of Camelot Adventure Tables',
    file: 'tables/supplements/legends-of-camelot.js',
    version: '1.0',
    enabled: true,
    description: 'Legends of Camelot supplemental adventure tables'
  },
  {
    id: 'legends-of-camelot-inspired',
    name: 'Legends of Camelot Inspiration',
    file: 'tables/flavors/legends-of-camelot-inspired.js',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired',
    description: 'Get Inspired flavor themed for Legends of Camelot adventures'
  }
  // Template for adding new supplements:
  // {
  //   id: 'my-supplement',
  //   name: 'My Supplement Name',
  //   file: 'tables/supplements/my-supplement.js',
  //   version: '1.0',
  //   enabled: true,
  //   flavorOf: 'get-inspired',  // Optional: make it a Get Inspired flavor
  //   description: 'What this supplement provides'
  // }
];
