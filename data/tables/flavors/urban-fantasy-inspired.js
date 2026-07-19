/**
 * Urban Fantasy Inspiration
 * D66 random tables
 */

export default {
  supplement: {
    id: 'urban-fantasy-inspired',
    name: 'Urban Fantasy Inspiration',
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
        ['Bind', 'Summon', 'Banish', 'Transform', 'Reveal', 'Conceal'],
        ['Breach', 'Ward', 'Curse', 'Bless', 'Hunt', 'Protect'],
        ['Channel', 'Cross', 'Anchor', 'Sever', 'Awaken', 'Seal'],
        ['Bargain', 'Steal', 'Return', 'Merge', 'Split', 'Guide'],
        ['Feed', 'Corrupt', 'Purify', 'Track', 'Escape', 'Trap'],
        ['Break', 'Mend', 'Read', 'Erase', 'Mark', 'Claim'],
      ]
    },
    adjectives: {
      id: 'adjectives',
      name: 'Adjectives',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Hidden', 'Forbidden', 'Ancient', 'Corrupted', 'Sacred', 'Cursed'],
        ['Bleeding', 'Fractured', 'Bound', 'Wild', 'Stolen', 'Twisted'],
        ['Awakening', 'Fading', 'Eternal', 'Temporal', 'Spectral', 'Material'],
        ['Veiled', 'Revealed', 'Powerful', 'Broken', 'Whole', 'Between'],
        ['Desperate', 'Hunted', 'Protected', 'Marked', 'Pure', 'Tainted'],
        ['Forgotten', 'Prophetic', 'Mundane', 'Magical', 'Living', 'Dying'],
      ]
    },
    nouns: {
      id: 'nouns',
      name: 'Nouns',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Portal', 'Contract', 'Memory', 'Shadow', 'Blood', 'Name'],
        ['Truth', 'Lie', 'Bargain', 'Debt', 'Promise', 'Curse'],
        ['Realm', 'Veil', 'Crossing', 'Haven', 'Territory', 'Boundary'],
        ['Power', 'Price', 'Gift', 'Burden', 'Legacy', 'Secret'],
        ['Vision', 'Dream', 'Nightmare', 'Hope', 'Fear', 'Love'],
        ['Soul', 'Essence', 'Identity', 'Mask', 'Reflection', 'Echo'],
      ]
    }
  }
};
