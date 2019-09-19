'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// ============================================================================
// x = 400, y = 400

let interval: number = 10;
let segments: number =256;
let variable: number = Math.sqrt(segments)

for(let k=0;k<variable;k++){
    for(let j=0; j<variable;j++){
        for(let i = 0; i < (canvas.width/interval); i++){
            ctx.strokeStyle = "purple"
            ctx.beginPath();
            ctx.moveTo((j*canvas.width/variable)+(i*interval)/variable,k*canvas.width/variable);
            ctx.lineTo((j*canvas.width/variable)+(canvas.width/variable),i*interval/variable+(k*canvas.width/variable));
            ctx.stroke();
            ctx.strokeStyle = "green"
            ctx.beginPath();
            ctx.moveTo(k*canvas.width/variable,(j*canvas.width/variable)+(i*interval)/variable));
            ctx.lineTo(i*interval/variable+(k*canvas.width/variable),(j*canvas.width/variable)+(canvas.width/variable));
            ctx.stroke();
        };
    };
};
