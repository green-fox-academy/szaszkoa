// Create a simple HTML document with one button.
// If the user clicks the button 3 times, and 5 seconds is already elapsed since the page is loaded, a text should appear under the button:
// 5 seconds elapsed and clicked 3 times
// If the user starts clicking before the first 5 seconds, nothing should be printed

'use strict';

let button = document.querySelector('button');
let textContainer = document.querySelector('div');

let firstClickTime = 0;
let clickCounter = 0;

button.addEventListener('click', funkyClick);

function funkyClick(event) {
  firstClickTime += event.timeStamp;
  if (firstClickTime >= 5000) {
    clickCounter += 1;
    if (clickCounter >= 3) {
      textContainer.textContent = '5 seconds elapsed and clicked 3 times'
    };
  } else {
    button.removeEventListener('click', funkyClick);
  };
};