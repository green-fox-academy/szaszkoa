'use strict';

const removePostFromDOM = (post_id) => {
  let postToDelete = document.getElementsByClassName(`post id${post_id}`)[0];
  let postContainer = document.getElementsByTagName('main')[0];
  postContainer.removeChild(postToDelete);
};

export { removePostFromDOM };