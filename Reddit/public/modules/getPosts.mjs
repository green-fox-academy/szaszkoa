'use strict'

const url = 'http://localhost:8080/';

// GET posts fetch request
const getPosts = () => {
  fetch(`${url}posts`, { method: 'GET' })
    .then((response) => response.json())
    .then((data) => {
      data.forEach(element => {
        putPostsIntoDOM(element);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export { getPosts }