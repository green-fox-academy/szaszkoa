// We are going to play with lists. Feel free to use the built-in methods where possible.

// Create an empty list which will contain names (strings)
let nameList: string[] = [];
// Print out the number of elements in the list
console.log(nameList);
// Add William to the list
nameList.push("William");;
// Print out whether the list is empty or not
if(nameList.length == 0){
    console.log("The list is empty")
} else {
    console.log("The list contains elements")
};
// Add John to the list
nameList.push("John");
// Add Amanda to the list
nameList.push("Amanda");
// Print out the number of elements in the list
console.log(nameList.length);
// Print out the 3rd element
console.log(nameList[2]);
// Iterate through the list and print out each name
// William
// John
// Amanda
for(let i = 0; i < nameList.length; ++i){
    console.log(nameList[i])
};
// Iterate through the list and print
// 1. William
// 2. John
// 3. Amanda
for(let i = 0; i < nameList.length; ++i){
    console.log((i+1)+". "+nameList[i])
};
// Remove the 2nd element
nameList.splice(1,1);
console.log(nameList)
// Iterate through the list in a reversed order and print out each name
for(let i=0; i < nameList.length; ++i){
    console.log(nameList[(nameList.length-1)-i])
};
// Amanda
// William
// Remove all elements
nameList.splice(0,nameList.length)
console.log(nameList)