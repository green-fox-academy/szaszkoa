'use strict';

function testAnagram(text1, text2) {
  if (text1.length != text2.length) {
    return false;
  } 
  let testArray1 = text1.split('').sort().join('');
  let testArray2 = text2.split('').sort().join('');;
  if(testArray1 == testArray2){
    return true;
  };
};

testAnagram('kiscica', 'cicakis')

module.exports = testAnagram;
