// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

'use strict';

function divide(number) {
    if (number != 0) {
        console.log('Result is ' + 10 / number);
    } else throw 'fail'
};

divide(20)