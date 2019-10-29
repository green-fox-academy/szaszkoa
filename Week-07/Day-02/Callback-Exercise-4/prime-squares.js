'use strict'

//   1: generate 100 divs to the <section> element and add index numbers to it as the element's textContent
//   2: Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is
//   3: Create a timer that keeps calling the prime validatior function until it reaches the end of elements
//    - the timer should fire every 100ms
//    - the timer should stop when there are no more elements left to be colored


let numberGenerator = () => {
  let numOfItems = 100;
  let parent = document.getElementsByTagName('section')[0];
  for (let i = 0; i < numOfItems; i++) {
    let newDiv = document.createElement('div');
    newDiv.innerText = i + 1;
    parent.appendChild(newDiv);
  };
};

const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
};

let primeChecker = (index) => {
  let numbersArray = document.getElementsByTagName('div');
    if (isPrime(numbersArray[index].innerText)){
      numbersArray[index].setAttribute('class', 'prime')
    } else {
      numbersArray[index].setAttribute('class', 'not-prime')
    };
};

numberGenerator();

let index = 0;
let superInterval = setInterval( () =>{
  primeChecker(index);
  index +=1
  if (index == 100){
    clearInterval(superInterval)
  }
}, 100)
