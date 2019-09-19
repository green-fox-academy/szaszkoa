'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// ============================================================================
// x = 400, y = 400

//      ctx.rotate()
// ctx.translate()

let interval: number = 10;

 ctx.translate(canvas.width/2,canvas.height/2);
 for(let j = 0; j<4; j++){
    ctx.rotate(Math.PI/180*90);
    for (let i = 0; i<(canvas.width/interval/2);i++){
        ctx.strokeStyle = "green"
        ctx.beginPath();
        ctx.moveTo((1+i)*interval,0);
        ctx.lineTo(0,(canvas.height/2)-((i+1)*interval));
        ctx.stroke();
    }
}