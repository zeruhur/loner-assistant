/**
 * LONER CORE TABLES
 * Adventure Maker + Build the Setup tables from Loner 4th Edition
 */

export default {
  supplement: {
    id: 'core-loner',
    name: 'Loner Core Rules',
    version: '4.0',
    enabled: true
  },

  tables: {
    settings: {
      id: 'settings',
      name: 'Settings',
      category: 'adventure-maker',
      description: 'Generate a world setting',
      rollType: '2d6',
      entries: [
        ['Post-Apocalyptic Wasteland', 'High Fantasy Kingdom', 'Medieval War and Intrigue', 'Cyberpunk Megacorporation', 'Futuristic Space Colony', 'Supernatural Noir City'],
        ['Alternate History', 'Pirate-Filled Seas', 'Wild West Frontier', 'Dark Fantasy Realm', 'Futuristic Dystopian City', 'Ancient Greek Mythology'],
        ['Space Opera Adventure', 'Samurai-Era Japan', 'Zombie Survival', 'Superhero Metropolis', 'Cold War Espionage', 'Modern Crime Syndicate'],
        ['Magic School for Young Mages', 'Horror-Filled Asylum', 'Epic Fantasy Quest', 'Cybernetic Organisms and Androids', 'Lovecraftian Cosmic Horrors', 'Sword and Sorcery Adventure'],
        ['Urban Fantasy Underworld', 'Abandoned Space Station', 'Colonial America', 'Mythical Creatures and Legends', 'Martial Arts Action', 'Horror-Stricken Carnival'],
        ['Underwater Adventure and Exploration', 'Jungle-Covered Planet', 'Steampunk Victorian Era', 'Time Travel Paradoxes', 'Intergalactic Starfighter Battles', 'Survival in a Savage Land']
      ]
    },

    tones: {
      id: 'tones',
      name: 'Tones',
      category: 'adventure-maker',
      description: 'Set the mood and atmosphere',
      rollType: '2d6',
      entries: [
        ['Dark and brooding', 'Melancholic and poetic', 'Lighthearted and humorous', 'Quirky and absurd', 'Gritty and realistic', 'Violent and brutal'],
        ['Epic and grandiose', 'Majestic and inspiring', 'Suspenseful and thrilling', 'Fast-paced and chaotic', 'Mysterious and enigmatic', 'Philosophical and introspective'],
        ['Action-packed and adventurous', 'Heroic and daring', 'Romantic and whimsical', 'Tragic and melancholic', 'Horror-filled and terrifying', 'Oppressive and claustrophobic'],
        ['Technologically advanced and sleek', 'Optimistic and utopian', 'Grungy and dirty', 'Bleak and hopeless', 'Gothic and ominous', 'Cosmic and unknowable'],
        ['Surreal and dreamlike', 'Psychedelic and hallucinatory', 'Futuristic and dystopian', 'Cynical and satirical', 'Nostalgic and timeless', 'Folkloric and mythical'],
        ['Eerie and paranormal', 'Unsettling and uncanny', 'Martial and disciplined', 'Cold and detached', 'Gracious and elegant', 'Ceremonial and ritualistic']
      ]
    },

    // Things Variant A. Per 4e: roll 1d6 to pick a variant (1-2 A, 3-4 B, 5-6 C),
    // or just pick whichever variant fits your setting. See TableSystem.rollThings().
    things: {
      id: 'things',
      name: 'Things (Variant A)',
      category: 'adventure-maker',
      description: 'Key elements that define the world',
      rollType: '2d6',
      entries: [
        ['Magic', 'Monsters', 'Ancient relics', 'Medieval castle', 'Futuristic technology', 'Spaceship'],
        ['Ancient ruins', 'Forbidden knowledge', 'Secret society', 'Dangerous quest', 'Band of adventurers', 'Unseen forces'],
        ['Hidden treasure', 'Dark magic', 'Mystical creatures', 'Supernatural powers', 'Epic battle', 'Intriguing plot'],
        ['Suspicious characters', 'War-torn land', 'Dangerous wilderness', 'Political intrigue', 'World domination', 'Suspenseful journey'],
        ['Dark secrets', 'Forbidden love', 'Intense conflict', 'Death-defying stunts', 'Powerful artifacts', 'Epic journeys'],
        ['Unpredictable twists', 'Dynamic characters', 'Different factions', 'Vast empires', 'Epic heroes', 'Legendary creatures']
      ]
    },

    thingsB: {
      id: 'thingsB',
      name: 'Things (Variant B)',
      category: 'adventure-maker',
      description: 'Key elements that define the world',
      rollType: '2d6',
      entries: [
        ['Sealed bunker', 'Clockwork automaton', 'Dragon-infested skies', 'Haunted mansion', 'Corporate arcology', 'Intergalactic trade routes'],
        ['Lost city of gold', 'Artificial intelligence', "Pirate's cove", 'Time-travel paradox', 'Espionage', 'Extraterrestrial beings'],
        ['Submerged archive', 'Epic sea voyage', 'Superheroic powers', 'Time loops', 'Alternate realities', 'Virtual reality simulation'],
        ['Intriguing mystery', 'Mutant uprising', 'Advanced biotechnology', 'Enforced hierarchy', 'Divergent bloodline', 'Underground network'],
        ['Forbidden chronicle', 'Unstoppable virus', 'Enchanted forest', 'The unknown frontiers', 'Advanced robotics', 'Secrets of the universe'],
        ['End of the world scenarios', 'Telekinetic abilities', 'Futuristic weapons', 'Dimension hopping', 'Techno-sorcery', 'Superpowered conflict']
      ]
    },

    thingsC: {
      id: 'thingsC',
      name: 'Things (Variant C)',
      category: 'adventure-maker',
      description: 'Key elements that define the world',
      rollType: '2d6',
      entries: [
        ['Lost civilization', 'Ruined district', 'Shadow cult', "Outlaw's cache", 'Futuristic cyberwarfare', 'Space exploration'],
        ['Political uprising', 'Artificial lifeforms', 'Mercenaries and assassins', 'Time-traveling adventures', 'Espionage mission', 'Alien invasion'],
        ['Underwater adventure', 'Epic siege', 'Magical abilities', 'Time anomalies', 'Alternate timeline', 'Virtual reality nightmare'],
        ['Intriguing conspiracy', 'Mutant insurgency', 'Cybernetic enhancements', 'Enforced paradise', 'Suppressed history', 'Cyberpunk rebellion'],
        ["Cartographer's journal", 'Unstoppable monster', 'Enchanted kingdom', 'The final frontier', 'Robotic revolution', 'Secrets of the ancients'],
        ['End of the era scenarios', 'Psionic abilities', 'Futuristic battlefields', 'Interdimensional portals', 'Technomancy', 'Superpowered diplomacy']
      ]
    },

    opposition: {
      id: 'opposition',
      name: 'Opposition',
      category: 'adventure-maker',
      description: 'The main antagonist or challenge',
      rollType: '2d6',
      entries: [
        ['Dark wizards', 'Savage beasts', 'Malevolent spirits', 'Arrogant noblemen', 'Dangerous traps', 'Ruthless bandits'],
        ['Undead armies', 'Corrupt politicians', 'Sinister organizations', 'Vicious monsters', 'Treacherous terrain', 'Despotic rulers'],
        ['Relentless hunters', 'Merciless assassins', 'Dangerous creatures', 'Ancient curses', 'Fanatical zealots', 'Arcane guardian'],
        ['Ruthless mercenaries', 'Dark forces', 'Shadow broker', 'Insidious plots', 'Vicious predators', 'Unforgiving elements'],
        ["Assassin's guild", 'Doom cult', 'Manipulative patron', 'Hex-wielding coven', 'Ruthless warlords', 'Spectral host'],
        ['Terrible curses', 'Devious traps', 'Sinister conspiracies', 'Mind-warping entity', 'Malevolent entities', 'Ruthless factions']
      ]
    },

    actions: {
      id: 'actions',
      name: 'Actions',
      category: 'adventure-maker',
      description: 'What needs to be done',
      rollType: '2d6',
      entries: [
        ['Cast', 'Battle', 'Free', 'Explore', 'Upgrade', 'Pilot'],
        ['Decipher', 'Seek', 'Infiltrate', 'Complete', 'Join', 'Uncover'],
        ['Find', 'Master', 'Tame', 'Harness', 'Win', 'Unravel'],
        ['Interrogate', 'Navigate', 'Survive', 'Influence', 'Overthrow', 'Endure'],
        ['Expose', 'Pursue', 'Resolve', 'Perform', 'Acquire', 'Embark'],
        ['Anticipate', 'Develop', 'Ally', 'Expand', 'Become', 'Slay']
      ]
    },

    // Build the Setup: 5W+H premise table (new in 4th Edition). Roll 1d6 once
    // per column and combine into a mission premise before the first scene.
    // See TableSystem.rollBuildTheSetup().
    setupWho: {
      id: 'setupWho',
      name: 'Build the Setup: Who?',
      category: 'build-the-setup',
      description: 'Who is driving the situation',
      rollType: '1d6',
      entries: ['Authority', 'Organization', 'Ally', 'Mentor', 'Help-seeker', 'Blackmailer']
    },
    setupWhat: {
      id: 'setupWhat',
      name: 'Build the Setup: What?',
      category: 'build-the-setup',
      description: 'What needs to happen',
      rollType: '1d6',
      entries: ['Rescue', 'Protection', 'Exploitation', 'Exploration', 'Escape', 'Pursuit']
    },
    setupWhen: {
      id: 'setupWhen',
      name: 'Build the Setup: When?',
      category: 'build-the-setup',
      description: 'When it needs to happen',
      rollType: '1d6',
      entries: ['Tonight', 'Within days', 'At a planned event', 'Before it closes', 'After a change', 'Right now']
    },
    setupWhere: {
      id: 'setupWhere',
      name: 'Build the Setup: Where?',
      category: 'build-the-setup',
      description: 'The target of the situation',
      rollType: '1d6',
      entries: ['Person', 'Group', 'Treasure', 'Location', 'McGuffin', 'Confession']
    },
    setupWhy: {
      id: 'setupWhy',
      name: 'Build the Setup: Why?',
      category: 'build-the-setup',
      description: 'Why the Protagonist cares',
      rollType: '1d6',
      entries: ['Aid', 'Fortune', 'Coercion', 'Impulse', 'Ambition', 'Revenge']
    },
    setupHow: {
      id: 'setupHow',
      name: 'Build the Setup: How?',
      category: 'build-the-setup',
      description: 'How the Protagonist gets drawn in',
      rollType: '1d6',
      entries: ['Chance encounter', 'Old connection', 'Rumor or message', 'Capture or threat', 'Mishap', 'Object delivered']
    }
  }
};
