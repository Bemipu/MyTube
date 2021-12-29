var getSelectedTab = (tab) => {
    var tabId = tab.id;
    var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);
    document.getElementById('download').addEventListener('click', () => sendMessage({ action: 'DOWNLOAD' }));
}
chrome.tabs.getSelected(null, getSelectedTab);