/**
 * CORE GET INSPIRED TABLES
 * Open-Ended Questions & Inspiration tables from Loner 4th Edition.
 * Roll 2d6 on each (row, column): Verb + Noun, optionally + Adjective.
 */

export default {
  supplement: {
    id: 'core-inspired',
    name: 'Core Get Inspired',
    version: '4.0',
    enabled: true,
    flavorOf: 'get-inspired'
  },

  tables: {
    verbs: {
      id: 'verbs',
      name: 'Verbs',
      category: 'get-inspired',
      description: 'Dynamic action words',
      rollType: '2d6',
      entries: [
        ['inject', 'pass', 'own', 'divide', 'bury', 'borrow'],
        ['continue', 'learn', 'ask', 'multiply', 'receive', 'imagine'],
        ['develop', 'behave', 'replace', 'damage', 'collect', 'turn'],
        ['share', 'hand', 'play', 'explain', 'improve', 'cough'],
        ['face', 'expand', 'found', 'gather', 'prefer', 'belong'],
        ['trip', 'want', 'miss', 'dry', 'employ', 'destroy']
      ]
    },

    adjectives: {
      id: 'adjectives',
      name: 'Adjectives',
      category: 'get-inspired',
      description: 'Descriptive qualities',
      rollType: '2d6',
      entries: [
        ['frequent', 'faulty', 'obscene', 'scarce', 'rigid', 'long-term'],
        ['ethereal', 'sophisticated', 'rightful', 'knowledgeable', 'astonishing', 'ordinary'],
        ['descriptive', 'insidious', 'poor', 'proud', 'reflective', 'amusing'],
        ['silky', 'worthless', 'fixed', 'loose', 'willing', 'cold'],
        ['quiet', 'stormy', 'spooky', 'delirious', 'innate', 'late'],
        ['magnificent', 'arrogant', 'unhealthy', 'enormous', 'truculent', 'charming']
      ]
    },

    nouns: {
      id: 'nouns',
      name: 'Nouns',
      category: 'get-inspired',
      description: 'Story elements and objects',
      rollType: '2d6',
      entries: [
        ['cause', 'stage', 'change', 'verse', 'thrill', 'spot'],
        ['front', 'event', 'home', 'bag', 'measure', 'birth'],
        ['prose', 'motion', 'trade', 'memory', 'chance', 'drop'],
        ['instrument', 'friend', 'talk', 'liquid', 'fact', 'price'],
        ['word', 'morning', 'edge', 'room', 'system', 'camp'],
        ['key', 'income', 'use', 'humor', 'statement', 'argument']
      ]
    }
  }
};
