function printToConsole(info) {
  console.log(info.selectionText);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "printToConsole") {
    printToConsole(request.info);
  }
});
