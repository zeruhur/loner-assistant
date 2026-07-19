/**
 * Cthulhu Inspiration
 * D66 random tables
 */

export default {
  supplement: {
    id: 'cthulhu-inspired',
    name: 'Cthulhu Inspiration',
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
        ['Whispers', 'Emerges', 'Crawls', 'Watches', 'Summons', 'Devours'],
        ['Corrupts', 'Reveals', 'Awakens', 'Haunts', 'Bleeds', 'Screams'],
        ['Transforms', 'Decays', 'Pulses', 'Glows', 'Writhes', 'Melts'],
        ['Beckons', 'Vanishes', 'Spreads', 'Infects', 'Calls', 'Opens'],
        ['Binds', 'Fractures', 'Seeps', 'Resonates', 'Multiplies', 'Descends'],
        ['Consumes', 'Distorts', 'Phases', 'Manifests', 'Converges', 'Ascends'],
      ]
    },
    adjectives: {
      id: 'adjectives',
      name: 'Adjectives',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Ancient', 'Forbidden', 'Twisted', 'Alien', 'Cursed', 'Blasphemous'],
        ['Eldritch', 'Cosmic', 'Tentacled', 'Writhing', 'Pulsing', 'Geometric'],
        ['Shadowy', 'Luminous', 'Crystalline', 'Organic', 'Metallic', 'Ethereal'],
        ['Massive', 'Microscopic', 'Infinite', 'Void', 'Prismatic', 'Angular'],
        ['Whispered', 'Silent', 'Screaming', 'Harmonious', 'Discordant', 'Resonant'],
        ['Timeless', 'Fleeting', 'Cyclical', 'Linear', 'Recursive', 'Paradoxical'],
      ]
    },
    nouns: {
      id: 'nouns',
      name: 'Nouns',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Symbol', 'Portal', 'Artifact', 'Entity', 'Dimension', 'Knowledge'],
        ['Ritual', 'Temple', 'Manuscript', 'Cult', 'Vision', 'Prophecy'],
        ['Geometry', 'Pattern', 'Frequency', 'Energy', 'Essence', 'Influence'],
        ['Guardian', 'Servant', 'Herald', 'Spawn', 'Avatar', 'Vessel'],
        ['Key', 'Lock', 'Gateway', 'Threshold', 'Bridge', 'Pathway'],
        ['Truth', 'Lie', 'Secret', 'Memory', 'Dream', 'Nightmare'],
      ]
    }
  }
};
