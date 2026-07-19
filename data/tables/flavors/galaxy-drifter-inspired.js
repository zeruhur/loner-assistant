/**
 * Galaxy Drifter Inspiration
 * D66 random tables
 */

export default {
  supplement: {
    id: 'galaxy-drifter-inspired',
    name: 'Galaxy Drifter Inspiration',
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
        ['Discover', 'Navigate', 'Smuggle', 'Negotiate', 'Infiltrate', 'Salvage'],
        ['Hunt', 'Escape', 'Transport', 'Investigate', 'Protect', 'Retrieve'],
        ['Trade', 'Repair', 'Sabotage', 'Persuade', 'Ambush', 'Explore'],
        ['Steal', 'Decode', 'Pilot', 'Threaten', 'Pursue', 'Rescue'],
        ['Gamble', 'Hide', 'Fight', 'Bribe', 'Survive', 'Betray'],
        ['Search', 'Destroy', 'Create', 'Deceive', 'Challenge', 'Deliver'],
      ]
    },
    adjectives: {
      id: 'adjectives',
      name: 'Adjectives',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Dangerous', 'Ancient', 'Hidden', 'Valuable', 'Illegal', 'Desperate'],
        ['Corporate', 'Military', 'Religious', 'Criminal', 'Alien', 'Mysterious'],
        ['Broken', 'Stolen', 'Lost', 'Secret', 'Forbidden', 'Rare'],
        ['Hostile', 'Neutral', 'Friendly', 'Corrupt', 'Honest', 'Deceptive'],
        ['Advanced', 'Primitive', 'Standard', 'Modified', 'Original', 'Fake'],
        ['Rich', 'Poor', 'Famous', 'Unknown', 'Powerful', 'Weak'],
      ]
    },
    nouns: {
      id: 'nouns',
      name: 'Nouns',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Ship', 'Station', 'World', 'Cargo', 'Passenger', 'Crew'],
        ['Data', 'Credits', 'Weapon', 'Medicine', 'Technology', 'Information'],
        ['Map', 'Key', 'Document', 'Artifact', 'Sample', 'Code'],
        ['Contact', 'Enemy', 'Ally', 'Target', 'Witness', 'Guide'],
        ['Route', 'Signal', 'Message', 'Package', 'Container', 'Vehicle'],
        ['Facility', 'Organization', 'Government', 'Corporation', 'Cult', 'Family'],
      ]
    }
  }
};
