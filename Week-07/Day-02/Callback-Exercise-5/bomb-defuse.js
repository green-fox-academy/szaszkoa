'use strict';
    
    // Create a timeout that will set the display to "Bomb exploded" in 10 seconds
    // If you click on the button set the display to "Bomb defused" and stop the timeout
    // Extra: create an interval which will update the remaining seconds in the display

let display = document.getElementsByClassName('display')[0];
let button = document.getElementsByTagName('button')[0];

button.addEventListener('click', () =>{
  display.innerHTML = 'Bomb defused';
  clearInterval(bombTimer);
})

let counter = 10;
let bombTimer = setInterval(() => {
  counter -= 1;
  display.innerHTML = counter;
  if(counter == 0){
    display.innerHTML = 'Bomb Exploded';
    clearInterval(bombTimer)
  };
}, 1000)