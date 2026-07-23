/**
 * Kwaidan Inspiration
 * D66 random tables
 */

export default {
  supplement: {
    id: 'kwaidan-inspired',
    name: 'Kwaidan Inspiration',
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
        ['Whisper', 'Bind', 'Haunt', 'Shatter', 'Summon', 'Wander'],
        ['Banish', 'Consume', 'Hide', 'Seek', 'Pierce', 'Bleed'],
        ['Echo', 'Seal', 'Break', 'Drift', 'Conceal', 'Purify'],
        ['Strike', 'Decay', 'Awaken', 'Beckon', 'Drown', 'Guard'],
        ['Weep', 'Carve', 'Twist', 'Call', 'Burn', 'Stalk'],
        ['Entangle', 'Unravel', 'Possess', 'Silence', 'Reveal', 'Curse'],
      ]
    },
    adjectives: {
      id: 'adjectives',
      name: 'Adjectives',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Forgotten', 'Shattered', 'Veiled', 'Hollow', 'Restless', 'Sinister'],
        ['Bloodstained', 'Fading', 'Unseen', 'Withered', 'Distant', 'Haunted'],
        ['Corrupted', 'Eternal', 'Sacred', 'Vanished', 'Twisted', 'Moonlit'],
        ['Cursed', 'Weeping', 'Relentless', 'Nameless', 'Lost', 'Betrayed'],
        ['Whispering', 'Ancient', 'Hidden', 'Bound', 'Silent', 'Accursed'],
        ['Flickering', 'Broken', 'Unholy', 'Murmuring', 'Unfinished', 'Hollowed'],
      ]
    },
    nouns: {
      id: 'nouns',
      name: 'Nouns',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Lantern', 'Blade', 'Shrine', 'Reflection', 'Footsteps', 'Oath'],
        ['Shadow', 'Mask', 'Whisper', 'Offering', 'Fog', 'Prayer'],
        ['Gate', 'River', 'Scroll', 'Candle', 'Pact', 'Specter'],
        ['Moon', 'Chains', 'Blood', 'Curse', 'Silence', 'Bones'],
        ['Bell', 'Mirror', 'Seal', 'Claw', 'Wound', 'Memory'],
        ['Ghost', 'Echo', 'Stain', 'Garden', 'Tear', 'Threshold'],
      ]
    }
  }
};
