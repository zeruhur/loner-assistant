/**
 * LONER ASSISTANT v2.0 - Session Management
 *
 * All session-related functions
 */

import * as LonerDB from './db/database.js';
import * as UI from './ui.js';
import { getState, setCurrentCampaign } from './state.js';
import { openFormModal } from './crud/modal-form.js';
import * as Editor from './editor.js';

/**
 * Display current session info in sidebar
 */
export function displayCurrentSession(session) {
  const infoDiv = document.getElementById('current-session-info');
  if (!infoDiv) return;

  infoDiv.innerHTML = `
    <div style="display: flex; align-items: center; gap: 1rem;">
      <div>
        <h4 style="margin: 0; font-size: 1.1rem;">${UI.escapeHtml(session.name)}</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0.25rem 0 0 0;">
          Started: ${UI.formatDate(session.date)}
        </p>
      </div>
    </div>
  `;
}

/**
 * Show session list modal
 */
export async function showSessionList() {
  const state = getState();

  if (!state.campaignId) {
    UI.showAlert('No active campaign', 'error');
    return;
  }

  const sessions = await LonerDB.getSessionsForCampaign(state.campaignId);

  const sessionsHTML = `
    <div style="margin-bottom: 1rem;">
      <button class="btn btn-primary" onclick="showNewSessionForm()">
        + New Session
      </button>
    </div>

    <div style="max-height: 400px; overflow-y: auto;">
      ${sessions.length === 0 ? '<p class="text-muted">No sessions yet</p>' :
      sessions.map(session => `
          <div class="card" style="margin-bottom: 0.5rem; padding: 0.75rem; ${session.id === state.sessionId ? 'border: 2px solid var(--primary);' : ''}">
            <div style="display: flex; justify-content: space-between; align-items: start;">
              <div style="flex: 1;">
                <h4 style="margin: 0 0 0.25rem 0;">${UI.escapeHtml(session.name)}</h4>
                <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0;">
                  ${UI.formatDate(session.date)}
                  ${session.id === state.sessionId ? '<span style="color: var(--primary); font-weight: 600;"> • ACTIVE</span>' : ''}
                </p>
              </div>
              <div style="display: flex; gap: 0.25rem;">
                ${session.id !== state.sessionId ? `
                  <button class="btn btn-sm btn-primary" onclick="switchToSession(${session.id})" title="Switch to this session">
                    Switch
                  </button>
                ` : ''}
                <button class="btn btn-sm btn-outline" onclick="renameSession(${session.id})" title="Rename">
                  ✏️
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteSessionConfirm(${session.id})" title="Delete">
                  🗑️
                </button>
              </div>
            </div>
          </div>
        `).join('')
    }
    </div>
  `;

  UI.showModal('Sessions', sessionsHTML);
}

/**
 * Show new session form
 */
export function showNewSessionForm() {
  const formHTML = `
    <form id="new-session-form">
      <div class="form-group">
        <label>Session Name *</label>
        <input type="text" id="session-name" required placeholder="e.g., Session 5: The Heist">
      </div>
      <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
        <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">Create Session</button>
      </div>
    </form>
  `;

  openFormModal('New Session', 'new-session-form', formHTML, () => createNewSession());
}

/**
 * Create a new session
 */
export async function createNewSession() {
  const state = getState();

  if (!state.campaignId) {
    UI.showAlert('No active campaign', 'error');
    return;
  }

  const nameInput = document.getElementById('session-name');
  if (!nameInput || !nameInput.value.trim()) {
    UI.showAlert('Please enter a session name', 'error');
    return;
  }

  try {
    const name = nameInput.value.trim();

    // Create session
    const sessionId = await LonerDB.createSession(state.campaignId, name);

    // Switch to the new session
    setCurrentCampaign(state.campaignId, sessionId);

    // Load into editor
    await Editor.loadSession(sessionId);

    // Update display
    const session = await LonerDB.getSession(sessionId);
    displayCurrentSession(session);

    UI.closeModal();
    UI.showAlert('Session created!', 'success');

    // Show the session list again to see the new session
    await showSessionList();

  } catch (error) {
    console.error('Error creating session:', error);
    UI.showAlert('Error creating session: ' + error.message, 'error');
  }
}

/**
 * Switch to a different session
 */
export async function switchToSession(sessionId) {
  const state = getState();

  try {
    // Save current session notes first
    await Editor.saveNotes();

    // Load new session
    await Editor.loadSession(sessionId);

    // Update state
    setCurrentCampaign(state.campaignId, sessionId);

    // Update display
    const session = await LonerDB.getSession(sessionId);
    displayCurrentSession(session);

    UI.closeModal();
    UI.showAlert('Session switched!', 'success');

  } catch (error) {
    console.error('Error switching session:', error);
    UI.showAlert('Error switching session: ' + error.message, 'error');
  }
}

/**
 * Rename a session
 */
export async function renameSession(sessionId) {
  const session = await LonerDB.getSession(sessionId);

  const formHTML = `
    <form id="rename-session-form">
      <div class="form-group">
        <label>Session Name *</label>
        <input type="text" id="rename-session-name" required value="${UI.escapeHtml(session.name)}">
      </div>
      <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
        <button type="button" class="btn btn-outline" onclick="showSessionList()">Cancel</button>
        <button type="submit" class="btn btn-primary">Save</button>
      </div>
    </form>
  `;

  openFormModal('Rename Session', 'rename-session-form', formHTML, async () => {
    const newName = document.getElementById('rename-session-name').value.trim();

    if (!newName) {
      UI.showAlert('Please enter a session name', 'error');
      return;
    }

    try {
      await LonerDB.db.sessions.update(sessionId, { name: newName });

      // Update display if this is the current session
      const state = getState();
      if (sessionId === state.sessionId) {
        const updated = await LonerDB.getSession(sessionId);
        displayCurrentSession(updated);
      }

      UI.showAlert('Session renamed!', 'success');
      await showSessionList();

    } catch (error) {
      console.error('Error renaming session:', error);
      UI.showAlert('Error renaming session: ' + error.message, 'error');
    }
  });
}

/**
 * Delete session with confirmation
 */
export async function deleteSessionConfirm(sessionId) {
  const state = getState();
  const session = await LonerDB.getSession(sessionId);

  // Don't allow deleting the only session
  const sessions = await LonerDB.getSessionsForCampaign(state.campaignId);
  if (sessions.length <= 1) {
    UI.showAlert('Cannot delete the only session. Create another session first.', 'error');
    return;
  }

  // Don't allow deleting the active session
  if (sessionId === state.sessionId) {
    UI.showAlert('Cannot delete the active session. Switch to another session first.', 'error');
    return;
  }

  if (UI.confirmDialog(`Delete session "${session.name}"? This will delete all notes. This cannot be undone.`)) {
    try {
      await LonerDB.db.sessions.delete(sessionId);
      UI.showAlert('Session deleted', 'success');
      await showSessionList();
    } catch (error) {
      console.error('Error deleting session:', error);
      UI.showAlert('Error deleting session: ' + error.message, 'error');
    }
  }
}

export const SessionManager = {
  displayCurrentSession,
  showSessionList,
  showNewSessionForm,
  createNewSession,
  switchToSession,
  renameSession,
  deleteSessionConfirm
};
