'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

function reverse(text){
    let newText: string = ""
    let finalText: string = ""
     for(let i = 0; i < text.length; ++i){
        newText = text.charAt(text.length-(i+1));
        finalText = finalText.concat(newText)
    };   return finalText;
} 

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

console.log(reverse(reversed));

export = reverse;