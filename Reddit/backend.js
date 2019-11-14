'use strict';

const body = document.querySelector('body');
const url = 'http://localhost:8080/';

fetch(`${url}posts`, { method: 'GET' })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log({
            'Message': 'You fucked it up Son, here\'s how',
            'Error': error
        });
    });


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

