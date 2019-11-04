'use strict';

const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:8080/posts');
xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
        let data = JSON.parse(xhr.responseText);
        console.log(data)
    };
};
xhr.send();

xhr.open('POST', 'http://localhost:8080/posts');
xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
        xhr.send(
            {
                'title': 'placeholder Title',
                'url': 'placeholder URL'
            }
        )
    }
}

