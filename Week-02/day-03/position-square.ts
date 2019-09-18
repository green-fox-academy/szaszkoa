'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.


// ctx.strokeRect(0,0,50,50);



function magicBox(x,y){
    for(let i = 0; i < 3; ++i){
        ctx.strokeRect(x+(i*50),y+(i*50),50,50);
        }
};

magicBox(130,130);