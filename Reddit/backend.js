'use strict';

let body = document.querySelector('body');
let divElement = document.createElement('div');

const url = 'http://localhost:8080/posts';

fetch(url)
    .then((data) => {
        
        console.log(data.json());
    })
    .catch((error) => {
        console.log('You fucked it up');
        console.log(error);
    })


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

