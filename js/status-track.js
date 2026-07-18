/**
 * LONER ASSISTANT v2.0 - Status Track (Loner 4e optional module)
 *
 * Per-character 3-box lasting-consequence track. Distinct from Luck:
 * Luck resets every conflict, the Status Track persists between them.
 */

import * as LonerDB from './db/database.js';
import * as UI from './ui.js';

const SUGGESTED_TAGS = {
  physical: ['Hurt', 'Injured', 'Overcome'],
  social: ['Rattled', 'On the Back Foot', 'Humiliated'],
  psychological: ['Unsettled', 'Shaken', 'Broken']
};

/**
 * Prompt to fill the next box after a character's Luck reaches 0 in a
 * conflict, if the defeat should leave a lasting mark.
 */
export async function showFillBoxPrompt(characterId, characterName) {
  const track = await LonerDB.getStatusTrackForCharacter(characterId);
  const filled = track ? track.boxes.length : 0;

  if (filled >= 3) {
    UI.showAlert(`${characterName} is already overcome`, 'info');
    return;
  }

  const boxNum = filled + 1;
  UI.showModal('Lasting Consequence?', `
    <p class="text-muted" style="margin-bottom: 1rem;">
      ${UI.escapeHtml(characterName)}'s Luck reached 0. Should this defeat leave a lasting mark? If so, fill box ${boxNum} of 3 with a tag.
    </p>
    <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem;">
      <button class="btn btn-secondary" onclick="StatusTrackSystem.fillBox(${characterId}, '${SUGGESTED_TAGS.physical[filled]}', '${UI.escapeHtml(characterName)}')">
        Physical: ${SUGGESTED_TAGS.physical[filled]}
      </button>
      <button class="btn btn-secondary" onclick="StatusTrackSystem.fillBox(${characterId}, '${SUGGESTED_TAGS.social[filled]}', '${UI.escapeHtml(characterName)}')">
        Social: ${SUGGESTED_TAGS.social[filled]}
      </button>
      <button class="btn btn-secondary" onclick="StatusTrackSystem.fillBox(${characterId}, '${SUGGESTED_TAGS.psychological[filled]}', '${UI.escapeHtml(characterName)}')">
        Psychological: ${SUGGESTED_TAGS.psychological[filled]}
      </button>
    </div>
    <div class="form-group">
      <label>Or write your own tag</label>
      <input type="text" id="status-track-custom-tag" placeholder="e.g., Compromised">
    </div>
    <button class="btn btn-outline" onclick="StatusTrackSystem.fillBoxCustom(${characterId}, '${UI.escapeHtml(characterName)}')" style="width: 100%; margin-bottom: 0.5rem;">
      Use Custom Tag
    </button>
    <button class="btn btn-outline" onclick="closeModal()" style="width: 100%;">
      No Lasting Mark
    </button>
  `);
}

export async function fillBox(characterId, tag, characterName = '') {
  await LonerDB.fillStatusTrackBox(characterId, tag);
  UI.closeModal();
  UI.showAlert(`${characterName ? characterName + ' - ' : ''}Status Track: ${tag}`, 'info');
}

export async function fillBoxCustom(characterId, characterName = '') {
  const input = document.getElementById('status-track-custom-tag');
  const tag = (input.value || '').trim();
  if (!tag) {
    UI.showAlert('Enter a tag first', 'error');
    return;
  }
  await fillBox(characterId, tag, characterName);
}

/**
 * Recovery: clear the most recently filled box when the fiction supports it
 */
export async function recover(characterId) {
  const track = await LonerDB.clearStatusTrackBox(characterId);
  const activeTag = track && track.boxes.length > 0 ? track.boxes[track.boxes.length - 1] : null;
  UI.showAlert(activeTag ? `Recovered. Active tag: ${activeTag}` : 'Recovered fully', 'success');
  return track;
}

/**
 * Get the character's current active status tag (the most recently
 * filled box), or null if the track is empty.
 */
export async function getActiveTag(characterId) {
  const track = await LonerDB.getStatusTrackForCharacter(characterId);
  if (!track || track.boxes.length === 0) return null;
  return track.boxes[track.boxes.length - 1];
}

export const StatusTrackSystem = {
  showFillBoxPrompt,
  fillBox,
  fillBoxCustom,
  recover,
  getActiveTag
};
