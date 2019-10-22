'use strict';

console.log('-------Scripts start here---------')

let king = document.getElementById('b325');
console.log(king);

console.log('--------businessLamp query----------')

let businessLamp = document.querySelectorAll(".big");
for (let i = 0; i < businessLamp.length; i++) {
  console.log(businessLamp[i]);
}

console.log('---------conceitedKing----------')

let conceitedKing = document.querySelectorAll('section > div');
for (let i = 0; i < conceitedKing.length; i++) {
  alert(conceitedKing[i].innerHTML);
}

console.log('----------noBusiness------------')

let noBusiness = document.querySelectorAll('div');
for (let i = 0; i < noBusiness.length; i++) {
  console.log(noBusiness[i]);
}
