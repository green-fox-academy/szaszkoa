'use strict';

const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:8080/');
xhr.onreadystatechange = () => {
  if (xhr.readyState == 4) {
    let data = xhr.responseText;
    let headersText = ['Book_Name', 'Author_Name', 'Category', 'Publisher', 'Price']
  };
};
xhr.send();

// here the 'responseText' is the actual sent data package which is sent by the backend API
// the frontend file is just listening to the set URL, if any data package is sent, and catches it.