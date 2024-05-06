// Content script to interact with WhatsApp Web page

// Listen for messages from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "filterChats") {
    const filterText = message.filterText;
    // Filter chats based on filterText
    const filteredChats = filterChats(filterText);
    // Send filtered chats back to popup
    chrome.runtime.sendMessage({
      action: "updateChatList",
      chatList: filteredChats,
    });
  }
});

// Function to filter chats based on filterText
function filterChats(filterText) {
  // Logic to filter chats
  // Dummy data for demonstration
  const chatList = [
    { name: "John Doe" },
    { name: "Jane Smith" },
    { name: "Alice Johnson" },
  ];
  if (filterText) {
    return chatList.filter((chat) =>
      chat.name.toLowerCase().includes(filterText.toLowerCase())
    );
  } else {
    return chatList;
  }
}
