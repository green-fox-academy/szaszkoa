'use strict';

let cuteCat = 'http://d2ey50ql837fiq.cloudfront.net/rw/icon/383f6c59df6427ca1bcb8952713d161a77ff7bc8f8e5b2c1c5f017db840605ab?1473833602'
let prevImage = document.querySelector('img').getAttribute('src');
let greenFox = 'https://www.greenfoxacademy.com/'

console.log(prevImage);
document.querySelector('img').setAttribute('src', cuteCat);
document.getElementsByTagName('a')[0].setAttribute('href', greenFox)
document.getElementsByClassName('this-one')[0].disabled = true;
document.getElementsByClassName('this-one')[0].innerHTML = "Don't click me!"



