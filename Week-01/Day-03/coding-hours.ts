'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let codesDaily: number = 6;
let wrkDaysInWeek: number = 5;
let weeks: number = 17;
let avgWrkHours: number = 52;

console.log("An average attendee codes this many hours on weekends:")
console.log(codesDaily * wrkDaysInWeek * weeks);
console.log("the percantage average attendees code out of work hours")
console.log((codesDaily * wrkDaysInWeek * weeks) / (avgWrkHours * weeks));