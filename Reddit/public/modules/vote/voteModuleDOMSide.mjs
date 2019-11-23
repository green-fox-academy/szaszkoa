'use strict';

// function to target the actual score element and changing it directly
const voteScoreChange = (post_id, voteType) => {
  let score = document.getElementById(`post${post_id}score`);
  let voteScore = parseInt(score.innerText);
  voteType === 'up' ? (score.innerText = voteScore += 1) : (score.innerText = voteScore -= 1);
};

const voteScoreChangeX2 = (post_id, voteType) => {
  let score = document.getElementById(`post${post_id}score`);
  let voteScore = parseInt(score.innerText);
  voteType === 'up' ? (score.innerText = voteScore += 2) : (score.innerText = voteScore -= 2);
};

const voteScoreReverse = (post_id, voteType) => {
  let score = document.getElementById(`post${post_id}score`);
  let voteScore = parseInt(score.innerText);
  voteType === 'up' ? (score.innerText = voteScore -= 1) : (score.innerText = voteScore += 1);
};

export { voteScoreChange, voteScoreChangeX2, voteScoreReverse };