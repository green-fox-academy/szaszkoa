'use strict';
// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// im transforming everything to seconds

let allHours: number = (24*60*60);
let allMinutes: number = (60*60);
let allSeconds: number = 60;
let daySeconds: number = allHours+allMinutes+allSeconds;
let currentDaySeconds: number = ((currentHours*60*60)+(currentMinutes*60)+(currentSeconds));

console.log("remaining time untill the end of the day:");
console.log("Current time in seconds: "+((currentHours*60*60)+(currentMinutes*60)+(currentSeconds)));
console.log("Remaining time in seconds: "+(daySeconds-currentDaySeconds));


