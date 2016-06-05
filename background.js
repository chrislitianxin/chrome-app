/**
 * Creates a outlook window when the badge is clicked
 */
 chrome.browserAction.onClicked.addListener(function() {
    chrome.windows.create({'url': 'https://mail.live.com/m/', 'type': 'popup','width': 850, 'height': 800}, function(window) {
    });
 });
