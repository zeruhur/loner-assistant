/**
 * Pulp Heroes Inspiration
 * D66 random tables
 */

export default {
  supplement: {
    id: 'pulp-heroes-inspired',
    name: 'Pulp Heroes Inspiration',
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
        ['Stalks', 'Hunts', 'Tracks', 'Follows', 'Pursues', 'Corners'],
        ['Betrays', 'Deceives', 'Lies', 'Tricks', 'Cons', 'Fools'],
        ['Threatens', 'Intimidates', 'Menaces', 'Terrifies', 'Scares', 'Haunts'],
        ['Investigates', 'Searches', 'Explores', 'Examines', 'Studies', 'Probes'],
        ['Escapes', 'Flees', 'Runs', 'Hides', 'Vanishes', 'Disappears'],
        ['Confronts', 'Challenges', 'Accuses', 'Exposes', 'Reveals', 'Unmasks'],
      ]
    },
    adjectives: {
      id: 'adjectives',
      name: 'Adjectives',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Dark', 'Shadow', 'Hidden', 'Secret', 'Mysterious', 'Occult'],
        ['Corrupt', 'Dirty', 'Rotten', 'Crooked', 'Evil', 'Wicked'],
        ['Deadly', 'Lethal', 'Fatal', 'Dangerous', 'Harmful', 'Toxic'],
        ['False', 'Fake', 'Forged', 'Counterfeit', 'Phony', 'Deceiving'],
        ['Ancient', 'Old', 'Forgotten', 'Lost', 'Buried', 'Sealed'],
        ['Bloody', 'Violent', 'Brutal', 'Savage', 'Ruthless', 'Merciless'],
      ]
    },
    nouns: {
      id: 'nouns',
      name: 'Nouns',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Evidence', 'Witness', 'Clue', 'Trail', 'Lead', 'Proof'],
        ['Contract', 'Deal', 'Agreement', 'Bargain', 'Pact', 'Treaty'],
        ['Weapon', 'Gun', 'Knife', 'Poison', 'Bomb', 'Trap'],
        ['Document', 'Letter', 'File', 'Report', 'Record', 'Message'],
        ['Identity', 'Face', 'Name', 'Past', 'Secret', 'Truth'],
        ['Revenge', 'Justice', 'Judgment', 'Punishment', 'Retribution', 'Vengeance'],
      ]
    }
  }
};
