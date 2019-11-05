// On the click of the button,
// Count the items in the list
// And display the result in the result element.

'use strict';

let button = document.querySelector('button');

button.addEventListener('click', countFunction);

function countFunction() {
  let countResult =  document.getElementsByTagName('li').length;
  let resultDisplay = document.querySelector('.result');
  resultDisplay.innerHTML = countResult;
};