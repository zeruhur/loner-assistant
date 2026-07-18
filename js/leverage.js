/**
 * LONER ASSISTANT v2.0 - Leverage (Loner 4e optional module)
 *
 * Bank a strong "Yes, and..." result to spend later as Advantage or to
 * soften a future No. Only one Leverage can be held at a time; it
 * expires when the fiction moves on or when a Twist occurs.
 */

import { updateSessionLeverage, getSession } from './db/database.js';
import { getState } from './state.js';
import * as UI from './ui.js';

/**
 * Render the current Leverage state into the Leverage panel
 */
export async function displayLeverage() {
  const container = document.getElementById('leverage-content');
  if (!container) return;

  const state = getState();
  if (!state.sessionId) {
    container.innerHTML = '<p class="text-muted" style="font-size: 0.85rem;">No active session</p>';
    return;
  }

  const session = await getSession(state.sessionId);
  const leverage = session && session.leverage;

  if (!leverage) {
    container.innerHTML = '<p class="text-muted" style="font-size: 0.85rem;">No Leverage held. Bank a "Yes, and..." result to hold one.</p>';
    return;
  }

  container.innerHTML = `
    <p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong>Held:</strong> ${UI.escapeHtml(leverage.description)}</p>
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <button class="btn btn-sm btn-secondary" onclick="LeverageSystem.useAsAdvantage()">
        Spend as Advantage
      </button>
      <button class="btn btn-sm btn-outline" onclick="LeverageSystem.clearLeverage()">
        Clear
      </button>
    </div>
    <p class="text-muted" style="font-size: 0.75rem; margin-top: 0.5rem;">
      To soften a No into a No, but..., spend it right after that roll lands.
    </p>
  `;
}

/**
 * Prompt to bank the current oracle result as Leverage instead of
 * narrating the bonus immediately.
 */
export function showBankPrompt() {
  UI.showModal('Bank as Leverage?', `
    <p class="text-muted" style="margin-bottom: 1rem;">
      Instead of narrating this bonus now, you can save it: use it as Advantage on a future roll for the same pursuit, or to soften a later No into a No, but...
    </p>
    <div class="form-group">
      <label>What is it?</label>
      <input type="text" id="leverage-description" placeholder="e.g., full server access credentials">
    </div>
    <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
      <button class="btn btn-outline" onclick="closeModal()">Narrate It Now Instead</button>
      <button class="btn btn-primary" onclick="LeverageSystem.bankLeverage()">Bank It</button>
    </div>
  `);
}

export async function bankLeverage() {
  const input = document.getElementById('leverage-description');
  const description = (input.value || '').trim();
  if (!description) {
    UI.showAlert("Describe what you're banking first", 'error');
    return;
  }

  const state = getState();
  if (!state.sessionId) return;

  await updateSessionLeverage(state.sessionId, { description });
  UI.closeModal();
  UI.showAlert('Leverage banked', 'success');
  await displayLeverage();
}

export async function clearLeverage() {
  const state = getState();
  if (!state.sessionId) return;
  await updateSessionLeverage(state.sessionId, null);
  await displayLeverage();
}

/**
 * Spend held Leverage as Advantage: switches the Oracle modifier to
 * Advantage for the next roll (standard cap still applies) and clears it.
 */
export async function useAsAdvantage() {
  const advantageRadio = document.querySelector('input[name="modifier"][value="advantage"]');
  if (advantageRadio) advantageRadio.checked = true;

  await clearLeverage();
  UI.showAlert('Oracle set to Advantage for your next roll', 'success');
}

export const LeverageSystem = {
  displayLeverage,
  showBankPrompt,
  bankLeverage,
  clearLeverage,
  useAsAdvantage
};
