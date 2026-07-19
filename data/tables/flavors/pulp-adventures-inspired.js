/**
 * Pulp Adventures Inspiration
 * D66 random tables
 */

export default {
  supplement: {
    id: 'pulp-adventures-inspired',
    name: 'Pulp Adventures Inspiration',
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
        ['Discover', 'Rescue', 'Escape', 'Investigate', 'Explore', 'Battle'],
        ['Decipher', 'Sneak', 'Defend', 'Capture', 'Navigate', 'Elude'],
        ['Sabotage', 'Confront', 'Uncover', 'Retrieve', 'Infiltrate', 'Pursue'],
        ['Recover', 'Decoy', 'Steal', 'Protect', 'Examine', 'Observe'],
        ['Betray', 'Aid', 'Summon', 'Create', 'Destroy', 'Survive'],
        ['Challenge', 'Solve', 'Expose', 'Unravel', 'Conceal', 'Transport'],
      ]
    },
    adjectives: {
      id: 'adjectives',
      name: 'Adjectives',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Ancient', 'Mysterious', 'Hidden', 'Dangerous', 'Forbidden', 'Sacred'],
        ['Powerful', 'Enigmatic', 'Lost', 'Sinister', 'Unknown', 'Exotic'],
        ['Cursed', 'Arcane', 'Forgotten', 'Secret', 'Rare', 'Precious'],
        ['Treacherous', 'Haunted', 'Desolate', 'Eldritch', 'Legendary', 'Unseen'],
        ['Fragile', 'Disguised', 'Swift', 'Rugged', 'Perilous', 'Trapped'],
        ['Dark', 'Gleaming', 'Hidden', 'Rugged', 'Swift', 'Eldritch'],
      ]
    },
    nouns: {
      id: 'nouns',
      name: 'Nouns',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Artifact', 'Temple', 'Creature', 'Relic', 'Society', 'Ship'],
        ['Jungle', 'Villain', 'Amulet', 'Treasure', 'Cult', 'Scientist'],
        ['Island', 'Machine', 'Hero', 'Tomb', 'Myth', 'Ghost'],
        ['City', 'Map', 'Monster', 'Fortress', 'Legend', 'Library'],
        ['Ruins', 'Crystal', 'Explorer', 'Mansion', 'Prodigy', 'Lab'],
        ['Valley', 'Portal', 'Detective', 'Ruin', 'Legend', 'Spy'],
      ]
    }
  }
};
