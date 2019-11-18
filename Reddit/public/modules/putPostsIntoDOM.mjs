'use strict'

// grabbing the post container in DOM
const main = document.querySelector('main');

//importing time diff calculator and the username checker function
import { timeDiffCalculator } from './timeDiff.mjs';
import { anonimify } from './anonimify.mjs'

// defining reusable DOM manipulator function
const createNode = (element) => {
  return document.createElement(element);
};

// function to generate ONE post element, reused in the getPosts function
const putPostsIntoDOM = (element) => {
  let upvote = createNode('a');
  upvote.setAttribute('class', 'upvote');
  upvote.setAttribute('onclick', `vote(${element.post_id},'up')`);

  let downvote = createNode('a');
  downvote.setAttribute('class', 'downvote');
  downvote.setAttribute('onclick', `vote(${element.post_id},'down')`);

  let postContainer = createNode('div');
  postContainer.setAttribute('class', `post id${element.post_id}`);

  let votesContainer = createNode('div');
  votesContainer.setAttribute('class', `score id${element.post_id}`);

  let titleContainer = createNode('div');
  titleContainer.setAttribute('class', 'posttext');

  let postTitle = createNode('h2');
  postTitle.innerText = element.title;

  let postURL = createNode('a');
  postURL.setAttribute('href', element.url)
  postURL.innerText = element.url;

  let votes = createNode('span');
  votes.innerText = element.score;
  votes.setAttribute('id', `post${element.post_id}score`);

  let smallLinkContainer = createNode('div');
  smallLinkContainer.setAttribute('class', 'smalllinks');

  let modify = createNode('a');
  modify.innerText = 'modify';

  let remove = createNode('a');
  remove.innerText = 'remove';

  let postDetails = createNode('div');

  let timeAndUsername = createNode('span');
  timeAndUsername.innerHTML = `${timeDiffCalculator(element.timestamp)} ${anonimify(element.owner)}`;

  postDetails.appendChild(timeAndUsername);
  smallLinkContainer.appendChild(postDetails);
  smallLinkContainer.appendChild(modify);
  smallLinkContainer.appendChild(remove);
  votesContainer.appendChild(upvote);
  votesContainer.appendChild(votes);
  votesContainer.appendChild(downvote);
  titleContainer.appendChild(postTitle);
  titleContainer.appendChild(postURL);
  titleContainer.appendChild(smallLinkContainer);
  postContainer.appendChild(votesContainer);
  postContainer.appendChild(titleContainer);
  main.appendChild(postContainer);
};

export { putPostsIntoDOM };