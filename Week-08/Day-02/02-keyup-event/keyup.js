'use strict';

// 1) Subscibe to keyup events on the global window object
// 2) Console log the event object and peek inside
// 3) Display the last pressed key's code as "Last pressed key code is: __"

window.addEventListener('keyup', keyListener);

function keyListener(event) {
  let display = document.querySelector('h1');
  display.textContent = `Last pressed key code is ${event.code}`;
  console.log(event);
};

// event.key = key value
// event.code = keyN for example when pressing N