# **Loner Assistant v2.1 - Path B Roadmap**

## **Step-by-Step Build Plan**

### **Phase 1: Foundation**
1. Set up project structure
2. Set up Dexie.js database
3. Create modern, clean UI layout (ditch old Bootstrap look)
4. Test that database works
6. Character sheet (proper, full-featured)
7. Oracle roller (with history)
8. Twist counter
9. Scene management
10. Conflict system (Harm & Luck)
11. Get Inspired / random tables

### **Phase 2: Extensions**
1. session management
2. Note editor with auto-insert

### **Phase 3: Content Management**

1. **NPC Manager**
2. **Location Manager**
3. **Narrative Threads**
4. Event Log


### **Phase 4: Advanced**

#### **Roll Tables**
Implement the Adventure Maker and other tables from Loner:
- Settings, Tones, Things tables
- Opposition, Actions tables
- Thematic Tables from various Loner supplements
- Custom user tables
- Quick roller with history
- Log the result both in the Notes and the Events Log
- Make this extensible, so we can update the tables in time, everytime I publish a new supplement

#### Make flavors for the Get Inspired function
Every Loner supplement has its custom version of the Get Inspired tables, we should offer them to the user to be selected which flavor they wants to use

**Why this?** Use all the amazing random generators from the Loner rulebook.

### **Phase 5: Polishing & UX Enhancements** (Current Phase)

Prioritized approach to refine the application for smooth, responsive gameplay.

#### **Priority 1: Keyboard Shortcuts** (High Impact, Low Effort)
Quick access to frequent actions during play sessions:
- `Alt+O` - Roll Oracle
- `Alt+T` - Roll Table
- `Alt+N` - Create new note entry
- `Alt+W` - Mark twist event
- Others as appropriate per section

**Why first?** Low complexity, high value for play experience. During active gameplay, keyboard shortcuts dramatically improve flow by reducing mouse dependency.

#### **Priority 2: Mobile Responsiveness** (High Impact, Medium Effort)
Ensure playable on tablets/phones during sessions:
- Oracle roller - full functionality on mobile
- Notes editor - readable and editable on small screens
- Table roller - accessible two-step selection
- Focus on tablet as baseline (iPad, large phones)
- Desktop-first implementation, mobile-friendly enhancements

**Why?** Players may want to use this tool in the field or away from desk. Tablet support especially valuable.

#### **Priority 3: Visual Feedback & Polish** (Medium Impact, Medium Effort)
Improve responsiveness perception:
- Loading states for rolls and database saves
- Toast notifications for success/error messages
- Subtle animations (button feedback, panel transitions, smooth scrolling)
- Better empty states ("No sessions yet — create one to get started")
- Improved hover effects and focus states for accessibility
- Consistent visual hierarchy and spacing

**Why?** Makes the app feel reactive and professional. Small details add up to better UX.

#### **Priority 4: Drag-and-Drop Reordering** (Lower Priority, Higher Effort)
Nice-to-have for organizing content:
- Reorder NPCs, threads, events
- Save new order to database
- Consider if this is actually needed vs. create/delete/re-sort by date

**Why it's lower?** Not critical to gameplay. Evaluate whether worth the complexity.

#### **Priority 5: Tutorial/Onboarding** (Conditional)
Only implement if tool will be used by others:
- First-run walkthrough (optional)
- Help panels or "?" buttons per section
- Introductory tooltips for unfamiliar UI

**Why conditional?** If this is just for Roberto's solo use, may not justify effort. Reassess based on actual audience.

---

## Phase 5 Strategy Notes

**Implementation Approach:**
1. Start with keyboard shortcuts - quick wins that improve daily usage
2. Test responsiveness as you go (resize browser, inspect on phone)
3. Add visual feedback incrementally (one notification system covers many cases)
4. Skip drag-and-drop unless explicitly requested
5. Evaluate tutorial/onboarding after collecting feedback

**Key Questions Before Starting:**
- Is this tool for solo use or will others use it?
- Which gameplay actions feel most friction-heavy?
- Is mobile support "nice to have" or not a priority?

## ** Project Structure**

```
loner-assistant-v2/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── database.js          ← All data storage
│   ├── ui.js                ← UI helpers
│   ├── oracle.js            ← Dice rolling
│   ├── campaigns.js         ← Campaign management
│   ├── sessions.js          ← Session management
│   ├── characters.js        ← Character sheets
│   ├── editor.js            ← Note editor
│   ├── tables.js            ← Roll tables
│   ├── npcs.js              ← NPCs management
│   ├── threads.js           ← Threads management
│   ├── locations.js          ← Locations management
│   └── main.js              ← Connects everything
├── data/
│   └── core-tables.js       ← Built-in Loner tables
└── lib/
    ├── dexie.min.js         ← Database library
    └── quill.min.js         ← Text editor
```



