'use strict';

import { voteScoreChangeX2 } from './voteModuleDOMSIDE.mjs';
import { buttonInteraction } from './voteButtonInteraction.mjs';

const url = 'http://localhost:8080';

const votedAlready = (post_id, usersVoteType) => {

  let voteType = '';
  if (usersVoteType == 'up') {
    voteType = 'UP';
    buttonInteraction('up', post_id)
  } else if (usersVoteType == 'down') {
    voteType = 'DOWN';
    buttonInteraction('down', post_id)
  };

  const fetchPUTSettings = {
    method: 'PUT',
    mode: 'cors'
  };

  const modifyVoteSettings = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/JSON' },
    body: JSON.stringify({
      'post_id': `${post_id}`,
      'user_id': `${sessionStorage.getItem('user_id')}`,
      'vote_type': `${voteType}`
    }),
    mode: 'cors'
  };

  fetch(`${url}/posts/${post_id}/${usersVoteType}vote/modify`, fetchPUTSettings)
  .then(voteScoreChangeX2(post_id, usersVoteType))
  .catch((error) => {
    console.log(error);
  });

  fetch(`${url}/posts/modify`, modifyVoteSettings)
    .catch((error) => {
      console.log(error);
    });

};

export { votedAlready };