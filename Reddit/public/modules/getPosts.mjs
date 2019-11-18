'use strict'

import { putPostsIntoDOM } from './putPostsIntoDOM.mjs';

const url = 'http://localhost:8080';

const fetchGETSettings = {
  method: 'GET',
  mode: 'cors'
}

// GET posts fetch request to populate the HTMLs post container with posts
const getPosts = () => {
  fetch(`${url}/posts`, fetchGETSettings)
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