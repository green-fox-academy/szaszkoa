'use strict'

import { timeDiffCalculator } from './timeDiff.mjs';
import { anonimify } from './anonimify.mjs'

// grabbing the post container in DOM
const main = document.querySelector('main');

// defining reusable DOM manipulator function
const createNode = (element) => {
  return document.createElement(element);
};

// function to generate ONE post element, reused in the getPosts function
const putPostsIntoDOM = (element) => {

  // creating alredy pressed upvote/downvote buttons
  let upvote = createNode('a');
  let downvote = createNode('a');
  if (element.vote_type) {
    if (element.vote_type == 'UP') {
      upvote.setAttribute('class', 'upvoted');
      downvote.setAttribute('class', 'downvote');
      downvote.setAttribute('onclick', `vote(${element.post_id},'down')`);
    } else if (element.vote_type == "DOWN") {
      downvote.setAttribute('class', 'downvoted');
      upvote.setAttribute('class', 'upvote');
      upvote.setAttribute('onclick', `vote(${element.post_id},'up')`);
    }
  } else {
    upvote.setAttribute('class', 'upvote');
    upvote.setAttribute('onclick', `vote(${element.post_id},'up')`);

    downvote.setAttribute('class', 'downvote');
    downvote.setAttribute('onclick', `vote(${element.post_id},'down')`);
  }

  // post details
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

  // *modify* and *remove* links displayed only for posts made by the logged in user
  let modify = createNode('a');
  let remove = createNode('a');

  if (sessionStorage.getItem('username') == element.username) {
    modify.innerText = 'modify';
    remove.innerText = 'remove';
    remove.setAttribute('class', 'remove');
    remove.setAttribute('onclick', `removePost(${element.post_id})`);
  } else {
    modify.innerText = ' ';
    remove.innerText = ' ';
  }

  let postDetails = createNode('div');

  let timeAndUsername = createNode('span');
  timeAndUsername.innerHTML = `${timeDiffCalculator(element.timestamp)} ${anonimify(element.username)}`;

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