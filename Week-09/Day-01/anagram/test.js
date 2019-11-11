
let test = require('tape');
let testAnagram = require('./anagram')

test('anagram', (t) => {
  let actual = testAnagram('kiscica', 'kisscica');
  let expected = false;

  t.equal(actual, expected);

  let actual2 = testAnagram('kismedve', 'medvekis');
  let expected2 = true;

  t.equal(actual2, expected2);
  t.end();

});