'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// canvas size: x=600, y= 400
// Fill the canvas with a checkerboard pattern.

//ITS SCALABLEEEEEE :):)

let  tileSize: number = 20;
let posX: number = 0;
let posY: number = 0;

for(let i = 0; i< (canvas.height/tileSize); ++i){
    posY =tileSize*i;
    if(i%2 == 0){
        for(let i = 0; i < (canvas.width/tileSize); ++i){
            ctx.fillStyle = 'black'
            ctx.fillRect(posX+(2*tileSize*i),posY,tileSize,tileSize);
            ctx.fillStyle = 'white'
            ctx.fillRect(posX+tileSize+(2*tileSize*i),posY,tileSize,tileSize);
        };
    } else {
                for(let i = 0; i < (canvas.width/tileSize); ++i){
                    ctx.fillStyle = 'white'
                    ctx.fillRect(posX+(2*tileSize*i),posY,tileSize,tileSize);
                    ctx.fillStyle = 'black'
                    ctx.fillRect(posX+tileSize+(2*tileSize*i),posY,tileSize,tileSize);
            };
    };
};
