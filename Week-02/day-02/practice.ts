/*
let myString = "hello i\'m world"

console.log(myString.length)
console.log(myString.toUpperCase())
console.log(myString.toLowerCase())
console.log(myString.indexOf("world")) //its going to return the starting position of the string
console.log(myString.indexOf("kitty")) //gonna give back -1 , because it is not included in the string

*/
// logical operations with strings

// let string1 = "abc"
// let string2 = "bcd"

// string1 = string2 = FALSE
// its case sensitive

// String1 < string2 = true

// =================================================================
// String manipulations

let string: string = "this is typescript"
console.log(string.charAt(2))

let sliced: string = string.slice(0, 4)
console.log(sliced)


//===================================================================

// OBJECTS
// objects are defined by {}


let Pets = {                   // this is the object
    animaltype: "cat",         // th is a key, and it has a value
    animalage: 12
}

// to call out a key, type Pets["cat"]

// to write the keys of an object, call the .keys(<object name>) function

console.log("my pet is a "+Pets.animaltype)
console.log("and his age is "+Pets.animalage)

// creating object without class

let john = {"name":"john", "speak": function () {console.log("speaking")}}
console.log(typeof john) 

console.log(john.name)
console.log(john.speak()) 

// changing properties
john["name"] = //something. this is how to change object data
john["sex"] = "neutral"   // this is how to add new data to objects

console.log(john["sex"])   // this is how to call the recently defined new object.
