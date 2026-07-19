# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Loner Assistant v2.1** is a comprehensive web-based companion tool for the Loner solo RPG system. It enables players to manage campaigns, characters, story content, and game mechanics entirely in a browser using client-side architecture with IndexedDB for persistent storage.

### Key Context
- **What is Loner?** A minimalist, tag-based solo RPG with emergent storytelling. Rules are rules-light and narrative-focused (see `loner-en.md`).
- **Architecture:** Vanilla JavaScript (no frameworks), Dexie.js for database, pure HTML/CSS for UI
- **Status:** Phase 4 - Advanced features (roll tables, supplements, Get Inspired flavors) are implemented; Phases 1-3 (foundation, sessions, content management) are complete
- **User:** Roberto, the creator. He has strong debugging skills, appreciates clean modular architecture, and favors simpler solutions over complex ones

## Tech Stack

- **Frontend:** Vanilla HTML, CSS, JavaScript (no frameworks)
- **Database:** Dexie.js 3.x (IndexedDB wrapper) - provides structured data storage with version migrations
- **Libraries:**
  - Dexie.js for database management
  - Quill.js (rich text editor, optional for future enhancements)
- **No build process** - application runs directly in the browser

## Project Structure

```
loner-assistant/
├── index.html                    # Single-page HTML shell
├── css/style.css                 # All application styling
├── js/
│   ├── main.js                   # App initialization, state management, coordination
│   ├── database.js               # Dexie.js setup and all CRUD operations
│   ├── oracle.js                 # Dice rolling (d6), oracle interpretation, twist counter
│   ├── campaigns.js              # Campaign CRUD and display
│   ├── characters.js             # Character sheet creation, editing, display
│   ├── sessions.js               # Session management within campaigns
│   ├── npcs.js                   # NPC CRUD and relationship management
│   ├── locations.js              # Location CRUD and tracking
│   ├── threads.js                # Narrative thread (ongoing storyline) management
│   ├── events.js                 # Event log and timeline display
│   ├── editor.js                 # Rich text note editor with table auto-insertion
│   ├── table-manager.js          # UI for table selection and rolling
│   ├── tables.js                 # Roll table execution and history
│   └── ui.js                     # Shared UI utilities (modals, panels, etc.)
├── data/
│   ├── table-registry.js         # Central registry of all available supplements
│   └── tables/
│       ├── core-loner.js         # Core Loner tables (Adventure Maker, Twist, Actions, etc.)
│       ├── core-inspired.js      # Core "Get Inspired" flavor (random word generation)
│       └── supplements/          # Future supplement tables
│           └── sample-encounters.js
└── lib/
    └── dexie.min.js              # Database library (minified)
```

## Database Schema (Dexie.js)

The database is defined in `database.js` with version 3 (migrations handled automatically). Key collections:

- **campaigns** - Adventure/story collections
- **sessions** - Individual play sessions within campaigns
- **characters** - Player characters (protagonist)
- **npcs** - Non-player characters
- **locations** - Story locations
- **events** - Event log entries (timestamped actions)
- **threads** - Narrative threads (ongoing storylines with status)
- **rollTables** - User-defined and supplement tables
- **supplements** - Table collections/supplements
- **rollHistory** - All oracle rolls (chance/risk dice results)
- **tableRolls** - Results from rolling supplemental tables
- **userPreferences** - User settings (e.g., Get Inspired flavor selection)
- **customTables** - User-created custom tables

## Key Modules & Their Responsibilities

### main.js (App Controller)
- App initialization and DOMContentLoaded setup
- Global state management (currentCampaignId, currentSessionId, currentCharacterId)
- State persistence to localStorage (saveAppState/loadAppState)
- Theme switching (dark/light mode)
- Module coordination

**Key Functions:**
- `setCurrentCampaign(campaignId, sessionId)` - Switch active campaign
- `setCurrentCharacter(characterId)` - Set active character
- `getState()` - Return current app state

### database.js (Data Layer)
All database operations go through this module. It abstracts Dexie.js completely, exposing simple async functions for CRUD.

**Architecture Pattern:**
- Database schema defined once at top
- Separate functions for each entity type (campaigns, characters, etc.)
- All functions are async
- No complex queries - keep it simple

**Critical Functions** (examples):
- `createCampaign(name, description)` - New campaign
- `getSession(sessionId)` - Fetch session
- `saveTwistCounter(sessionId, count)` - Persist twist counter state
- `addRollHistory(sessionId, result)` - Log oracle roll

### oracle.js (Game Mechanics)
Handles all Loner core mechanics:
- d6 rolling (`rollD6()`)
- Oracle consultation (Chance die vs Risk die)
- Result interpretation ("Yes", "No", "Yes, but...", "Yes, and...", "No, but...", "No, and...")
- Twist counter logic (reaches 3 → trigger twist, reset to 0)
- Advantage/Disadvantage modifiers

**Key Functions:**
- `rollOracle()` - Main oracle roll with current modifiers
- `interpretOracleRoll(chanceDice, riskDice)` - Convert dice to result text
- `updateTwistCounter()` - Visual display of twist counter

### campaigns.js, characters.js, sessions.js, etc.
Module per content type. Each handles:
- UI rendering (lists, forms, detail views)
- Event listeners (create, edit, delete, view)
- Calling database functions
- Modal management

**Pattern:** Functions are named to match UI actions (`createCampaignForm()`, `showCharacterDetail()`, etc.)

### table-manager.js & tables.js
Handles rolling supplemental tables (Adventure Maker, Get Inspired, custom tables):
- `table-manager.js` - UI for selecting supplements and tables, two-step selection interface
- `tables.js` - Execute rolls and save results to tableRolls collection

**Two-Step Interface:** User first selects a supplement, then selects a specific table within that supplement (scales well as content expands).

### editor.js
Rich text editor with auto-insertion capabilities:
- Integrates with Quill.js for rich text
- Auto-insert oracle results, table rolls, and character references
- Save notes to database

## Development Workflow

### Running the Application
- Open `index.html` in a modern browser (no build step needed)
- IndexedDB storage persists locally in browser
- Check browser console for debug logs

### Database Version Management
When modifying the database schema:
1. Increment version in `database.js` (`db.version(N)`)
2. Add migration logic if needed
3. Dexie handles schema changes automatically on version bump
4. Test with fresh IndexedDB (clear storage in DevTools if needed)

### Adding New Tables/Supplements
1. Create new file in `data/tables/` (e.g., `space-opera.js`)
2. Follow the format of `core-loner.js` and `core-inspired.js`
3. Register supplement in `data/table-registry.js`
4. Enable via UI (userPreferences collection)

### Testing
- Use browser DevTools IndexedDB inspector to verify data
- Console logs throughout for debugging (prefixed with emojis: 🎲, 💾, ⚡, etc.)
- Test localStorage state persistence (can view in DevTools Storage tab)

## Code Patterns & Conventions

### Module Structure
Each JS module should:
1. Have a clear comment block at the top explaining its purpose
2. Define only functions related to its concern
3. Use async/await for database calls
4. Use descriptive function names that match UI actions

### Async/Database
- All Dexie calls are async - use `await` or `.then()`
- Always handle null returns (item might not exist)
- Database errors typically mean schema mismatch or logic error

### DOM Updates
- Avoid querying all elements; use data attributes (`data-*`)
- Use event delegation where practical
- Update state in database BEFORE updating UI (not the other way around)

### Naming
- Functions that display UI: `show*()`, `render*()`, `display*()`
- Functions that modify data: `create*()`, `update*()`, `delete*()`, `save*()`
- Variables for DOM elements: `*Elem`, `*El`, or just descriptive names

## Important Implementation Notes

### State Management
The app tracks three pieces of state globally:
1. `currentCampaignId` - Active campaign
2. `currentSessionId` - Current session within that campaign
3. `currentCharacterId` - Currently viewed character

This is persisted to localStorage and restored on app load. When a user switches campaigns, both campaignId and sessionId are updated together.

### Twist Counter
- Stored per-session in `sessions.twistCounter`
- Increments when oracle roll produces doubles (equal dice)
- At 3, triggers a twist event (random 2d6 roll on Twist Table)
- Resets to 0 after twist
- Visual indicator shows current count and proximity to twist

### Get Inspired Flavor Selection
Users select which "flavor" (theme) for Get Inspired tables:
- Stored in `userPreferences` collection with key 'getInspiredFlavor'
- Multiple flavors can exist for future supplements
- Currently only "core-inspired" flavor exists

### Supplement/Table Scalability
Tables are loaded from registry, not hardcoded:
- Registry (`table-registry.js`) is single source of truth for available supplements
- Each supplement can define multiple tables
- UI dynamically builds dropdown of available tables based on selected supplement
- This allows adding new supplements without modifying UI code

### Character & NPC Tags
Both characters and NPCs use descriptive "tags" instead of numeric stats (per Loner design):
- Tags are stored as comma-separated strings
- When displaying, split on comma and show as badges
- No validation of tag content - pure narrative

## Common Development Tasks

### To Add a New Content Type (e.g., "Factions")
1. Add to Dexie schema in `database.js` (e.g., `factions: '++id, campaignId, name, status'`)
2. Increment database version
3. Add CRUD functions in `database.js`
4. Create `js/factions.js` with UI functions
5. Add navigation button in `index.html`
6. Wire up in `main.js` for view management

### To Modify Table Structure
1. Update relevant table file in `data/tables/` (e.g., `core-loner.js`)
2. No database changes needed unless storing custom user tables
3. Reload to pick up new tables

### To Fix a Data Bug
1. Inspect database via DevTools → Application → IndexedDB
2. Verify data structure matches schema
3. If schema is wrong, check version in `database.js` and increment if needed
4. Clear IndexedDB in DevTools and refresh to trigger fresh initialization

## Roadmap Context

The application follows Roberto's phased development plan:

- **Phase 1 (Complete):** Foundation - campaigns, characters, oracle, scenes, conflicts
- **Phase 2 (Complete):** Sessions, note editor with auto-insertion
- **Phase 3 (Complete):** Content management (NPCs, locations, threads, events)
- **Phase 4 (Current):** Advanced - roll tables, supplements, Get Inspired flavors, extensible table system
- **Phase 5 (Planned):** Polish - keyboard shortcuts, mobile UX, drag-and-drop, tutorial

Current focus is refinement within Phase 4 features and user experience improvements.

## Known Patterns to Follow

1. **Empty State Pattern** - When a list is empty, show helpful empty state UI (not just a blank page)
2. **Two-Step Selection** - For UI with many items (like tables), use two-step selection (e.g., supplement first, then table)
3. **Auto-Insert from Tools** - Game tools (oracle, tables) can auto-insert results into active note
4. **Session Statefulness** - Loading a session populates all displays with that session's data
5. **Immutable State Updates** - Always save to database before updating UI

## Tips for Productive Development

- Check `SESSION_HANDOFF.md` for very recent context about Roberto's development approach and learnings
- Roberto prefers clear architectural decisions with reasoning, not abstract theory
- Test database changes thoroughly - schema bugs can corrupt data
- Use browser DevTools console heavily; check for any red errors or warnings
- Mobile responsiveness is desired but desktop-first focus
- Loner rulebook (`loner-en.md`) is authoritative for game mechanics; refer to it when implementing rules
