'use strict'


export function fibonacciN(nthNumber: number): number {
  let sequence: number[] = []
  sequence.push(1);
  sequence.push(1);
  for (let i = 2; i < nthNumber; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }
  return sequence[nthNumber - 1];
}


console.log(fibonacciN(10))