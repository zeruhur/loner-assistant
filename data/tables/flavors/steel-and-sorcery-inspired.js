/**
 * Steel and Sorcery Inspiration
 * D66 random tables
 */

export default {
  supplement: {
    id: 'steel-and-sorcery-inspired',
    name: 'Steel and Sorcery Inspiration',
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
        ['Strike', 'Evade', 'Hunt', 'Seek', 'Betray', 'Command'],
        ['Defend', 'Lurk', 'Stalk', 'Charm', 'Deceive', 'Escape'],
        ['Steal', 'Destroy', 'Save', 'Ambush', 'Capture', 'Flee'],
        ['Track', 'Endure', 'Pierce', 'Craft', 'Scry', 'Overcome'],
        ['Unveil', 'Break', 'Honor', 'Defy', 'Summon', 'Intimidate'],
        ['Ambush', 'Conceal', 'Betray', 'Protect', 'Infiltrate', 'Challenge'],
      ]
    },
    adjectives: {
      id: 'adjectives',
      name: 'Adjectives',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Dark', 'Mysterious', 'Ruthless', 'Cursed', 'Savage', 'Forgotten'],
        ['Grim', 'Vengeful', 'Haunted', 'Hidden', 'Foul', 'Fierce'],
        ['Noble', 'Corrupt', 'Doomed', 'Twisted', 'Lost', 'Ancient'],
        ['Cunning', 'Wretched', 'Forbidden', 'Shadowy', 'Fabled', 'Unseen'],
        ['Fearsome', 'Scarred', 'Scarce', 'Decrepit', 'Shattered', 'Malevolent'],
        ['Fierce', 'Wicked', 'Dire', 'Blighted', 'Bleak', 'Sinister'],
      ]
    },
    nouns: {
      id: 'nouns',
      name: 'Nouns',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Blade', 'Tomb', 'Throne', 'Beast', 'Ruin', 'Sorcerer'],
        ['Forest', 'Warlord', 'Artifact', 'Treasure', 'Demon', 'Shadow'],
        ['Tower', 'Ritual', 'Slave', 'Sword', 'Blood', 'Wraith'],
        ['Crown', 'Curse', 'Abyss', 'Temple', 'Spirit', 'Warlock'],
        ['City', 'Monster', 'Oracle', 'Amulet', 'Relic', 'Fortress'],
        ['Priest', 'Knight', 'Serpent', 'Empire', 'Idol', 'Spell'],
      ]
    }
  }
};
