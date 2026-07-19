/**
 * Arabian Nights Inspiration
 * D66 random tables
 */

export default {
  supplement: {
    id: 'arabian-nights-inspired',
    name: 'Arabian Nights Inspiration',
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
        ['Discover', 'Travel', 'Negotiate', 'Fight', 'Explore', 'Protect'],
        ['Steal', 'Escape', 'Solve', 'Hide', 'Rescue', 'Betray'],
        ['Investigate', 'Build', 'Destroy', 'Uncover', 'Navigate', 'Capture'],
        ['Heal', 'Trade', 'Teach', 'Learn', 'Defend', 'Confront'],
        ['Lead', 'Follow', 'Ambush', 'Aid', 'Challenge', 'Transform'],
        ['Persuade', 'Summon', 'Escape', 'Capture', 'Convince', 'Search'],
      ]
    },
    adjectives: {
      id: 'adjectives',
      name: 'Adjectives',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Ancient', 'Mysterious', 'Enchanted', 'Dangerous', 'Hidden', 'Wealthy'],
        ['Powerful', 'Cunning', 'Beautiful', 'Fearsome', 'Brave', 'Wise'],
        ['Loyal', 'Treacherous', 'Quick', 'Silent', 'Fierce', 'Gentle'],
        ['Fragile', 'Deadly', 'Secret', 'Bold', 'Rare', 'Common'],
        ['Divine', 'Cursed', 'Sacred', 'Lost', 'Curious', 'Brave'],
        ['Honest', 'Cruel', 'Merciful', 'Stern', 'Clever', 'Vigilant'],
      ]
    },
    nouns: {
      id: 'nouns',
      name: 'Nouns',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['City', 'Desert', 'Oasis', 'Mountain', 'Island', 'River'],
        ['Treasure', 'Palace', 'Caravan', 'Temple', 'Library', 'Market'],
        ['Scroll', 'Lamp', 'Sword', 'Amulet', 'Beast', 'Djinn'],
        ['Tribe', 'Hermit', 'Vizier', 'Scholar', 'Sorcerer', 'Sailor'],
        ['Merchant', 'Bandit', 'Oracle', 'Warrior', 'Poet', 'Alchemist'],
        ['Healer', 'Spy', 'Thief', 'Hunter', 'Diplomat', 'Artisan'],
      ]
    }
  }
};
