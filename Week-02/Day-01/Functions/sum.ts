// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

let input: number = 5

function sum(n){
    let result: number = 0
    while(n >= 0){
        result = n + result;
        n--;

    } return result
}

console.log(sum(input))