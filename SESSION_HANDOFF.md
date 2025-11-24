# Loner Assistant v 2.0 - Session Handoff Documentation

## Purpose & context

Roberto is developing Loner Assistant v2.0, a comprehensive web-based tool for playing the "Loner" solo RPG system (`loner-en.md`). This represents a complete modernization of an application he originally created years ago, rebuilding it with improved architecture while working within his JavaScript/HTML/CSS skill level. The project aims to create a full-featured digital companion that handles all aspects of solo RPG gameplay including campaign management, character creation, oracle mechanics, note-taking, and random content generation.
The application uses a client-side architecture with IndexedDB for data persistence and Dexie.js for database management. Roberto has chosen to avoid complex modern frameworks, instead building on familiar web technologies while adding modular organization and better data storage capabilities. The rebuild focuses on maintaining all existing functionality while adding significant new features like multiple campaign support, enhanced character sheets, comprehensive game mechanics, and automated content insertion.

## Current state

Roberto has successfully completed Phases 1-4 of development, systematically building from foundation features through advanced functionality. **Phase 5 (Polishing & UX Enhancements) is now beginning.**

The application includes:
- Complete campaign and character management system
- Full oracle mechanics implementation with twist counter
- Rich text editing with auto-insertion capabilities
- Comprehensive content management (NPCs, locations, narrative threads, event logs)
- Advanced roll tables system with extensible supplement support
- Adventure Maker tables, multiple Get Inspired flavors, and custom user tables
- Two-step table selection UI (supplement → table) that scales well

Recent work (Phase 4) focused on implementing a sophisticated table system with proper user interface organization and a two-step selection process for random tables. The codebase has evolved into a clean modular architecture with specialized modules (campaigns.js, characters.js, oracle.js, editor.js, npcs.js, locations.js, threads.js, events.js, tables.js, table-manager.js) handling distinct functionality areas.

**Phase 5 priorities** (in order): keyboard shortcuts → mobile responsiveness → visual feedback & polish → drag-and-drop reordering (optional) → tutorial/onboarding (conditional). See `_roadmap.md` for detailed Phase 5 strategy.

## Key learnings & principles

Roberto has demonstrated strong debugging skills and architectural thinking throughout the development process. He consistently identifies when code organization needs improvement, such as recognizing when too much logic was concentrated in main.js and requesting proper modular separation. His approach to user interface design shows careful consideration for scalability - specifically requesting the two-step interface for random tables rather than showing all tables at once.
The development process has revealed the importance of systematic debugging approaches, particularly for database-related issues like schema mismatches and initialization timing problems. Roberto has learned to balance feature richness with maintainable code structure, and shows good judgment in choosing simpler technical solutions over complex ones when they meet his needs effectively.

## Approach & patterns

Roberto works through development in structured phases, completing foundational features before moving to advanced functionality. He takes a methodical approach to debugging, working through issues systematically and requesting comprehensive code reviews when problems accumulate. His development style involves implementing core functionality first, then polishing with enhanced user experience features like improved empty states, keyboard shortcuts, and loading indicators.
He demonstrates good architectural instincts, recognizing when code needs refactoring for better maintainability and requesting clean separation of concerns across modules. Roberto provides clear, specific feedback on functionality and interface positioning, and isn't afraid to request changes when initial implementations don't match his vision for user experience.

## Tools & resources

The application stack consists of vanilla JavaScript, HTML, and CSS for the core functionality, with IndexedDB and Dexie.js handling data persistence. The modular architecture includes specialized files for different functional areas (campaigns.js, characters.js, oracle.js, editor.js, npcs.js, locations.js, threads.js, events.js, tables.js) with main.js serving as initialization and coordination layer.
The system integrates various RPG content including Adventure Maker tables for complete adventure generation, multiple Get Inspired flavors for different thematic word sets, and extensible support for supplemental random tables from future game supplements. The application includes comprehensive CRUD operations, timeline visualization, session management, and automated event logging throughout all major game actions.
