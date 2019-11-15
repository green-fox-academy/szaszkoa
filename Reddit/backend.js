'use strict';

const main = document.querySelector('main');
const url = 'http://localhost:8080/';




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

function removeAllPosts(uniqueTagname) {
    let mainNode = document.querySelector(uniqueTagname);
    while(mainNode.firstChild){
        mainNode.removeChild(mainNode.firstChild);
    };
};

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
            console.table({
                'Message': 'You fucked it up Son, here\'s how',
                'Error': error
            });
        });
};

function upvote(post_id) {
    let xhr = new XMLHttpRequest();
    xhr.open('PUT', `http://localhost:8080/posts/${post_id}/upvote`);
    xhr.setRequestHeader('mode', 'cors');
    xhr.send();
    removeAllPosts('main');
    getPosts();
}

function downvote(post_id) {
    let xhr = new XMLHttpRequest();
    xhr.open('PUT', `http://localhost:8080/posts/${post_id}/downvote`);
    xhr.setRequestHeader('mode', 'cors');
    xhr.send();
    removeAllPosts('main');
    getPosts();
}

// xhr.open('GET', 'http://localhost:8080/posts');
// xhr.onreadystatechange = () => {
//     if (xhr.readyState == 4) {
//         let data = JSON.stringify(xhr.responseText);
//         console.log(data);
//         divElement.innerText = data;
//         body.appendChild(divElement);
//     };
// };
// xhr.send();

getPosts();

// const putFetchData = {
//     method: 'PUT',
//     mode: 'cors-with-forced-preflight'
// }

// function upvote(post_id) {
//     let fetch = window.fetch.bind(window)
//     fetch(`${url}posts/${post_id}/upvote`, putFetchData)
//         .catch((error) => {
//             console.log({
//                 'Message': 'You fucked it up Son, here\'s how',
//                 'Error': error
//             });
//         });
// }

// function downvote(post_id) {
//     fetch(`${url}posts/${post_id}/downvote`, putFetchData)
//         .catch((error) => {
//             console.log({
//                 'Message': 'You fucked it up Son, here\'s how',
//                 'Error': error
//             });
//         });
// };


/*
old XHR method, trying to write Fetch to achieve the same functionality

const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:8080/posts');
xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
        let data = JSON.stringify(xhr.responseText);
        console.log(data);
        divElement.innerText = data;
        body.appendChild(divElement);
    };
};
xhr.send();

*/

// xhr.open('POST', 'http://localhost:8080/posts');
// xhr.onreadystatechange = () => {
//     if (xhr.readyState == 4) {
//         xhr.send(
//             {
//                 'title': 'placeholder Title',
//                 'url': 'placeholder URL'
//             }
//         )
//     }
// }

