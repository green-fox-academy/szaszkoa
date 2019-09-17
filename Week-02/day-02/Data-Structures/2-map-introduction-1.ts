// We are going to play with maps. Feel free to use the built-in methods where possible.
// Create an empty map where the keys are integers and the values are characters
// Print out whether the map is empty or not
// Add the following key-value pairs to the map

let myFirstMap = {};

if(Object.keys(myFirstMap).length == 0){
    console.log("the Object is empty");
} else {
    console.log("The object is not empty");
};

myFirstMap[97] = "a";
myFirstMap[98] = "b";
myFirstMap[99] = "c";
myFirstMap[65] = "A";
myFirstMap[66] = "B";
myFirstMap[67] = "C";

// Key	Value
// 97	a
// 98	b
// 99	c
// 65	A
// 66	B
// 67	C
// Print all the keys
console.log(Object.keys(myFirstMap));
// Print all the values
let values = Object.keys(myFirstMap).map(function(elements){
    return myFirstMap[elements];
})
console.log(values);
// Add value D with the key 68
myFirstMap[68] = "D";
// Print how many key-value pairs are in the map
console.log(Object.keys(myFirstMap).length);
// Print the value that is associated with key 99
console.log(myFirstMap[99]);
// Remove the key-value pair where with key 97
delete myFirstMap[97];
console.log(myFirstMap);
// Print whether there is an associated value with key 100 or not

if(myFirstMap[100] == undefined){
    console.log("there is no such thing as 100")
} else {
    console.log("yes there is")
};
// Remove all the key-value pairs
delete myFirstMap[99];
delete myFirstMap[98];
delete myFirstMap[68];
delete myFirstMap[67];
delete myFirstMap[66];
delete myFirstMap[65];

console.log(myFirstMap)