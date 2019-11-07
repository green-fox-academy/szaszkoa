'use strict';

// GET request using a Promis and an XHR


const URL = 'http://whatthecommit.com/index.txt';

const myAsyncAjax = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
};

myAsyncAjax(URL).then((response) => {
  console.log(response);
});

/*
// using catch in a promise to catch errors

const erroredFunction = () =>{
  return new Promise(() => {
    throw new Error('Uh-oh!');
  });
};

const promise = erroredFunction();
promise.catch((error) => {
  console.log(error.message);
});



const URL = 'http://api.icndb.com/jokes/random';

fetch(URL)
  .then(response => response.json())
  .then(myJson => console.log(myJson));

*/