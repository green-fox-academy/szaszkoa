'use strict';

const main = document.querySelector('main');
const url = 'http://localhost:8080/';

// TODO function targetting the used button and disabling the other. 


// TODO function manipulating the score text directly instead of re-generating the DOM


// defining reusable DOM manipulator functions

function createNode(element) {
    return document.createElement(element);
};

// defining the post fetching separately

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

// function to remove all elements of the given DOM node

function removeAllPosts(uniqueTagname) {
    let mainNode = document.querySelector(uniqueTagname);
    while (mainNode.firstChild) {
        mainNode.removeChild(mainNode.firstChild);
    };
};

// GET posts fetch request

function getPosts() {
    fetch(`${url}posts`, { method: 'GET' })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            data.forEach(element => {
                putPostsIntoDOM(element);
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

function upvote(post_id) {
    fetch(`${url}posts/${post_id}/upvote`, { method: 'PUT', mode: 'cors' })
        .catch((error) => {
            console.log(error);
        });
    removeAllPosts('main');
    getPosts();
};

function downvote(post_id) {
    fetch(`${url}posts/${post_id}/downvote`, { method: 'PUT', mode: 'cors' })
        .catch((error) => {
            console.log(error);
        });
    removeAllPosts('main');
    getPosts();
};

getPosts();