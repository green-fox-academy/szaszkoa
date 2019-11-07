'use strict';

var promise = new Promise((fulfill, reject) => {
  setTimeout(()=> fulfill('FULFILLED!'), 300);
});

promise.then((response) => {
  console.log(response);
});

// after refactoring:

var simplerPromise = new Promise((fulfill, reject) => {
  setTimeout(() => fulfill('FULFILLED!'), 300);
});

simplerPromise.then(console.log); // since the text in the fulfilled mthod is already passed when calling the new promise, a simple console.log enough