'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.

let colors: string[] = ['pink', 'red', 'purple', 'green', 'tomato', 'orange'];

function lineMadness(x,y){
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+50,y);
    ctx.stroke();
}

for( let i: number = 80; i>0; --i){
    ctx.strokeStyle = colors[i]
    lineMadness(7*i, 5*i);
}

