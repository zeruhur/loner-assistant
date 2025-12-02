/**
 * Central Registry of Table Supplements
 *
 * This is the SINGLE SOURCE OF TRUTH for all table supplements.
 * Scripts are loaded dynamically from this registry - no manual HTML edits needed!
 *
 * To add a new supplement:
 *
 * 1. Create your supplement file (e.g., data/tables/flavors/my-flavor.js)
 *    - Must define a global constant with proper naming:
 *      MyFlavorTables = { supplement: {...}, tables: {...} }
 *
 * 2. Add entry below with enabled: true
 *    - The script will load automatically on app startup
 *
 * That's it! No HTML changes needed.
 *
 * Fields:
 * - id: unique identifier (kebab-case)
 * - name: human-readable name
 * - file: path to the file (REQUIRED - used for dynamic loading)
 * - version: semantic version
 * - enabled: boolean (set to false to disable without removing)
 * - flavorOf: (optional) 'get-inspired' to make it a Get Inspired flavor
 * - description: (optional) what this supplement provides
 */

window.TableRegistry = {
  supplements: [
    {
      id: 'core-loner',
      name: 'Loner Core Rules',
      file: 'data/tables/core-loner.js',
      version: '2.0',
      enabled: true,
      description: 'Adventure Maker and core game tables'
    },
    {
      id: 'core-inspired',
      name: 'Core Get Inspired',
      file: 'data/tables/core-inspired.js',
      version: '2.0',
      enabled: true,
      flavorOf: 'get-inspired',
      description: 'Action, adjective, and noun prompts for inspiration'
    },
    {
      id: 'cozy-fantasy-inspired',
      name: 'Cozy Fantasy Inspiration',
      file: 'data/tables/flavors/cozy-fantasy-inspired.js',
      version: '1.0',
      enabled: true,
      flavorOf: 'get-inspired',
      description: 'Get Inspired flavor themed for cozy fantasy adventures'
    },
    {
      id: 'cozy-fantasy-adventure',
      name: 'Cozy Fantasy Adventure Tables',
      file: 'data/tables/supplements/cozy-fantasy.js',
      version: '1.0',
      enabled: true,
      description: 'Cozy Fantasy supplemental adventure tables'
    },
    {
      id: 'kwaidan-inspired',
      name: 'Kwaidan Inspiration',
      file: 'data/tables/flavors/kwaidan-inspired.js',
      version: '1.0',
      enabled: true,
      flavorOf: 'get-inspired',
      description: 'Get Inspired flavor themed for kwaidan adventures'
    },    
    {
      id: 'kwaidan-adventure-tables',
      name: 'Kwaidan Adventure Tables',
      file: 'data/tables/supplements/kwaidan.js',
      version: '1.0',
      enabled: true,
      description: 'Kwaidan supplemental adventure tables'
    }
    // Template for adding new supplements:
    // {
    //   id: 'my-supplement',
    //   name: 'My Supplement Name',
    //   file: 'data/tables/supplements/my-supplement.js',
    //   version: '1.0',
    //   enabled: true,
    //   flavorOf: 'get-inspired',  // Optional: make it a Get Inspired flavor
    //   description: 'What this supplement provides'
    // }
  ],
  
  /**
   * Load all enabled supplements
   */
  async loadAll() {
    const promises = this.supplements
      .filter(s => s.enabled)
      .map(s => this.loadSupplement(s));
    
    return await Promise.all(promises);
  },
  
  /**
   * Load a single supplement
   */
  async loadSupplement(supplement) {
    // In production, dynamically import the file
    // For now, assumes they're already loaded globally
    return supplement;
  }
};