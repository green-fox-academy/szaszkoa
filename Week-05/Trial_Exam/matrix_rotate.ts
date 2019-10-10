'use strict';

// Create a function named rotateMatrix that takes an n×n integer matrix (array of arrays) 
// as parameter and returns a matrix which elements are rotated 90 degrees clockwise.

/* expected output: 
[7, 4, 1],
[8, 5, 2],
[9, 6, 3]
*/

let input: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

let input2: number[][] = [
  [1,1,1,1],
  [2,2,2,2],
  [3,3,3,3],
  [4,4,4,4]
]

function matrix_rotate(input: number[][]) {
  let output: number[][] = [];
  for (let i = 0; i < input.length; i++) {
    output.push([]);
    for (let j = 0; j < input.length; j++) {
      output[i].push(input[(input.length - 1) - j][i])
    }
  }
  return output;
}

console.table(matrix_rotate(input2))