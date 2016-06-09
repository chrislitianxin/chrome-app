/**
 * Creates a outlook window when the badge is clicked
 */

 var windowId = null;

 chrome.browserAction.onClicked.addListener(function() {
   // check if the app is already opened
   if(!windowId) {
    chrome.windows.create({'url': 'https://mail.live.com/m/', 'type': 'popup','width': 950, 'height': 800}, function(window) {
      windowId = window.id;
    });
  } else {
    chrome.windows.update(windowId, {'focused': true} , function(window) {});

  }
 });
