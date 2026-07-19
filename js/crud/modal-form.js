/**
 * LONER ASSISTANT v2.1 - Shared modal-form wiring
 *
 * Every entity module (campaigns/characters/npcs/locations/threads/events/
 * sessions) used to hand-roll the same two patterns: open a modal containing
 * a <form>, then attach a submit listener after a 100ms timeout (needed
 * because the form doesn't exist in the DOM until showModal's innerHTML
 * assignment runs); and confirm-then-delete-then-refresh. Both are pulled
 * out here so entity modules only supply the form HTML and the per-entity
 * submit/delete logic.
 */

import { showModal, closeModal, confirmDialog } from '../ui.js';

/**
 * Show a modal containing a form, and wire its submit handler.
 * @param {string} title - Modal title
 * @param {string} formId - The <form id="..."> to attach to
 * @param {string} html - The modal body HTML (must contain the form)
 * @param {(form: HTMLFormElement) => Promise<void>} onSubmit
 */
export function openFormModal(title, formId, html, onSubmit) {
  showModal(title, html);

  setTimeout(() => {
    const form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      await onSubmit(form);
    });
  }, 100);
}

/**
 * Confirm, then delete, then (optionally) close an open detail/edit modal.
 * @param {string} message - Confirmation prompt
 * @param {() => Promise<void>} deleteFn
 * @param {{ closeModalFirst?: boolean }} [options] - closes the modal after
 *   a successful delete (named to match the call sites' intent: "this
 *   delete happened from inside a modal that should close")
 * @returns {Promise<boolean>} whether the delete happened
 */
export async function confirmAndDelete(message, deleteFn, { closeModalFirst = false } = {}) {
  if (!confirmDialog(message)) return false;
  await deleteFn();
  if (closeModalFirst) closeModal();
  return true;
}
