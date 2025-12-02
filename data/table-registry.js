/**
 * Central Registry of Table Supplements
 *
 * This is the SINGLE SOURCE OF TRUTH for all table supplements.
 * To add a new supplement:
 *
 * 1. Create your supplement file (e.g., data/tables/flavors/my-flavor.js)
 *    - Must define a global constant with proper naming:
 *      MyFlavorTables = { supplement: {...}, tables: {...} }
 *
 * 2. Add script tag in index.html to load it
 *
 * 3. Add entry below with enabled: true
 *
 * 4. Done! The table system will auto-register it on startup
 *
 * Fields:
 * - id: unique identifier (kebab-case)
 * - name: human-readable name
 * - file: path to the file (for documentation)
 * - version: semantic version
 * - enabled: boolean (set to false to disable without removing)
 * - flavorOf: (optional) 'get-inspired' to make it a Get Inspired flavor
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
      id: 'space-opera-inspired',
      name: 'Space Opera Inspiration',
      file: 'data/tables/flavors/space-opera-inspired.js',
      version: '1.0',
      enabled: true,
      flavorOf: 'get-inspired',
      description: 'Get Inspired flavor themed for space opera adventures'
    },
    {
      id: 'sample-random',
      name: 'Sample Random Tables',
      file: 'data/tables/supplements/sample-encounters.js',
      version: '1.0',
      enabled: true,
      description: 'Example random encounter tables'
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