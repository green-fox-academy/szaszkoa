'use strict';

import * as test from '../node_modules/tape';
import { Apple } from './apple';

test('testing apple', t => {
  let testApple = new Apple;
  
  const actual: string = testApple.getApple();
  const expected = 'Apple';

  t.equal(actual, expected);
  t.end();

});