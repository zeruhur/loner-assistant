export default {
    supplement: {
      id: 'kwaidan-inspired',
      name: 'Kwaidan Inspiration',
      version: '1.0',
      enabled: true,
      flavorOf: 'get-inspired'  // ← This marks it as a Get Inspired flavor
    },

    tables: {
      verbs: {
        id: 'verbs',
        name: 'Kwaidan Action Verbs',
        category: 'get-inspired',
        rollType: 'random',
        entries: [
          'Whisper', 'Bind', 'Haunt', 'Shatter', 'Summon', 'Wander',
          'Banish', 'Consume', 'Hide', 'Seek', 'Pierce', 'Bleed',
          'Echo', 'Seal', 'Break', 'Drift', 'Conceal', 'Purify',
          'Strike', 'Decay', 'Awaken', 'Beckon', 'Drown', 'Guard',
          'Weep', 'Carve', 'Twist', 'Call', 'Burn', 'Stalk',
          'Entangle', 'Unravel', 'Possess', 'Silence', 'Reveal', 'Curse'
        ]
      },

      adjectives: {
        id: 'adjectives',
        name: 'Cozy Fantasy Adjectives',
        category: 'get-inspired',
        rollType: 'random',
        entries: [
          'Forgotten', 'Shattered', 'Veiled', 'Hollow', 'Restless', 'Sinister',
          'Bloodstained', 'Fading', 'Unseen', 'Withered', 'Distant', 'Haunted',
          'Corrupted', 'Eternal', 'Sacred', 'Vanished', 'Twisted', 'Moonlit',
          'Cursed', 'Weeping', 'Relentless', 'Nameless', 'Lost', 'Betrayed',
          'Whispering', 'Ancient', 'Hidden', 'Bound', 'Silent', 'Accursed',
          'Flickering', 'Broken', 'Unholy', 'Murmuring', 'Unfinished', 'Hollowed'
        ]
      },

      nouns: {
        id: 'nouns',
        name: 'Cozy Fantasy Nouns',
        category: 'get-inspired',
        rollType: 'random',
        entries: [
          'Lantern', 'Blade', 'Shrine', 'Reflection', 'Footsteps', 'Oath',
          'Shadow', 'Mask', 'Whisper', 'Offering', 'Fog', 'Prayer',
          'Gate', 'River', 'Scroll', 'Candle', 'Pact', 'Specter',
          'Moon', 'Chains', 'Blood', 'Curse', 'Silence', 'Bones',
          'Bell', 'Mirror', 'Seal', 'Claw', 'Wound', 'Memory',
          'Ghost', 'Echo', 'Stain', 'Garden', 'Tear', 'Threshold'
        ]
      }
    }
  };