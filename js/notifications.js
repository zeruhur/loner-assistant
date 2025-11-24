/**
 * LONER ASSISTANT v2.0 - Notification System
 *
 * Provides toast notifications for user feedback
 * Success, error, info, and warning messages
 */

const NotificationSystem = {
  /**
   * Toast notification container (auto-created)
   */
  container: null,

  /**
   * Initialize notification container
   */
  init() {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.id = 'toast-container';
      this.container.className = 'toast-container';
      document.body.appendChild(this.container);
    }
  },

  /**
   * Show a toast notification
   * @param {string} message - The notification message
   * @param {string} type - 'success', 'error', 'info', 'warning'
   * @param {number} duration - How long to show (ms), 0 = no auto-close
   */
  show(message, type = 'info', duration = 3000) {
    if (!this.container) this.init();

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    // Icon mapping
    const icons = {
      success: '✓',
      error: '✕',
      info: 'ℹ',
      warning: '⚠'
    };

    toast.innerHTML = `
      <span class="toast-icon">${icons[type] || '•'}</span>
      <span class="toast-message">${message}</span>
      <button class="toast-close" onclick="this.parentElement.remove()" title="Close">×</button>
    `;

    this.container.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Auto-close after duration
    if (duration > 0) {
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
      }, duration);
    }

    return toast;
  },

  /**
   * Show success notification
   */
  success(message, duration = 3000) {
    return this.show(message, 'success', duration);
  },

  /**
   * Show error notification
   */
  error(message, duration = 4000) {
    return this.show(message, 'error', duration);
  },

  /**
   * Show info notification
   */
  info(message, duration = 2500) {
    return this.show(message, 'info', duration);
  },

  /**
   * Show warning notification
   */
  warning(message, duration = 3500) {
    return this.show(message, 'warning', duration);
  }
};

// Alias for backward compatibility with UI.showAlert
function showNotification(message, type = 'info') {
  NotificationSystem.show(message, type);
}
