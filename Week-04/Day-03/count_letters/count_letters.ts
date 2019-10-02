'use strict';

// export class countLetters{

// }

// let test = {
//   a : 1,
//   b : 3,

// }

export function countLetters(text) {
  let letters: string[] = text.split('');
  let library = {};
  for (let i = 0; i < letters.length; i++){
    if (library.hasOwnProperty(letters[i])){
      library[letters[i]] += 1;
    } else {
      library[letters[i]] = 1;
    }
  }
  return library;
}


// failed attempt to solve the excersize with a multi-dimensional array

// function dictionary(text: any){
//   let library: any[][] = []
//   for(let i: number = 0; i<text.length;i++){
//     library.push([text.charAt(i),1])
//   } 
//   return library.sort();
// }

// console.log(dictionary('kiscica'))