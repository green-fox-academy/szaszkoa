// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

'use strict';
declare function require(path: string): any;
export { };
const fs = require('fs');

function readFile(fileName) {
    try {
        let fileContent = fs.readFileSync(fileName, 'utf8');
        console.log(fileContent)

    } catch {
        console.log('Unable to read file: '+fileName);
    }

}

readFile('kiscica.gif');


