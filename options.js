const COMMAND_NAME = "toggle-feature";

/**
 * Update the UI: set the value of the shortcut textbox.
 */
async function updateUI() {
  let commands = await browser.commands.getAll();
  for (let command of commands) {
    if (command.name === COMMAND_NAME) {
      document.querySelector("#shortcut").value = command.shortcut;
    }
  }
}

/**
 * Update the shortcut based on the value in the textbox.
 */
async function updateShortcut() {
  await browser.commands.update({
    name: COMMAND_NAME,
    shortcut: document.querySelector("#shortcut").value,
  });
}

/**
 * Reset the shortcut and update the textbox.
 */
async function resetShortcut() {
  await browser.commands.reset(COMMAND_NAME);
  updateUI();
}

/**
 * Update the UI when the page loads.
 */
document.addEventListener("DOMContentLoaded", updateUI);

/**
 * Handle update and reset button clicks
 */
document.querySelector("#update").addEventListener("click", updateShortcut);
document.querySelector("#reset").addEventListener("click", resetShortcut);
