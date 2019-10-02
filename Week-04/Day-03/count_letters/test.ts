'use strict';
import * as test from '../node_modules/tape';
import { countLetters } from './count_letters';

test('testing countletters', t => {
  const actual = countLetters('kiscica').hasOwnProperty('c');
  const expected = true;

  t.equal(actual, expected, 'testing kiscica string');
  t.end();
});

