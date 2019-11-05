'use strict';
// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

let createCandieBTN = document.querySelector('.create-candies');
let buyLollipopsBTN = document.querySelector('.buy-lollypops');
let candyMAchineBTN = document.querySelector('.candy-machine');

let candyCounter = document.querySelector('.candies');
let lollyCounter = document.querySelector('.lollypops');
let resourceGeneration = document.querySelector('.speed');

let stats = {
  'candy': 0,
  'lollypop': 0,
  'candyGen': 0
};


// create one candy
createCandieBTN.addEventListener('click', candyClick);

function candyClick() {
  stats.candy += 1;
  candyCounter.innerHTML = stats.candy;
};

// buy lollipops
buyLollipopsBTN.addEventListener('click', lollyClick);

let temporalLollyCounter = 0;

function lollyClick() {
  if (stats.candy >= 100) {
    stats.candy -= 100;
    candyCounter.innerHTML = stats.candy;
    stats.lollypop += 1;
    lollyCounter.innerHTML += '🍭';
    temporalLollyCounter +=1;
    if(temporalLollyCounter === 10){
      stats.candyGen +=1;
      temporalLollyCounter = 0;
      resourceGeneration.innerHTML = stats.candyGen;
    };
  };
  return;
};

// automatic resource generation
let mainGameLoop = window.setInterval(() => {
  stats.candyGen == 0 ? undefined : autoLoop();
}, 1000);

function autoLoop() {
  stats.candy += stats.candyGen;
  candyCounter.innerHTML = stats.candy;
};

//make it rain function

candyMAchineBTN.addEventListener('click', makeItRain);

function makeItRain() {
  stats.candyGen == 0 ? undefined : stats.candyGen = stats.candyGen*10;
  resourceGeneration.innerHTML = stats.candyGen;
};
