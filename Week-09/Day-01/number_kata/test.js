'use strict';

let test = require('tape');
let numberConverter = require('./number_kata');

test('number kata tests', (t) => {
  
// test number 1;

  let actual = numberConverter(1)
  let expected = 'one dollar';
  
  t.equal(actual, expected, 'testing for one dollar, in singular');

// test number 2;

  let actual2 = numberConverter(11);
  let expected2 = 'eleven dollars'

  t.equal(actual2, expected2, 'testing for 2 digits, exception');

//test number 3;

  let actual3 = numberConverter(16);
  let expected3 = 'sixteen dollars';

  t.equal(actual3, expected3, 'testing for 2 digits, regular')

//test number 4;

  let actual4 = numberConverter(432);
  let expected4 = 'four hundred thirty two dollars'

  t.equal(actual4, expected4, 'testing for hundreds')

  t.end();
});
