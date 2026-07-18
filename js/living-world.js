/**
 * LONER ASSISTANT v2.0 - The Living World (Loner 4e post-adventure review)
 *
 * After an adventure ends, walk through NPCs, Locations, and Threads
 * that played a role, and update what's changed before the next one.
 * The world doesn't reset between sessions - these updates are live the
 * moment the next adventure begins.
 */

import * as LonerDB from './db/database.js';
import * as UI from './ui.js';
import { getState } from './state.js';

// Remembers which campaign the review modal is currently open for, so
// the per-item "Update" prompts can be redriven after each save.
let reviewCampaignId = null;

export async function showLivingWorldReview(campaignId) {
  reviewCampaignId = campaignId || getState().campaignId;
  if (!reviewCampaignId) {
    UI.showAlert('Select a campaign first', 'error');
    return;
  }

  const [npcs, locations, threads] = await Promise.all([
    LonerDB.getNPCsForCampaign(reviewCampaignId),
    LonerDB.getLocationsForCampaign(reviewCampaignId),
    LonerDB.getThreadsForCampaign(reviewCampaignId)
  ]);

  UI.showModal('The Living World', renderReview(npcs, locations, threads));
}

function renderReview(npcs, locations, threads) {
  return `
    <p class="text-muted" style="margin-bottom: 1rem;">
      The adventure's over. Update what's changed for each NPC, Location, and Thread that played a role.
    </p>

    <h4 style="font-family: var(--font-heading); font-size: 0.85rem; letter-spacing: var(--tracking-caps); margin-bottom: 0.5rem;">NPCs</h4>
    ${npcs.length === 0 ? '<p class="text-muted" style="font-size: 0.85rem;">None yet</p>' : npcs.map(n => `
      <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.5rem; padding: 0.5rem 0; border-bottom: var(--border-w) solid var(--border-hairline);">
        <div>
          <strong>${UI.escapeHtml(n.name)}</strong>
          ${n.tags.length > 0 ? `<div style="font-size: 0.75rem; opacity: 0.7;">${n.tags.map(t => UI.escapeHtml(t)).join(', ')}</div>` : ''}
        </div>
        <button class="btn btn-sm btn-outline" onclick="NPCManager.showRelationshipPrompt(${n.id})">Update</button>
      </div>
    `).join('')}

    <h4 style="font-family: var(--font-heading); font-size: 0.85rem; letter-spacing: var(--tracking-caps); margin: 1rem 0 0.5rem;">Locations</h4>
    ${locations.length === 0 ? '<p class="text-muted" style="font-size: 0.85rem;">None yet</p>' : locations.map(l => `
      <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.5rem; padding: 0.5rem 0; border-bottom: var(--border-w) solid var(--border-hairline);">
        <strong>${UI.escapeHtml(l.name)}</strong>
        <button class="btn btn-sm btn-outline" onclick="LivingWorld.showLocationUpdatePrompt(${l.id})">Update</button>
      </div>
    `).join('')}

    <h4 style="font-family: var(--font-heading); font-size: 0.85rem; letter-spacing: var(--tracking-caps); margin: 1rem 0 0.5rem;">Threads</h4>
    ${threads.length === 0 ? '<p class="text-muted" style="font-size: 0.85rem;">None yet</p>' : threads.map(t => `
      <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.5rem; padding: 0.5rem 0; border-bottom: var(--border-w) solid var(--border-hairline);">
        <div>
          <strong>${UI.escapeHtml(t.title)}</strong>
          <span class="status-badge" style="background: var(--text-muted); margin-left: 0.5rem;">${UI.escapeHtml(t.status || 'active')}</span>
        </div>
        <button class="btn btn-sm btn-outline" onclick="LivingWorld.showThreadUpdatePrompt(${t.id})">Update</button>
      </div>
    `).join('')}

    <button class="btn btn-primary" onclick="closeModal()" style="width: 100%; margin-top: 1.5rem;">Done</button>
  `;
}

export async function showLocationUpdatePrompt(locationId) {
  const locations = await LonerDB.getLocationsForCampaign(reviewCampaignId);
  const location = locations.find(l => l.id === locationId);
  if (!location) return;

  UI.showModal('Update Location', `
    <p class="text-muted" style="margin-bottom: 1rem;">
      What's changed at <strong>${UI.escapeHtml(location.name)}</strong>? (e.g., <em>Abandoned Safehouse</em> becomes <em>Burned to the Ground</em>)
    </p>
    <div class="form-group">
      <label>Description</label>
      <textarea id="living-world-location-desc" rows="3">${UI.escapeHtml(location.description || '')}</textarea>
    </div>
    <button class="btn btn-primary" onclick="LivingWorld.saveLocationUpdate(${locationId})" style="width: 100%;">
      Save
    </button>
  `);
}

export async function saveLocationUpdate(locationId) {
  const description = document.getElementById('living-world-location-desc').value.trim();
  await LonerDB.updateLocation(locationId, { description });
  UI.showAlert('Location updated', 'success');
  await showLivingWorldReview();
}

export async function showThreadUpdatePrompt(threadId) {
  const threads = await LonerDB.getThreadsForCampaign(reviewCampaignId);
  const thread = threads.find(t => t.id === threadId);
  if (!thread) return;

  UI.showModal('Update Thread', `
    <p class="text-muted" style="margin-bottom: 1rem;">
      Is <strong>${UI.escapeHtml(thread.title)}</strong> still open, or has it resolved?
    </p>
    <div class="form-group">
      <label>Status</label>
      <select id="living-world-thread-status">
        <option value="active" ${thread.status === 'active' ? 'selected' : ''}>Active</option>
        <option value="resolved" ${thread.status === 'resolved' ? 'selected' : ''}>Resolved</option>
        <option value="abandoned" ${thread.status === 'abandoned' ? 'selected' : ''}>Abandoned</option>
      </select>
    </div>
    <button class="btn btn-primary" onclick="LivingWorld.saveThreadUpdate(${threadId})" style="width: 100%;">
      Save
    </button>
  `);
}

export async function saveThreadUpdate(threadId) {
  const status = document.getElementById('living-world-thread-status').value;
  await LonerDB.updateThreadStatus(threadId, status);
  UI.showAlert('Thread updated', 'success');
  await showLivingWorldReview();
}

export const LivingWorld = {
  showLivingWorldReview,
  showLocationUpdatePrompt,
  saveLocationUpdate,
  showThreadUpdatePrompt,
  saveThreadUpdate
};
