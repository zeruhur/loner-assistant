/**
 * LONER ASSISTANT v2.0 - User Manual System
 *
 * Display the user manual in-app
 */

export const ManualSystem = {

  /**
   * Show the user manual in a modal
   */
  show() {
    const manualHTML = this.getManualHTML();

    // Create a custom large modal for the manual
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    modalTitle.textContent = 'User Manual';
    modalBody.innerHTML = `
      <div class="manual-content">
        ${manualHTML}
      </div>
      <div style="margin-top: var(--space-lg); text-align: center;">
        <button class="btn btn-primary" onclick="closeModal()">Close</button>
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
        <h1 id="loner-assistant---user-manual">Loner Assistant - User Manual</h1>
        <p>Welcome to the <strong>Loner Assistant</strong>, your digital companion for playing the Loner solo RPG. This guide will help you navigate the application and make the most of its features.</p>
        <h2 id="getting-started">Getting Started</h2>
        <p>Loner Assistant runs directly in your browser. There is no login or server; all your data is stored safely on your device using your browser's local storage (IndexedDB).</p>
        <p><strong>Note:</strong> If you clear your browser's "Site Data" or "Cookies" for this site, you may lose your campaigns.</p>
        <h2 id="interface-overview">Interface Overview</h2>
        <p>The application is divided into several views, accessible via the top navigation bar:</p>
        <ul>
        <li><strong>Play</strong>: The main dashboard where you spend most of your game time. It contains the Oracle, your Session Notes, and quick access to active character info.</li>
        <li><strong>Campaigns</strong>: Manage your different adventures.</li>
        <li><strong>Characters</strong>: Create and edit your protagonists.</li>
        <li><strong>NPCs / Locations / Threads / Events</strong>: Manage your world content.</li>
        <li><strong>Tools</strong>: Access all roll tables and supplements.</li>
        </ul>
        <h2 id="managing-your-game">Managing Your Game</h2>
        <h3 id="campaigns">Campaigns</h3>
        <p>A <strong>Campaign</strong> is the container for your story. It holds all your sessions, characters, and world data.</p>
        <ul>
        <li>Go to the <strong>Campaigns</strong> tab to create a new campaign.</li>
        <li>Click "Select" on a campaign to make it active.</li>
        </ul>
        <h3 id="sessions">Sessions</h3>
        <p>A <strong>Session</strong> represents a single sitting or chapter of your story.</p>
        <ul>
        <li>In the <strong>Play</strong> view, the <strong>Current Session Card</strong> at the top displays your active session.</li>
        <li>Use the "Manage Sessions" button to create or switch sessions.</li>
        <li><strong>Session Notes</strong> are auto-saved as you type.</li>
        </ul>
        <h3 id="characters">Characters</h3>
        <p>Your <strong>Protagonist</strong> is the main character of your story.</p>
        <ul>
        <li>Go to the <strong>Characters</strong> tab to create a character.</li>
        <li>Characters use <strong>Tags</strong> (Concept, Skills, Frailty, Gear) instead of numbers.</li>
        <li>You can mark a character as "Active" to see them in the Play view sidebar.</li>
        </ul>
        <h2 id="playing-the-game">Playing the Game</h2>
        <h3 id="the-oracle">The Oracle</h3>
        <p>The <strong>Oracle</strong> is the heart of Loner. It answers your questions to drive the story.</p>
        <p>1. <strong>Ask a Yes/No question</strong> about the situation.</p>
        <p>2. Select a modifier if applicable:</p>
        <ul>
        <li><strong>Advantage</strong>: Favorable conditions.</li>
        <li><strong>Disadvantage</strong>: Unfavorable conditions.</li>
        </ul>
        <p>3. Click <strong>Consult Oracle</strong> (or press <code>Alt + O</code>).</p>
        <p>4. The result will be displayed (e.g., "Yes, but...", "No, and...").</p>
        <h3 id="twist-counter">Twist Counter</h3>
        <p>The app automatically tracks <strong>Twists</strong>.</p>
        <ul>
        <li>When you roll doubles on the Oracle, the Twist Counter increases.</li>
        <li>At <strong>3</strong>, a Twist is triggered automatically.</li>
        <li>You can also manually <strong>Force Twist</strong> (<code>Alt + W</code>) if the narrative demands it.</li>
        </ul>
        <h3 id="conflict-resolution">Conflict Resolution</h3>
        <p>Use the <strong>Conflict</strong> panel in the Play view to track dangerous situations.</p>
        <p>1. Enter Opponent Name and Luck (default 6).</p>
        <p>2. Click <strong>Start Conflict</strong>.</p>
        <p>3. Use the <strong>Roll</strong> button to resolve rounds. The app tracks Luck for both you and the opponent.</p>
        <h3 id="scene-management">Scene Management</h3>
        <p>Use the <strong>Scene</strong> panel to roll for the next scene setup. It helps determine if the next scene is "Expected", "Altered", or "Interrupted".</p>
        <h2 id="world-building">World Building</h2>
        <p>Keep track of your evolving world using the dedicated tabs:</p>
        <ul>
        <li><strong>NPCs</strong>: People you meet. Add tags to define them.</li>
        <li><strong>Locations</strong>: Places you visit.</li>
        <li><strong>Threads</strong>: Open storylines or quests. Mark them as "Active", "Resolved", or "Abandoned".</li>
        <li><strong>Events</strong>: A timeline of major happenings in your story.</li>
        </ul>
        <h2 id="tools--tables">Tools & Tables</h2>
        <h3 id="adventure-maker">Adventure Maker</h3>
        <p>Located in the <strong>Play</strong> view sidebar (and Tools tab), this helps you generate a premise for your adventure:</p>
        <ul>
        <li>Roll for <strong>Setting</strong>, <strong>Tone</strong>, <strong>Things</strong>, <strong>Opposition</strong>, and <strong>Actions</strong>.</li>
        <li>Click <strong>Roll Complete Adventure</strong> for a full prompt.</li>
        </ul>
        <h3 id="get-inspired">Get Inspired</h3>
        <p>Need a spark? Click <strong>Random Prompt</strong> in the Get Inspired panel for a two-word prompt (Verb + Noun).</p>
        <ul>
        <li><strong>Flavor</strong>: Use the Flavor button to change the "flavor" of the prompts (e.g., Fantasy, Sci-Fi, Horror).</li>
        </ul>
        <h3 id="random-tables">Random Tables</h3>
        <p>The <strong>Table Manager</strong> allows you to roll on any table from loaded supplements.</p>
        <p>1. Select a <strong>Supplement</strong> (e.g., Core Loner) from the dropdown.</p>
        <p>2. The available tables for that supplement will appear.</p>
        <p>3. Click on a <strong>Table</strong> button to roll.</p>
        <p>4. The result is shown and can be pasted into your notes.</p>
        <h2 id="import/export">Import/Export</h2>
        <p>You can export and import your data to back it up or move it between devices.</p>
        <h3 id="note-exporting">Note Exporting</h3>
        <p>You can export just the text content of your current session notes:</p>
        <ul>
        <li><strong>Markdown</strong>: Click <strong>Export > Markdown</strong> in the Session Notes header to download as a <code>.md</code> file.</li>
        <li><strong>HTML</strong>: Click <strong>Export > HTML</strong> in the Session Notes header to download as a <code>.html</code> file.</li>
        </ul>
        <h3 id="exporting-(data-backup)">Exporting (Data Backup)</h3>
        <ul>
        <li><strong>Session</strong>: In the Play view, click <strong>Export</strong> on the Current Session Card to save the current session data as a JSON file.</li>
        <li><strong>Campaign</strong>: In the Tools view, click <strong>Export Campaign</strong> to save the entire current campaign (including all sessions, NPCs, etc.).</li>
        <li><strong>Full Backup</strong>: In the Tools view, click <strong>Export All Data</strong> to save a complete backup of the entire database.</li>
        </ul>
        <h3 id="importing">Importing</h3>
        <ul>
        <li>In the Tools view, click <strong>Import Data</strong>.</li>
        <li>Select the type of import (Session, Campaign, or Full Database).</li>
        <li>Choose the JSON file you previously exported.</li>
        <li><strong>Warning</strong>: Importing a Full Database backup will <strong>replace</strong> all existing data!</li>
        </ul>
        <h2 id="keyboard-shortcuts">Keyboard Shortcuts</h2>
        <table border="1" style="border-collapse: collapse; width: 100%;">
        <tr><td>Shortcut</td><td>Action</td><td>Notes</td></tr>
        <tr><td><strong>Alt + O</strong></td><td>Roll Oracle</td><td>Consult the Oracle with current modifier</td></tr>
        <tr><td><strong>Alt + T</strong></td><td>Open Table Manager</td><td>Quick access to tables</td></tr>
        <tr><td><strong>Alt + W</strong></td><td>Trigger Twist</td><td>Force a Twist event</td></tr>
        <tr><td><strong>Alt + N</strong></td><td>Focus Note Editor</td><td>Jump to notes</td></tr>
        <tr><td><strong>Alt + S</strong></td><td>Save Notes</td><td>Manually save notes</td></tr>
        <tr><td><strong>Alt + ?</strong></td><td>Show Shortcuts</td><td>View help</td></tr>
        </table>
        <h2 id="mobile-usage">Mobile Usage</h2>
        <p>Loner Assistant is optimized for mobile devices.</p>
        <ul>
        <li><strong>Navigation</strong>: The menu becomes a hamburger menu on smaller screens.</li>
        <li><strong>Layout</strong>: The 3-column Play view stacks into a single column.</li>
        <li><strong>Touch</strong>: Buttons are sized for touch interaction.</li>
        <li><strong>Add to Home Screen</strong>: You can add the page to your mobile home screen for a full-screen app-like experience.</li>
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
