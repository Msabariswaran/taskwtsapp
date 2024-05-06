// This script runs in the background and handles events
// such as opening tabs and managing data storage
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});
