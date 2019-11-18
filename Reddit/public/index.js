'use strict';

const main = document.querySelector('main');
const url = 'http://localhost:8080/';

// TODO
// TODO function targetting the used vote button and disabling the other. after implementing users ofcourse
// TODO separate components from this file to fasten page load
// TODO implement client-pageURL masking
// TODO implement user-handling
// TODO implement modify and delete functionality after identifying user
// TODO implement upvote/downvote functions
// TODO implement sorting the posts

// HIGHLY OPTIONAL
// TODO implement content field into the post, and adding transition to the separate posts to enlargen when the 'enlarge' button is clicked

// *** FUNCTION TO SWITCH TO NEW POST VIEW ***
let submitButton = document.querySelector('button');

submitButton.setAttribute('onclick', `window.location.href = '${url}newpost'`)

// *** GET POSTS FUNCTIONS ***

// defining reusable DOM manipulator function
function createNode(element) {
    return document.createElement(element);
};

// assigning anonymous to posts withous owners

function anonimify(username) {
    return username == 0 ? 'by <strong>Anonymous</strong>' : `by <strong>${username}</strong>`;
}

// calculating elapsed time between now() and submission date
const timeDiffCalculator = (time) => {
    let elapsedTime = Math.floor((Date.now() / 1000) - time);
    let days = Math.floor(elapsedTime / (24 * 60 * 60)); // 86400s in a day
    let hours = Math.floor((elapsedTime - (days * 86400)) / (60 * 60)); // 3600s in an hour
    let minutes = Math.floor((elapsedTime - ((days * 86400) + (hours * 3600))) / 60);
  
    let postIsVeryRecent = minutes < 1 ? 'Submitted just now' : false;
    let timeDiffText = ''
  
    days != 0 ? timeDiffText += `${days} ${days > 1 ? 'days' : 'day'}, ` : timeDiffText += '';
    hours != 0 ? timeDiffText += `${hours} ${hours > 1 ? 'hours' : 'hour'}, ` : timeDiffText += '';
    minutes != 0 ? timeDiffText += `${minutes} ${minutes > 1 ? 'minutes' : 'minute'}` : timeDiffText += '';
  
    return postIsVeryRecent === false ? `Submitted ${timeDiffText} ago` : postIsVeryRecent;
  };

// function to generate ONE post element, reused in the getPosts function
function putPostsIntoDOM(element) {
    let upvote = createNode('a');
    upvote.setAttribute('class', 'upvote');
    upvote.setAttribute('onclick', `upvote(${element.post_id})`);

    let downvote = createNode('a');
    downvote.setAttribute('class', 'downvote');
    downvote.setAttribute('onclick', `downvote(${element.post_id})`);

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

// GET posts fetch request

// *** UP/DOWNVOTE FUNCTIONS ***

// function to target the actual score element and changing it directly
function voteScoreChange(post_id, voteType) {
    let score = document.getElementById(`post${post_id}score`);
    let voteScore = parseInt(score.innerText);
    if (voteType === 'up') {
        voteScore += 1;
        score.innerText = voteScore;
    } else {
        voteScore -= 1;
        score.innerText = voteScore;
    };
};

// functions for sending the PUT request and calling the voteScoreChange function
function upvote(post_id) {
    fetch(`${url}posts/${post_id}/upvote`, { method: 'PUT', mode: 'cors' })
        .then(voteScoreChange(post_id, 'up'))
        .catch((error) => {
            console.log(error);
        });
};

function downvote(post_id) {
    fetch(`${url}posts/${post_id}/downvote`, { method: 'PUT', mode: 'cors' })
        .then(voteScoreChange(post_id, 'down'))
        .catch((error) => {
            console.log(error);
        });
};

getPosts();

// *** NOT USED CURRENTLY ***

// function to remove all elements of the given DOM node
function removeAllPosts(uniqueTagname) {
    let mainNode = document.querySelector(uniqueTagname);
    while (mainNode.firstChild) {
        mainNode.removeChild(mainNode.firstChild);
    };
};