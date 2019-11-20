'use strict';


var keyboardEvent = document.createEvent("KeyboardEvent");
var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";

keyboardEvent[initMethod](
  "keydown", // event type: keydown, keyup, keypress
  true,      // bubbles
  true,      // cancelable
  window,    // view: should be window
  false,     // ctrlKey
  false,     // altKey
  false,     // shiftKey
  false,     // metaKey
  40,        // keyCode: unsigned long - the virtual key code, else 0
  0          // charCode: unsigned long - the Unicode character associated with the depressed key, else 0
);



chrome.commands.onCommand.addListener(function (command) {
    alert('Command: ' + command);
    if(command == 'next-element') {
      //tab to next clickable element

    }

    alert(document.dispatchEvent(keyboardEvent));
});


chrome.runtime.onInstalled.addListener(function() {
    console.log("running");
    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log("The color is green.");
      });


    // var ime_api = chrome.input.ime;

    var context_id = -1;
    console.log("Initializing IME");



  });