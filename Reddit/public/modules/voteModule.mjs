'use strict'

import { voteScoreChange } from './voteModuleDOMSIDE.mjs';

const url = 'http://localhost:8080';

const fetchPUTSettings = {
  method: 'PUT',
  mode: 'cors'
};

const vote = (post_id, usersVoteType) => {
  fetch(`${url}/posts/${post_id}/${usersVoteType}vote`, fetchPUTSettings)
    .then(voteScoreChange(post_id, usersVoteType))
    .catch((error) => {
      console.log(error);
    });
};

export { vote };