// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function numberEnslaver(num: number): number {
    if(num === 0){
        return num;
    }else{
        return num + numberEnslaver(num-1);
    }
}

console.log(numberEnslaver(3));