// Handle filter button click event
document.getElementById("filterBtn").addEventListener("click", () => {
  const filterText = document.getElementById("filterInput").value;
  // Send filterText to content script
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: "filterChats",
      filterText: filterText,
    });
  });
});

// Receive updated chat list from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "updateChatList") {
    const chatList = message.chatList;
    const chatListContainer = document.getElementById("chatList");
    chatListContainer.innerHTML = ""; // Clear previous list
    chatList.forEach((chat) => {
      const chatItem = document.createElement("div");
      chatItem.textContent = chat.name;
      chatListContainer.appendChild(chatItem);
    });
  }
});
