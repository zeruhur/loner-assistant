# Loner Assistant - Developer Manual

This guide provides technical documentation for developers working on the Loner Assistant codebase.

## 🏗️ Architecture Overview

Loner Assistant is built with a **Vanilla JavaScript** architecture, prioritizing simplicity and longevity.

- **Frontend**: Pure HTML, CSS, and JavaScript. No frameworks (React, Vue, etc.) are used.
- **Database**: [Dexie.js](https://dexie.org/) (v3.x) is used as a wrapper around IndexedDB for robust client-side storage.
- **Rich Text**: [Quill.js](https://quilljs.com/) is used for the session notes editor.
- **No Build Step**: The application runs directly in the browser. There is no Webpack, Vite, or compilation step required.

## 📂 Project Structure

```
loner-assistant/
├── index.html                    # Single-page application entry point
├── css/
│   └── style.css                 # Global styles (CSS variables, layout, components)
├── js/
│   ├── main.js                   # App initialization and global state
│   ├── database.js               # Dexie.js schema and data access layer
│   ├── ui.js                     # UI utilities (modals, tabs, helpers)
│   ├── oracle.js                 # Core game mechanics (Dice, Oracle, Twist)
│   ├── campaigns.js              # Campaign management logic
│   ├── sessions.js               # Session management logic
│   ├── characters.js             # Character sheet logic
│   ├── editor.js                 # Note editor integration
│   ├── tables.js                 # Roll table execution engine
│   ├── table-manager.js          # UI for selecting and rolling tables
│   └── ... (other feature modules)
├── data/
│   ├── table-registry.js         # Registry of available supplements
│   └── tables/                   # Individual table definition files
│       ├── core-loner.js         # Core rulebook tables
│       └── ...
└── lib/                          # Third-party libraries (Dexie.min.js)
```

## 💾 Database Schema

The database is defined in `js/database.js`. We use Dexie.js for versioned schema management.

**Key Collections:**

- `campaigns`: Stores campaign metadata.
- `sessions`: Stores individual play sessions.
- `characters`: Stores protagonist data (tags, bio).
- `npcs`, `locations`, `threads`, `events`: World building entities.
- `rollHistory`: Log of all oracle rolls.
- `tableRolls`: Log of all random table results.

**Schema Changes:**
To modify the schema, increment the version number in `database.js` and define the new schema. Dexie handles the migration automatically.

```javascript
db.version(4).stores({
    // ... existing stores
    newCollection: '++id, name, status'
});
```

## 🧩 Key Modules

### `main.js`

Handles app initialization, global state (`currentCampaignId`, `currentSessionId`), and navigation logic.

### `database.js`

Abstracts all IndexedDB operations. All other modules import functions from here (e.g., `db.campaigns.add(...)`) or use the exposed helper functions.

### `oracle.js`

Contains the logic for the Loner RPG mechanics:

- `rollOracle(modifier)`: Handles the Chance vs. Risk die logic.
- `updateTwistCounter()`: Manages the twist counter state.

### `table-manager.js` & `tables.js`

The system for random tables is data-driven.

- `tables.js` executes the rolls based on table definitions.
- `table-manager.js` handles the UI for selecting supplements and tables.

## 💻 Development Workflow

1. **Run Locally**: Simply open `index.html` in your browser.
    - Recommended: Use a simple local server (e.g., Live Server in VS Code) to avoid strict file protocol restrictions, though it works via `file://` for most features.
2. **Debug**: Use the browser's Developer Tools.
    - **Console**: Check for errors.
    - **Application > IndexedDB**: Inspect and manipulate the database directly.

## ➕ Adding New Tables

To add a new supplement or table:

1. Create a new file in `data/tables/` (e.g., `my-supplement.js`).
2. Define the tables using the standard format (see `core-loner.js`).
3. Register the supplement in `data/table-registry.js`.
4. Include the new script file in `index.html`.

## 🎨 Code Conventions

- **Naming**: Use camelCase for functions and variables.
- **Async/Await**: Use `async/await` for all database operations.
- **DOM**: Cache DOM elements where possible or use `document.getElementById` for unique elements.
- **State**: Do not store state in the DOM. Update the database first, then re-render the UI.

## 🤝 Contribution

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request.
