/**
 * LONER ASSISTANT v2.1 - UI Helper Functions
 *
 * Simple functions for showing/hiding views, modals, etc.
 * No fancy frameworks - just plain JavaScript!
 */

import { showAlert } from './toast.js';

export { showAlert };

/**
 * Toggle mobile navigation menu
 */
export function toggleNavMenu() {
  const navMenu = document.getElementById('nav-menu');
  const hamburgerBtn = document.querySelector('.hamburger-menu');

  if (navMenu) {
    navMenu.classList.toggle('open');
  }
  if (hamburgerBtn) {
    hamburgerBtn.classList.toggle('active');
  }
}

/**
 * Close mobile navigation menu when a nav button is clicked
 */
export function closeNavMenu() {
  const navMenu = document.getElementById('nav-menu');
  const hamburgerBtn = document.querySelector('.hamburger-menu');

  if (navMenu) {
    navMenu.classList.remove('open');
  }
  if (hamburgerBtn) {
    hamburgerBtn.classList.remove('active');
  }
}

/**
 * Show a specific view and hide others
 */
export function showView(viewName) {
  // Close mobile nav menu when view is selected
  closeNavMenu();

  // Hide all views
  const views = document.querySelectorAll('.view');
  views.forEach(view => view.classList.remove('active'));

  // Show selected view
  const targetView = document.getElementById(`view-${viewName}`);
  if (targetView) {
    targetView.classList.add('active');
  }

  // Update navigation buttons
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(btn => {
    if (btn.dataset.view === viewName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Sync URL hash for deep-linking / back-button support
  if (location.hash !== `#${viewName}`) {
    history.replaceState(null, '', `#${viewName}`);
  }

  // Load view-specific content. These loader functions live in their
  // own entity modules; they're reached via the curated window-exposed
  // set (see main.js) rather than importing every entity module here,
  // to avoid a circular-import tangle between ui.js and the entity modules.
  switch (viewName) {
    case 'campaigns':
      if (typeof window.loadCampaignsList === 'function') window.loadCampaignsList();
      break;
    case 'characters':
      if (typeof window.loadCharactersList === 'function') window.loadCharactersList();
      break;
    case 'npcs':
      if (typeof window.loadNPCsList === 'function') window.loadNPCsList();
      break;
    case 'locations':
      if (typeof window.loadLocationsList === 'function') window.loadLocationsList();
      break;
    case 'threads':
      if (typeof window.loadThreadsList === 'function') window.loadThreadsList();
      break;
    case 'events':
      if (typeof window.loadEventTimeline === 'function') window.loadEventTimeline();
      break;
    case 'tools':
      if (window.TableManager && window.TableManager.render) {
        window.TableManager.render();
      }
      break;
  }
}

/**
 * Show a modal dialog
 */
export function showModal(title, content) {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  modalTitle.textContent = title;
  modalBody.innerHTML = content;

  modal.classList.remove('hidden');
}

/**
 * Close the modal
 */
export function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
}

/**
 * Confirm dialog
 */
export function confirmDialog(message) {
  return confirm(message);
}

/**
 * Format a date nicely
 */
export function formatDate(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }

  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  // Show relative time for recent dates
  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins} min ago`;
  if (diffHours < 24) return `${diffHours} hours ago`;
  if (diffDays < 7) return `${diffDays} days ago`;

  // Otherwise show actual date
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
  });
}

/**
 * Format time from Date object
 */
export function formatTime(date) {
  if (!date) return 'Unknown';
  const d = new Date(date);
  return d.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
}

/**
 * Escape HTML to prevent XSS
 */
export function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Set up navigation button handlers
 */
export function initializeNavigation() {
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      if (view) {
        showView(view);
      }
    });
  });
}

/**
 * Toggle element visibility
 */
export function toggleElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.toggle('hidden');
  }
}

/**
 * Update element content
 */
export function updateElement(elementId, content) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = content;
  }
}

/**
 * Render a list of items as cards
 */
export function renderCardList(containerId, items, renderFunction) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = '<p class="text-muted text-center">No items yet</p>';
    return;
  }

  container.innerHTML = items.map(item => renderFunction(item)).join('');
}

/**
 * Create a card HTML. `onClick` is a data-action value consumed by the
 * delegated click listener set up in main.js, not an inline onclick.
 */
export function createCard(title, description, footer, action, id) {
  return `
    <div class="card" data-action="${action}" data-id="${id ?? ''}">
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(description)}</p>
      ${footer ? `<div class="card-footer">${footer}</div>` : ''}
    </div>
  `;
}

/**
 * Show loading indicator
 */
export function showLoading(message = 'Loading...') {
  const loading = document.createElement('div');
  loading.id = 'loading-indicator';
  loading.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--bg-primary);
    padding: 2rem 3rem;
    border-radius: var(--radius);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10000;
    text-align: center;
  `;
  loading.innerHTML = `
    <div style="font-size: 2rem; margin-bottom: 1rem;">⏳</div>
    <div>${message}</div>
  `;
  document.body.appendChild(loading);
}

/**
 * Hide loading indicator
 */
export function hideLoading() {
  const loading = document.getElementById('loading-indicator');
  if (loading) {
    loading.remove();
  }
}

/**
 * Show an empty state message in a container
 * @param {string} containerId - ID of container to fill
 * @param {string} icon - Emoji icon (e.g., "📋")
 * @param {string} title - Title of empty state
 * @param {string} message - Description message
 * @param {string} actionHTML - Optional HTML for action button
 */
export function showEmptyState(containerId, icon, title, message, actionHTML = '') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="empty-state">
      <div class="empty-state-icon">${icon}</div>
      <div class="empty-state-title">${title}</div>
      <div class="empty-state-message">${message}</div>
      ${actionHTML ? `<div class="empty-state-action">${actionHTML}</div>` : ''}
    </div>
  `;
}

/**
 * Toggle panel collapse state
 * @param {string} panelId - The panel ID to toggle
 */
export function togglePanel(panelId) {
  const panel = document.querySelector(`[data-panel-id="${panelId}"]`);
  if (!panel) return;

  // Toggle collapsed class
  const wasCollapsed = panel.classList.contains('collapsed');
  panel.classList.toggle('collapsed');

  // Save state to localStorage
  const isCollapsed = panel.classList.contains('collapsed');
  savePanelState(panelId, isCollapsed);

  // Load content when expanding certain panels
  if (wasCollapsed && !isCollapsed) {
    switch (panelId) {
      case 'npcs':
        if (typeof window.showNPCPanel === 'function') window.showNPCPanel();
        break;
      case 'locations':
        if (typeof window.showLocationPanel === 'function') window.showLocationPanel();
        break;
      case 'threads':
        if (typeof window.showThreadPanel === 'function') window.showThreadPanel();
        break;
      case 'events':
        if (typeof window.showEventPanel === 'function') window.showEventPanel();
        break;
    }
  }
}

/**
 * Save panel collapsed state to localStorage
 * @param {string} panelId - The panel ID
 * @param {boolean} isCollapsed - Whether panel is collapsed
 */
export function savePanelState(panelId, isCollapsed) {
  try {
    const panelStates = JSON.parse(localStorage.getItem('panelStates') || '{}');
    panelStates[panelId] = isCollapsed;
    localStorage.setItem('panelStates', JSON.stringify(panelStates));
  } catch (error) {
    console.error('Error saving panel state:', error);
  }
}

/**
 * Restore panel collapsed states from localStorage
 */
export function restorePanelStates() {
  try {
    const panelStates = JSON.parse(localStorage.getItem('panelStates') || '{}');

    Object.keys(panelStates).forEach(panelId => {
      const panel = document.querySelector(`[data-panel-id="${panelId}"]`);
      if (panel) {
        if (panelStates[panelId]) {
          panel.classList.add('collapsed');
        } else {
          panel.classList.remove('collapsed');
        }
      }
    });
  } catch (error) {
    console.error('Error restoring panel states:', error);
  }
}

// Ctrl/Cmd keyboard shortcuts (distinct scheme from the Alt+key
// ShortcutsSystem in shortcuts.js - both are preserved as-is).
document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + O = Open Oracle
  if ((e.ctrlKey || e.metaKey) && e.key === 'o') {
    e.preventDefault();
    if (typeof window.rollOracle === 'function') {
      window.rollOracle();
    }
  }

  // Ctrl/Cmd + S = Save Notes
  if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    e.preventDefault();
    if (typeof window.saveNotes === 'function') {
      window.saveNotes();
      showAlert('Notes saved!', 'success');
    }
  }

  // Ctrl/Cmd + N = New Event
  if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
    e.preventDefault();
    if (typeof window.showNewEventForm === 'function') {
      window.showNewEventForm();
    }
  }
});
