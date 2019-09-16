// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

'use strict';

function printParams(input){
    let storage = [];
    storage.push(input);
    return console.log(storage)
}
printParams(true)
printParams(19)
printParams("kitty-cat")