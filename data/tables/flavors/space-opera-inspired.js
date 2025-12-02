/**
 * SPACE OPERA GET INSPIRED
 * A Get Inspired flavor themed for space opera adventures
 */

window.SpaceOperaInspired = {
    supplement: {
      id: 'space-opera-inspired',
      name: 'Space Opera Inspiration',
      version: '1.0',
      enabled: true,
      flavorOf: 'get-inspired'  // ← This marks it as a Get Inspired flavor
    },

    tables: {
      verbs: {
        id: 'verbs',
        name: 'Space Action Verbs',
        category: 'get-inspired',
        rollType: 'subtable',
        entries: [
          ['Jump', 'Warp', 'Scan', 'Dock', 'Launch', 'Evade'],
          ['Transmit', 'Decrypt', 'Hack', 'Override', 'Stabilize', 'Repair'],
          ['Maneuver', 'Intercept', 'Detect', 'Blockade', 'Infiltrate', 'Escape'],
          ['Salvage', 'Negotiate', 'Attack', 'Defend', 'Retreat', 'Advance'],
          ['Explore', 'Chart', 'Mine', 'Trade', 'Steal', 'Deliver'],
          ['Discover', 'Unlock', 'Destroy', 'Create', 'Merge', 'Split']
        ]
      },

      adjectives: {
        id: 'adjectives',
        name: 'Space Adjectives',
        category: 'get-inspired',
        rollType: 'random',
        entries: [
          'Stellar', 'Quantum', 'Hyperdrive', 'Alien', 'Cosmic', 'Nebular',
          'Radioactive', 'Crystalline', 'Sentient', 'Ancient', 'Volatile', 'Rare',
          'Sentient', 'Dimensional', 'Temporal', 'Exotic', 'Infinite', 'Microscopic',
          'Fragmented', 'Orbiting', 'Exploding', 'Hidden', 'Rotating', 'Decaying',
          'Terraformed', 'Abandoned', 'Thriving', 'Barren', 'Unstable', 'Shielded',
          'Encrypted', 'Holographic', 'Phased', 'Cloaked', 'Legendary', 'Mythical'
        ]
      },

      nouns: {
        id: 'nouns',
        name: 'Space Nouns',
        category: 'get-inspired',
        rollType: 'random',
        entries: [
          'Starship', 'Colony', 'Anomaly', 'Species', 'Federation', 'Sector',
          'Artifact', 'Wormhole', 'Signal', 'Distress', 'Weapon', 'Ally',
          'Enemy', 'Treasure', 'Station', 'Planet', 'Asteroid', 'Comet',
          'Galaxy', 'Supernova', 'Singularity', 'Beacon', 'Probe', 'Fleet',
          'Admiral', 'Explorer', 'Engineer', 'Scientist', 'Pirate', 'Ambassador',
          'Oracle', 'Engine', 'Shield', 'Reactor', 'Crystal', 'Code'
        ]
      }
    }
  };