/**
 * LONER ASSISTANT v2.1 - Global App State
 *
 * Tracks the three pieces of state the whole app cares about
 * (current campaign, session, character) and persists them to
 * localStorage under the same key the pre-rework app used, so
 * existing saved state keeps working.
 */

let currentCampaignId = null;
let currentSessionId = null;
let currentCharacterId = null;

export function saveAppState() {
  localStorage.setItem('lonerAppState', JSON.stringify({
    campaignId: currentCampaignId,
    sessionId: currentSessionId,
    characterId: currentCharacterId
  }));
  console.log('💾 App state saved');
}

export function loadAppState() {
  const saved = localStorage.getItem('lonerAppState');
  if (saved) {
    try {
      const state = JSON.parse(saved);
      currentCampaignId = state.campaignId;
      currentSessionId = state.sessionId;
      currentCharacterId = state.characterId;
      console.log('📂 App state loaded:', state);
      return state;
    } catch (e) {
      console.warn('Could not parse saved app state:', e);
    }
  }
  return null;
}

export function getState() {
  return {
    campaignId: currentCampaignId,
    sessionId: currentSessionId,
    characterId: currentCharacterId
  };
}

export function setCurrentCampaign(campaignId, sessionId) {
  currentCampaignId = campaignId;
  currentSessionId = sessionId;
  saveAppState();
}

export function clearCurrentCampaign() {
  currentCampaignId = null;
  currentSessionId = null;
  saveAppState();
}

export function setCurrentCharacter(characterId) {
  currentCharacterId = characterId;
  saveAppState();
}

export function clearCurrentCharacter() {
  currentCharacterId = null;
  saveAppState();
}
