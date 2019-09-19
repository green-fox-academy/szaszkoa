'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// ============================================================================
// x = 400, y = 400

let interval: number = 20;

for(let i = 0; i < (canvas.width/interval); i++){
    ctx.strokeStyle = "purple"
    ctx.beginPath();
    ctx.moveTo(i*interval,0);
    ctx.lineTo(canvas.width,i*interval);
    ctx.stroke();
    ctx.strokeStyle = "green"
    ctx.beginPath();
    ctx.moveTo(0,i*interval);
    ctx.lineTo(i*interval,canvas.height);
    ctx.stroke();
}
