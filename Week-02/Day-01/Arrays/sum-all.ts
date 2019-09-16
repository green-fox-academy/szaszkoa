// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

'use strict';

let ai: number[] = [3,4,5,6,7];
let aiSum: number = 0

ai.forEach(element => {
    aiSum = element+aiSum
})

console.log(aiSum)