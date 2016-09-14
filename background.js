// chrome.tabs.onUpdated.addListener(function(tabId, info, tab){
//   console.log(info.status);
//   if(info.status == 'complete'){
//   	console.log('go!');
//   	chrome.tabs.executeScript(tabId, {file: "my_script.js"});
//   }
// });

chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('clicked!');
  chrome.tabs.executeScript(tab.id, {file: "my_script.js"});
});