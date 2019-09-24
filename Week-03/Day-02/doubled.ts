// Create a method that decrypts duplicated-chars.txt

'use strict';
const fs = require('fs');

let fileContent = fs.readFileSync('doubled.txt', 'utf8');
let lines: string[] = fileContent.trim().split('\r\n');
let decrypt: string[] = [];

for (let j = 0; j < lines.length; j++) {
    decrypt[j] = "";
    for (let i = 0; i < lines[j].length; i += 2) {
        decrypt[j] += lines[j].charAt(i);
    }
}


console.log(decrypt.join('\r\n'));
