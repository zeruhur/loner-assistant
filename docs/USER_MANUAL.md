# Loner Assistant - User Manual

Welcome to the **Loner Assistant**, your digital companion for playing the Loner solo RPG. This guide will help you navigate the application and make the most of its features.

## Table of Contents

- [Loner Assistant - User Manual](#loner-assistant---user-manual)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Interface Overview](#interface-overview)
  - [Managing Your Game](#managing-your-game)
    - [Campaigns](#campaigns)
    - [Sessions](#sessions)
    - [Characters](#characters)
  - [Playing the Game](#playing-the-game)
    - [The Oracle](#the-oracle)
    - [Twist Counter](#twist-counter)
    - [Conflict Resolution](#conflict-resolution)
    - [Scene Management](#scene-management)
  - [World Building](#world-building)
  - [Tools \& Tables](#tools--tables)
    - [Adventure Maker](#adventure-maker)
    - [Get Inspired](#get-inspired)
    - [Random Tables](#random-tables)
  - [Import/Export](#importexport)
    - [Note Exporting](#note-exporting)
    - [Exporting (Data Backup)](#exporting-data-backup)
    - [Importing](#importing)
  - [Keyboard Shortcuts](#keyboard-shortcuts)
  - [Mobile Usage](#mobile-usage)

---

## Getting Started

Loner Assistant runs directly in your browser. There is no login or server; all your data is stored safely on your device using your browser's local storage (IndexedDB).

**Note:** If you clear your browser's "Site Data" or "Cookies" for this site, you may lose your campaigns.

## Interface Overview

The application is divided into several views, accessible via the top navigation bar:

- **Play**: The main dashboard where you spend most of your game time. It contains the Oracle, your Session Notes, and quick access to active character info.
- **Campaigns**: Manage your different adventures.
- **Characters**: Create and edit your protagonists.
- **NPCs / Locations / Threads / Events**: Manage your world content.
- **Tools**: Access all roll tables and supplements.

## Managing Your Game

### Campaigns

A **Campaign** is the container for your story. It holds all your sessions, characters, and world data.

- Go to the **Campaigns** tab to create a new campaign.
- Click "Select" on a campaign to make it active.

### Sessions

A **Session** represents a single sitting or chapter of your story.

- In the **Play** view, the **Current Session Card** at the top displays your active session.
- Use the "Manage Sessions" button to create or switch sessions.
- **Session Notes** are auto-saved as you type.

### Characters

Your **Protagonist** is the main character of your story.

- Go to the **Characters** tab to create a character.
- Characters use **Tags** (Concept, Skills, Frailty, Gear) instead of numbers.
- You can mark a character as "Active" to see them in the Play view sidebar.

## Playing the Game

### The Oracle

The **Oracle** is the heart of Loner. It answers your questions to drive the story.

1. **Ask a Yes/No question** about the situation.
2. Select a modifier if applicable:
    - **Advantage**: Favorable conditions.
    - **Disadvantage**: Unfavorable conditions.
3. Click **Consult Oracle** (or press `Alt + O`).
4. The result will be displayed (e.g., "Yes, but...", "No, and...").

### Twist Counter

The app automatically tracks **Twists**.

- When you roll doubles on the Oracle, the Twist Counter increases.
- At **3**, a Twist is triggered automatically.
- You can also manually **Force Twist** (`Alt + W`) if the narrative demands it.

### Conflict Resolution

Use the **Conflict** panel in the Play view to track dangerous situations.

1. Enter Opponent Name and Luck (default 6).
2. Click **Start Conflict**.
3. Use the **Roll** button to resolve rounds. The app tracks Luck for both you and the opponent.

### Scene Management

Use the **Scene** panel to roll for the next scene setup. It helps determine if the next scene is "Expected", "Altered", or "Interrupted".

## World Building

Keep track of your evolving world using the dedicated tabs:

- **NPCs**: People you meet. Add tags to define them.
- **Locations**: Places you visit.
- **Threads**: Open storylines or quests. Mark them as "Active", "Resolved", or "Abandoned".
- **Events**: A timeline of major happenings in your story.

## Tools & Tables

### Adventure Maker

Located in the **Play** view sidebar (and Tools tab), this helps you generate a premise for your adventure:

- Roll for **Setting**, **Tone**, **Things**, **Opposition**, and **Actions**.
- Click **Roll Complete Adventure** for a full prompt.

### Get Inspired

Need a spark? Click **Random Prompt** in the Get Inspired panel for a two-word prompt (Verb + Noun).

- **Flavor**: Use the ⚙️ icon to change the "flavor" of the prompts (e.g., Fantasy, Sci-Fi, Horror).

### Random Tables

The **Table Manager** allows you to roll on any table from loaded supplements.

1. Select a **Supplement** (e.g., Core Loner) from the dropdown.
2. The available tables for that supplement will appear.
3. Click on a **Table** button to roll.
4. The result is shown and can be pasted into your notes.

## Import/Export

You can export and import your data to back it up or move it between devices.

### Note Exporting
You can export just the text content of your current session notes:
- **Markdown**: Click **Export > Markdown** in the Session Notes header to download as a `.md` file.
- **HTML**: Click **Export > HTML** in the Session Notes header to download as a `.html` file.

### Exporting (Data Backup)
- **Session**: In the Play view, click **Export** on the Current Session Card to save the current session data as a JSON file.
- **Campaign**: In the Tools view, click **Export Campaign** to save the entire current campaign (including all sessions, NPCs, etc.).
- **Full Backup**: In the Tools view, click **Export All Data** to save a complete backup of the entire database.

### Importing
- In the Tools view, click **Import Data**.
- Select the type of import (Session, Campaign, or Full Database).
- Choose the JSON file you previously exported.
- **Warning**: Importing a Full Database backup will **replace** all existing data!

## Keyboard Shortcuts

| Shortcut | Action | Notes |
|----------|--------|-------|
| **Alt + O** | Roll Oracle | Consult the Oracle with current modifier |
| **Alt + T** | Open Table Manager | Quick access to tables |
| **Alt + W** | Trigger Twist | Force a Twist event |
| **Alt + N** | Focus Note Editor | Jump to notes |
| **Alt + S** | Save Notes | Manually save notes |
| **Alt + ?** | Show Shortcuts | View help |

## Mobile Usage

Loner Assistant is optimized for mobile devices.

- **Navigation**: The menu becomes a hamburger menu on smaller screens.
- **Layout**: The 3-column Play view stacks into a single column.
- **Touch**: Buttons are sized for touch interaction.
- **Add to Home Screen**: You can add the page to your mobile home screen for a full-screen app-like experience.
