'use strict';

const main = document.querySelector('main');
const url = 'http://localhost:8080/';

// TODO function targetting the used button and disabling the other. 

let upvoteNode = document.getElementById('post1score')

console.log(`you selected this: ${upvoteNode}`)

// function buttonColorAndDisable(post_id, voteType){

// }

// *** GET POSTS FUNCTIONS ***

// defining reusable DOM manipulator function
function createNode(element) {
    return document.createElement(element);
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
    postContainer.setAttribute('class', 'post');
    let votesContainer = createNode('div');
    votesContainer.setAttribute('class', 'score');
    let titleContainer = createNode('div');
    titleContainer.setAttribute('class', 'posttext');
    let postTitle = createNode('h2');
    let postURL = createNode('p');
    let votes = createNode('span');
    votes.setAttribute('id', `post${element.post_id}score`);
    postTitle.innerText = element.title;
    postURL.innerText = element.url;
    votes.innerText = element.score;
    votesContainer.appendChild(upvote);
    votesContainer.appendChild(votes);
    votesContainer.appendChild(downvote);
    titleContainer.appendChild(postTitle);
    titleContainer.appendChild(postURL);
    postContainer.appendChild(votesContainer);
    postContainer.appendChild(titleContainer);
    main.appendChild(postContainer);
};

// GET posts fetch request
function getPosts() {
    fetch(`${url}posts`, { method: 'GET' })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            data.forEach(element => {
                putPostsIntoDOM(element);
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

// *** UP/DOWNVOTE FUNCTIONS ***

// function to target the actual score element and changing it directly
function voteScoreChange(post_id, voteType) {
    let score = document.getElementById(`post${post_id}score`);
    let voteScore = parseInt(score.innerText);
    console.log(voteScore);
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
        .catch((error) => {
            console.log(error);
        });
    voteScoreChange(post_id, 'up');
};

function downvote(post_id) {
    fetch(`${url}posts/${post_id}/downvote`, { method: 'PUT', mode: 'cors' })
        .catch((error) => {
            console.log(error);
        });
    voteScoreChange(post_id, 'down');
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