// Create an event listener which logs the current timestamp to the console once the button is clicked.
// When the button is clicked for the second or any other times no event listener should be called.
// Try to solve this two different ways.
// hint: take a look at the button attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button

'use strict';

let button = document.querySelector('button');
let originalTime = 0;
let  counter = 0;

button.addEventListener('click', timeLogger);

function timeLogger(event) {
  if (counter == 0) {
    counter = 1;
    originalTime += event.timeStamp;
    console.log(originalTime);
  } else {
    return;
  };
};