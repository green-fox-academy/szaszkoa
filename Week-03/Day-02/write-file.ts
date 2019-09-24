// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

'use strict';
declare function require(path: string): any;
export { };
const fs = require('fs');

function manipulation(fileName: string, fileContent: string) {
    try {
        let fileCreate = fs.writeFileSync(fileName, fileContent, 'utf8')
    } catch (error) {
        console.log('Unable to write file: ' + fileName);
    }
}

manipulation('write-file.txt', 'Szaszko Andras');