export default {
    supplement: {
      id: 'cozy-fantasy-inspired',
      name: 'Cozy Fantasy Inspiration',
      version: '1.0',
      enabled: true,
      flavorOf: 'get-inspired'  // ← This marks it as a Get Inspired flavor
    },

    tables: {
      verbs: {
        id: 'verbs',
        name: 'Cozy Fantasy Action Verbs',
        category: 'get-inspired',
        rollType: 'random',
        entries: [
            'Brew', 'Stitch', 'Whisper', 'Wander', 'Glow', 'Hum',
            'Bloom', 'Gather', 'Comfort', 'Listen', 'Drift', 'Mend',
            'Glimmer', 'Soothe', 'Spark', 'Rustle', 'Tangle', 'Perch',
            'Sprinkle', 'Unravel', 'Warm', 'Bind', 'Murmur', 'Carve',
            'Catch', 'Reflect', 'Stir', 'Kindle', 'Float', 'Guide',
            'Weave', 'Linger', 'Fold', 'Flicker', 'Grow', 'Nest'
        ]
      },

      adjectives: {
        id: 'adjectives',
        name: 'Cozy Fantasy Adjectives',
        category: 'get-inspired',
        rollType: 'random',
        entries: [
            'Cozy', 'Flickering', 'Whimsical', 'Gentle', 'Frosted', 'Mellow',
            'Sun-dappled', 'Soft-spoken', 'Wandering', 'Tranquil', 'Tattered', 'Drowsy',
            'Secretive', 'Warmhearted', 'Hidden', 'Shimmering', 'Dusky', 'Quiet',
            'Sleepy', 'Timeworn', 'Breezy', 'Nostalgic', 'Candlelit', 'Starry',
            'Overgrown', 'Autumnal', 'Glowing', 'Velvet-soft', 'Faintly humming', 'Playful',
            'Hearth-warmed', 'Faded', 'Mirthful', 'Misty', 'Dreamlike', 'Wispy'
        ]
      },

      nouns: {
        id: 'nouns',
        name: 'Cozy Fantasy Nouns',
        category: 'get-inspired',
        rollType: 'random',
        entries: [
          'Lantern', 'Quilt', 'Teacup', 'Hearth', 'Firefly', 'Feather',
          'Storybook', 'Compass', 'Key', 'Thread', 'Bell', 'Meadow',
          'Ink', 'Candle', 'Whisper', 'Orchard', 'Cloud', 'Clockwork',
          'Clover', 'Doorstep', 'Secret', 'Patchwork', 'Star', 'Tide',
          'Letter', 'Footpath', 'Mist', 'Cobblestone', 'Willow', 'Murmur',
          'Ribbon', 'Pebble', 'Echo', 'Cupboard', 'Lanternlight', 'Dewdrop'
        ]
      }
    }
  };