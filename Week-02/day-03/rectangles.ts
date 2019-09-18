'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

let colors: string[] = ['purple', 'red', 'green', 'yellow'];

// 

for (let i = 0; i < 4; i++){
    ctx.fillStyle = colors[i];
    ctx.fillRect(15*(i+1),15*(i+1),20*(i+1),20*(i+1));

}

