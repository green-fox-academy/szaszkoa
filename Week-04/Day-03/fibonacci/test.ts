'use strict';
import * as test from '../node_modules/tape';
import { fibonacciN } from './fibonacci';

test('testing fibonacci sequences Nth number', t=> {
  

  const actual = fibonacciN(10);
  const expected = 55;

  t.equal(actual, expected, 'testing fibonacci sequence`s 5th number');
  t.end();
})
