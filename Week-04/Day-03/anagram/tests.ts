' use strict';
import * as test from '../node_modules/tape';
import { Anagram } from './anagram';

test('testing the anagram', t =>{
  let angered = new Anagram('angered');

  const actual = angered.isAnagramOf('enraged')
  const expected = true;

  t.equal(actual, expected, 'testing anagrams');
  t.end();
})