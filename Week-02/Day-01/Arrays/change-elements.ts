'use strict';

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList: number[] = [1,2,3,8,5,6];

let newNumList = numList.map(function(x) {
    if(x==8){
        return x/2;
    } return x;    
})

 console.log(newNumList)

 /*
 let newNumList = numList.map(x => {
    if(x==8){
        return x/2;
    } return x;    
})

 console.log(newNumList)
 */