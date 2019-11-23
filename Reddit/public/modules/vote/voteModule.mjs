'use strict'

import { disableVote } from './disableVoteButtons.mjs'
import { voteScoreChange } from './voteModuleDOMSIDE.mjs';

const url = 'http://localhost:8080';

const vote = (post_id, usersVoteType) => {
  
  if (sessionStorage.getItem('username')) {
    let voteType = '';
      let voteButtons = document.getElementsByClassName(`score id${post_id}`)[0].childNodes;
      if (usersVoteType == 'up') {
        voteType = 'UP'
        voteButtons[0].removeAttribute('onclick');
        voteButtons[0].setAttribute('class', 'upvoted');
        voteButtons[2].setAttribute('onclick', `vote(${post_id},"down")`);
        voteButtons[2].setAttribute('class', 'downvote');
      } else if (usersVoteType == 'down') {
        voteType = 'DOWN'
        voteButtons[2].removeAttribute('onclick');
        voteButtons[2].setAttribute('class', 'downvoted');
        voteButtons[0].setAttribute('onclick', `vote(${post_id},"up")`);
        voteButtons[0].setAttribute('class', 'upvote');
      };

      const fetchPUTSettings = {
        method: 'PUT',
        headers: {'Content-Type': 'application/JSON'},
        body: JSON.stringify({
          'vote_id': '',
          'post_id': `${post_id}`,
          'user_id': `${sessionStorage.getItem('user_id')}`,
          'vote_type': `${voteType}`
        }),
        mode: 'cors'
      };

      fetch(`${url}/posts/${post_id}/${usersVoteType}vote`, fetchPUTSettings)
        .then(voteScoreChange(post_id, usersVoteType))
        .catch((error) => {
          console.log(error);
        });
  } else {
    disableVote();
  };
};


export { vote };