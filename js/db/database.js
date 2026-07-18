/**
 * LONER ASSISTANT v2.0 - Database Setup
 *
 * This file handles ALL data storage using Dexie.js (IndexedDB wrapper).
 * Dexie itself is loaded as a classic script (lib/dexie.min.js) before this
 * module runs, so it's available here as the global `Dexie`.
 */

// Create the database
export const db = new Dexie('LonerAssistant');

// Define the structure (like creating tables in a database)
// IMPORTANT: If you change the schema, increment the version number!
db.version(3).stores({
  // Campaigns: each adventure/story
  campaigns: '++id, name, createdAt, lastPlayed, archived',

  // Sessions: individual play sessions within campaigns
  sessions: '++id, campaignId, name, date, notes',

  // Characters: player characters
  characters: '++id, name, campaignId, concept, luck, isActive',

  // NPCs: non-player characters
  npcs: '++id, campaignId, name, tags',

  // Locations: places in the story
  locations: '++id, campaignId, name, visited',

  // Events: important story events
  events: '++id, campaignId, sessionId, timestamp, type, description',

  // Narrative Threads: ongoing storylines
  threads: '++id, campaignId, title, status',

  // Roll Tables: custom and supplement tables
  rollTables: '++id, supplementId, name, category',

  // Supplements: table collections
  supplements: '++id, name, enabled',

  // Roll History: all oracle/dice rolls
  rollHistory: '++id, sessionId, timestamp, result',

  // Table results history
  tableRolls: '++id, sessionId, timestamp, tableName, supplementId, result',

  // User preferences for Get Inspired flavors
  userPreferences: 'key, value',

  // Custom user tables
  customTables: '++id, name, category, entries, createdAt'
});

// Version 4: adds Challenge Tracks and Status Track (Loner 4e optional modules)
db.version(4).stores({
  campaigns: '++id, name, createdAt, lastPlayed, archived',
  sessions: '++id, campaignId, name, date, notes',
  characters: '++id, name, campaignId, concept, luck, isActive',
  npcs: '++id, campaignId, name, tags',
  locations: '++id, campaignId, name, visited',
  events: '++id, campaignId, sessionId, timestamp, type, description',
  threads: '++id, campaignId, title, status',
  rollTables: '++id, supplementId, name, category',
  supplements: '++id, name, enabled',
  rollHistory: '++id, sessionId, timestamp, result',
  tableRolls: '++id, sessionId, timestamp, tableName, supplementId, result',
  userPreferences: 'key, value',
  customTables: '++id, name, category, entries, createdAt',

  // Challenge Tracks: progress trackers for goals spanning multiple scenes
  challengeTracks: '++id, campaignId, name, size, filled, createdAt',

  // Status Track: per-character 3-box lasting-consequence track
  statusTracks: '++id, characterId, boxes, createdAt'
});

/**
 * ==============================================
 * CAMPAIGN FUNCTIONS
 * ==============================================
 */

// Create a new campaign
export async function createCampaign(name, description = '') {
  const id = await db.campaigns.add({
    name: name,
    description: description,
    createdAt: new Date(),
    lastPlayed: new Date(),
    archived: false
  });
  return id;
}

// Get all campaigns (not archived)
export async function getAllCampaigns() {
  // Get all campaigns first
  const allCampaigns = await db.campaigns.toArray();

  // Filter out archived ones (handles missing field gracefully)
  const activeCampaigns = allCampaigns.filter(c => c.archived !== true);

  // Sort by lastPlayed (most recent first)
  activeCampaigns.sort((a, b) => {
    const dateA = a.lastPlayed ? new Date(a.lastPlayed) : new Date(0);
    const dateB = b.lastPlayed ? new Date(b.lastPlayed) : new Date(0);
    return dateB - dateA;
  });

  return activeCampaigns;
}

// Get a single campaign by ID
export async function getCampaign(id) {
  return await db.campaigns.get(id);
}

// Update campaign's last played date
export async function updateCampaignLastPlayed(campaignId) {
  await db.campaigns.update(campaignId, {
    lastPlayed: new Date()
  });
}

// Delete a campaign (and all its data)
export async function deleteCampaign(campaignId) {
  // Delete all related data
  await db.sessions.where('campaignId').equals(campaignId).delete();
  await db.characters.where('campaignId').equals(campaignId).delete();
  await db.npcs.where('campaignId').equals(campaignId).delete();
  await db.locations.where('campaignId').equals(campaignId).delete();
  await db.events.where('campaignId').equals(campaignId).delete();
  await db.threads.where('campaignId').equals(campaignId).delete();

  // Delete the campaign itself
  await db.campaigns.delete(campaignId);
}

/**
 * ==============================================
 * SESSION FUNCTIONS
 * ==============================================
 */

// Create a new session
export async function createSession(campaignId, name) {
  const id = await db.sessions.add({
    campaignId: campaignId,
    name: name,
    date: new Date(),
    notes: '', // Will be rich text JSON from Quill
    sceneType: null,
    twistCounter: 0,
    frame: null, // Current scene frame: { where, who, what } - Loner 4e "Framing a Scene"
    leverage: null // Held Leverage: { description } - Loner 4e optional module, one at a time
  });

  // Update campaign's last played
  await updateCampaignLastPlayed(campaignId);

  return id;
}

// Get all sessions for a campaign
export async function getSessionsForCampaign(campaignId) {
  try {
    return await db.sessions
      .where('campaignId')
      .equals(campaignId)
      .reverse()
      .toArray();
  } catch (error) {
    console.error('Error fetching sessions:', error);
    return [];
  }
}

// Get a single session
export async function getSession(id) {
  return await db.sessions.get(id);
}

// Update session notes (from Quill editor)
export async function updateSessionNotes(sessionId, notesContent) {
  await db.sessions.update(sessionId, {
    notes: notesContent
  });
}

// Update the current scene frame (Loner 4e "Framing a Scene": where/who/what)
export async function updateSessionFrame(sessionId, frame) {
  await db.sessions.update(sessionId, {
    frame: frame
  });
}

// Update twist counter
export async function updateTwistCounter(sessionId, counter) {
  await db.sessions.update(sessionId, {
    twistCounter: counter
  });
}

/**
 * ==============================================
 * CHARACTER FUNCTIONS
 * ==============================================
 */

// Create a new character
export async function createCharacter(data) {
  const id = await db.characters.add({
    name: data.name || 'New Character',
    campaignId: data.campaignId || null, // null = reusable character
    concept: data.concept || '',
    skills: data.skills || [], // Array of skill strings
    frailty: data.frailty || '',
    gear: data.gear || [], // Array of gear strings
    goalMotive: data.goalMotive || '',
    nemesis: data.nemesis || '',
    luck: data.luck || 6, // Starting luck
    maxLuck: 6,
    isActive: data.isActive || false, // Flag for currently playing character
    createdAt: new Date()
  });
  return id;
}

// Get all characters (optionally filter by campaign)
export async function getCharacters(campaignId = null) {
  try {
    if (campaignId === null || campaignId === undefined) {
      // Get ALL characters across all campaigns
      return await db.characters.toArray();
    }
    return await db.characters
      .where('campaignId')
      .equals(campaignId)
      .toArray();
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
}

// Get a single character
export async function getCharacter(id) {
  return await db.characters.get(id);
}

// Update character
export async function updateCharacter(id, data) {
  await db.characters.update(id, data);
}

// Update character luck
export async function updateCharacterLuck(id, newLuck) {
  await db.characters.update(id, { luck: newLuck });
}

// Delete character
export async function deleteCharacter(id) {
  await db.characters.delete(id);
}

// Set a character as active (and unset all others)
export async function setActiveCharacter(id) {
  // First, set all characters to inactive
  const allChars = await db.characters.toArray();
  for (const char of allChars) {
    await db.characters.update(char.id, { isActive: false });
  }

  // Then set the selected one as active
  await db.characters.update(id, { isActive: true });
}

/**
 * ==============================================
 * NPC FUNCTIONS
 * ==============================================
 */

export async function createNPC(campaignId, name, description = '', tags = []) {
  const id = await db.npcs.add({
    campaignId: campaignId,
    name: name,
    description: description,
    tags: tags, // e.g., ['ally', 'merchant', 'suspicious']
    relationship: 'neutral', // 'ally', 'enemy', 'neutral'
    createdAt: new Date()
  });
  return id;
}

export async function getNPCsForCampaign(campaignId) {
  try {
    return await db.npcs
      .where('campaignId')
      .equals(campaignId)
      .toArray();
  } catch (error) {
    console.error('Error fetching NPCs:', error);
    return [];
  }
}

export async function updateNPC(id, data) {
  await db.npcs.update(id, data);
}

export async function deleteNPC(id) {
  await db.npcs.delete(id);
}

/**
 * ==============================================
 * LOCATION FUNCTIONS
 * ==============================================
 */

export async function createLocation(campaignId, name, description = '') {
  const id = await db.locations.add({
    campaignId: campaignId,
    name: name,
    description: description,
    visited: false,
    createdAt: new Date()
  });
  return id;
}

export async function getLocationsForCampaign(campaignId) {
  try {
    return await db.locations
      .where('campaignId')
      .equals(campaignId)
      .toArray();
  } catch (error) {
    console.error('Error fetching locations:', error);
    return [];
  }
}

export async function markLocationVisited(id) {
  await db.locations.update(id, { visited: true });
}

export async function updateLocation(id, data) {
  await db.locations.update(id, data);
}

export async function deleteLocation(id) {
  await db.locations.delete(id);
}

/**
 * ==============================================
 * EVENT LOG FUNCTIONS
 * ==============================================
 */

export async function logEvent(campaignId, sessionId, type, description, metadata = {}) {
  const id = await db.events.add({
    campaignId: campaignId,
    sessionId: sessionId,
    timestamp: new Date(),
    type: type, // 'oracle', 'twist', 'conflict', 'revelation', etc.
    description: description,
    metadata: metadata // Store extra data (roll results, NPCs involved, etc.)
  });
  return id;
}

export async function getEventsForSession(sessionId) {
  return await db.events
    .where('sessionId').equals(sessionId)
    .sortBy('timestamp');
}

export async function getEventsForCampaign(campaignId) {
  return await db.events
    .where('campaignId').equals(campaignId)
    .reverse()
    .sortBy('timestamp');
}

/**
 * ==============================================
 * NARRATIVE THREAD FUNCTIONS
 * ==============================================
 */

export async function createThread(campaignId, title, description = '') {
  const id = await db.threads.add({
    campaignId: campaignId,
    title: title,
    description: description,
    status: 'active', // 'active', 'resolved', 'abandoned'
    createdAt: new Date()
  });
  return id;
}

export async function getThreadsForCampaign(campaignId, status = null) {
  try {
    if (status) {
      const threads = await db.threads
        .where('campaignId')
        .equals(campaignId)
        .toArray();
      return threads.filter(t => t.status === status);
    }
    return await db.threads
      .where('campaignId')
      .equals(campaignId)
      .toArray();
  } catch (error) {
    console.error('Error fetching threads:', error);
    return [];
  }
}

export async function updateThreadStatus(id, status) {
  await db.threads.update(id, { status: status });
}

export async function updateThread(id, data) {
  await db.threads.update(id, data);
}

export async function deleteThread(id) {
  await db.threads.delete(id);
}

/**
 * ==============================================
 * UTILITY FUNCTIONS
 * ==============================================
 */

// Export all campaign data as JSON
export async function exportCampaignData(campaignId) {
  const campaign = await getCampaign(campaignId);
  const sessions = await getSessionsForCampaign(campaignId);
  const characters = await db.characters.where('campaignId').equals(campaignId).toArray();
  const npcs = await getNPCsForCampaign(campaignId);
  const locations = await getLocationsForCampaign(campaignId);
  const events = await getEventsForCampaign(campaignId);
  const threads = await getThreadsForCampaign(campaignId);

  return {
    version: '2.0',
    exportDate: new Date().toISOString(),
    campaign: campaign,
    sessions: sessions,
    characters: characters,
    npcs: npcs,
    locations: locations,
    events: events,
    threads: threads
  };
}

// Import campaign data from JSON
export async function importCampaignData(jsonData) {
  // Create campaign
  const campaignId = await createCampaign(
    jsonData.campaign.name,
    jsonData.campaign.description
  );

  // Import everything else, updating IDs
  for (const session of jsonData.sessions) {
    await db.sessions.add({ ...session, campaignId: campaignId });
  }

  for (const character of jsonData.characters) {
    await db.characters.add({ ...character, campaignId: campaignId });
  }

  for (const npc of jsonData.npcs) {
    await db.npcs.add({ ...npc, campaignId: campaignId });
  }

  for (const location of jsonData.locations) {
    await db.locations.add({ ...location, campaignId: campaignId });
  }

  for (const event of jsonData.events) {
    await db.events.add({ ...event, campaignId: campaignId });
  }

  for (const thread of jsonData.threads) {
    await db.threads.add({ ...thread, campaignId: campaignId });
  }

  return campaignId;
}

// Initialize with sample data (for first-time users)
export async function initializeSampleData() {
  try {
    const count = await db.campaigns.count();
    if (count > 0) {
      console.log('Existing data found, skipping sample data');
      return; // Already has data
    }

    console.log('No existing data, creating sample campaign...');

    // Create a sample campaign
    const campaignId = await createCampaign(
      'Sample Campaign',
      'A mysterious adventure in a cyberpunk city'
    );

    // Create a sample character
    await createCharacter({
      campaignId: campaignId,
      name: 'Zahra Kane',
      concept: 'Street-smart hacker',
      skills: ['Hacking', 'Stealth'],
      frailty: 'Haunted by past',
      gear: ['Cyberdeck', 'Lockpicks'],
      goalMotive: 'Clear her name',
      nemesis: 'The Syndicate'
    });

    // Create a sample session
    await createSession(campaignId, 'The Heist Begins');

    console.log('✅ Sample data initialized!');
  } catch (error) {
    console.error('Error initializing sample data:', error);
    // Don't throw - let the app continue even if sample data fails
  }
}

// Check database on load
db.on('ready', async function () {
  console.log('📊 Database ready!');
  try {
    await initializeSampleData();
  } catch (error) {
    console.error('Error during database initialization:', error);
  }
});

/**
 * ==============================================
 * CUSTOM TABLES FUNCTIONS
 * ==============================================
 */

export async function getCustomTables() {
  return await db.customTables.toArray();
}

export async function createCustomTable(name, category, entries, rollType = 'random') {
  const id = await db.customTables.add({
    name: name,
    category: category,
    entries: entries,
    rollType: rollType,
    createdAt: new Date()
  });
  return id;
}

export async function getCustomTable(id) {
  return await db.customTables.get(id);
}

export async function updateCustomTable(id, data) {
  const table = await db.customTables.get(id);
  if (!table) throw new Error('Table not found');

  await db.customTables.update(id, {
    ...table,
    ...data,
    updatedAt: new Date()
  });
}

export async function deleteCustomTable(id) {
  await db.customTables.delete(id);
}

/**
 * ==============================================
 * USER PREFERENCES FUNCTIONS
 * ==============================================
 */

export async function getUserPreference(key) {
  const pref = await db.userPreferences.get(key);
  return pref ? pref.value : null;
}

export async function setUserPreference(key, value) {
  await db.userPreferences.put({ key: key, value: value });
}

/**
 * ==============================================
 * TABLE ROLLS FUNCTIONS
 * ==============================================
 */

export async function getTableRollHistory(sessionId, limit = 50) {
  return await db.tableRolls
    .where('sessionId')
    .equals(sessionId)
    .reverse()
    .limit(limit)
    .toArray();
}

/**
 * ==============================================
 * CHALLENGE TRACKS (Loner 4e optional module)
 * ==============================================
 */

export async function createChallengeTrack(campaignId, name, size = 4) {
  const id = await db.challengeTracks.add({
    campaignId: campaignId,
    name: name,
    size: size, // 4 for a standard arc, 6 for a longer one
    filled: 0,
    createdAt: new Date()
  });
  return id;
}

export async function getChallengeTracksForCampaign(campaignId) {
  try {
    return await db.challengeTracks
      .where('campaignId')
      .equals(campaignId)
      .toArray();
  } catch (error) {
    console.error('Error fetching challenge tracks:', error);
    return [];
  }
}

// delta may be positive (mark boxes) or negative (erase boxes); clamped to [0, size]
export async function updateChallengeTrackProgress(id, delta) {
  const track = await db.challengeTracks.get(id);
  if (!track) return;

  const filled = Math.max(0, Math.min(track.size, track.filled + delta));
  await db.challengeTracks.update(id, { filled });
  return filled;
}

export async function deleteChallengeTrack(id) {
  await db.challengeTracks.delete(id);
}

/**
 * ==============================================
 * STATUS TRACK (Loner 4e optional module)
 * ==============================================
 */

// boxes is an array of up to 3 tag strings, in fill order (oldest first)
export async function createStatusTrack(characterId) {
  const id = await db.statusTracks.add({
    characterId: characterId,
    boxes: [],
    createdAt: new Date()
  });
  return id;
}

export async function getStatusTrackForCharacter(characterId) {
  return await db.statusTracks.where('characterId').equals(characterId).first();
}

export async function fillStatusTrackBox(characterId, tag) {
  let track = await getStatusTrackForCharacter(characterId);
  if (!track) {
    const id = await createStatusTrack(characterId);
    track = await db.statusTracks.get(id);
  }
  if (track.boxes.length >= 3) return track; // already overcome

  const boxes = [...track.boxes, tag];
  await db.statusTracks.update(track.id, { boxes });
  return { ...track, boxes };
}

// Clear the most recently filled box (recovery), restoring the previous tag as active
export async function clearStatusTrackBox(characterId) {
  const track = await getStatusTrackForCharacter(characterId);
  if (!track || track.boxes.length === 0) return track;

  const boxes = track.boxes.slice(0, -1);
  await db.statusTracks.update(track.id, { boxes });
  return { ...track, boxes };
}

/**
 * ==============================================
 * LEVERAGE (Loner 4e optional module)
 * ==============================================
 */

// leverage is { description } or null
export async function updateSessionLeverage(sessionId, leverage) {
  await db.sessions.update(sessionId, { leverage });
}
