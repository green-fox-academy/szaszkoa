'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

// 10:15AM

function toCenter(x,y){
        ctx.strokeStyle = "red"
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(canvas.width/2, canvas.height/2);
        ctx.stroke();
};

let incr: number = 20;

for(let i = 0; i <= (canvas.width/incr); ++i){
    toCenter(i*incr, 0);
    toCenter(i*incr, canvas.height);
};
for(let i = 0; i <= (canvas.height/incr); ++i){
    toCenter(0, i*incr);
    toCenter(canvas.width, i*incr);
};


// 10:29AM
