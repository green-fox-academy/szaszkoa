'use strict';

let button = document.querySelector('button');
let textContainer = document.querySelector('div');

button.addEventListener('click', delayedText);

function delayedText() {
  setTimeout(() => {
    textContainer.textContent = '2 seconds have ellapsed'
  }, 2000);
};