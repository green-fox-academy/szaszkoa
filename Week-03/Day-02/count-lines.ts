// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

'use strict';
declare function require(path: string): any;
export { };
const fs = require('fs');

function lineCount(fileName) {
    try {
        let fileContent = fs.readFileSync(fileName, 'utf8');
        let textInFile = fileContent.trim().split('\r\n');
        console.log(textInFile.length);
    } catch {
        console.log('0');
    }
}

lineCount('count-lines.txt')