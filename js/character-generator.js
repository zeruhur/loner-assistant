/**
 * LONER ASSISTANT v2.1 - Character Generator
 *
 * Rolls a full character (name, concept, two skills, a frailty, two pieces
 * of gear) from a supplement's `character` tables, previews it with per-line
 * rerolls, and saves it either as a PC (pre-fills the New Character sheet) or
 * as an NPC (creates an NPC record AND drops a summary into the session notes).
 *
 * Buttons in the modal call window.CharacterGenerator.* (a curated global
 * wired in main.js), same pattern as TableManager.
 */

import { TableSystem } from './tables.js';
import * as UI from './ui.js';
import { getState } from './state.js';
import * as LonerDB from './db/database.js';
import * as Editor from './editor.js';
import { showNewCharacterForm } from './characters.js';
import { showNPCPanel, loadNPCsList } from './npcs.js';

// Live generator state for the open modal.
let current = {
  supplementId: null,
  gender: 'female',
  type: 'pc', // 'pc' | 'npc'
  character: null
};

export const CharacterGenerator = {
  /**
   * Open the generator. Picks a default supplement (or bails if none has
   * character tables) and rolls an initial character.
   */
  open() {
    const sources = TableSystem.getCharacterSources();
    if (sources.length === 0) {
      UI.showAlert('No supplement with character tables is enabled.', 'error');
      return;
    }

    // Keep the previously used supplement if it still qualifies.
    if (!current.supplementId || !sources.find(s => s.id === current.supplementId)) {
      current.supplementId = sources[0].id;
    }
    current.character = TableSystem.generateCharacter(current.supplementId, { gender: current.gender });
    this.render();
  },

  /**
   * Roll a fresh character from the current supplement/gender.
   */
  regenerate() {
    current.character = TableSystem.generateCharacter(current.supplementId, { gender: current.gender });
    this.render();
  },

  setSupplement(id) {
    current.supplementId = id;
    this.regenerate();
  },

  setGender(gender) {
    current.gender = gender;
    // Reroll just the name to the chosen gender, keep everything else.
    const c = current.character;
    c.gender = gender;
    c.firstName = TableSystem.rollCharacterField(current.supplementId, 'name', gender);
    c.fullName = [c.firstName, c.surname].filter(Boolean).join(' ');
    this.render();
  },

  setType(type) {
    current.type = type;
    this.render();
  },

  rerollField(field) {
    const c = current.character;
    if (field === 'name') {
      c.firstName = TableSystem.rollCharacterField(current.supplementId, 'name', current.gender);
    } else if (field === 'surname') {
      c.surname = TableSystem.rollCharacterField(current.supplementId, 'surnames');
    } else if (field === 'concept') {
      c.concept = TableSystem.rollCharacterField(current.supplementId, 'concepts');
    } else if (field === 'frailty') {
      c.frailty = TableSystem.rollCharacterField(current.supplementId, 'frailties');
    }
    c.fullName = [c.firstName, c.surname].filter(Boolean).join(' ');
    this.render();
  },

  rerollSkill(index) {
    const c = current.character;
    let v = TableSystem.rollCharacterField(current.supplementId, 'skills');
    let attempts = 0;
    while (c.skills.includes(v) && attempts < 12) {
      v = TableSystem.rollCharacterField(current.supplementId, 'skills');
      attempts++;
    }
    c.skills[index] = v;
    this.render();
  },

  rerollGear(index) {
    const c = current.character;
    let v = TableSystem.rollCharacterField(current.supplementId, 'gear');
    let attempts = 0;
    while (c.gear.includes(v) && attempts < 12) {
      v = TableSystem.rollCharacterField(current.supplementId, 'gear');
      attempts++;
    }
    c.gear[index] = v;
    this.render();
  },

  /**
   * Render / re-render the generator modal from `current`.
   */
  render() {
    const c = current.character;
    const sources = TableSystem.getCharacterSources();

    const supplementSelector = `
      <div class="form-group">
        <label>Source supplement</label>
        <select onchange="CharacterGenerator.setSupplement(this.value)"
                style="width:100%;padding:0.5rem;background:var(--bg-tertiary);border:1px solid var(--border);border-radius:var(--radius);color:var(--text);">
          ${sources.map(s => `<option value="${s.id}" ${s.id === current.supplementId ? 'selected' : ''}>${UI.escapeHtml(s.name)}</option>`).join('')}
        </select>
      </div>
    `;

    UI.showModal('Generate Character', `
      <div class="char-generator">
        ${supplementSelector}

        <div style="display:flex; gap:1rem; flex-wrap:wrap; margin-bottom:0.75rem;">
          <div>
            <div style="font-size:0.7rem; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.25rem;">Name gender</div>
            ${this.toggle([['female', 'Female'], ['male', 'Male'], ['any', 'Any']], current.gender, 'setGender')}
          </div>
          <div>
            <div style="font-size:0.7rem; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.25rem;">Save as</div>
            ${this.toggle([['pc', 'Player Character'], ['npc', 'NPC']], current.type, 'setType')}
          </div>
        </div>

        <div class="cg-name" style="text-align:center; padding:0.5rem 0;">
          <div style="font-size:1.4rem; font-weight:700;">${UI.escapeHtml(c.fullName || '—')}</div>
          <div style="margin-top:0.25rem; display:flex; gap:0.25rem; justify-content:center;">
            <button class="btn btn-sm btn-outline" onclick="CharacterGenerator.rerollField('name')" title="Reroll first name">🎲 First</button>
            <button class="btn btn-sm btn-outline" onclick="CharacterGenerator.rerollField('surname')" title="Reroll surname">🎲 Surname</button>
          </div>
        </div>

        ${this.fieldRow('Concept', c.concept, "CharacterGenerator.rerollField('concept')")}
        ${c.skills.map((s, i) => this.fieldRow(i === 0 ? 'Skills' : '', s, `CharacterGenerator.rerollSkill(${i})`)).join('')}
        ${this.fieldRow('Frailty', c.frailty, "CharacterGenerator.rerollField('frailty')")}
        ${c.gear.map((g, i) => this.fieldRow(i === 0 ? 'Gear' : '', g, `CharacterGenerator.rerollGear(${i})`)).join('')}

        <div style="display:flex; gap:0.5rem; justify-content:space-between; margin-top:1rem;">
          <button class="btn btn-outline" onclick="CharacterGenerator.regenerate()" title="Roll a whole new character">🎲 Regenerate all</button>
          <div style="display:flex; gap:0.5rem;">
            <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="CharacterGenerator.save()">
              ${current.type === 'pc' ? 'Use as Character →' : 'Create NPC'}
            </button>
          </div>
        </div>
      </div>
    `);
  },

  /**
   * A single previewed field with a reroll button. An empty label continues
   * the group above (used for the second Skills/Gear line).
   */
  fieldRow(label, value, rerollAction) {
    return `
      <div style="display:flex; justify-content:space-between; align-items:center; gap:0.5rem; padding:0.4rem 0; border-bottom:1px solid var(--border);">
        <div style="min-width:0;">
          ${label ? `<div style="font-size:0.7rem; text-transform:uppercase; color:var(--text-muted);">${label}</div>` : ''}
          <div style="font-weight:600;">${UI.escapeHtml(value || '—')}</div>
        </div>
        <button class="btn btn-sm btn-outline" onclick="${rerollAction}" title="Reroll">🎲</button>
      </div>
    `;
  },

  /**
   * Segmented two-or-more button toggle.
   */
  toggle(options, active, method) {
    return `
      <div style="display:inline-flex; border:1px solid var(--border); border-radius:var(--radius); overflow:hidden;">
        ${options.map(([val, label]) => `
          <button class="btn btn-sm ${val === active ? 'btn-primary' : 'btn-outline'}"
                  style="border:0; border-radius:0;"
                  onclick="CharacterGenerator.${method}('${val}')">${label}</button>
        `).join('')}
      </div>
    `;
  },

  /**
   * Save the generated character as a PC or NPC.
   */
  async save() {
    if (current.type === 'pc') {
      return this.saveAsPC();
    }
    return this.saveAsNPC();
  },

  /**
   * PC: pre-fill the New Character sheet so the player can tweak and save.
   */
  saveAsPC() {
    const c = current.character;
    UI.closeModal();
    showNewCharacterForm({
      name: c.fullName,
      concept: c.concept,
      skills: c.skills,
      frailty: c.frailty,
      gear: c.gear
    });
  },

  /**
   * NPC: create an NPC record and drop a summary into the session notes.
   */
  async saveAsNPC() {
    const state = getState();
    if (!state.campaignId) {
      UI.showAlert('Select or create a campaign first.', 'error');
      return;
    }

    const c = current.character;

    try {
      await LonerDB.createNPC(state.campaignId, {
        name: c.fullName,
        concept: c.concept,
        skills: c.skills,
        frailty: c.frailty,
        gear: c.gear,
        relationship: 'neutral'
      });

      Editor.insertBlock(
        'NPC',
        `${c.fullName} — ${c.concept}. Skills: ${c.skills.join(', ')}. Frailty: ${c.frailty}. Gear: ${c.gear.join(', ')}.`,
        'var(--accent-yes)'
      );

      await showNPCPanel();
      if (document.getElementById('view-npcs')?.classList.contains('active')) {
        await loadNPCsList();
      }

      UI.closeModal();
      UI.showAlert(`NPC "${c.fullName}" created and added to notes.`, 'success');
    } catch (error) {
      console.error('Error creating NPC from generator:', error);
      UI.showAlert('Error creating NPC: ' + error.message, 'error');
    }
  }
};
