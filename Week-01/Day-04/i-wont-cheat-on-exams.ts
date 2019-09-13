'use strict';

// Create a program that writes this line 100 times:
// "I won't cheat on the exam!"

let haveToGetToHundred: number = 0;
let promise: string = "I won\'t cheat on the exam!";

while (haveToGetToHundred !== 100){
    console.log(promise);
    haveToGetToHundred++;
}
