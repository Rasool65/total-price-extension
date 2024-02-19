chrome.runtime.onInstalled.addListener(function() {
    chrome.action.setPopup({ popup: "popup.html" });
  });
  
  chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.sendMessage(tab.id, { action: "runContentScript" });
  });
  