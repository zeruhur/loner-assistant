/**
 * LONER ASSISTANT v2.0 - NPC Management
 *
 * Manage non-player characters
 */

import * as LonerDB from './db/database.js';
import * as UI from './ui.js';
import { getState } from './state.js';
import { openFormModal, confirmAndDelete } from './crud/modal-form.js';

/**
 * Get relationship color
 */
function getRelationshipColor(relationship) {
  switch (relationship) {
    case 'ally': return 'var(--success)';
    case 'enemy': return 'var(--danger)';
    default: return 'var(--text-muted)';
  }
}

/**
 * Show new NPC form
 */
export function showNewNPCForm() {
  const formHTML = `
    <form id="new-npc-form">
      <div class="form-group">
        <label>Name *</label>
        <input type="text" id="npc-name" required placeholder="NPC name">
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea id="npc-description" placeholder="What do you know about them?" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label>Relationship</label>
        <select id="npc-relationship">
          <option value="neutral">Neutral</option>
          <option value="ally">Ally</option>
          <option value="enemy">Enemy</option>
        </select>
      </div>
      <div class="form-group">
        <label>Tags (comma-separated)</label>
        <input type="text" id="npc-tags" placeholder="merchant, suspicious, helpful">
        <p class="text-muted" style="font-size: 0.75rem; margin-top: 0.25rem;">
          Tags can describe traits or a relationship that's earned through play (e.g. Trusted Informant, Sworn Enemy) — both grant Advantage or Disadvantage the same way.
        </p>
      </div>
      <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
        <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">Create NPC</button>
      </div>
    </form>
  `;

  openFormModal('New NPC', 'new-npc-form', formHTML, () => createNewNPC());
}

/**
 * Create new NPC
 */
export async function createNewNPC() {
  const nameInput = document.getElementById('npc-name');

  if (!nameInput || !nameInput.value.trim()) {
    UI.showAlert('Please enter an NPC name', 'error');
    return;
  }

  try {
    const state = getState();

    if (!state.campaignId) {
      UI.showAlert('Please create or select a campaign first!', 'error');
      UI.closeModal();
      return;
    }

    const name = nameInput.value.trim();
    const description = document.getElementById('npc-description').value.trim();
    const tags = document.getElementById('npc-tags').value
      .split(',')
      .map(t => t.trim())
      .filter(t => t);

    const npcId = await LonerDB.createNPC(state.campaignId, name, description, tags);

    console.log('NPC created with ID:', npcId);

    UI.closeModal();
    UI.showAlert('NPC created!', 'success');

    // Always refresh the quick panel
    await showNPCPanel();

    // Reload NPCs list if on NPCs view
    if (document.getElementById('view-npcs').classList.contains('active')) {
      await loadNPCsList();
    }

  } catch (error) {
    console.error('Error creating NPC:', error);
    UI.showAlert('Error creating NPC: ' + error.message, 'error');
  }
}

/**
 * View NPC details
 */
export async function viewNPCDetails(npcId) {
  const npc = await LonerDB.db.npcs.get(npcId);

  const detailsHTML = `
    <div class="npc-details">
      <div class="form-group">
        <label>Name</label>
        <div>${UI.escapeHtml(npc.name)}</div>
      </div>
      <div class="form-group">
        <label>Description</label>
        <div>${UI.escapeHtml(npc.description || 'No description')}</div>
      </div>
      <div class="form-group">
        <label>Relationship</label>
        <div style="color: ${getRelationshipColor(npc.relationship)};">
          ${UI.escapeHtml(npc.relationship || 'neutral')}
        </div>
      </div>
      ${npc.tags && npc.tags.length > 0 ? `
        <div class="form-group">
          <label>Tags</label>
          <div>${npc.tags.map(t => UI.escapeHtml(t)).join(', ')}</div>
        </div>
      ` : ''}
      <div style="display: flex; gap: 0.5rem; justify-content: flex-end; margin-top: 1rem;">
        <button class="btn btn-outline" onclick="editNPC(${npcId})">Edit</button>
        <button class="btn btn-danger" onclick="deleteNPCConfirm(${npcId})">Delete</button>
      </div>
    </div>
  `;

  UI.showModal(npc.name, detailsHTML);
}

/**
 * Edit NPC
 */
export async function editNPC(npcId) {
  const npc = await LonerDB.db.npcs.get(npcId);

  const formHTML = `
    <form id="edit-npc-form">
      <div class="form-group">
        <label>Name *</label>
        <input type="text" id="edit-npc-name" required value="${UI.escapeHtml(npc.name)}">
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea id="edit-npc-description" rows="3">${UI.escapeHtml(npc.description || '')}</textarea>
      </div>
      <div class="form-group">
        <label>Relationship</label>
        <select id="edit-npc-relationship">
          <option value="neutral" ${npc.relationship === 'neutral' ? 'selected' : ''}>Neutral</option>
          <option value="ally" ${npc.relationship === 'ally' ? 'selected' : ''}>Ally</option>
          <option value="enemy" ${npc.relationship === 'enemy' ? 'selected' : ''}>Enemy</option>
        </select>
      </div>
      <div class="form-group">
        <label>Tags (comma-separated)</label>
        <input type="text" id="edit-npc-tags" value="${npc.tags ? npc.tags.join(', ') : ''}">
      </div>
      <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
        <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">Save Changes</button>
      </div>
    </form>
  `;

  openFormModal('Edit NPC', 'edit-npc-form', formHTML, () => saveNPCEdit(npcId));
}

/**
 * Save NPC edits
 */
export async function saveNPCEdit(npcId) {
  const name = document.getElementById('edit-npc-name').value.trim();
  const description = document.getElementById('edit-npc-description').value.trim();
  const relationship = document.getElementById('edit-npc-relationship').value;
  const tags = document.getElementById('edit-npc-tags').value
    .split(',')
    .map(t => t.trim())
    .filter(t => t);

  if (!name) {
    UI.showAlert('Name is required', 'error');
    return;
  }

  try {
    await LonerDB.updateNPC(npcId, {
      name,
      description,
      relationship,
      tags
    });

    UI.closeModal();
    UI.showAlert('NPC updated!', 'success');

    // Always refresh displays
    await showNPCPanel();

    if (document.getElementById('view-npcs')?.classList.contains('active')) {
      await loadNPCsList();
    }

  } catch (error) {
    console.error('Error saving NPC:', error);
    UI.showAlert('Error saving NPC: ' + error.message, 'error');
  }
}

/**
 * Delete NPC with confirmation
 */
export async function deleteNPCConfirm(npcId) {
  const npc = await LonerDB.db.npcs.get(npcId);

  await confirmAndDelete(`Delete "${npc.name}"? This cannot be undone.`, async () => {
    await LonerDB.deleteNPC(npcId);
    UI.showAlert('NPC deleted', 'success');

    // Refresh displays
    await showNPCPanel();

    if (document.getElementById('view-npcs')?.classList.contains('active')) {
      await loadNPCsList();
    }
  }, { closeModalFirst: true });
}

/**
 * Load NPCs list view
 */
export async function loadNPCsList() {
  const state = getState();

  if (!state.campaignId) {
    const container = document.getElementById('npcs-list');
    if (container) {
      container.innerHTML = '<p class="text-muted text-center">Select a campaign first</p>';
    }
    return;
  }

  const npcs = await LonerDB.getNPCsForCampaign(state.campaignId);
  const container = document.getElementById('npcs-list');

  if (!container) return;

  if (npcs.length === 0) {
    container.innerHTML = '<p class="text-muted text-center">No NPCs yet. Create one!</p>';
    return;
  }

  container.innerHTML = npcs.map(npc => `
    <div class="card">
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
        <h3 style="margin: 0;">${UI.escapeHtml(npc.name)}</h3>
        <span class="status-badge" style="background: ${getRelationshipColor(npc.relationship)};">
          ${UI.escapeHtml(npc.relationship || 'neutral')}
        </span>
      </div>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">
        ${UI.escapeHtml(npc.description || 'No description')}
      </p>
      ${npc.tags && npc.tags.length > 0 ? `
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
          ${npc.tags.map(tag => `
            <span class="tag-chip">${UI.escapeHtml(tag)}</span>
          `).join('')}
        </div>
      ` : ''}
      <div class="card-footer">
        <span>Created: ${UI.formatDate(npc.createdAt)}</span>
        <div style="display: flex; gap: 0.5rem;">
          <button class="btn btn-sm btn-outline" onclick="viewNPCDetails(${npc.id})">View</button>
          <button class="btn btn-sm btn-outline" onclick="editNPC(${npc.id})">Edit</button>
          <button class="btn btn-sm btn-danger" onclick="deleteNPCConfirm(${npc.id})">Delete</button>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Display NPC quick reference in the Play view sidebar panel
 */
export async function showNPCPanel() {
  const state = getState();
  if (!state.campaignId) {
    document.getElementById('npcs-quick-list').innerHTML = '<p class="text-muted">No campaign selected</p>';
    return;
  }

  const npcs = await LonerDB.getNPCsForCampaign(state.campaignId);
  const container = document.getElementById('npcs-quick-list');

  if (npcs.length === 0) {
    container.innerHTML = '<p class="text-muted">No NPCs yet</p>';
    return;
  }

  container.innerHTML = npcs.slice(0, 5).map(npc => `
    <div class="quick-link-item" style="display: flex; justify-content: space-between; align-items: center; gap: 0.5rem;">
      <div onclick="viewNPCDetails(${npc.id})" style="cursor: pointer; flex: 1; min-width: 0;">
        <strong>${UI.escapeHtml(npc.name)}</strong>
        ${npc.tags.length > 0 ? `<div style="font-size: 0.75rem; opacity: 0.7;">${npc.tags.map(t => UI.escapeHtml(t)).join(', ')}</div>` : ''}
      </div>
      <button class="btn-icon" title="Update relationship tag" onclick="event.stopPropagation(); NPCManager.showRelationshipPrompt(${npc.id});">+</button>
    </div>
  `).join('');
}

/**
 * Quick-action: add or replace a relationship tag on an NPC without
 * leaving the Play view (Loner 4e "Relationships" - a relationship tag
 * earned through play works exactly like any other tag).
 */
export async function showRelationshipPrompt(npcId) {
  const state = getState();
  const npcs = await LonerDB.getNPCsForCampaign(state.campaignId);
  const npc = npcs.find(n => n.id === npcId);
  if (!npc) return;

  UI.showModal('Update Relationship', `
    <p class="text-muted" style="margin-bottom: 1rem;">
      A relationship with <strong>${UI.escapeHtml(npc.name)}</strong> that's been tested, strained, or deepened through play earns a tag, e.g. <em>Trusted Informant</em>, <em>Sworn Enemy</em>, <em>Uneasy Ally</em>.
    </p>
    ${npc.tags.length > 0 ? `<p style="font-size: 0.85rem; margin-bottom: 0.75rem;">Current tags: ${npc.tags.map(t => UI.escapeHtml(t)).join(', ')}</p>` : ''}
    <div class="form-group">
      <label>New relationship tag</label>
      <input type="text" id="relationship-tag-input" placeholder="e.g., Useful Ambiguity">
    </div>
    <button class="btn btn-primary" onclick="NPCManager.addRelationshipTag(${npcId})" style="width: 100%;">
      Add Tag
    </button>
  `);
}

/**
 * Add the entered tag to the NPC and close the prompt
 */
export async function addRelationshipTag(npcId) {
  const input = document.getElementById('relationship-tag-input');
  const newTag = (input.value || '').trim();
  if (!newTag) {
    UI.showAlert('Enter a tag first', 'error');
    return;
  }

  const state = getState();
  const npcs = await LonerDB.getNPCsForCampaign(state.campaignId);
  const npc = npcs.find(n => n.id === npcId);
  if (!npc) return;

  const tags = [...(npc.tags || []), newTag];
  await LonerDB.updateNPC(npcId, { tags });

  UI.closeModal();
  UI.showAlert(`${npc.name}: ${newTag}`, 'success');
  await showNPCPanel();
}

export const NPCManager = {
  showNPCPanel,
  showNewNPCForm,
  createNewNPC,
  viewNPCDetails,
  editNPC,
  saveNPCEdit,
  deleteNPCConfirm,
  showRelationshipPrompt,
  addRelationshipTag,
  loadNPCsList
};
