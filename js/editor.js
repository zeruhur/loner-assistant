/**
 * LONER ASSISTANT v2.0 - Note Editor Management
 *
 * All editor-related functions (Quill editor). Quill itself is loaded
 * as a classic script (lib/quill.min.js) before this module runs, so
 * it's available here as the global `Quill`.
 */

import { getState } from './state.js';
import { getSession, getCampaign, updateSessionNotes } from './db/database.js';
import { showAlert } from './toast.js';
import { formatTime } from './ui.js';
import { setTwistCounter } from './oracle.js';
import { displaySceneFrame } from './scenes.js';

let quillEditor = null;

/**
 * Initialize Quill rich text editor
 */
export function initializeEditor() {
  quillEditor = new Quill('#editor', {
    theme: 'snow',
    placeholder: 'Write your adventure here...',
    modules: {
      toolbar: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'color': [] }, { 'background': [] }],
        ['clean']
      ]
    }
  });

  console.log('📝 Editor initialized');
  return quillEditor;
}

/**
 * Load a session into the editor
 */
export async function loadSession(sessionId) {
  try {
    const session = await getSession(sessionId);
    console.log('Loading session into editor:', session);

    // Load notes into editor
    if (session.notes) {
      try {
        const notesContent = JSON.parse(session.notes);
        quillEditor.setContents(notesContent);
      } catch (e) {
        console.warn('Could not parse session notes:', e);
        quillEditor.setText('');
      }
    } else {
      quillEditor.setText('');
    }

    // Restore twist counter (without re-saving it back to the DB)
    if (session.twistCounter !== undefined) {
      setTwistCounter(session.twistCounter);
    }

    // Restore the current scene frame (Where/Who/What)
    displaySceneFrame(session);

    console.log('✅ Session loaded into editor:', session.name);
  } catch (error) {
    console.error('Error loading session:', error);
    throw error;
  }
}

/**
 * Save current session notes
 */
export async function saveNotes() {
  const state = getState();

  if (!state.sessionId) {
    console.warn('No active session');
    showAlert('No active session. Create a campaign first!', 'error');
    return;
  }

  if (!quillEditor) {
    console.error('Editor not initialized');
    showAlert('Editor not ready. Please refresh the page.', 'error');
    return;
  }

  try {
    const contents = quillEditor.getContents();
    const json = JSON.stringify(contents);

    await updateSessionNotes(state.sessionId, json);

    const saveStatus = document.getElementById('save-status');
    if (saveStatus) {
      saveStatus.textContent = `Saved at ${formatTime(new Date())}`;
      saveStatus.style.color = 'var(--success)';
    }

    showAlert('Notes saved', 'success');
    console.log('✅ Notes saved');
  } catch (error) {
    console.error('Error saving notes:', error);
    showAlert('Error saving notes: ' + error.message, 'error');
  }
}

/**
 * Auto-save notes every 30 seconds
 */
export function startAutoSave() {
  setInterval(async () => {
    const state = getState();
    if (state.sessionId && quillEditor && quillEditor.getLength() > 1) {
      await saveNotes();
    }
  }, 30000); // 30 seconds

  console.log('🔄 Auto-save enabled (every 30s)');
}

/**
 * Insert text into editor at cursor position
 */
export function insertIntoEditor(text) {
  if (!quillEditor) return;

  const range = quillEditor.getSelection() || { index: quillEditor.getLength() };
  quillEditor.insertText(range.index, text + '\n');
  quillEditor.setSelection(range.index + text.length + 1);
}

/**
 * Insert formatted content into editor
 */
export function insertFormattedContent(content) {
  if (!quillEditor) return;

  const range = quillEditor.getSelection() || { index: quillEditor.getLength() };

  // Insert the formatted content
  quillEditor.insertText(range.index, content.text, content.format || {});

  // Add a newline
  quillEditor.insertText(range.index + content.text.length, '\n');

  // Move cursor to end
  quillEditor.setSelection(range.index + content.text.length + 1);

  // Auto-save after insert
  setTimeout(() => saveNotes(), 500);
}

/**
 * Insert a styled block (for oracle results, etc.)
 */
export function insertBlock(title, content, color = null) {
  if (!quillEditor) return;

  const range = quillEditor.getSelection() || { index: quillEditor.getLength() };
  let currentIndex = range.index;

  // Insert title (bold)
  const header = `${title}: `;
  quillEditor.insertText(currentIndex, header, { bold: true, color: color });
  currentIndex += header.length;

  // Insert content (normal)
  quillEditor.insertText(currentIndex, content);
  currentIndex += content.length;

  // Add newline
  quillEditor.insertText(currentIndex, '\n');
  currentIndex += 1;

  // Move cursor to end
  quillEditor.setSelection(currentIndex);

  // Auto-save after insert
  setTimeout(() => saveNotes(), 500);
}

/**
 * Insert a divider line
 */
export function insertDivider() {
  if (!quillEditor) return;

  const range = quillEditor.getSelection() || { index: quillEditor.getLength() };
  quillEditor.insertText(range.index, '\n---\n\n');
  quillEditor.setSelection(range.index + 6);
}

/**
 * Get the editor instance
 */
export function getEditor() {
  return quillEditor;
}

/**
 * Export session notes as Markdown
 */
export async function exportNotesAsMarkdown() {
  try {
    const state = getState();
    if (!state.sessionId) {
      showAlert('No session loaded', 'error');
      return;
    }

    const session = await getSession(state.sessionId);
    if (!session) {
      showAlert('Session not found', 'error');
      return;
    }

    const campaign = await getCampaign(session.campaignId);

    // Get content from Quill
    const delta = quillEditor.getContents();
    const markdown = deltaToMarkdown(delta);

    // Add header with session info
    const header = `# ${session.name}\n**Campaign:** ${campaign.name}\n**Date:** ${new Date(session.date).toLocaleDateString()}\n\n---\n\n`;
    const fullMarkdown = header + markdown;

    // Download as file
    const filename = `${campaign.name.replace(/[^a-z0-9]/gi, '-')}-${session.name.replace(/[^a-z0-9]/gi, '-')}-${new Date().toISOString().split('T')[0]}.md`;
    downloadAsFile(fullMarkdown, filename, 'text/markdown');

    showAlert('Session exported as Markdown!', 'success');

  } catch (error) {
    console.error('Error exporting as Markdown:', error);
    showAlert('Failed to export as Markdown', 'error');
  }
}

/**
 * Export session notes as HTML
 */
export async function exportNotesAsHTML() {
  try {
    const state = getState();
    if (!state.sessionId) {
      showAlert('No session loaded', 'error');
      return;
    }

    const session = await getSession(state.sessionId);
    if (!session) {
      showAlert('Session not found', 'error');
      return;
    }

    const campaign = await getCampaign(session.campaignId);

    // Get HTML content from Quill
    const html = quillEditor.root.innerHTML;

    // Create full HTML document
    const fullHTML = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${session.name}</title>
  <style>
    body {
      font-family: Georgia, 'Times New Roman', serif;
      max-width: 800px;
      margin: 40px auto;
      padding: 20px;
      line-height: 1.6;
    }
    h1 { color: #333; border-bottom: 2px solid #333; padding-bottom: 10px; }
    .metadata { color: #666; font-style: italic; margin-bottom: 30px; }
    hr { border: none; border-top: 1px solid #ccc; margin: 30px 0; }
  </style>
</head>
<body>
  <h1>${session.name}</h1>
  <div class="metadata">
    <strong>Campaign:</strong> ${campaign.name}<br>
    <strong>Date:</strong> ${new Date(session.date).toLocaleDateString()}
  </div>
  <hr>
  ${html}
</body>
</html>`;

    // Download as file
    const filename = `${campaign.name.replace(/[^a-z0-9]/gi, '-')}-${session.name.replace(/[^a-z0-9]/gi, '-')}-${new Date().toISOString().split('T')[0]}.html`;
    downloadAsFile(fullHTML, filename, 'text/html');

    showAlert('Session exported as HTML!', 'success');

  } catch (error) {
    console.error('Error exporting as HTML:', error);
    showAlert('Failed to export as HTML', 'error');
  }
}

/**
 * Convert Quill Delta to Markdown
 */
function deltaToMarkdown(delta) {
  let markdown = '';
  const ops = delta.ops || [];

  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    if (!op.insert) continue;

    let text = op.insert;

    // Handle string inserts
    if (typeof text === 'string') {
      // Check for block-level formatting (applied to newlines)
      if (text === '\n' && op.attributes) {
        // Block formatting is applied to the newline character
        if (op.attributes.header === 1) {
          // Previous line was a header 1
          markdown = markdown.trimEnd() + '\n';
        } else if (op.attributes.header === 2) {
          markdown = markdown.trimEnd() + '\n';
        } else if (op.attributes.header === 3) {
          markdown = markdown.trimEnd() + '\n';
        } else if (op.attributes.list === 'bullet') {
          // Already prefixed with - in previous iteration
          markdown += '\n';
        } else if (op.attributes.list === 'ordered') {
          markdown += '\n';
        } else if (op.attributes.blockquote) {
          markdown += '\n';
        } else if (op.attributes['code-block']) {
          markdown += '\n';
        } else {
          markdown += '\n';
        }
      } else if (text !== '\n') {
        // Apply inline formatting to actual text
        let formattedText = text;

        if (op.attributes) {
          // Check if next op is a newline with block formatting
          const nextOp = ops[i + 1];
          const isBlockFormatted = nextOp && nextOp.insert === '\n' && nextOp.attributes;

          if (isBlockFormatted) {
            // Apply block-level prefix
            if (nextOp.attributes.header === 1) {
              formattedText = '# ' + formattedText;
            } else if (nextOp.attributes.header === 2) {
              formattedText = '## ' + formattedText;
            } else if (nextOp.attributes.header === 3) {
              formattedText = '### ' + formattedText;
            } else if (nextOp.attributes.list === 'bullet') {
              formattedText = '- ' + formattedText;
            } else if (nextOp.attributes.list === 'ordered') {
              formattedText = '1. ' + formattedText;
            } else if (nextOp.attributes.blockquote) {
              formattedText = '> ' + formattedText;
            } else if (nextOp.attributes['code-block']) {
              formattedText = '```\n' + formattedText + '\n```';
            }
          }

          // Apply inline formatting
          if (op.attributes.bold) formattedText = `**${formattedText}**`;
          if (op.attributes.italic) formattedText = `*${formattedText}*`;
          if (op.attributes.code) formattedText = `\`${formattedText}\``;
          if (op.attributes.strike) formattedText = `~~${formattedText}~~`;
          if (op.attributes.link) formattedText = `[${formattedText}](${op.attributes.link})`;
        }

        markdown += formattedText;
      } else {
        // Plain newline
        markdown += '\n';
      }
    }
  }

  return markdown;
}

/**
 * Download content as file
 */
function downloadAsFile(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
