// -  Create a function called `factorio`
//    that returns it's input's factorial

// the formula for factorial is n=integer, n! = n(n-1)(n-2)(n-3) ... (2)(1)

'use strict';

var input: number = 8

function factorio(n){
    var factorial: number = 1
    while(input>=1) {
        factorial = factorial * input;
        input--;
    } return factorial
}

console.log(factorio(input))