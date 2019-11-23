'use strict';

import { voteScoreReverse } from './voteModuleDOMSIDE.mjs';
import { buttonReset } from './voteButtonInteraction.mjs';

const url = 'http://localhost:8080';

const votedButCancelled = (post_id, usersVoteType) => {

  let voteType = '';
  if (usersVoteType == 'up') {
    voteType = 'UP';
    buttonReset(post_id);
  } else if (usersVoteType == 'down') {
    voteType = 'DOWN';
    buttonReset(post_id);
  };

  const fetchPUTSettings = {
    method: 'PUT',
    mode: 'cors'
  };

  const deleteVoteSettings = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/JSON' },
    body: JSON.stringify({
      'post_id': `${post_id}`,
      'user_id': `${sessionStorage.getItem('user_id')}`,
      'vote_type': `${voteType}`
    }),
    mode: 'cors'
  };

  fetch(`${url}/posts/${post_id}/${usersVoteType}vote/delete`, fetchPUTSettings)
  .then(voteScoreReverse(post_id, usersVoteType))
  .catch((error) => {
    console.log(error);
  });

  fetch(`${url}/posts/delete`, deleteVoteSettings)
    .catch((error) => {
      console.log(error);
    });

};

export { votedButCancelled };