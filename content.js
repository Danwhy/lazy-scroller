console.log("Chrome Extension running");

chrome.storage.local.get(function(items){

  if (Object.keys(items).length) {
    localStorage.setItem('webgazerGlobalData', JSON.stringify(items));
  };
});

window.addEventListener('storage', function(e){

  if (localStorage.getItem('webgazerGlobalData')) {
    chrome.storage.local.set(JSON.parse(localStorage.getItem('webgazerGlobalData')), function(){
      localStorage.removeItem('webgazerGlobalData');
    });
  }
});
