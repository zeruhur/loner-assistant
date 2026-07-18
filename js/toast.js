/**
 * LONER ASSISTANT v2.0 - Toast Notifications
 *
 * Single consolidated toast/notification system. Replaces the two
 * previously-redundant implementations (ui.js's inline-styled
 * showAlert div, and the separate NotificationSystem toast object) -
 * this one owns the CSS classes already defined in css/style.css
 * (.toast-container, .toast, .toast-success, etc).
 */

let container = null;

function ensureContainer() {
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  return container;
}

const ICONS = {
  success: '✓',
  error: '✕',
  info: 'ℹ',
  warning: '⚠'
};

/**
 * Show a toast notification.
 * @param {string} message
 * @param {string} type - 'success' | 'error' | 'info' | 'warning'
 * @param {number} duration - ms, 0 = no auto-close
 */
export function showToast(message, type = 'info', duration = 3000) {
  const el = ensureContainer();

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${ICONS[type] || '•'}</span>
    <span class="toast-message">${message}</span>
    <button class="toast-close" title="Close">×</button>
  `;
  toast.querySelector('.toast-close').addEventListener('click', () => toast.remove());

  el.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);

  if (duration > 0) {
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  return toast;
}

// Alias kept for the many existing call sites written as UI.showAlert(message, type)
export const showAlert = showToast;

export function success(message, duration = 3000) {
  return showToast(message, 'success', duration);
}

export function error(message, duration = 4000) {
  return showToast(message, 'error', duration);
}

export function info(message, duration = 2500) {
  return showToast(message, 'info', duration);
}

export function warning(message, duration = 3500) {
  return showToast(message, 'warning', duration);
}

export function initToast() {
  ensureContainer();
}
