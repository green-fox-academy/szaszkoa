'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]


let x: number = 10;

for(let i = 0; i < 20; ++i){
    ctx.fillStyle = 'purple';
    ctx.fillRect(x,x,i*10,i*10);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(x,x,i*10,i*10);
    x += i*10;
}