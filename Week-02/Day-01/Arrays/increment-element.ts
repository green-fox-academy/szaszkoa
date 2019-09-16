// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console

'use strict';

let numList: number[] = [1,2,3,4,5];

let newNumList = numList.map(function(x){
    if(x == numList[2]){
        return x+1;
    } return x
})

numList = newNumList

console.log(numList)




