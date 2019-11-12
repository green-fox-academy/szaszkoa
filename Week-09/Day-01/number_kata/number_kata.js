// It occurs now and then in real life that people want to write about money, 
// especially about a certain amount of money. If it comes to cheques or contracts for example some nations have laws that state that you should write out the amount in words additionally 
// to the amount in numbers to avoid fraud and mistakes. So if you want to transfer 745 $ to someone via cheque you have to fill out to fields:

// 745.00 $ (amount in numbers)

// seven hundred and fourty five dollars (amount in words)

// The Kata is now to write a little converter class or function (depends on your favourite language and flavour) to convert numbers into words.
// Convert it back.

let numbersInText = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eigth',
  9: 'nine'
};

let exceptionsInText = {
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  15: 'fifteen',
};



function numberConverter(number) {

  let digits = number.toString().split('')

  // let numberToConvert = number;
  // if (number == 1) {
  //   return `${numbersInText[number]} dollar`;
  // };
  // let thousands = `${number / 1000 == 0 ? null : numbersInText[Math.floor(number / 1000)]} thousand`
  // let hundreds = `${(number-Math.floor(number / 1000)) / 100 == 0 ? null : numbersInText[Math.floor((number-Math.floor(number / 1000) / 100))]} hundred`

  // //  ${number / 100 == 0 ? null : numbersInText[Math.floor(number / 100)]} hundred`
  
  // return `${thousands} ${hundreds}`;


  // else if (exceptionsInText[number] != undefined){
  //   return `${exceptionsInText[number]} dollars`;
  // } else {
  //   return `${numbersInText[number%10]}teen dollars`;
  // };

  return digits;
};

console.log(numberConverter(1630))

module.exports = numberConverter;