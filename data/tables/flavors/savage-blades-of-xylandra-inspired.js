/**
 * Savage Blades of Xylandra Inspiration
 * D66 random tables
 */

export default {
  supplement: {
    id: 'savage-blades-of-xylandra-inspired',
    name: 'Savage Blades of Xylandra Inspiration',
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
        ['Discover', 'Escape', 'Betray', 'Devour', 'Conquer', 'Whisper'],
        ['Trade', 'Hide', 'Explore', 'Seal', 'Protect', 'Corrupt'],
        ['Build', 'Collapse', 'Steal', 'Awaken', 'Defy', 'Obscure'],
        ['Hunt', 'Bargain', 'Unravel', 'Banish', 'Reveal', 'Consume'],
        ['Forge', 'Negotiate', 'Manipulate', 'Sabotage', 'Surrender', 'Assassinate'],
        ['Observe', 'Exile', 'Trap', 'Free', 'Summon', 'Destroy'],
      ]
    },
    adjectives: {
      id: 'adjectives',
      name: 'Adjectives',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Ancient', 'Shattered', 'Warped', 'Ominous', 'Relentless', 'Forgotten'],
        ['Hollow', 'Cursed', 'Enigmatic', 'Bound', 'Vengeful', 'Exiled'],
        ['Eldritch', 'Unstable', 'Unyielding', 'Cryptic', 'Twisted', 'Sacred'],
        ['Phantom', 'Ruthless', 'Celestial', 'Devoted', 'Feral', 'Reclaimed'],
        ['Unholy', 'Hidden', 'Arcane', 'Eternal', 'Ruined', 'Corrupted'],
        ['Savage', 'Veiled', 'Parasitic', 'Fabled', 'Wandering', 'Awakened'],
      ]
    },
    nouns: {
      id: 'nouns',
      name: 'Nouns',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Titan', 'Relic', 'Monolith', 'Warband', 'Labyrinth', 'Skyship'],
        ['Blood', 'Portal', 'Outcast', 'Cipher', 'Riftwalker', 'Specter'],
        ['Throne', 'Tomb', 'Champion', 'Storm', 'Emissary', 'Warlord'],
        ['Sanctuary', 'Exile', 'Golem', 'Nightmare', 'Oracle', 'Prison'],
        ['Echo', 'Machine', 'Obelisk', 'Anomaly', 'Ruin', 'Shadow'],
        ['Covenant', 'Sentinel', 'Prophet', 'Parasite', 'Beacon', 'Construct'],
      ]
    }
  }
};
