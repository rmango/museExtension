// var cursor = document.getElementById('injectedEl')[0];

// alert(cursor.textContent);

var div = document.createElement('div');
div.id = 'injectedEl';
div.style.position = 'fixed';
div.style.top = 0;
div.style.right = 0;
div.style.background = 'blue';
div.style.zIndex = 2147483647;
div.textContent = 'Injected!';

// TODO: add "script.js" to web_accessible_resources in manifest.json
div.src = chrome.runtime.getURL('inject.js');

div.onload = function() {
    this.remove();
};
document.body.appendChild(div);