/**
 * LONER ASSISTANT v2.0 - Oracle & Dice Rolling
 *
 * Handles all dice rolling and oracle consultation logic
 */

import { getState } from './state.js';
import { updateTwistCounter as dbUpdateTwistCounter } from './db/database.js';
import { showAlert } from './toast.js';
import * as Editor from './editor.js';

// Current session state
let currentTwistCounter = 0;

/**
 * Roll a die (1-6)
 */
export function rollD6() {
  return Math.floor(Math.random() * 6) + 1;
}

/**
 * Roll the Oracle (Chance vs Risk dice)
 */
export async function rollOracle() {
  // Get modifier selection
  const modifier = document.querySelector('input[name="modifier"]:checked').value;

  let chanceDice, riskDice;

  // Roll based on modifier
  if (modifier === 'advantage') {
    // Roll 2 chance dice, keep highest
    const chance1 = rollD6();
    const chance2 = rollD6();
    chanceDice = Math.max(chance1, chance2);
    riskDice = rollD6();
  } else if (modifier === 'disadvantage') {
    // Roll 2 risk dice, keep highest
    chanceDice = rollD6();
    const risk1 = rollD6();
    const risk2 = rollD6();
    riskDice = Math.max(risk1, risk2);
  } else {
    // Normal roll
    chanceDice = rollD6();
    riskDice = rollD6();
  }

  // Interpret result
  const result = interpretOracleRoll(chanceDice, riskDice);

  // Display result
  displayOracleResult(result);

  // Show notification
  showAlert(`Oracle: ${result.answer}`, 'success');

  // Auto-insert into notes
  const colorMap = {
    'Yes': 'var(--accent-yes)',
    'No': 'var(--accent-no)'
  };

  Editor.insertBlock(
    'Oracle',
    `${result.formatted} (Chance: ${result.chanceDice}, Risk: ${result.riskDice})`,
    colorMap[result.answer]
  );

  // Check for doubles (twist counter)
  if (chanceDice === riskDice) {
    currentTwistCounter++;
    updateTwistCounter();

    // Trigger twist at 3
    if (currentTwistCounter >= 3) {
      triggerTwist();
    }
  }

  // Save to roll history if we have a session
  const resultText = `${result.answer}${result.isTwist ? ' (Twist!)' : ''}`;

  // AUTO-LOG THE ROLL
  if (typeof window.EventManager !== 'undefined') {
    await window.EventManager.logEvent(
      result.isDoubles ? 'twist' : 'oracle',
      `Oracle: ${resultText}`,
      {
        result: result.answer,
        modifier: modifier,
        chanceDice: chanceDice,
        riskDice: riskDice
      }
    );
  }

  return result;
}

/**
 * Interpret oracle roll result
 */
export function interpretOracleRoll(chance, risk) {
  let answer, modifier;

  // Determine base answer
  if (chance > risk) {
    answer = 'Yes';
  } else if (chance < risk) {
    answer = 'No';
  } else {
    answer = 'Yes';
  }

  // Determine modifier
  if (chance < 4 && risk < 4) {
    modifier = 'but';
  } else if (chance > 3 && risk > 3) {
    modifier = 'and';
  } else {
    modifier = null;
  }

  // Check for doubles
  const isDoubles = (chance === risk);

  return {
    answer,
    modifier,
    chanceDice: chance,
    riskDice: risk,
    isDoubles,
    formatted: formatOracleResult(answer, modifier, isDoubles)
  };
}

/**
 * Format oracle result as text
 */
export function formatOracleResult(answer, modifier, isDoubles) {
  let text = answer;

  if (isDoubles) {
    text += ', but'; // Doubles always give "but" before twist
  } else if (modifier) {
    text += ', ' + modifier;
  }

  return text + '...';
}

/**
 * Display oracle result in UI
 */
function displayOracleResult(result) {
  const resultDiv = document.getElementById('oracle-result');

  const className = result.answer === 'Yes' ? 'yes' : 'no';

  resultDiv.className = `oracle-result ${className}`;
  resultDiv.innerHTML = `
    <div class="oracle-result-main">${result.formatted}</div>
    <div class="oracle-result-detail">
      Chance: ${result.chanceDice} | Risk: ${result.riskDice}
      ${result.isDoubles ? ' | <strong>DOUBLES!</strong>' : ''}
    </div>
  `;

  resultDiv.classList.remove('hidden');
}

/**
 * Update twist counter display and persist it
 */
export function updateTwistCounter() {
  const counterDisplay = document.getElementById('twist-count');
  if (counterDisplay) {
    counterDisplay.textContent = currentTwistCounter;

    if (currentTwistCounter >= 2) {
      counterDisplay.classList.add('danger');
    } else {
      counterDisplay.classList.remove('danger');
    }
  }

  // SAVE to database
  const state = getState();
  if (state.sessionId) {
    dbUpdateTwistCounter(state.sessionId, currentTwistCounter);
  }
}

/**
 * Restore the twist counter (e.g. when a session is loaded) without
 * re-writing it back to the database.
 */
export function setTwistCounter(value) {
  currentTwistCounter = value || 0;
  const counterDisplay = document.getElementById('twist-count');
  if (counterDisplay) {
    counterDisplay.textContent = currentTwistCounter;
    if (currentTwistCounter >= 2) {
      counterDisplay.classList.add('danger');
    } else {
      counterDisplay.classList.remove('danger');
    }
  }
}

/**
 * Reset twist counter
 */
export function resetTwistCounter() {
  currentTwistCounter = 0;
  updateTwistCounter();

  const twistResult = document.getElementById('twist-result');
  twistResult.classList.add('hidden');
  twistResult.innerHTML = '';
}

/**
 * Trigger a twist when counter reaches 3
 */
export async function triggerTwist() {
  // Roll 2d6 for twist
  const die1 = rollD6();
  const die2 = rollD6();

  const twistTable = {
    subjects: [
      'A third party',
      'The hero',
      'An encounter',
      'A physical event',
      'An emotional event',
      'An object'
    ],
    actions: [
      'Appears',
      'Alters the location',
      'Helps the hero',
      'Hinders the hero',
      'Changes the goal',
      'Ends the scene'
    ]
  };

  const subject = twistTable.subjects[die1 - 1];
  const action = twistTable.actions[die2 - 1];

  // Display twist
  const twistResult = document.getElementById('twist-result');
  twistResult.innerHTML = `
    <strong>TWIST!</strong><br>
    ${subject} + ${action}
    <div style="font-size: 0.85rem; margin-top: 0.5rem; opacity: 0.8;">
      Rolled: ${die1}, ${die2}
    </div>
  `;
  twistResult.classList.remove('hidden');

  // Auto-insert into notes with emphasis
  Editor.insertBlock(
    'TWIST',
    `${subject} → ${action}`,
    'var(--accent-no)'
  );

  // LOG EVENT
  if (typeof window.EventManager !== 'undefined') {
    await window.EventManager.logEvent('twist', `${subject} → ${action}`, {
      subject: subject,
      action: action,
      die1: die1,
      die2: die2
    });
  }

  // Reset counter
  currentTwistCounter = 0;
  updateTwistCounter();

  // Show alert
  showAlert('Twist triggered! Check the twist panel.', 'success');
}

/**
 * Roll for scene type
 */
export async function rollScene() {
  const roll = rollD6();

  let sceneType, description;

  if (roll <= 3) {
    sceneType = 'Dramatic';
    description = 'Stakes increase, tension rises';
  } else if (roll <= 5) {
    sceneType = 'Quiet';
    description = 'Time for recovery, planning, or reflection';
  } else {
    sceneType = 'Meanwhile';
    description = 'Cut to another perspective or subplot';
  }

  const resultDiv = document.getElementById('scene-result');
  resultDiv.innerHTML = `
    <div style="font-weight: 600; margin-bottom: 0.25rem;">
      ${sceneType} Scene
    </div>
    <div style="font-size: 0.85rem; color: var(--text-muted);">
      ${description}
    </div>
    <div style="font-size: 0.75rem; margin-top: 0.25rem; opacity: 0.6;">
      Rolled: ${roll}
    </div>
  `;

  // Auto-insert into notes
  Editor.insertBlock(
    'Scene',
    `${sceneType} - ${description}`
  );

  // LOG EVENT
  if (typeof window.EventManager !== 'undefined') {
    await window.EventManager.logEvent('scene', `${sceneType} scene: ${description}`, {
      sceneType: sceneType,
      roll: roll
    });
  }
}

/**
 * Conflict system - roll for harm & luck
 */
let inConflict = false;
let characterLuck = 6;
let opponentLuck = 6;
let opponentName = 'Opponent';

export async function startConflict() {
  // Get values from form
  opponentName = document.getElementById('opponent-name').value || 'Opponent';
  opponentLuck = parseInt(document.getElementById('opponent-luck-input').value) || 6;

  // Get character luck from active character
  // TODO: Get from database when we have active character
  characterLuck = 6;

  inConflict = true;

  // Show active conflict UI, hide setup
  document.getElementById('conflict-setup').classList.add('hidden');
  document.getElementById('conflict-active').classList.remove('hidden');

  // Update labels
  document.getElementById('opponent-label').textContent = opponentName;

  updateLuckDisplay();

  // LOG EVENT
  if (typeof window.EventManager !== 'undefined') {
    await window.EventManager.logEvent('conflict', `Conflict started with ${opponentName}`, {
      opponentName: opponentName,
      opponentLuck: opponentLuck
    });
  }

  showAlert('Conflict started!', 'success');
}

export async function rollConflict() {
  if (!inConflict) {
    showAlert('Start a conflict first!', 'error');
    return;
  }

  // Get modifier from conflict-specific selector
  const modifier = document.querySelector('input[name="conflict-modifier"]:checked').value;

  let chanceDice, riskDice;

  if (modifier === 'advantage') {
    const chance1 = rollD6();
    const chance2 = rollD6();
    chanceDice = Math.max(chance1, chance2);
    riskDice = rollD6();
  } else if (modifier === 'disadvantage') {
    chanceDice = rollD6();
    const risk1 = rollD6();
    const risk2 = rollD6();
    riskDice = Math.max(risk1, risk2);
  } else {
    chanceDice = rollD6();
    riskDice = rollD6();
  }

  // Interpret for damage
  const result = interpretOracleRoll(chanceDice, riskDice);
  let damage = 0;
  let targetIsCharacter = false;
  let description = '';

  if (result.answer === 'Yes') {
    // Character succeeds - damage opponent
    if (result.modifier === 'and') {
      damage = 3;
      description = 'Critical success!';
    } else if (result.modifier === 'but') {
      damage = 1;
      description = 'Success with complication';
    } else {
      damage = 2;
      description = 'Success';
    }
    opponentLuck -= damage;
  } else {
    // Character fails - take damage
    targetIsCharacter = true;
    if (result.modifier === 'and') {
      damage = 3;
      description = 'Critical failure!';
    } else if (result.modifier === 'but') {
      damage = 1;
      description = 'Failure with silver lining';
    } else {
      damage = 2;
      description = 'Failure';
    }
    characterLuck -= damage;
  }

  // Log event
  if (typeof window.EventManager !== 'undefined') {
    const damageDesc = targetIsCharacter
      ? `You take ${damage} harm (${characterLuck} luck remaining)`
      : `${opponentName} takes ${damage} harm (${opponentLuck} luck remaining)`;

    await window.EventManager.logEvent('conflict', damageDesc, {
      damage: damage,
      target: targetIsCharacter ? 'character' : 'opponent',
      characterLuck: characterLuck,
      opponentLuck: opponentLuck
    });
  }

  // Update display
  updateLuckDisplay();

  // Show result
  const resultDiv = document.getElementById('conflict-result');
  resultDiv.className = 'conflict-result ' + (targetIsCharacter ? 'damage-taken' : 'damage-dealt');
  resultDiv.innerHTML = `
    <div style="font-weight: 600; margin-bottom: 0.25rem;">
      ${description}
    </div>
    <div style="font-size: 0.9rem;">
      ${targetIsCharacter ? 'You' : opponentName} ${targetIsCharacter ? 'take' : 'takes'} ${damage} damage
    </div>
    <div style="font-size: 0.85rem; opacity: 0.8; margin-top: 0.25rem;">
      ${result.formatted} (Chance: ${chanceDice}, Risk: ${riskDice})
    </div>
  `;
  resultDiv.classList.remove('hidden');

  // Auto-insert conflict result into notes
  const damageText = targetIsCharacter
    ? `You take ${damage} damage (${result.formatted})`
    : `${opponentName} takes ${damage} damage (${result.formatted})`;

  Editor.insertBlock(
    'Conflict',
    damageText,
    targetIsCharacter ? 'var(--accent-no)' : 'var(--accent-yes)'
  );

  // Check for defeat
  if (characterLuck <= 0) {
    // Insert defeat into notes
    Editor.insertBlock('Conflict Ended', 'You have been defeated!', 'var(--accent-no)');
    showAlert('You have been defeated!', 'error');
    setTimeout(() => endConflict(), 2000);
  } else if (opponentLuck <= 0) {
    // Insert victory into notes
    Editor.insertBlock('Conflict Ended', `${opponentName} defeated!`, 'var(--accent-yes)');
    showAlert(`${opponentName} defeated!`, 'success');
    setTimeout(() => endConflict(), 2000);
  }
}

function updateLuckDisplay() {
  const charLuckDiv = document.getElementById('char-luck');
  const oppLuckDiv = document.getElementById('opponent-luck');

  charLuckDiv.textContent = Math.max(0, characterLuck);
  oppLuckDiv.textContent = Math.max(0, opponentLuck);

  // Add low class if luck is low
  if (characterLuck <= 2) {
    charLuckDiv.classList.add('low');
  } else {
    charLuckDiv.classList.remove('low');
  }

  if (opponentLuck <= 2) {
    oppLuckDiv.classList.add('low');
  } else {
    oppLuckDiv.classList.remove('low');
  }
}

export async function endConflict() {
  const winner = characterLuck > 0 ? 'Character' : opponentName;

  // LOG EVENT
  if (typeof window.EventManager !== 'undefined') {
    await window.EventManager.logEvent('conflict', `Conflict ended - ${winner} victorious`, {
      winner: winner,
      characterLuck: characterLuck,
      opponentLuck: opponentLuck
    });
  }

  inConflict = false;

  // Show setup, hide active
  document.getElementById('conflict-setup').classList.remove('hidden');
  document.getElementById('conflict-active').classList.add('hidden');

  // Clear result
  document.getElementById('conflict-result').classList.add('hidden');

  // Reset values
  characterLuck = 6;
  opponentLuck = 6;
  document.getElementById('opponent-name').value = 'Opponent';
  document.getElementById('opponent-luck-input').value = 6;

  showAlert('Conflict ended', 'info');

  // TODO: Update character luck in database
}
