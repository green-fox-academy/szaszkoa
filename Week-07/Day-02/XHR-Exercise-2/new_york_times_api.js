'use strict';

const xhr = new XMLHttpRequest();

const APIkey = 'giYPV2jO1ITtIfWA4Ny12A5YeQFw5lu2'
const searchTerm = 'apollo11'

xhr.open('GET', `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${APIkey}`);
xhr.onload = () => {
    let data = JSON.parse(xhr.responseText);
    let articles = data.response.docs
    console.log(articles);
    for(let i = 0; i< articles.length; i++){
        let div = document.createElement('div');
        let body = document.getElementsByTagName('body')[0];
        div.innerText = articles[i].headline.main;
        body.appendChild(div);
    }
};

xhr.send();