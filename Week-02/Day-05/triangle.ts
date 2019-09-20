// 'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// // ============================================================================
// // x = 400, y = 400

// //lets draw a triangle!!


let strPointX: number = canvas.width/2
let strPointY: number = canvas.height/6
let triangleSize: number = 10
let bottomRow: number = 20

function triangle(sideSize){
    ctx.beginPath();
    ctx.moveTo(strPointX,strPointY);
    ctx.lineTo(strPointX+sideSize/2,strPointY+((Math.sqrt(3)/2)*sideSize));
    ctx.stroke();
    ctx.lineTo(strPointX+sideSize/2-sideSize, strPointY+((Math.sqrt(3)/2)*sideSize));
    ctx.stroke();
    ctx.lineTo(strPointX,strPointY)
    ctx.stroke();
}


for(let i = 0; i < bottomRow; i++){
    if(i === 0){
        triangle(triangleSize);
        strPointY += ((Math.sqrt(3)/2)*triangleSize);
        strPointX -= triangleSize/2;
    } else { 
        for(let k= 0; k < i+1; k++){
            triangle(triangleSize);
            if(k == (i)){
                strPointX -=(triangleSize/2)+(i)*triangleSize
                strPointY += ((Math.sqrt(3)/2)*triangleSize);
            } else {
                triangle(triangleSize);
                strPointX += triangleSize;
            }
        }
    } 
}


