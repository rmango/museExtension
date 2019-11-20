//create the 'cursor' element that we will inject
var cursor = document.createElement('div');
cursor.id = 'injectedEl';
cursor.style.position = 'fixed';
cursor.style.top = 0;
cursor.style.right = 0;
cursor.style.zIndex = 2147483647;

var mouseImg = document.createElement('img');
mouseImg.src = chrome.runtime.getURL('img/cursor_15px.png');
mouseImg.style.width = '10';
cursor.appendChild(mouseImg);

cursor.onload = function() {
    this.remove();
};

document.body.appendChild(cursor);
//note: you can still use the cursor object to access it even after it's injected! yay!

//to make the cursor move

//todo add null check
cursor.style.top = parseInt(cursor.style.top) + 10 + 'px';

setInterval(function(){
  cursor.style.top = parseInt(cursor.style.top) + 10 + 'px';
  cursor.style.right = parseInt(cursor.style.top) + 10 + 'px';
}, 1000)