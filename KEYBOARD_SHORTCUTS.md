# Keyboard Shortcuts - Loner Assistant v2.0

All keyboard shortcuts use **Alt + Key** combinations for quick access during gameplay.

## Gameplay Shortcuts 🎮

| Shortcut | Action | Notes |
|----------|--------|-------|
| **Alt + O** | Roll Oracle | Consult the Oracle with current Advantage/Disadvantage modifier |
| **Alt + T** | Open Table Manager | Roll Adventure Maker, Get Inspired, or other supplemental tables |
| **Alt + W** | Trigger Twist | Force a Twist event (normally triggered at 3 doubles) |

## Editing Shortcuts 📝

| Shortcut | Action | Notes |
|----------|--------|-------|
| **Alt + N** | Focus Note Editor | Jump directly to the session notes editor and scroll it into view |
| **Alt + S** | Save Notes | Manually save current session notes (also auto-saves) |

## Help & Discovery 🆘

| Shortcut | Action | Notes |
|----------|--------|-------|
| **Alt + ?** | Show Shortcuts Help | Display this complete list of available shortcuts in a modal |

---

## Design Notes

- **Why Alt key?** Alt combinations are less likely to conflict with browser shortcuts and don't interfere with normal typing.
- **Session requirement:** Gameplay shortcuts (Oracle, Twist, Tables) require an active session. You'll get an error message if you try them without a session.
- **Visual hints:** Hover over buttons to see shortcut hints in tooltips.
- **Help button:** A ⌨️ Shortcuts button is always visible in the Session Notes header for quick reference.

## Implementation Details

The shortcuts system is defined in `js/shortcuts.js` and automatically initializes when the app loads. No special setup needed!

### For Developers

To add new shortcuts, modify the `ShortcutsSystem.shortcuts` object in `js/shortcuts.js`:

```javascript
'x': {
  description: 'My new shortcut description',
  category: 'gameplay',  // or 'editing', 'help'
  action: () => {
    // Function to execute
  }
}
```

Categories determine:
- **gameplay** - Requires active session
- **editing** - Always available
- **help** - Always available
