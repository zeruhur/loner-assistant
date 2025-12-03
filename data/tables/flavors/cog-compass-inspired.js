window.CogCompassInspired = {
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
        rollType: 'subtable',
        entries: [
                  ['calibrate', 'transfer', ' purchase', ' partition', '  conceal', ' procure']
                  ['maintain ', ' study  ', '  inquire', '   amplify', '  receive', ' envision']
                  ['construct', 'operate ', 'retrofit ', '  impair  ', '  accrue ', ' rotate']
                  ['distribute|  deliver', ' simulate', ' elucidate', ' enhance ', ' discharge']
                  ['confront ', ' broaden', ' establish|   assemble', '  favor  ', ' integrate']
                  ['navigate ', ' desire ', '  overlook|    desiccate|   hire   ', 'demolish']
        ]
      },

      adjectives: {
        id: 'adjectives',
        name: 'Cozy Fantasy Adjectives',
        category: 'get-inspired',
        rollType: 'subtable',
        entries: [
                  ['periodic', 'flawed', 'vulgar', 'limited', 'sturdy', 'enduring']
                  ['spectral', 'intricate', 'legitimate', 'well-versed', ' marvelous', 'common']
                  ['illustrative', 'cunning', 'impoverished', 'dignified', 'reflective ', ' whimsical']
                  ['sleek', 'obsolete', 'stable', 'slack', 'obliging', 'icy']
                  ['silent', 'tempestuous', 'eerie', 'frenzied', 'inherent', 'tardy']
                  ['grandiose', 'haughty', 'unwholesome', 'vast', 'aggressive', 'winsome']
        ]
      },

      nouns: {
        id: 'nouns',
        name: 'Cozy Fantasy Nouns',
        category: 'get-inspired',
        rollType: 'subtable',
        entries: [
                  ["project","platform","overhaul","script","spectacle","locale"]
                  ["facade","spectacle","domicile","pouch","gauge","genesis"]
                  ["manifesto","movement","commerce","recollection","opportunity","leakage"]
                  ["apparatus","colleague","dialogue","essence","data","tariff"]
                  ["phrase","dawn","boundary","chamber","network","encampment"]
                  ["mechanism","revenue","function","wit","declaration","debate"]
        ]
      }
    }
  };