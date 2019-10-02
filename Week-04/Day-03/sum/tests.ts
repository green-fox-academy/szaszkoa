import * as test from '../node_modules/tape';
import { Sum } from './sum';

test('testing the sum of numbers', t => {
  let testNumber = new Sum;
  testNumber._numberList = [1,2,3,4,5]

  const actual: number = testNumber.sumAll();
  const expected: number = 15;

  t.equal(actual, expected,'the test for summing multiple elements');
  
  let testNumber2 = new Sum;
  testNumber2.sumAll();
  
  const actual2: number = testNumber2.sumAll();
  const expected2: number = 0;
  
  t.equal(actual2, expected2,'the test for empty list');

  let testNumber3 = new Sum;
  testNumber3._numberList = [5];
  
  const actual3: number = testNumber3.sumAll();
  const expected3: number = 5;
  
  t.equal(actual3, expected3,'the test for single element in list');
  
  t.end();
})




