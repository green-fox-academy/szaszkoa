'use strict';

const http = new XMLHttpRequest();

http.open(GET, 'localhost:8080/');
http.onload = () => {
  let body = document.getElementById('body');
  body.innerHTML = http.responseText;
}

// here the 'responseText' is the actual sent data package which is sent by the backend API
// the frontend file is just listening to the set URL, if any data package is sent, and catches it.