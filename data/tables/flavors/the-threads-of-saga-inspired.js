/**
 * The Threads of Saga Inspiration
 * D66 random tables
 */

export default {
  supplement: {
    id: 'the-threads-of-saga-inspired',
    name: 'The Threads of Saga Inspiration',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired'
  },

  tables: {
    verbs: {
      id: 'verbs',
      name: 'Verbs',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Raid', 'Avenge', 'Swear', 'Betray', 'Sail', 'Honor'],
        ['Curse', 'Prophesy', 'Slay', 'Flee', 'Challenge', 'Forge'],
        ['Mourn', 'Plunder', 'Exile', 'Witness', 'Claim', 'Deceive'],
        ['Sacrifice', 'Wrestle', 'Navigate', 'Outlast', 'Boast', 'Reconcile'],
        ['Hunt', 'Carve', 'Burn', 'Negotiate', 'Endure', 'Remember'],
        ['Strike', 'Bind', 'Discover', 'Abandon', 'Judge', 'Inherit'],
      ]
    },
    adjectives: {
      id: 'adjectives',
      name: 'Adjectives',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Blood-stained', 'Oath-bound', 'Cursed', 'Honorable', 'Icy', 'Storm-wracked'],
        ['Ancient', 'Vengeful', 'Bitter', 'Sundered', 'Fearless', 'Treacherous'],
        ['Frost-bitten', 'Wandering', 'Condemned', 'Proud', 'Forsaken', 'Ruthless'],
        ['Sacred', 'Ill-fated', 'Restless', 'Unyielding', 'Shadowed', 'Hunger-driven'],
        ['Far-traveled', 'Kin-sworn', 'Battle-scarred', 'Silent', 'Haunted', 'Desperate'],
        ['Nameless', 'Twice-born', 'Disgraced', 'Faithful', 'Grim', 'Sea-hardened'],
      ]
    },
    nouns: {
      id: 'nouns',
      name: 'Nouns',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Feud', 'Oath', 'Kinsman', 'Blade', 'Saga', 'Wound'],
        ['Völva', 'Jarl', 'Ship', 'Rune', 'Winter', 'Ghost'],
        ['Reputation', 'Blood', 'Shore', 'Hall', 'Exile', 'Omen'],
        ['Draugr', 'Thing', 'Mound', 'Betrayal', 'Skald', 'Fate'],
        ['Vengeance', 'Sacrifice', 'Seidr', 'Holmgang', 'Storm', 'Hoard'],
        ['Ancestor', 'Prophecy', 'Warrior', 'Byname', 'Longship', 'Spirit'],
      ]
    }
  }
};
