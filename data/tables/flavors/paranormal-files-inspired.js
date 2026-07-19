/**
 * Paranormal Files Inspiration
 * D66 random tables
 */

export default {
  supplement: {
    id: 'paranormal-files-inspired',
    name: 'Paranormal Files Inspiration',
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
        ['Whisper', 'Erase', 'Flicker', 'Consume', 'Fracture', 'Unravel'],
        ['Vanish', 'Stalk', 'Distort', 'Linger', 'Evoke', 'Replicate'],
        ['Echo', 'Bleed', 'Observe', 'Infiltrate', 'Corrupt', 'Reconstruct'],
        ['Encrypt', 'Manifest', 'Merge', 'Displace', 'Decode', 'Nullify'],
        ['Haunt', 'Fracture', 'Uncover', 'Absorb', 'Wound', 'Scatter'],
        ['Shift', 'Beckon', 'Conceal', 'Intercept', 'Dismantle', 'Echo'],
      ]
    },
    adjectives: {
      id: 'adjectives',
      name: 'Adjectives',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Hollow', 'Redacted', 'Flickering', 'Warped', 'Silent', 'Pulsing'],
        ['Fractured', 'Nameless', 'Rewritten', 'Eclipsed', 'Unstable', 'Corrupted'],
        ['Forsaken', 'Artificial', 'Unfinished', 'Distorted', 'Encoded', 'Liminal'],
        ['Uncanny', 'Recursive', 'Unidentified', 'Malevolent', 'Obscured', 'Forbidden'],
        ['Abandoned', 'Empty', 'Anomalous', 'Aberrant', 'Contained', 'Unnatural'],
        ['Glitching', 'Forgotten', 'Drifting', 'Clandestine', 'Hollowed', 'Watchful'],
      ]
    },
    nouns: {
      id: 'nouns',
      name: 'Nouns',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Reflection', 'Broadcast', 'Gateway', 'Ruins', 'Corridor', 'Static'],
        ['Signal', 'Phantom', 'Cipher', 'Mask', 'Transmission', 'Fragments'],
        ['Artifact', 'Shadow', 'Corridor', 'Paradox', 'Host', 'Residue'],
        ['Threshold', 'Archive', 'Encryption', 'Containment', 'Memory', 'Rift'],
        ['Surveillance', 'Glitch', 'Recording', 'Veil', 'Disruption', 'Identity'],
        ['Entity', 'Whisper', 'Anomaly', 'Thought', 'Laughter', 'Horizon'],
      ]
    }
  }
};
