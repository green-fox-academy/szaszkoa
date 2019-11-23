'use strict';

const disableVote = () => {
  let upvote = document.getElementsByClassName('upvote');
  let downvote = document.getElementsByClassName('downvote');

  Array.from(upvote).forEach(item =>{
    item.removeAttribute('onclick');
  });
  
  Array.from(downvote).forEach(item => {
    item.removeAttribute('onclick');
  });

};

export { disableVote };