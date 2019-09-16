"use strict";

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc: string[] = ["Arthur", "Boe", "Chloe"];

// first try, not too elegant
/* 
console.log(abc)
let copy: string = abc[2]
abc[2] = abc[0]
abc[0] = copy

console.log(abc)
*/
// second try, trying to be clever about it
console.log(abc);
let abc2 = abc.slice()
abc[0] = abc2[2]
abc[2] = abc2[0]
console.log(abc)
