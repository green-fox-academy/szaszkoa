'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

// Returns a random integer between min and max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
ctx.fillStyle = 'black';
ctx.fillRect(0,0,canvas.width,canvas.height);

for(var i= 0; i < 1000; i++){
    let randomColor = getRandomInt(0,255)
    ctx.fillStyle = 'rgb('+randomColor+','+randomColor+','+randomColor+')';
    ctx.fillRect(getRandomInt(0,600),getRandomInt(0,400),2,2)
}
