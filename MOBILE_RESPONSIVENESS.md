# Mobile Responsiveness Guide - Loner Assistant v2.0

## Overview

Loner Assistant is now fully responsive and optimized for all screen sizes: **desktop, tablet, and mobile** (down to 320px width).

## Responsive Breakpoints

The design uses **3 main breakpoints**:

| Breakpoint | Screen Size | Focus |
|-----------|------------|-------|
| **Desktop** | 1024px+ | Full 3-column layout (sidebar, main, sidebar) |
| **Tablet** | 768px - 1024px | Single-column stacked layout |
| **Mobile** | < 768px | Optimized for touch, smaller fonts |
| **Small Mobile** | < 480px | Extra compact, essentials only |
| **Touch Devices** | Any | 44px minimum button height (WCAG) |

## Key Responsive Features

### ✅ Navigation Bar
- **Desktop/Tablet**: Full horizontal nav buttons
- **Mobile**: Navbar wraps, buttons scroll horizontally (touch-friendly)
- **Small Mobile**: Version tag hidden, compact buttons

### ✅ Main Layout
- **Desktop**: 3-column grid (left sidebar | content | right sidebar)
- **Tablet+**: Stacks to single column
- **Mobile**: All content stacks vertically, full width

### ✅ Oracle Roller
- **Responsive controls**: Modifier buttons adapt to screen width
- **Touch-friendly**: Minimum 44px button height on touch devices
- **Readable results**: Font sizes scale down appropriately

### ✅ Notes Editor (Quill)
- **Desktop**: 400px minimum height
- **Tablet**: 300px height
- **Mobile**: 250px height, optimized toolbar
- **All**: Prevents iOS zoom (16px font size on input)

### ✅ Sidebars
- **Desktop**: Fixed width sidebars (250px left, 300px right)
- **Tablet+**: Full-width panels stacked below main content
- **Mobile**: Panels stack, full width with scroll support

### ✅ Quick Panels
- **Mobile**: Support smooth scrolling (`-webkit-overflow-scrolling: touch`)
- **All**: Flexible to adapt to content

### ✅ Buttons & Interactive Elements
- **Desktop**: Normal size with hover effects
- **Mobile/Touch**: Minimum 44px height/width
- **Touch devices**: Hover effects disabled to improve performance

### ✅ Forms & Inputs
- **All screens**: 16px font size (prevents iOS zoom on focus)
- **Full width** on mobile
- **Proper padding** for touch targets

## Testing Across Devices

### Desktop Testing
- Open DevTools (F12)
- Resize browser window
- Verify 3-column layout displays correctly

### Tablet Testing (iPad size)
- DevTools: Set viewport to 768px × 1024px
- Test: Can access all features
- Test: Keyboard shortcuts work

### Mobile Testing (iPhone size)
- DevTools: Set viewport to 375px × 667px
- Test: Navigation is accessible
- Test: Oracle roller is usable
- Test: Notes editor is functional
- Test: Tables can be scrolled

### Small Mobile Testing
- DevTools: Set viewport to 320px × 568px
- Test: All essential functions work
- Test: Text is readable
- Test: No horizontal scrolling needed

### Real Device Testing
- Test on actual iPhone/Android device
- Test on iPad/tablet
- Test touch interactions:
  - Buttons respond properly
  - No accidental touches
  - Swipe/scroll works smoothly

## Font Sizes Across Breakpoints

| Element | Desktop | Tablet | Mobile | Small Mobile |
|---------|---------|--------|--------|--------------|
| Body | 16px | 15px | 15px | 14px |
| H1 (Brand) | 1.5rem | 1.25rem | 1.1rem | 1rem |
| H2 (Section) | 1.25rem | 1.1rem | 1rem | - |
| H3 (Panel) | 1rem | 0.9rem | 0.9rem | 0.85rem |
| Button | 0.9rem | 0.85rem | 0.8rem | 0.8rem |
| Small Text | 0.8rem | 0.75rem | 0.7rem | 0.7rem |

All sizes are relative (rem) and scale with CSS variables.

## Spacing Across Breakpoints

| Variable | Desktop | Tablet | Mobile | Small Mobile |
|----------|---------|--------|--------|--------------|
| --space-lg | 1.5rem | 1rem | 0.75rem | N/A |
| --space-md | 1rem | 0.75rem | 0.75rem | 0.5rem |
| --space-sm | 0.5rem | 0.5rem | 0.5rem | 0.4rem |

Spacing automatically adjusts, so all layouts remain balanced.

## Known Optimizations

### Touch Device Detection
```css
@media (hover: none) and (pointer: coarse) {
  /* Touch-friendly overrides */
}
```
Uses `pointer: coarse` to detect touch devices and apply optimizations.

### iOS-Specific Fixes
- **Input zoom prevention**: 16px font size on inputs
- **Smooth scrolling**: `-webkit-overflow-scrolling: touch`
- **Safe area**: Respects notches and safe areas

### Performance
- No hover effects on touch devices (reduces repaints)
- Optimized font sizes to prevent layout shifts
- Responsive images and flexible containers

## What to Test

### Functionality Tests
- [ ] Can roll oracle on mobile
- [ ] Can access all tabs/views
- [ ] Can edit notes on mobile
- [ ] Can trigger twists
- [ ] Can roll tables
- [ ] Keyboard shortcuts work

### Viewport Tests
- [ ] 320px (small mobile)
- [ ] 480px (mobile)
- [ ] 768px (tablet portrait)
- [ ] 1024px (tablet landscape)
- [ ] 1400px+ (desktop)

### Touch Tests
- [ ] Buttons are easily tappable
- [ ] No accidental touches trigger actions
- [ ] Swipe/scroll is smooth
- [ ] Modals can be closed easily

### Browser Tests
- [ ] Chrome mobile
- [ ] Safari iOS
- [ ] Firefox mobile
- [ ] Samsung Internet

## CSS Variable System

The entire responsive design relies on CSS variables defined at `:root`:

```css
:root {
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
}

@media (max-width: 768px) {
  :root {
    --space-lg: 0.75rem;
    --space-md: 0.75rem;
  }
}
```

Changing these variables cascades throughout the entire design automatically.

## Future Enhancements

Potential improvements for Phase 6:
- Landscape mode optimizations for mobile
- Swipe gestures for navigation
- Offline PWA capabilities
- Haptic feedback for interactions
- Dark mode color adjustments for OLED screens
