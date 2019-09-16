// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

'use strict';

let animals: string[] = ["koal", "pand", "zebr"]
let newAnimals = animals.map(function(x){
    return x+"a"
})

console.log(newAnimals)