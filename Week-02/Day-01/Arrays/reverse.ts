// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

'use strict';

let numList: number[] = [3,4,5,6,7].reverse()
console.log(numList)

let numList2: number[] = [3,4,5,6,7]
let numList3: number[] = []

for(let i:  number = 0; i < 5; i++){
    let temp = numList2[numList2.length-1];
    numList2.pop();
    numList3.push(temp);
    }
console.log(numList3)
