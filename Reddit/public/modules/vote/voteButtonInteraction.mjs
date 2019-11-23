'use strict';

const buttonInteraction = (postType, post_id) => {
  let voteButtons = document.getElementsByClassName(`score id${post_id}`)[0].childNodes;
  if(postType == 'up'){
    voteButtons[0].removeAttribute('onclick');
    voteButtons[0].setAttribute('class', 'upvoted');
    voteButtons[2].setAttribute('onclick', `vote(${post_id},"down")`);
    voteButtons[2].setAttribute('class', 'downvote');
  } else if (postType == 'down'){
    voteButtons[2].removeAttribute('onclick');
    voteButtons[2].setAttribute('class', 'downvoted');
    voteButtons[0].setAttribute('onclick', `vote(${post_id},"up")`);
    voteButtons[0].setAttribute('class', 'upvote');
  };
};

export { buttonInteraction };