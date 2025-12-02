/**
 * LONER ASSISTANT v2.0 - Custom Tables Manager
 *
 * Allows users to create, edit, and manage their own roll tables
 */

const CustomTables = {
  currentEditId: null,

  /**
   * Initialize custom tables (called on app startup)
   */
  async init() {
    await this.updateQuickList();
  },

  /**
   * Show the custom tables management view
   */
  async show() {
    showView('tools');
    await this.render();
  },

  /**
   * Update the quick list in the play pane sidebar
   */
  async updateQuickList() {
    const container = document.getElementById('custom-tables-quick-list');
    if (!container) return;

    try {
      const tables = await LonerDB.getCustomTables();

      if (tables.length === 0) {
        container.innerHTML = `
          <p class="text-muted" style="font-size: 0.85rem; text-align: center;">
            No custom tables yet
          </p>
        `;
        return;
      }

      container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          ${tables.map(table => `
            <button class="btn btn-sm btn-secondary"
                    onclick="TableManager.rollCustomTable('custom-${table.id}')"
                    title="${this.getRollTypeLabel(table.rollType)}">
              🎲 ${table.name}
            </button>
          `).join('')}
        </div>
      `;
    } catch (error) {
      console.warn('Error updating custom tables quick list:', error);
      container.innerHTML = `
        <p class="text-muted" style="font-size: 0.85rem; text-align: center;">
          Error loading tables
        </p>
      `;
    }
  },

  /**
   * Render custom tables list
   */
  async render() {
    const tables = await LonerDB.getCustomTables();
    const container = document.getElementById('tools-grid');
    if (!container) return;

    container.innerHTML = `
      <div class="custom-tables-manager">
        <div class="view-header" style="margin: 0 0 var(--space-lg) 0;">
          <h2>Custom Tables</h2>
          <button class="btn btn-primary" onclick="CustomTables.showCreateForm()">
            + Create Table
          </button>
        </div>

        ${tables.length === 0 ? this.renderEmptyState() : this.renderTablesList(tables)}
      </div>
    `;
  },

  /**
   * Render empty state
   */
  renderEmptyState() {
    return `
      <div class="panel" style="text-align: center; padding: var(--space-lg);">
        <p style="font-size: 3rem; margin: 0 0 var(--space-md) 0;">📋</p>
        <h3>No Custom Tables Yet</h3>
        <p class="text-muted">Create your first custom table to get started. You can use any of the built-in roll types (1d6, 2d6, random) to build your own tools.</p>
        <button class="btn btn-primary" onclick="CustomTables.showCreateForm()" style="margin-top: var(--space-md);">
          + Create Your First Table
        </button>
      </div>
    `;
  },

  /**
   * Render tables list
   */
  renderTablesList(tables) {
    return `
      <div class="grid-list">
        ${tables.map(table => this.renderTableCard(table)).join('')}
      </div>
    `;
  },

  /**
   * Render individual table card
   */
  renderTableCard(table) {
    const entryCount = Array.isArray(table.entries) ?
      (table.entries.length > 0 && Array.isArray(table.entries[0]) ?
        `${table.entries.length} rows` :
        `${table.entries.length} entries`) :
      '0 entries';

    return `
      <div class="card">
        <div class="card-header">
          <h3>${table.name}</h3>
        </div>
        <div class="card-body">
          <p class="text-muted" style="margin: 0 0 var(--space-sm) 0;">
            Roll Type: <strong>${this.getRollTypeLabel(table.rollType)}</strong>
          </p>
          <p class="text-muted" style="margin: 0;">
            ${entryCount}
          </p>
          <p class="text-muted" style="margin: var(--space-sm) 0 0 0; font-size: 0.85rem;">
            Created: ${new Date(table.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div class="card-footer" style="display: flex; gap: var(--space-sm);">
          <button class="btn btn-sm btn-secondary" onclick="CustomTables.showTestRoll(${table.id})">
            🎲 Test Roll
          </button>
          <button class="btn btn-sm btn-outline" onclick="CustomTables.showEditForm(${table.id})">
            ✏️ Edit
          </button>
          <button class="btn btn-sm btn-danger" onclick="CustomTables.deleteTable(${table.id})" title="Delete this table">
            🗑️
          </button>
        </div>
      </div>
    `;
  },

  /**
   * Get human-readable roll type label
   */
  getRollTypeLabel(rollType) {
    const labels = {
      '1d6': 'Roll 1d6 (6 options)',
      '2d6': 'Roll 2d6 (6x6 table)',
      'random': 'Random selection',
      '1d66': 'Roll 1d66 (36 options)'
    };
    return labels[rollType] || rollType;
  },

  /**
   * Show create table form
   */
  showCreateForm() {
    this.currentEditId = null;
    UI.showModal('Create Custom Table', this.getFormHTML());
    this.attachFormHandlers();
  },

  /**
   * Show edit table form
   */
  async showEditForm(tableId) {
    const table = await LonerDB.getCustomTable(tableId);
    if (!table) {
      UI.showAlert('Table not found', 'error');
      return;
    }

    this.currentEditId = tableId;
    UI.showModal('Edit Custom Table', this.getFormHTML(table));
    this.attachFormHandlers(table);
  },

  /**
   * Get the form HTML
   */
  getFormHTML(table = null) {
    const rollType = table?.rollType || '1d6';
    const name = table?.name || '';
    const entries = table?.entries || [];

    let entriesText = '';
    if (rollType === '2d6' && Array.isArray(entries) && entries.length > 0 && Array.isArray(entries[0])) {
      // 2d6 format: array of arrays
      entriesText = entries.map(row => row.join(' | ')).join('\n');
    } else if (Array.isArray(entries)) {
      // Flat list
      entriesText = entries.join('\n');
    }

    return `
      <form id="custom-table-form">
        <div class="form-group">
          <label>Table Name *</label>
          <input type="text" name="name" value="${name}" placeholder="e.g., Random Encounters" required>
        </div>

        <div class="form-group">
          <label>Roll Type *</label>
          <select name="rollType" onchange="CustomTables.updateRollTypeHint(this.value)" required>
            <option value="1d6" ${rollType === '1d6' ? 'selected' : ''}>1d6 (6 options)</option>
            <option value="2d6" ${rollType === '2d6' ? 'selected' : ''}>2d6 (6x6 grid)</option>
            <option value="1d66" ${rollType === '1d66' ? 'selected' : ''}>1d66 (36 options)</option>
            <option value="random" ${rollType === 'random' ? 'selected' : ''}>Random selection</option>
          </select>
          <small class="text-muted" id="rolltype-hint" style="display: block; margin-top: 0.25rem;"></small>
        </div>

        <div class="form-group">
          <label id="entries-label">Table Entries *</label>
          <textarea name="entries" placeholder="Enter entries here..." rows="12" required>${entriesText}</textarea>
          <small class="text-muted" id="entries-hint" style="display: block; margin-top: 0.25rem;"></small>
        </div>

        <div style="display: flex; gap: var(--space-sm);">
          <button type="submit" class="btn btn-primary" style="flex: 1;">
            ${table ? 'Save Changes' : 'Create Table'}
          </button>
          <button type="button" class="btn btn-outline" onclick="UI.closeModal()" style="flex: 1;">
            Cancel
          </button>
        </div>
      </form>
    `;
  },

  /**
   * Update hint text based on roll type
   */
  updateRollTypeHint(rollType) {
    const hints = {
      '1d6': 'Enter 6 entries, one per line. Results 1-6 will select entries.',
      '2d6': 'Enter 6 rows separated by blank lines. Each row should have 6 options separated by |',
      '1d66': 'Enter 36 entries, one per line. First d6 = tens digit, second = ones digit.',
      'random': 'Enter any number of entries. One will be randomly selected on each roll.'
    };

    const labels = {
      '1d6': 'Table Entries (6 required)',
      '2d6': 'Table Grid (6 rows × 6 columns)',
      '1d66': 'Table Entries (36 required)',
      'random': 'Table Entries'
    };

    document.getElementById('rolltype-hint').textContent = hints[rollType] || '';
    document.getElementById('entries-label').textContent = labels[rollType] || 'Table Entries';
  },

  /**
   * Attach form handlers
   */
  attachFormHandlers(existingTable = null) {
    const form = document.getElementById('custom-table-form');
    if (!form) return;

    // Update hint on page load
    const rollType = form.rollType.value;
    this.updateRollTypeHint(rollType);

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const rollType = form.rollType.value;
      let entries = [];

      try {
        if (rollType === '2d6') {
          // Parse 2d6 grid format
          const rows = form.entries.value
            .split('\n\n')
            .map(row => row.split('|').map(item => item.trim()).filter(item => item));

          if (rows.length !== 6 || rows.some(row => row.length !== 6)) {
            throw new Error('2d6 tables require 6 rows with 6 options each (separated by |)');
          }
          entries = rows;
        } else if (rollType === '1d66') {
          entries = form.entries.value
            .split('\n')
            .map(line => line.trim())
            .filter(line => line);

          if (entries.length !== 36) {
            throw new Error('1d66 tables require exactly 36 entries');
          }
        } else if (rollType === '1d6') {
          entries = form.entries.value
            .split('\n')
            .map(line => line.trim())
            .filter(line => line);

          if (entries.length !== 6) {
            throw new Error('1d6 tables require exactly 6 entries');
          }
        } else {
          // Random selection
          entries = form.entries.value
            .split('\n')
            .map(line => line.trim())
            .filter(line => line);

          if (entries.length === 0) {
            throw new Error('Table must have at least one entry');
          }
        }

        if (this.currentEditId) {
          // Update existing
          await LonerDB.updateCustomTable(this.currentEditId, {
            name,
            rollType,
            entries
          });
          UI.showAlert('Table updated successfully!', 'success');
        } else {
          // Create new
          const id = await LonerDB.createCustomTable(name, 'custom', entries, rollType);
          UI.showAlert('Table created successfully!', 'success');
        }

        UI.closeModal();

        // Reload custom tables in the table system
        const customTables = await LonerDB.getCustomTables();
        customTables.forEach(table => {
          TableSystem.registerCustomTable(table);
        });

        // Update sidebar quick list
        await this.updateQuickList();

        // Re-render
        await this.render();
      } catch (error) {
        UI.showAlert(error.message, 'error');
      }
    });
  },

  /**
   * Show test roll
   */
  async showTestRoll(tableId) {
    const table = await LonerDB.getCustomTable(tableId);
    if (!table) {
      UI.showAlert('Table not found', 'error');
      return;
    }

    try {
      // Use the 'custom' supplement with properly formatted table ID
      const tableKey = `custom-${table.id}`;

      // Ensure custom supplement is registered
      if (!TableSystem.registry['custom']) {
        TableSystem.registry['custom'] = {
          supplement: { id: 'custom', name: 'Custom Tables' },
          tables: {}
        };
      }

      // Register the table
      TableSystem.registry['custom'].tables[tableKey] = {
        id: tableKey,
        name: table.name,
        rollType: table.rollType,
        entries: table.entries,
        category: 'custom'
      };

      const result = TableSystem.roll('custom', tableKey);

      UI.showModal(`Test Roll: ${table.name}`, `
        <div style="text-align: center; padding: var(--space-lg);">
          <div style="font-size: 2rem; color: var(--primary); margin-bottom: var(--space-md);">
            🎲
          </div>
          <div style="font-size: 1.1rem; margin-bottom: var(--space-md);">
            <strong>${result.result}</strong>
          </div>
          <p class="text-muted">
            Roll: ${result.rolls.join(', ')}
          </p>
          <button class="btn btn-secondary" onclick="CustomTables.showTestRoll(${tableId})">
            Roll Again
          </button>
        </div>
      `);
    } catch (error) {
      UI.showAlert('Error rolling table: ' + error.message, 'error');
    }
  },

  /**
   * Delete a custom table
   */
  async deleteTable(tableId) {
    if (!confirm('Are you sure you want to delete this table? This cannot be undone.')) {
      return;
    }

    try {
      await LonerDB.deleteCustomTable(tableId);
      UI.showAlert('Table deleted', 'success');

      // Update sidebar quick list
      await this.updateQuickList();

      await this.render();
    } catch (error) {
      UI.showAlert('Error deleting table: ' + error.message, 'error');
    }
  }
};

// Make it available globally
window.CustomTables = CustomTables;
