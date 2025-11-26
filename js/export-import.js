/**
 * LONER ASSISTANT v2.0 - Export/Import System
 *
 * Handles exporting and importing of:
 * - Individual sessions
 * - Entire campaigns
 * - Full database backup
 */

const ExportImportSystem = {

  /**
   * Export current session with all related data
   */
  async exportSession(sessionId = null) {
    try {
      console.log('🔍 Starting export session...');

      // Get current session if not provided
      if (!sessionId) {
        const state = App.getState();
        sessionId = state.sessionId;
        console.log('📊 Got session from state:', sessionId);
      }

      if (!sessionId) {
        console.error('❌ No session ID available');
        UI.showAlert('No session loaded', 'error');
        return;
      }

      console.log('📥 Fetching session data...');
      const session = await LonerDB.getSession(sessionId);
      if (!session) {
        console.error('❌ Session not found:', sessionId);
        UI.showAlert('Session not found', 'error');
        return;
      }
      console.log('✅ Session found:', session);
      console.log('📝 Session notes:', session.notes ? 'Present (length: ' + JSON.stringify(session.notes).length + ')' : 'Empty or missing');

      console.log('📥 Fetching campaign data...');
      const campaign = await LonerDB.getCampaign(session.campaignId);
      console.log('✅ Campaign found:', campaign);

      // Gather all session-related data
      console.log('📥 Fetching related data...');
      const npcs = await LonerDB.getNPCsForCampaign(session.campaignId);
      const locations = await LonerDB.getLocationsForCampaign(session.campaignId);
      const threads = await LonerDB.getThreadsForCampaign(session.campaignId);
      const events = await LonerDB.getEventsForSession(sessionId);

      // Get roll history (direct access, no wrapper function)
      const rollHistory = await LonerDB.db.rollHistory.where('sessionId').equals(sessionId).toArray();

      // Get table rolls (direct access, no wrapper function)
      const tableRolls = await LonerDB.db.tableRolls.where('sessionId').equals(sessionId).toArray();

      const data = {
        version: '2.0',
        exportDate: new Date().toISOString(),
        exportType: 'session',
        session: session,
        campaign: {
          name: campaign.name,
          description: campaign.description
        },
        npcs: npcs,
        locations: locations,
        threads: threads,
        events: events,
        rollHistory: rollHistory,
        tableRolls: tableRolls
      };

      console.log('📦 Export data prepared:', data);

      // Create filename
      const filename = `loner-session-${campaign.name.replace(/[^a-z0-9]/gi, '-')}-${session.name.replace(/[^a-z0-9]/gi, '-')}-${new Date().toISOString().split('T')[0]}.json`;

      console.log('💾 Downloading file:', filename);
      this.downloadJSON(data, filename);
      NotificationSystem.show(`Session "${session.name}" exported successfully!`, 'success');

    } catch (error) {
      console.error('❌ Error exporting session:', error);
      console.error('Stack trace:', error.stack);
      UI.showAlert(`Failed to export session: ${error.message}`, 'error');
    }
  },

  /**
   * Export entire campaign with all sessions
   */
  async exportCampaign(campaignId = null) {
    try {
      // Get current campaign if not provided
      if (!campaignId) {
        const state = App.getState();
        campaignId = state.campaignId;
      }

      if (!campaignId) {
        UI.showAlert('No campaign selected', 'error');
        return;
      }

      const campaign = await LonerDB.getCampaign(campaignId);
      if (!campaign) {
        UI.showAlert('Campaign not found', 'error');
        return;
      }

      const sessions = await LonerDB.getSessionsForCampaign(campaignId);

      // Gather all session data
      const sessionsData = [];
      for (const session of sessions) {
        sessionsData.push({
          session: session,
          events: await LonerDB.getEventsForSession(session.id),
          rollHistory: await LonerDB.db.rollHistory.where('sessionId').equals(session.id).toArray(),
          tableRolls: await LonerDB.db.tableRolls.where('sessionId').equals(session.id).toArray()
        });
      }

      const data = {
        version: '2.0',
        exportDate: new Date().toISOString(),
        exportType: 'campaign',
        campaign: campaign,
        sessions: sessionsData,
        npcs: await LonerDB.getNPCsForCampaign(campaignId),
        locations: await LonerDB.getLocationsForCampaign(campaignId),
        threads: await LonerDB.getThreadsForCampaign(campaignId)
      };

      const filename = `loner-campaign-${campaign.name.replace(/[^a-z0-9]/gi, '-')}-${new Date().toISOString().split('T')[0]}.json`;

      this.downloadJSON(data, filename);
      NotificationSystem.show(`Campaign "${campaign.name}" exported successfully!`, 'success');

    } catch (error) {
      console.error('Error exporting campaign:', error);
      UI.showAlert('Failed to export campaign', 'error');
    }
  },

  /**
   * Export entire database (full backup)
   */
  async exportDatabase() {
    try {
      const data = {
        version: '2.0',
        exportDate: new Date().toISOString(),
        exportType: 'database',
        campaigns: await LonerDB.getAllCampaigns(),
        sessions: await LonerDB.db.sessions.toArray(),
        characters: await LonerDB.getCharacters(),
        npcs: await LonerDB.db.npcs.toArray(),
        locations: await LonerDB.db.locations.toArray(),
        threads: await LonerDB.db.threads.toArray(),
        events: await LonerDB.db.events.toArray(),
        rollHistory: await LonerDB.db.rollHistory.toArray(),
        tableRolls: await LonerDB.db.tableRolls.toArray(),
        userPreferences: await LonerDB.db.userPreferences.toArray()
      };

      const filename = `loner-backup-${new Date().toISOString().split('T')[0]}.json`;

      this.downloadJSON(data, filename);
      NotificationSystem.show('Full database backup exported!', 'success');

    } catch (error) {
      console.error('Error exporting database:', error);
      UI.showAlert('Failed to export database', 'error');
    }
  },

  /**
   * Import session data
   */
  async importSession(jsonData) {
    try {
      console.log('🔍 Starting import session...');
      const data = JSON.parse(jsonData);
      console.log('📦 Parsed data:', data);

      if (data.exportType !== 'session') {
        console.error('❌ Invalid export type:', data.exportType);
        UI.showAlert('Invalid session export file', 'error');
        return;
      }

      console.log('📥 Creating campaign...');
      // Create new campaign for this session
      const campaignId = await LonerDB.createCampaign(
        `${data.campaign.name} (Imported)`,
        data.campaign.description || 'Imported session'
      );
      console.log('✅ Campaign created:', campaignId);

      console.log('📥 Creating session...');
      // Create session
      const sessionId = await LonerDB.createSession(
        campaignId,
        data.session.name
      );
      console.log('✅ Session created:', sessionId);

      // Update session with notes
      console.log('📝 Checking notes to restore:', data.session.notes ? 'Present' : 'Empty/missing');
      if (data.session.notes) {
        console.log('📝 Restoring session notes...');
        console.log('Notes content type:', typeof data.session.notes);
        console.log('Notes content:', data.session.notes);
        await LonerDB.db.sessions.update(sessionId, {
          notes: data.session.notes
        });
        console.log('✅ Notes restored');

        // Verify the update
        const updatedSession = await LonerDB.getSession(sessionId);
        console.log('🔍 Verification - notes in DB:', updatedSession.notes ? 'Present' : 'Missing');
      } else {
        console.warn('⚠️ No notes to restore');
      }

      // Import related data
      if (data.npcs && data.npcs.length > 0) {
        console.log(`📥 Importing ${data.npcs.length} NPCs...`);
        for (const npc of data.npcs) {
          await LonerDB.createNPC(campaignId, npc.name, npc.description || '', npc.tags || '');
        }
        console.log('✅ NPCs imported');
      }

      if (data.locations && data.locations.length > 0) {
        console.log(`📥 Importing ${data.locations.length} locations...`);
        for (const location of data.locations) {
          await LonerDB.createLocation(campaignId, location.name, location.description || '');
          if (location.visited) {
            const newLoc = await LonerDB.db.locations.where({campaignId, name: location.name}).first();
            if (newLoc) await LonerDB.markLocationVisited(newLoc.id);
          }
        }
        console.log('✅ Locations imported');
      }

      if (data.threads && data.threads.length > 0) {
        console.log(`📥 Importing ${data.threads.length} threads...`);
        for (const thread of data.threads) {
          await LonerDB.createThread(campaignId, thread.title, thread.description || '');
          if (thread.status) {
            const newThread = await LonerDB.db.threads.where({campaignId, title: thread.title}).first();
            if (newThread) await LonerDB.updateThreadStatus(newThread.id, thread.status);
          }
        }
        console.log('✅ Threads imported');
      }

      if (data.events && data.events.length > 0) {
        console.log(`📥 Importing ${data.events.length} events...`);
        for (const event of data.events) {
          // Use direct database insert instead of addEvent
          await LonerDB.db.events.add({
            sessionId: sessionId,
            campaignId: campaignId,
            type: event.type,
            description: event.description,
            timestamp: event.timestamp || new Date()
          });
        }
        console.log('✅ Events imported');
      }

      console.log('🎉 Import complete!');
      NotificationSystem.show(`Session imported successfully! Campaign: "${data.campaign.name}"`, 'success');

      // Load the imported session automatically
      console.log('📂 Loading imported session...');
      App.setCurrentCampaign(campaignId, sessionId);

      // Load campaign info
      const importedCampaign = await LonerDB.getCampaign(campaignId);
      if (importedCampaign && typeof CampaignManager !== 'undefined') {
        CampaignManager.displayCurrentCampaign(importedCampaign);
      }

      // Load session into editor
      const importedSession = await LonerDB.getSession(sessionId);
      if (importedSession) {
        if (typeof Editor !== 'undefined' && Editor.loadSession) {
          await Editor.loadSession(sessionId);
        }
        if (typeof SessionManager !== 'undefined' && SessionManager.displayCurrentSession) {
          SessionManager.displayCurrentSession(importedSession);
        }
      }

      // Reload campaigns list
      if (typeof loadCampaignsList === 'function') {
        loadCampaignsList();
      }

      // Switch to play view to see the imported session
      if (typeof UI !== 'undefined' && UI.showView) {
        UI.showView('play');
      }

      console.log('✅ Imported session loaded and ready!');

    } catch (error) {
      console.error('❌ Error importing session:', error);
      console.error('Stack trace:', error.stack);
      UI.showAlert(`Failed to import session: ${error.message}`, 'error');
    }
  },

  /**
   * Import campaign data
   */
  async importCampaign(jsonData) {
    try {
      const data = JSON.parse(jsonData);

      if (data.exportType !== 'campaign') {
        UI.showAlert('Invalid campaign export file', 'error');
        return;
      }

      // Create campaign
      const campaignId = await LonerDB.createCampaign(
        `${data.campaign.name} (Imported)`,
        data.campaign.description || ''
      );

      // Import NPCs, Locations, Threads
      if (data.npcs) {
        for (const npc of data.npcs) {
          await LonerDB.createNPC(campaignId, npc.name, npc.description || '', npc.tags || '');
        }
      }

      if (data.locations) {
        for (const location of data.locations) {
          await LonerDB.createLocation(campaignId, location.name, location.description || '');
          if (location.visited) {
            const newLoc = await LonerDB.db.locations.where({campaignId, name: location.name}).first();
            if (newLoc) await LonerDB.markLocationVisited(newLoc.id);
          }
        }
      }

      if (data.threads) {
        for (const thread of data.threads) {
          await LonerDB.createThread(campaignId, thread.title, thread.description || '');
          if (thread.status) {
            const newThread = await LonerDB.db.threads.where({campaignId, title: thread.title}).first();
            if (newThread) await LonerDB.updateThreadStatus(newThread.id, thread.status);
          }
        }
      }

      // Import sessions
      if (data.sessions) {
        for (const sessionData of data.sessions) {
          const sessionId = await LonerDB.createSession(
            campaignId,
            sessionData.session.name
          );

          // Update session with notes
          if (sessionData.session.notes) {
            await LonerDB.db.sessions.update(sessionId, {
              notes: sessionData.session.notes
            });
          }

          // Import events for this session
          if (sessionData.events) {
            for (const event of sessionData.events) {
              await LonerDB.db.events.add({
                sessionId: sessionId,
                campaignId: campaignId,
                type: event.type,
                description: event.description,
                timestamp: event.timestamp || new Date()
              });
            }
          }
        }
      }

      NotificationSystem.show(`Campaign "${data.campaign.name}" imported successfully!`, 'success');

      // Reload campaigns list
      if (typeof loadCampaignsList === 'function') {
        loadCampaignsList();
      }

      // Switch to campaigns view to see the imported campaign
      if (typeof UI !== 'undefined' && UI.showView) {
        UI.showView('campaigns');
      }

    } catch (error) {
      console.error('Error importing campaign:', error);
      UI.showAlert('Failed to import campaign. Check file format.', 'error');
    }
  },

  /**
   * Import full database (restore backup)
   */
  async importDatabase(jsonData) {
    try {
      const data = JSON.parse(jsonData);

      if (data.exportType !== 'database') {
        UI.showAlert('Invalid database backup file', 'error');
        return;
      }

      const confirmed = confirm(
        'WARNING: This will REPLACE ALL existing data with the backup.\n\n' +
        'Current data will be permanently lost.\n\n' +
        'Are you absolutely sure you want to continue?'
      );

      if (!confirmed) return;

      // Clear all existing data
      await LonerDB.db.campaigns.clear();
      await LonerDB.db.sessions.clear();
      await LonerDB.db.characters.clear();
      await LonerDB.db.npcs.clear();
      await LonerDB.db.locations.clear();
      await LonerDB.db.threads.clear();
      await LonerDB.db.events.clear();
      await LonerDB.db.rollHistory.clear();
      await LonerDB.db.tableRolls.clear();
      await LonerDB.db.userPreferences.clear();

      // Import all data
      if (data.campaigns) await LonerDB.db.campaigns.bulkAdd(data.campaigns);
      if (data.sessions) await LonerDB.db.sessions.bulkAdd(data.sessions);
      if (data.characters) await LonerDB.db.characters.bulkAdd(data.characters);
      if (data.npcs) await LonerDB.db.npcs.bulkAdd(data.npcs);
      if (data.locations) await LonerDB.db.locations.bulkAdd(data.locations);
      if (data.threads) await LonerDB.db.threads.bulkAdd(data.threads);
      if (data.events) await LonerDB.db.events.bulkAdd(data.events);
      if (data.rollHistory) await LonerDB.db.rollHistory.bulkAdd(data.rollHistory);
      if (data.tableRolls) await LonerDB.db.tableRolls.bulkAdd(data.tableRolls);
      if (data.userPreferences) await LonerDB.db.userPreferences.bulkAdd(data.userPreferences);

      NotificationSystem.show('Database restored successfully! Reloading page...', 'success');

      // Reload page to refresh all data
      setTimeout(() => {
        location.reload();
      }, 2000);

    } catch (error) {
      console.error('Error importing database:', error);
      UI.showAlert('Failed to import database. Check file format.', 'error');
    }
  },

  /**
   * Show import dialog
   */
  showImportDialog() {
    const html = `
      <div class="form-group">
        <label>Select Import Type:</label>
        <select id="import-type" class="form-control">
          <option value="session">Session</option>
          <option value="campaign">Campaign</option>
          <option value="database">Full Database Backup</option>
        </select>
      </div>

      <div class="form-group">
        <label>Choose JSON File:</label>
        <input type="file" id="import-file" accept=".json" class="form-control">
      </div>

      <div style="margin-top: var(--space-lg); display: flex; gap: var(--space-sm);">
        <button class="btn btn-primary" onclick="ExportImportSystem.processImport()">
          Import
        </button>
        <button class="btn btn-outline" onclick="UI.closeModal()">
          Cancel
        </button>
      </div>
    `;

    UI.showModal('Import Data', html);
  },

  /**
   * Process the import
   */
  async processImport() {
    const importType = document.getElementById('import-type').value;
    const fileInput = document.getElementById('import-file');

    if (!fileInput.files || fileInput.files.length === 0) {
      UI.showAlert('Please select a file', 'error');
      return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      const jsonData = e.target.result;

      UI.closeModal();

      switch(importType) {
        case 'session':
          await this.importSession(jsonData);
          break;
        case 'campaign':
          await this.importCampaign(jsonData);
          break;
        case 'database':
          await this.importDatabase(jsonData);
          break;
      }
    };

    reader.onerror = () => {
      UI.showAlert('Failed to read file', 'error');
    };

    reader.readAsText(file);
  },

  /**
   * Helper: Download JSON data as file
   */
  downloadJSON(data, filename) {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
};

// Make available globally
window.ExportImportSystem = ExportImportSystem;
