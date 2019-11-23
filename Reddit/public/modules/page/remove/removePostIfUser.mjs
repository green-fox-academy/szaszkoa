'use strict';

import { removePostFromDOM } from './removePostFromDOM.mjs'

const url = 'http://localhost:8080';

const removePost = (post_id) => {
  try {
    let fetchDeleteSettings = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/JSON'},
      body: JSON.stringify({ user_id: `${sessionStorage.getItem('user_id')}`}),
      mode: 'cors'
    };
    fetch(`${url}/posts/${post_id}`, fetchDeleteSettings)
      .then(removePostFromDOM(post_id))
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.log(error);
  };
};

export { removePost };