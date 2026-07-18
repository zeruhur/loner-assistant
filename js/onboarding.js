/**
 * LONER ASSISTANT v2.0 - Onboarding & Help System
 *
 * Provides context-sensitive help panels for each view and section
 * Users can click "?" button to learn about features without intrusive tutorial
 */

export const HelpSystem = {
  /**
   * Help content for each view and section
   * Format: { viewId: { title, description, sections: [ {title, content} ] } }
   */
  helpContent: {
    'play': {
      title: '🎮 Play Session',
      description: 'Your main gameplay workspace. Roll the oracle, manage tables, and take notes.',
      sections: [
        {
          title: 'Current Session',
          content: 'Shows your active session. Use "Manage Sessions" to create new sessions or switch between them. Each session tracks its own notes, oracle rolls, and twist counter.'
        },
        {
          title: 'Oracle (Right Panel)',
          content: 'Roll the oracle to answer yes/no questions during play. Chance die vs Risk die determines the outcome. Equal dice (doubles) increment the Twist Counter. Use Advantage/Disadvantage modifiers for challenging or fortunate situations. Keyboard shortcut: Alt+O'
        },
        {
          title: 'Twist Counter',
          content: 'Tracks when the oracle produces doubles. Reaches 3 → triggers a twist event that shakes up your story. Manually force a twist or reset as needed. Keyboard shortcut: Alt+W'
        },
        {
          title: 'Scene Management',
          content: 'Roll "Next Scene" to generate a new scene location for your adventure. Helpful for pacing and keeping gameplay moving.'
        },
        {
          title: 'Conflict (Harm & Luck)',
          content: 'Track combat or confrontations using the Harm & Luck system. Set opponent name and starting luck, then roll contested dice. Track both character and opponent luck as they take harm.'
        },
        {
          title: 'Get Inspired',
          content: 'Generate random, thematic prompts for inspiration. Choose a flavor/theme that matches your story tone, then click "Random Prompt" to get an idea. Keyboard shortcut: Alt+T'
        },
        {
          title: 'Adventure Tables',
          content: 'Quick access to core Loner tables: Settings, Tones, Things, Opposition, and Actions. Perfect for generating adventure elements on the fly. Or roll a "Complete Adventure" for a full prompt.'
        },
        {
          title: 'Random Tables',
          content: 'Roll custom and supplement tables. Step 1: Choose a supplement. Step 2: Pick a table from that supplement. Results auto-insert into your notes. Browse all available tables in the Tools view.'
        },
        {
          title: 'Session Notes',
          content: 'Rich text editor for your session notes. Oracle rolls, table results, and character references auto-insert here. Press Alt+N to focus editor, Alt+S to save. Auto-saves every 30 seconds.'
        },
        {
          title: 'Quick Links (Left Panel)',
          content: 'Toggle quick access to your NPCs, Locations, Narrative Threads, and Recent Events. Great for tracking story elements without leaving the play view.'
        }
      ]
    },
    'campaigns': {
      title: '🎭 Campaigns',
      description: 'Create and manage campaign worlds. Each campaign is a separate story universe.',
      sections: [
        {
          title: 'What is a Campaign?',
          content: 'A campaign is a self-contained adventure or story world. You might have multiple campaigns running (fantasy epic, sci-fi heist, etc.). Each campaign can contain multiple sessions, characters, and world elements.'
        },
        {
          title: 'Create Campaign',
          content: 'Click "+ New Campaign" to start. Name it (e.g., "Starfall") and add an optional description. Save it, then you\'re ready to play!'
        },
        {
          title: 'Campaign Details',
          content: 'View the full campaign description and start new sessions within it. Sessions let you track individual play dates or story chapters. All content (NPCs, locations, threads) belongs to a campaign.'
        },
        {
          title: 'Edit / Delete',
          content: 'Click a campaign to edit its name or description. Delete carefully - it removes the entire campaign and all its sessions and content.'
        }
      ]
    },
    'characters': {
      title: '👤 Characters',
      description: 'Create and manage player characters. Loner uses narrative tags instead of numeric stats.',
      sections: [
        {
          title: 'What is a Character?',
          content: 'Your protagonist in the Loner system. Characters are tag-based (e.g., "Cynical Spacefarer", "Haunted Archaeologist"). No numeric stats—pure narrative.'
        },
        {
          title: 'Create Character',
          content: 'Click "+ New Character" and fill in: Name, Description, Background (narrative summary), Tags (comma-separated character traits/abilities), and set as Active if desired. This is your playable character.'
        },
        {
          title: 'Character Sheet',
          content: 'View full character details including tags and background. Edit anytime to adjust traits or background as your character evolves through play.'
        },
        {
          title: 'Active Character',
          content: 'Mark a character as Active to track it in the Play view. Only one character can be active at a time, but you can manage multiple characters across different campaigns.'
        }
      ]
    },
    'npcs': {
      title: '👥 NPCs',
      description: 'Track non-player characters and their relationships with your character.',
      sections: [
        {
          title: 'NPC Management',
          content: 'NPCs are people, creatures, or entities your character meets. Track their names, descriptions, tags (traits/roles), and relationship status (friendly, neutral, hostile, complex).'
        },
        {
          title: 'Create NPC',
          content: 'Add a name, description, tags (e.g., "Shifty Merchant", "Local Authority"), and relationship type. Mark them as visited if your character has interacted.'
        },
        {
          title: 'Relationships',
          content: 'Track NPC attitudes: Friendly (allies), Neutral (NPCs you\'ve met), Hostile (enemies), Complex (ambiguous). Filter by relationship to find NPCs quickly.'
        },
        {
          title: 'Quick Access',
          content: 'In the Play view, click "👥 NPCs" to quickly toggle a panel of all NPCs in the current campaign. Perfect for mid-session reference.'
        }
      ]
    },
    'locations': {
      title: '📍 Locations',
      description: 'Build your story world. Track locations your character discovers or visits.',
      sections: [
        {
          title: 'Location Management',
          content: 'Locations are places in your story world—cities, ruins, spaceports, etc. Track their name, description, and whether your character has visited.'
        },
        {
          title: 'Create Location',
          content: 'Add a name, description (atmosphere, notable features), and optional tags. Mark as Visited when your character goes there.'
        },
        {
          title: 'Visited Locations',
          content: 'Visited locations are marked with a checkmark. This helps you recall where your character has been and track their journey.'
        },
        {
          title: 'Quick Access',
          content: 'In Play view, click "📍 Locations" for a quick panel of locations. Add new locations mid-session or mark them visited from the quick panel.'
        }
      ]
    },
    'threads': {
      title: '🧵 Narrative Threads',
      description: 'Track ongoing storylines, plot hooks, and unresolved questions.',
      sections: [
        {
          title: 'What is a Thread?',
          content: 'A narrative thread is an ongoing plot, mystery, or relationship. Examples: "Find the hidden artifact", "Uncover who the traitor is", "Investigate the strange signals". Track whether it\'s active (Open), resolved (Resolved), or abandoned (Abandoned).'
        },
        {
          title: 'Create Thread',
          content: 'Click "+ New Thread" and describe the ongoing plot or question. Status starts as "Open". As the story develops, mark it Resolved when you complete it.'
        },
        {
          title: 'Thread Status',
          content: 'Open = ongoing plot. Resolved = completed thread. Abandoned = thread no longer relevant. Filter by status to see what\'s active vs. closed.'
        },
        {
          title: 'Quick Panel',
          content: 'In Play view, click "🧵 Threads" to see active threads. Resolved threads don\'t show in the quick panel—but stay in your history for reference.'
        }
      ]
    },
    'events': {
      title: '📅 Events & Timeline',
      description: 'Log significant moments and build a chronological story record.',
      sections: [
        {
          title: 'Event Log',
          content: 'An automatic timeline of important story moments. When you roll the oracle, mark a twist, trigger a conflict, or manually log an event—it goes into the timeline.'
        },
        {
          title: 'Create Event',
          content: 'Click "+ Log Event" to manually add a story moment (e.g., "Character defeated the rival", "Discovered the secret vault"). Auto-timestamped.'
        },
        {
          title: 'View Timeline',
          content: 'See all events in chronological order. Hover over dates to see full descriptions. This builds your session recap and story summary.'
        },
        {
          title: 'Session Recap',
          content: 'Export a text summary of all session events. Perfect for sharing what happened or archiving your play history.'
        },
        {
          title: 'Quick Panel',
          content: 'In Play view, click "📅 Events" to see recent events. Useful for remembering what just happened in your session.'
        }
      ]
    },
    'tools': {
      title: '🛠️ Tools & Tables',
      description: 'Access all roll tables and random generators. Organize and customize table collections.',
      sections: [
        {
          title: 'What are Tables?',
          content: 'Roll tables generate random story elements. Core tables include Adventure Maker (Settings, Tones, Things, Opposition, Actions), Get Inspired (thematic prompts), and custom supplemental tables.'
        },
        {
          title: 'Core Tables',
          content: 'Adventure Maker tables create complete adventure prompts. Roll individually or together for a full adventure. Essential for generating story momentum.'
        },
        {
          title: 'Get Inspired',
          content: 'Thematic random prompts. Choose a flavor (e.g., "Core" for standard Loner prompts). Hit the button for random inspiration to spark ideas.'
        },
        {
          title: 'Supplement Tables',
          content: 'Additional content from Loner supplements. When you select a supplement, its unique tables appear. Roll for specialized encounters, locations, or situations.'
        },
        {
          title: 'Custom Tables',
          content: 'Create your own tables for custom content. Define entries, then roll them like any other table. Perfect for house rules or supplement-specific mechanics.'
        },
        {
          title: 'Auto-Insert',
          content: 'Most table results auto-insert into your session notes editor. Great for building your narrative as you play.'
        }
      ]
    }
  },

  /**
   * Initialize the help system
   */
  init() {
    console.log('ℹ️ Help System initialized');
    // Setup is minimal - help content is defined above
    // Initialization mainly happens when view changes
  },

  /**
   * Show help for a specific view
   * @param {string} viewId - The view identifier (e.g., 'play', 'campaigns')
   */
  show(viewId) {
    const help = this.helpContent[viewId];
    if (!help) {
      console.warn(`No help content for view: ${viewId}`);
      return;
    }

    this.displayHelpModal(help);
  },

  /**
   * Display the help modal with content
   * @param {object} help - Help content object with title, description, sections
   */
  displayHelpModal(help) {
    // Create or update modal
    let modal = document.getElementById('help-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'help-modal';
      modal.className = 'help-modal hidden';
      document.body.appendChild(modal);
    }

    // Build help content
    let sectionsHtml = help.sections
      .map(
        section => `
      <div class="help-section">
        <h4>${section.title}</h4>
        <p>${section.content}</p>
      </div>
    `
      )
      .join('');

    modal.innerHTML = `
      <div class="help-modal-content">
        <div class="help-modal-header">
          <h2>${help.title}</h2>
          <button class="btn-close" onclick="HelpSystem.close()" title="Close help">×</button>
        </div>
        <p class="help-description">${help.description}</p>
        <div class="help-sections">
          ${sectionsHtml}
        </div>
        <div class="help-modal-footer">
          <button class="btn btn-primary" onclick="HelpSystem.close()">Close</button>
        </div>
      </div>
    `;

    // Show modal
    modal.classList.remove('hidden');

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.close();
      }
    });

    console.log('ℹ️ Help modal opened');
  },

  /**
   * Close the help modal
   */
  close() {
    const modal = document.getElementById('help-modal');
    if (modal) {
      modal.classList.add('hidden');
      console.log('ℹ️ Help modal closed');
    }
  },

  /**
   * Toggle help modal visibility
   */
  toggle(viewId) {
    const modal = document.getElementById('help-modal');
    if (modal && !modal.classList.contains('hidden')) {
      this.close();
    } else {
      this.show(viewId);
    }
  }
};
