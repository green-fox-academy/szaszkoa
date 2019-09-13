'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

let input: number = 5;
let outputSum: number = 0;

for (let i: number = 1; i <= input; i++ ){
    outputSum = outputSum + i;
}

let outputAvg: number = outputSum/input;

console.log("Input: "+input);
console.log("Sum: "+outputSum+" Average: "+outputAvg);