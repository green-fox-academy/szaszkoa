'use strict';

const url = 'http://localhost:8080';

//assigning the button on New Post page the value of the main pages HREF.
const backButtonHref = () => {
  let backButton = document.getElementsByClassName('back')[0];
  backButton.setAttribute('onclick', `window.location.href = '${url}'`);
};

export { backButtonHref };