'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// canvas width(x)="600" height(y)="400"
// draw a box that has different colored lines on each edge.


let colors: string[] = ["black", 'blue', 'red', 'purple'];

ctx.strokeStyle = colors[0];
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.stroke();

ctx.strokeStyle = colors[3];
ctx.beginPath();
ctx.moveTo(100, 200);
ctx.lineTo(100, 100);
ctx.stroke();

ctx.strokeStyle = colors[1];
ctx.beginPath();
ctx.moveTo(200, 100);
ctx.lineTo(200, 200);
ctx.stroke();

ctx.strokeStyle = colors[2];
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(100, 200);
ctx.stroke();


/*
let size: number = 100;

for ( let i: number = 0; i < 4; ++i){
    let x: number = 100;
    let y: number = 100;

    ctx.strokeStyle = colors[1];
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y+size);
    ctx.stroke();
    x = x;
    y = y+size;
}

*/

/*
ctx.moveTo(size, size);
for( let i:number = 0; i >= 4; ++i){
    ctx.beginPath();
    ctx.strokeStyle = colors[i+1];
    ctx.lineTo(size, size);
    ctx.stroke();
}
*/
