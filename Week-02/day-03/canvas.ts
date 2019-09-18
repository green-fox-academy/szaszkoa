'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a rectangle

ctx.fillStyle = 'red';
ctx.fillRect(110, 110, 100, 100);

// Draw a circle
ctx.beginPath();
ctx.arc(150, 150, 50, 0, Math.PI * 1);
ctx.stroke();

