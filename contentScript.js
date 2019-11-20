//create the 'cursor' element that we will inject
var cursor = document.createElement('div');
cursor.id = 'injectedEl';
cursor.style.position = 'fixed';
cursor.style.top = 0;
cursor.style.right = 0;
cursor.style.zIndex = 2147483647;
cursor.style.pointerEvents = 'none'; //hopefully to prevent cursor from blocking any clicks

var mouseImg = document.createElement('img');
mouseImg.src = chrome.runtime.getURL('img/cursor_15px.png');
mouseImg.style.width = '10';
cursor.appendChild(mouseImg);

cursor.onload = function() {
    this.remove();
};

document.body.appendChild(cursor);
//note: you can still use the cursor object to access it even after it's injected

//to make the cursor move

//todo add null check?
cursor.style.top = parseInt(cursor.style.top) + 10 + 'px';

var rect = cursor.getBoundingClientRect();
var el = document.elementFromPoint(rect.x, rect.y);


setInterval(function() {
  cursor.style.top = parseInt(cursor.style.top) + 10 + 'px';
  cursor.style.right = parseInt(cursor.style.top) + 10 + 'px';

  //click at location of cursor
  rect = cursor.getBoundingClientRect();
  var clickEvent = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': true,
    'screenX': rect.x - 5,
    'screenY': rect.y - 5
  });
  var mouseupEvent = new MouseEvent('mouseup', {
    'view': window,
    'bubbles': true,
    'cancelable': true,
    'screenX': rect.x - 5,
    'screenY': rect.y - 5
  });
  var mousedownEvent = new MouseEvent('mousedownEvent', {
    'view': window,
    'bubbles': true,
    'cancelable': true,
    'screenX': rect.x - 5,
    'screenY': rect.y - 5
  });

  el = document.elementFromPoint(rect.x, rect.y);
  el.dispatchEvent(mousedownEvent);
  el.dispatchEvent(mouseupEvent);
  el.dispatchEvent(clickEvent);

}, 1000);

// testing that we are actually clicking
document.body.addEventListener('click', function() {
  console.log('clicked');
}, true);


