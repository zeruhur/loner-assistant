/**
 * LONER ASSISTANT v2.0 - User Manual System
 *
 * Display the user manual in-app
 */

const ManualSystem = {

  /**
   * Show the user manual in a modal
   */
  show() {
    const manualHTML = this.getManualHTML();

    // Create a custom large modal for the manual
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    modalTitle.textContent = '📖 User Manual';
    modalBody.innerHTML = `
      <div class="manual-content">
        ${manualHTML}
      </div>
      <div style="margin-top: var(--space-lg); text-align: center;">
        <button class="btn btn-primary" onclick="UI.closeModal()">Close</button>
      </div>
    `;

    modal.classList.remove('hidden');

    // Add manual-specific styling
    modal.classList.add('modal-large');
  },

  /**
   * Get the manual content as HTML
   */
  getManualHTML() {
    return `
      <div style="max-width: 800px; margin: 0 auto;">
        <h1>Loner Assistant - User Manual</h1>
        <p>Welcome to the <strong>Loner Assistant</strong>, your digital companion for playing the Loner solo RPG.</p>

        <h2>📋 Table of Contents</h2>
        <ul>
          <li><a href="#getting-started">Getting Started</a></li>
          <li><a href="#interface">Interface Overview</a></li>
          <li><a href="#managing">Managing Your Game</a></li>
          <li><a href="#playing">Playing the Game</a></li>
          <li><a href="#worldbuilding">World Building</a></li>
          <li><a href="#tools">Tools & Tables</a></li>
          <li><a href="#export">Import/Export</a></li>
          <li><a href="#shortcuts">Keyboard Shortcuts</a></li>
          <li><a href="#mobile">Mobile Usage</a></li>
        </ul>

        <hr>

        <h2 id="getting-started">🚀 Getting Started</h2>
        <p>Loner Assistant runs directly in your browser. There is no login or server; all your data is stored safely on your device using your browser's local storage (IndexedDB).</p>
        <p><strong>⚠️ Note:</strong> If you clear your browser's "Site Data" or "Cookies" for this site, you may lose your campaigns. Use the Export feature regularly to back up your data!</p>

        <h2 id="interface">🖥️ Interface Overview</h2>
        <p>The application is divided into several views, accessible via the top navigation bar:</p>
        <ul>
          <li><strong>Play</strong>: The main dashboard where you spend most of your game time. Contains the Oracle, Session Notes, and quick access panels.</li>
          <li><strong>Campaigns</strong>: Manage your different adventures.</li>
          <li><strong>Characters</strong>: Create and edit your protagonists.</li>
          <li><strong>NPCs / Locations / Threads / Events</strong>: Manage your world content.</li>
          <li><strong>Tools</strong>: Access all roll tables, supplements, and data management.</li>
        </ul>

        <h2 id="managing">🎮 Managing Your Game</h2>

        <h3>Campaigns</h3>
        <p>A <strong>Campaign</strong> is the container for your story. It holds all your sessions, characters, and world data.</p>
        <ul>
          <li>Go to the <strong>Campaigns</strong> tab to create a new campaign.</li>
          <li>Click "Select" on a campaign to make it active.</li>
          <li>You can export entire campaigns as JSON backups.</li>
        </ul>

        <h3>Sessions</h3>
        <p>A <strong>Session</strong> represents a single sitting or chapter of your story.</p>
        <ul>
          <li>In the <strong>Play</strong> view, use "Manage Sessions" to create or switch sessions.</li>
          <li><strong>Session Notes</strong> are auto-saved every 30 seconds.</li>
          <li>Export sessions as Markdown, HTML, or full JSON backups.</li>
        </ul>

        <h3>Characters</h3>
        <p>Your <strong>Protagonist</strong> is the main character of your story.</p>
        <ul>
          <li>Go to the <strong>Characters</strong> tab to create a character.</li>
          <li>Characters use <strong>Tags</strong> (Concept, Skills, Frailty, Gear) instead of numbers.</li>
          <li>Mark a character as "Active" to see them in the Play view sidebar.</li>
        </ul>

        <h2 id="playing">🎲 Playing the Game</h2>

        <h3>The Oracle</h3>
        <p>The <strong>Oracle</strong> is the heart of Loner. It answers your questions to drive the story.</p>
        <ol>
          <li><strong>Ask a Yes/No question</strong> about the situation.</li>
          <li>Select a modifier if applicable:
            <ul>
              <li><strong>Advantage</strong>: Favorable conditions.</li>
              <li><strong>Disadvantage</strong>: Unfavorable conditions.</li>
            </ul>
          </li>
          <li>Click <strong>Consult Oracle</strong> (or press <kbd>Alt + O</kbd>).</li>
          <li>The result will be displayed (e.g., "Yes, but...", "No, and...").</li>
        </ol>

        <h3>Twist Counter</h3>
        <p>The app automatically tracks <strong>Twists</strong>.</p>
        <ul>
          <li>When you roll doubles on the Oracle, the Twist Counter increases.</li>
          <li>At <strong>3</strong>, a Twist is triggered automatically.</li>
          <li>You can manually <strong>Force Twist</strong> (<kbd>Alt + W</kbd>) if the narrative demands it.</li>
        </ul>

        <h3>Conflict Resolution</h3>
        <p>Use the <strong>Conflict</strong> panel to track dangerous situations.</p>
        <ol>
          <li>Enter Opponent Name and Luck (default 6).</li>
          <li>Click <strong>Start Conflict</strong>.</li>
          <li>Use the <strong>Roll</strong> button to resolve rounds.</li>
          <li>The app tracks Luck for both you and the opponent.</li>
        </ol>

        <h3>Scene Management</h3>
        <p>Use the <strong>Scene</strong> panel to roll for the next scene setup. It determines if the next scene is "Expected", "Altered", or "Interrupted".</p>

        <h2 id="worldbuilding">🌍 World Building</h2>
        <p>Keep track of your evolving world using the dedicated tabs:</p>
        <ul>
          <li><strong>NPCs</strong>: People you meet. Add tags to define them.</li>
          <li><strong>Locations</strong>: Places you visit. Mark as visited.</li>
          <li><strong>Threads</strong>: Open storylines or quests. Mark as "Active", "Resolved", or "Abandoned".</li>
          <li><strong>Events</strong>: A timeline of major happenings in your story.</li>
        </ul>

        <h2 id="tools">🛠️ Tools & Tables</h2>

        <h3>Adventure Maker</h3>
        <p>Located in the <strong>Play</strong> view sidebar, this helps generate a premise:</p>
        <ul>
          <li>Roll for <strong>Setting</strong>, <strong>Tone</strong>, <strong>Things</strong>, <strong>Opposition</strong>, and <strong>Actions</strong>.</li>
          <li>Click <strong>Roll Complete Adventure</strong> for a full prompt.</li>
        </ul>

        <h3>Get Inspired</h3>
        <p>Need a spark? Click <strong>Random Prompt</strong> for a two-word prompt (Verb + Noun).</p>

        <h3>Random Tables</h3>
        <p>The <strong>Table Manager</strong> allows you to roll on any table from loaded supplements.</p>
        <ol>
          <li>Select a <strong>Supplement</strong> (e.g., Core Loner).</li>
          <li>Select a <strong>Table</strong>.</li>
          <li>Roll! The result is shown and can be inserted into your notes.</li>
        </ol>

        <h2 id="export">📦 Import/Export</h2>

        <h3>Exporting Session Notes</h3>
        <p>In the <strong>Session Notes</strong> header, click <strong>📄 Export</strong> to access:</p>
        <ul>
          <li><strong>📝 Markdown</strong>: Export notes as .md file for archival</li>
          <li><strong>🌐 HTML</strong>: Export as .html (can be opened in LibreOffice/Word and saved as ODT)</li>
          <li><strong>📦 Full Session (JSON)</strong>: Complete backup including NPCs, locations, events, etc.</li>
        </ul>

        <h3>Data Management (Tools View)</h3>
        <ul>
          <li><strong>📤 Export All Data</strong>: Full database backup as JSON</li>
          <li><strong>📤 Export Campaign</strong>: Export current campaign with all sessions</li>
          <li><strong>📥 Import Data</strong>: Import sessions, campaigns, or full database backups</li>
        </ul>
        <p><strong>💡 Tip:</strong> Export your data regularly as a backup!</p>

        <h2 id="shortcuts">⌨️ Keyboard Shortcuts</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="border-bottom: 2px solid var(--border);">
              <th style="text-align: left; padding: 0.5rem;">Shortcut</th>
              <th style="text-align: left; padding: 0.5rem;">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid var(--border);">
              <td style="padding: 0.5rem;"><kbd>Alt + O</kbd></td>
              <td style="padding: 0.5rem;">Roll Oracle</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--border);">
              <td style="padding: 0.5rem;"><kbd>Alt + W</kbd></td>
              <td style="padding: 0.5rem;">Trigger Twist</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--border);">
              <td style="padding: 0.5rem;"><kbd>Alt + S</kbd></td>
              <td style="padding: 0.5rem;">Save Notes</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--border);">
              <td style="padding: 0.5rem;"><kbd>Alt + ?</kbd></td>
              <td style="padding: 0.5rem;">Show Shortcuts Help</td>
            </tr>
          </tbody>
        </table>

        <h2 id="mobile">📱 Mobile Usage</h2>
        <p>Loner Assistant is optimized for mobile devices:</p>
        <ul>
          <li><strong>Navigation</strong>: Hamburger menu on smaller screens</li>
          <li><strong>Layout</strong>: Panels reorder on mobile for better usability (Oracle and tools at top)</li>
          <li><strong>Collapsible Panels</strong>: Collapse unused panels to reduce scrolling</li>
          <li><strong>Touch</strong>: All buttons are sized for touch interaction</li>
          <li><strong>Add to Home Screen</strong>: Add the page to your mobile home screen for an app-like experience</li>
        </ul>

        <hr style="margin: 2rem 0;">

        <p style="text-align: center; color: var(--text-muted);">
          <strong>Need more help?</strong> Check the
          <a href="https://lonersrd.zotiquestgames.com" target="_blank" rel="noopener">official Loner SRD</a>
          or the
          <a href="https://github.com/zotiquestgames/lonersrd" target="_blank" rel="noopener">GitHub repository</a>.
        </p>
      </div>
    `;
  }
};

// Make available globally
window.ManualSystem = ManualSystem;
