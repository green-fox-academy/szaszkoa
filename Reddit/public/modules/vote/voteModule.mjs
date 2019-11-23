'use strict'

import { disableVote } from './disableVoteButtons.mjs'
import { firstTimeVote } from './voteForTheFirstTime.mjs';
import { votedAlready } from './voteIfVotedAlready.mjs';
import { votedButCancelled } from './votedButCancelled.mjs';

const vote = (post_id, usersVoteType, voteAction = 'NONE') => {

  if (sessionStorage.getItem('username')) {
    if(voteAction == 'NONE'){
      firstTimeVote(post_id, usersVoteType);
    } else if (voteAction == 'MOD'){
      votedAlready(post_id, usersVoteType);
    } else if (voteAction == 'DEL'){
      votedButCancelled(post_id, usersVoteType);
    };
  } else {
    disableVote();
  };
};


export { vote };