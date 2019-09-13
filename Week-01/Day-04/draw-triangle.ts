'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is


let buildingBlock: string = "*";
let something: string = ""


for (let i: number = 1; i <= lineCount; i++){  
    something = something+buildingBlock
    console.log(something)
}