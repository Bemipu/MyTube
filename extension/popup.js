
var getSelectedTab = (tabs) => {
    var tab = tabs[0];
    var tabId = tab.id;
    var sendMessage = (messageObj) => chrome.runtime.sendMessage(messageObj);
    document.getElementById('download').addEventListener('click', () => {
        sendMessage({ action: 'DOWNLOAD', url: tab.url }); 
    });
}

chrome.tabs.query({ active: true, currentWindow: true }, getSelectedTab);
