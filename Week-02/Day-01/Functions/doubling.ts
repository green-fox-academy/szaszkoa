// -  Create a variable named `baseNum` and assign the value `123` to it
// -  Create a function called `doubling` that doubles it's input parameter and returns with an integer
// -  Log the result of `doubling(baseNum)` to the console

'use strict';

let baseNum: number = 123
function doubling(X){
    X = X+X
    return X
}

console.log(doubling(baseNum))