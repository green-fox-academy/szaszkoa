'use strict';

/*
// examples
// the below codes are identical in function

let promise1 = new Promise((fulfill, reject) => {
  fulfill('SECRET VALUE');
});

let promise2 = Promise.resolve('SECRET VALUE');

// the same is true for .reject

let promise3 = new Promise((fulfill, reject) => {
  reject(new Error('SECRET VALUE'));
});

let promise4 = Promise.reject(new Error('SECRET VALUE'));

*/

let promise = Promise.resolve('Secret Value');

promise.then(console.log).catch(console.log)


