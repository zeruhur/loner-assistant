/**
 * Legends of Camelot Inspiration
 * D66 random tables
 */

export default {
  supplement: {
    id: 'legends-of-camelot-inspired',
    name: 'Legends of Camelot Inspiration',
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
        ['Attack', 'Defend', 'Explore', 'Heal', 'Search', 'Hide'],
        ['Craft', 'Cast', 'Sing', 'Negotiate', 'Deceive', 'Follow'],
        ['Steal', 'Rescue', 'Protect', 'Investigate', 'Challenge', 'Unite'],
        ['Build', 'Destroy', 'Enchant', 'Summon', 'Travel', 'Escape'],
        ['Reveal', 'Conceal', 'Inspire', 'Betray', 'Assist', 'Spy'],
        ['Lead', 'Abandon', 'Train', 'Guard', 'Retrieve', 'Sabotage'],
      ]
    },
    adjectives: {
      id: 'adjectives',
      name: 'Adjectives',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Brave', 'Cowardly', 'Noble', 'Cunning', 'Wise', 'Foolish'],
        ['Strong', 'Weak', 'Kind', 'Cruel', 'Loyal', 'Treacherous'],
        ['Swift', 'Slow', 'Bold', 'Timid', 'Fair', 'Deceptive'],
        ['Fierce', 'Gentle', 'Honest', 'Secretive', 'Proud', 'Humble'],
        ['Rich', 'Poor', 'Mighty', 'Meek', 'Clever', 'Dull'],
        ['Magical', 'Mundane', 'Beautiful', 'Ugly', 'Enchanted', 'Cursed'],
      ]
    },
    nouns: {
      id: 'nouns',
      name: 'Nouns',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Sword', 'Shield', 'Castle', 'Forest', 'Dragon', 'Knight'],
        ['Spell', 'Potion', 'Crown', 'Village', 'Druid', 'Beast'],
        ['Relic', 'Scroll', 'Chalice', 'Tower', 'Healer', 'Warlord'],
        ['Amulet', 'Armor', 'Ring', 'Dungeon', 'Sorcerer', 'Bard'],
        ['Staff', 'Book', 'Herb', 'Battle', 'Vision', 'Ghost'],
        ['Flame', 'Jewel', 'Map', 'Island', 'Warrior', 'Spirit'],
      ]
    }
  }
};
