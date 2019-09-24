// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

'use strict';
declare function require(path: string): any;
export { };
const fs = require('fs');

function fileSwap(fromFileName: string, toFileName: string, ) {
    try {
        let fileContents: string = fs.readFileSync(fromFileName, 'utf8');
        fs.writeFileSync(toFileName, fileContents, 'utf8');
        console.log('The copy was successful: ' + true);
    } catch (error) {
        console.log('the copy was successful: ' + false);
    }
}

fileSwap('copy-files.txt', 'paste-files.txt')

