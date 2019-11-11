'use strict';

let test = require('tape');
let getIndex = require('./get_index')

test('get index', (t) => {
  let testArray = ['kiscica'];
  let item = 'kiskutya';

  let actual = getIndex(testArray, item);
  let expected = -1;

  t.equal(actual, expected);

  let testArray2 = ['kiscica', 'kiskutya', 'margit', 'kalman', 'geza'];
  let item2 = 'kiskutya';

  let actual1 = getIndex(testArray2, item2);
  let expected1 = 1;

  t.equal(actual1, expected1);
  t.end();
});