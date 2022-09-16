/**
 * Fired when a registered command is activated using a keyboard shortcut.
 *
 * In this sample extension, there is only one registered command: "Ctrl+Shift+U".
 * On Mac, this command will automatically be converted to "Command+Shift+U".
 */

browser.commands.onCommand.addListener((command) => {
  console.log(command);
  let currentTabId;

  browser.tabs.query({ currentWindow: true, active: true }).then((tabs) => {
    let tab = tabs[0]; // Safe to assume there will only be one result
    currentTabId = tab.id;
    browser.windows.create({
      tabId: currentTabId,
    });
  });
});
