chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    file: "addScripts.js",
    runAt: "document_end",
  });
});
