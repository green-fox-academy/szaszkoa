// 'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// // ============================================================================
// // x = 400, y = 400

// lets draw a hexagoooon!

// this is the hexagon

let side: number = 20;

let x: number = canvas.width/2;
let y: number = canvas.height/2;
ctx.translate(x,y);

function hexagon(side){
    for(let i = 0; i<3;i++){
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(side,0);
        ctx.stroke();
        ctx.translate(side,0);
        ctx.rotate((Math.PI/180)*60);
        ctx.lineTo(side,0);
        ctx.stroke();
        ctx.translate(side,0);
        ctx.rotate((Math.PI/180)*60);
    }
}

for(let i= 0; i<5;i++){
    
}