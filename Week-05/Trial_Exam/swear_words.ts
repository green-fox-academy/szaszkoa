'use strict';

// Write a method which can read and parse a file containing not so family friendly text. 
// The method must remove all the given words from the file and return the amount of the removed words.

const fs = require('fs')

'swear_words.txt'

let swearWords: string[] = ['fuck', 'bloody', 'cock', 'shit', 'asshole', 'dick', 'piss', 'cunt']

function curseWordsBegone(swearwords: string[]) {
  let textToClean: string[]
  try{
    textToClean = fs.readFileSync('swear_words.txt', 'utf-8').toLowerCase().split(' ');
  } catch {
    console.log('no file found :(');
    process.exit();
  } 
  let wordCounter: number = 0;
  for(let i: number = 0; i<textToClean.length; i++){
    for(let j: number = 0;j<swearWords.length;j++){
      if(textToClean[i].includes(swearWords[j]) ){
        wordCounter += 1;
        textToClean[i] = '******';
      }      
    }
  }
  return wordCounter;
}

console.log(curseWordsBegone(swearWords))