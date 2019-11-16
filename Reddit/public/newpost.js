'use strict';

const url = 'http://localhost:8080/';

// *** FUNCTION TO GO BACK TO THE POST PAGE ***

let backButton = document.getElementsByClassName('back')[0];

backButton.setAttribute('onclick', `window.location.href = '${url}'`);