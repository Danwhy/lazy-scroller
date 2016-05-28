var scripts = ["webgazer.js", "scroll.js"];

function addScript(file) {

  function nextScript() {
    var nextFile = scripts[scripts.indexOf(file) + 1]

    if (nextFile) {
      addScript(scripts[scripts.indexOf(file) + 1]);
    } else {
      return;
    }
  }

  var scriptTag = document.createElement('script');
  scriptTag.src = chrome.extension.getURL(file);
  scriptTag.addEventListener('load', nextScript, false);
  document.head.appendChild(scriptTag);
}

addScript(scripts[0]);
