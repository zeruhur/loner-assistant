/**
 * LONER ASSISTANT v2.1 - Keyboard Shortcuts System
 *
 * Provides global keyboard shortcuts for quick access to common gameplay actions
 * All shortcuts use Alt + key combination
 */

import { getState } from './state.js';
import { showAlert } from './toast.js';
import { showModal } from './ui.js';

export const ShortcutsSystem = {
  /**
   * Registry of all available shortcuts
   * Format: { key: { description, category, action } }
   */
  shortcuts: {
    'o': {
      description: 'Roll Oracle (Chance vs Risk)',
      category: 'gameplay',
      action: () => {
        if (typeof window.rollOracle === 'function') {
          window.rollOracle();
          console.log('⚡ Oracle rolled via shortcut');
        }
      }
    },
    't': {
      description: 'Roll Table / Adventure Maker',
      category: 'gameplay',
      action: () => {
        if (window.TableManager && window.TableManager.show) {
          window.TableManager.show();
          console.log('⚡ Table Manager opened via shortcut');
        }
      }
    },
    'n': {
      description: 'Focus on Note Editor',
      category: 'editing',
      action: () => {
        ShortcutsSystem.focusEditor();
      }
    },
    'w': {
      description: 'Trigger Twist Event',
      category: 'gameplay',
      action: () => {
        if (typeof window.triggerTwist === 'function') {
          window.triggerTwist();
          console.log('⚡ Twist triggered via shortcut');
        }
      }
    },
    's': {
      description: 'Save Notes',
      category: 'editing',
      action: () => {
        if (typeof window.saveNotes === 'function') {
          window.saveNotes();
          console.log('⚡ Notes saved via shortcut');
        }
      }
    },
    '?': {
      description: 'Show Keyboard Shortcuts Help',
      category: 'help',
      action: () => {
        ShortcutsSystem.showHelp();
      }
    }
  },

  /**
   * Initialize the keyboard shortcuts system
   */
  init() {
    document.addEventListener('keydown', (event) => {
      // Only trigger on Alt key combinations
      if (!event.altKey) return;

      const key = event.key.toLowerCase();

      // Check if this key has a shortcut
      if (this.shortcuts[key]) {
        event.preventDefault(); // Prevent browser default behavior

        const shortcut = this.shortcuts[key];

        // Check if session is active for gameplay shortcuts
        if (shortcut.category === 'gameplay') {
          const state = getState();
          if (!state || !state.sessionId) {
            showAlert('No active session. Create or select a campaign first!', 'error');
            return;
          }
        }

        // Execute the shortcut action
        try {
          shortcut.action();
        } catch (error) {
          console.error('❌ Shortcut error:', error);
          showAlert(`Error executing shortcut: ${error.message}`, 'error');
        }
      }
    });

    console.log('⌨️ Keyboard shortcuts initialized');
  },

  /**
   * Focus on the note editor and scroll it into view
   */
  focusEditor() {
    const editorElement = document.querySelector('.ql-editor');
    if (editorElement) {
      editorElement.focus();
      editorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      console.log('📝 Editor focused via shortcut');
    } else {
      showAlert('Note editor not ready yet', 'info');
    }
  },

  /**
   * Show help modal with all available shortcuts
   */
  showHelp() {
    const categories = {};

    // Group shortcuts by category
    for (const [key, shortcut] of Object.entries(this.shortcuts)) {
      const category = shortcut.category;
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push({ key, ...shortcut });
    }

    let helpHTML = `
      <div class="shortcuts-help">
        <style>
          .shortcuts-help {
            font-family: monospace;
            max-height: 60vh;
            overflow-y: auto;
          }
          .shortcuts-category {
            margin-bottom: 1.5rem;
          }
          .shortcuts-category h4 {
            margin: 0.5rem 0;
            text-transform: uppercase;
            opacity: 0.7;
            font-size: 0.85rem;
          }
          .shortcut-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.5rem 0;
            border-bottom: 1px solid var(--color-border);
          }
          .shortcut-key {
            background: var(--color-bg-secondary);
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-weight: bold;
            color: var(--color-primary);
            min-width: 80px;
            text-align: center;
          }
          .shortcut-desc {
            flex: 1;
            margin-left: 1rem;
            opacity: 0.9;
          }
        </style>
    `;

    // Render each category
    for (const [category, shortcuts] of Object.entries(categories)) {
      helpHTML += `
        <div class="shortcuts-category">
          <h4>${category === 'gameplay' ? 'Gameplay' : category === 'editing' ? 'Editing' : 'Help'}</h4>
      `;

      for (const shortcut of shortcuts) {
        helpHTML += `
          <div class="shortcut-item">
            <span class="shortcut-key">Alt + ${shortcut.key.toUpperCase()}</span>
            <span class="shortcut-desc">${shortcut.description}</span>
          </div>
        `;
      }

      helpHTML += `</div>`;
    }

    helpHTML += `</div>`;

    showModal('⌨️ Keyboard Shortcuts', helpHTML);
  },

  /**
   * Get all shortcuts (for documentation/discovery)
   */
  getShortcuts() {
    return this.shortcuts;
  },

  /**
   * Get shortcuts for a specific category
   */
  getShortcutsByCategory(category) {
    return Object.entries(this.shortcuts)
      .filter(([_, shortcut]) => shortcut.category === category)
      .reduce((obj, [key, shortcut]) => {
        obj[key] = shortcut;
        return obj;
      }, {});
  }
};
