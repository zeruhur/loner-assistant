/**
 * LONER ASSISTANT v2.0 - Challenge Tracks (Loner 4e optional module)
 *
 * Progress trackers for goals that span multiple scenes or sessions.
 */

import * as LonerDB from './db/database.js';
import * as UI from './ui.js';
import { getState } from './state.js';
import { openFormModal } from './crud/modal-form.js';

function renderBoxes(filled, size) {
  let html = '';
  for (let i = 0; i < size; i++) {
    html += i < filled ? '☑ ' : '☐ ';
  }
  return html.trim();
}

/**
 * Render the Challenge Tracks list in the Play view panel
 */
export async function showChallengeTracksPanel() {
  const state = getState();
  const container = document.getElementById('challenge-tracks-list');
  if (!container) return;

  if (!state.campaignId) {
    container.innerHTML = '<p class="text-muted">No campaign selected</p>';
    return;
  }

  const tracks = await LonerDB.getChallengeTracksForCampaign(state.campaignId);

  if (tracks.length === 0) {
    container.innerHTML = '<p class="text-muted" style="font-size: 0.85rem; text-align: center;">No challenge tracks yet</p>';
    return;
  }

  container.innerHTML = tracks.map(track => `
    <div class="card" style="padding: 0.75rem; margin-bottom: 0.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem; gap: 0.5rem;">
        <strong style="font-size: 0.9rem;">${UI.escapeHtml(track.name)}</strong>
        <button class="btn-close" title="Delete track" onclick="ChallengeTracks.deleteTrack(${track.id})">&times;</button>
      </div>
      <div style="font-family: var(--font-heading); font-size: 1.1rem; letter-spacing: 2px; margin-bottom: 0.5rem;">
        ${renderBoxes(track.filled, track.size)}
        <span style="font-size: 0.7rem; color: var(--text-muted); letter-spacing: normal;">${track.filled}/${track.size}</span>
      </div>
      <div style="display: flex; gap: 0.25rem; flex-wrap: wrap;">
        <button class="btn btn-sm btn-secondary" onclick="ChallengeTracks.markProgress(${track.id}, 2)" title="Yes, and...">+2</button>
        <button class="btn btn-sm btn-secondary" onclick="ChallengeTracks.markProgress(${track.id}, 1)" title="Yes / Yes, but...">+1</button>
        <button class="btn btn-sm btn-outline" onclick="ChallengeTracks.markProgress(${track.id}, -1)" title="No / No, and...">-1</button>
      </div>
      ${track.filled >= track.size ? '<p style="font-size: 0.8rem; color: var(--accent-yes); margin-top: 0.5rem;">Track filled - the arc can close.</p>' : ''}
    </div>
  `).join('');
}

/**
 * Show the New Track creation form
 */
export function showNewTrackForm() {
  const formHTML = `
    <form id="new-challenge-track-form">
      <div class="form-group">
        <label>Name</label>
        <input type="text" id="track-name" required placeholder="e.g., Expose the Leton Corporation">
      </div>
      <div class="form-group">
        <label>Size</label>
        <select id="track-size">
          <option value="4">4 boxes (standard arc)</option>
          <option value="6">6 boxes (longer arc)</option>
        </select>
      </div>
      <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
        <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">Create Track</button>
      </div>
    </form>
  `;
  openFormModal('New Challenge Track', 'new-challenge-track-form', formHTML, () => createTrack());
}

async function createTrack() {
  const state = getState();
  if (!state.campaignId) {
    UI.showAlert('Select a campaign first', 'error');
    return;
  }

  const name = document.getElementById('track-name').value.trim();
  const size = parseInt(document.getElementById('track-size').value, 10);

  if (!name) {
    UI.showAlert('Enter a name for the track', 'error');
    return;
  }

  await LonerDB.createChallengeTrack(state.campaignId, name, size);
  UI.closeModal();
  UI.showAlert('Challenge track created', 'success');
  await showChallengeTracksPanel();
}

/**
 * Mark or erase progress on a track (delta may be negative)
 */
export async function markProgress(id, delta) {
  await LonerDB.updateChallengeTrackProgress(id, delta);
  await showChallengeTracksPanel();
  UI.showAlert(delta > 0 ? `Marked ${delta} box${delta > 1 ? 'es' : ''}` : 'Erased a box', delta > 0 ? 'success' : 'info');
}

export async function deleteTrack(id) {
  if (UI.confirmDialog('Delete this challenge track?')) {
    await LonerDB.deleteChallengeTrack(id);
    await showChallengeTracksPanel();
  }
}

export const ChallengeTracks = {
  showChallengeTracksPanel,
  showNewTrackForm,
  markProgress,
  deleteTrack
};
