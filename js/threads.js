/**
 * LONER ASSISTANT v2.0 - Narrative Thread Management
 *
 * Track ongoing storylines and plot threads
 */

import * as LonerDB from './db/database.js';
import * as UI from './ui.js';
import { getState } from './state.js';
import { openFormModal, confirmAndDelete } from './crud/modal-form.js';

/**
 * Get thread status color
 */
function getThreadStatusColor(status) {
  switch (status) {
    case 'active': return 'var(--primary)';
    case 'resolved': return 'var(--success)';
    case 'abandoned': return 'var(--text-muted)';
    default: return 'var(--text-muted)';
  }
}

/**
 * Show new thread form
 */
export function showNewThreadForm() {
  const formHTML = `
    <form id="new-thread-form">
      <div class="form-group">
        <label>Title *</label>
        <input type="text" id="thread-title" required placeholder="Thread title">
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea id="thread-description" placeholder="What's this storyline about?" rows="4"></textarea>
      </div>
      <div class="form-group">
        <label>Status</label>
        <select id="thread-status">
          <option value="active">Active</option>
          <option value="resolved">Resolved</option>
          <option value="abandoned">Abandoned</option>
        </select>
      </div>
      <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
        <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">Create Thread</button>
      </div>
    </form>
  `;

  openFormModal('New Narrative Thread', 'new-thread-form', formHTML, () => createNewThread());
}

/**
 * Create new thread
 */
export async function createNewThread() {
  const titleInput = document.getElementById('thread-title');

  if (!titleInput || !titleInput.value.trim()) {
    UI.showAlert('Please enter a thread title', 'error');
    return;
  }

  try {
    const state = getState();

    if (!state.campaignId) {
      UI.showAlert('Please create or select a campaign first!', 'error');
      UI.closeModal();
      return;
    }

    const title = titleInput.value.trim();
    const description = document.getElementById('thread-description').value.trim();

    const threadId = await LonerDB.createThread(state.campaignId, title, description);

    console.log('Thread created with ID:', threadId);

    UI.closeModal();
    UI.showAlert('Thread created!', 'success');

    // Always refresh the quick panel
    await showThreadPanel();

    // Reload threads list if on Threads view
    if (document.getElementById('view-threads').classList.contains('active')) {
      await loadThreadsList();
    }

  } catch (error) {
    console.error('Error creating thread:', error);
    UI.showAlert('Error creating thread: ' + error.message, 'error');
  }
}

/**
 * View thread details
 */
export async function viewThreadDetails(threadId) {
  const thread = await LonerDB.db.threads.get(threadId);

  const detailsHTML = `
    <div class="thread-details">
      <div class="form-group">
        <label>Title</label>
        <div>${UI.escapeHtml(thread.title)}</div>
      </div>
      <div class="form-group">
        <label>Description</label>
        <div>${UI.escapeHtml(thread.description || 'No description')}</div>
      </div>
      <div class="form-group">
        <label>Status</label>
        <div style="color: ${getThreadStatusColor(thread.status)};">
          ${UI.escapeHtml(thread.status || 'active').toUpperCase()}
        </div>
      </div>
      <div class="form-group">
        <label>Created</label>
        <div>${UI.formatDate(thread.createdAt)}</div>
      </div>
      <div style="display: flex; gap: 0.5rem; justify-content: flex-end; margin-top: 1rem;">
        ${thread.status === 'active' ? `
          <button class="btn btn-secondary" onclick="resolveThreadAndClose(${threadId})">
            Mark Resolved
          </button>
        ` : ''}
        <button class="btn btn-outline" onclick="editThread(${threadId})">Edit</button>
        <button class="btn btn-danger" onclick="deleteThreadConfirm(${threadId})">Delete</button>
      </div>
    </div>
  `;

  UI.showModal(thread.title, detailsHTML);
}

/**
 * Resolve thread and close modal
 */
export async function resolveThreadAndClose(threadId) {
  const thread = await LonerDB.db.threads.get(threadId);
  await LonerDB.updateThreadStatus(threadId, 'resolved');

  // LOG EVENT
  if (typeof window.EventManager !== 'undefined' && thread) {
    await window.EventManager.logEvent('thread', `Thread resolved: ${thread.title}`, {
      threadTitle: thread.title,
      status: 'resolved'
    });
  }

  UI.closeModal();
  UI.showAlert('Thread marked as resolved!', 'success');

  // Refresh displays
  await showThreadPanel();

  if (document.getElementById('view-threads')?.classList.contains('active')) {
    await loadThreadsList();
  }
}

/**
 * Edit thread
 */
export async function editThread(threadId) {
  const thread = await LonerDB.db.threads.get(threadId);

  const formHTML = `
    <form id="edit-thread-form">
      <div class="form-group">
        <label>Title *</label>
        <input type="text" id="edit-thread-title" required value="${UI.escapeHtml(thread.title)}">
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea id="edit-thread-description" rows="4">${UI.escapeHtml(thread.description || '')}</textarea>
      </div>
      <div class="form-group">
        <label>Status</label>
        <select id="edit-thread-status">
          <option value="active" ${thread.status === 'active' ? 'selected' : ''}>Active</option>
          <option value="resolved" ${thread.status === 'resolved' ? 'selected' : ''}>Resolved</option>
          <option value="abandoned" ${thread.status === 'abandoned' ? 'selected' : ''}>Abandoned</option>
        </select>
      </div>
      <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
        <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">Save Changes</button>
      </div>
    </form>
  `;

  openFormModal('Edit Thread', 'edit-thread-form', formHTML, () => saveThreadEdit(threadId));
}

/**
 * Save thread edits
 */
export async function saveThreadEdit(threadId) {
  const title = document.getElementById('edit-thread-title').value.trim();
  const description = document.getElementById('edit-thread-description').value.trim();
  const status = document.getElementById('edit-thread-status').value;

  if (!title) {
    UI.showAlert('Title is required', 'error');
    return;
  }

  try {
    await LonerDB.updateThread(threadId, {
      title,
      description,
      status
    });

    UI.closeModal();
    UI.showAlert('Thread updated!', 'success');

    // Always refresh displays
    await showThreadPanel();

    if (document.getElementById('view-threads')?.classList.contains('active')) {
      await loadThreadsList();
    }

  } catch (error) {
    console.error('Error saving thread:', error);
    UI.showAlert('Error saving thread: ' + error.message, 'error');
  }
}

/**
 * Delete thread with confirmation
 */
export async function deleteThreadConfirm(threadId) {
  const thread = await LonerDB.db.threads.get(threadId);

  await confirmAndDelete(`Delete "${thread.title}"? This cannot be undone.`, async () => {
    await LonerDB.deleteThread(threadId);
    UI.showAlert('Thread deleted', 'success');

    // Always refresh displays
    await showThreadPanel();

    if (document.getElementById('view-threads')?.classList.contains('active')) {
      await loadThreadsList();
    }
  }, { closeModalFirst: true });
}

/**
 * Load threads list view
 */
export async function loadThreadsList() {
  const state = getState();

  if (!state.campaignId) {
    const container = document.getElementById('threads-list');
    if (container) {
      container.innerHTML = '<p class="text-muted text-center">Select a campaign first</p>';
    }
    return;
  }

  const threads = await LonerDB.getThreadsForCampaign(state.campaignId);
  const container = document.getElementById('threads-list');

  if (!container) return;

  if (threads.length === 0) {
    container.innerHTML = '<p class="text-muted text-center">No threads yet. Create one!</p>';
    return;
  }

  // Group by status
  const active = threads.filter(t => t.status === 'active');
  const resolved = threads.filter(t => t.status === 'resolved');
  const abandoned = threads.filter(t => t.status === 'abandoned');

  let html = '';

  if (active.length > 0) {
    html += '<h3 style="margin-bottom: 1rem;">Active Threads</h3>';
    html += '<div class="grid-list" style="margin-bottom: 2rem;">';
    html += active.map(thread => renderThreadCard(thread)).join('');
    html += '</div>';
  }

  if (resolved.length > 0) {
    html += '<h3 style="margin-bottom: 1rem;">Resolved Threads</h3>';
    html += '<div class="grid-list" style="margin-bottom: 2rem;">';
    html += resolved.map(thread => renderThreadCard(thread)).join('');
    html += '</div>';
  }

  if (abandoned.length > 0) {
    html += '<h3 style="margin-bottom: 1rem;">Abandoned Threads</h3>';
    html += '<div class="grid-list">';
    html += abandoned.map(thread => renderThreadCard(thread)).join('');
    html += '</div>';
  }

  container.innerHTML = html;
}

/**
 * Render thread card
 */
function renderThreadCard(thread) {
  return `
    <div class="card">
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
        <h3 style="margin: 0;">${UI.escapeHtml(thread.title)}</h3>
        <span class="status-badge" style="background: ${getThreadStatusColor(thread.status)};">
          ${UI.escapeHtml(thread.status || 'active')}
        </span>
      </div>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">
        ${UI.escapeHtml(thread.description || 'No description')}
      </p>
      <div class="card-footer">
        <span>Created: ${UI.formatDate(thread.createdAt)}</span>
        <div style="display: flex; gap: 0.5rem;">
          <button class="btn btn-sm btn-outline" onclick="viewThreadDetails(${thread.id})">View</button>
          <button class="btn btn-sm btn-outline" onclick="editThread(${thread.id})">Edit</button>
          <button class="btn btn-sm btn-danger" onclick="deleteThreadConfirm(${thread.id})">Delete</button>
        </div>
      </div>
    </div>
  `;
}

/**
 * Display Threads quick reference in the Play view sidebar panel
 */
export async function showThreadPanel() {
  const state = getState();
  if (!state.campaignId) {
    document.getElementById('threads-quick-list').innerHTML = '<p class="text-muted">No campaign selected</p>';
    return;
  }

  const threads = await LonerDB.getThreadsForCampaign(state.campaignId);
  const activeThreads = threads.filter(t => t.status === 'active');
  const container = document.getElementById('threads-quick-list');

  if (activeThreads.length === 0) {
    container.innerHTML = '<p class="text-muted">No active threads</p>';
    return;
  }

  container.innerHTML = activeThreads.slice(0, 5).map(thread => `
    <div class="quick-link-item" onclick="viewThreadDetails(${thread.id})">
      <strong>${UI.escapeHtml(thread.title)}</strong>
    </div>
  `).join('');
}

export const ThreadManager = {
  showThreadPanel,
  showNewThreadForm,
  createNewThread,
  viewThreadDetails,
  resolveThreadAndClose,
  editThread,
  saveThreadEdit,
  deleteThreadConfirm,
  loadThreadsList
};
