chrome.contextMenus.create({
  id: "printToConsole",
  title: "Print to console",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "printToConsole") {
    chrome.tabs.sendMessage(tab.id, {
      action: "printToConsole",
      info: info,
    });
  }
});
