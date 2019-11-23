'use strict';

const url = 'http://localhost:8080';

const loginButtonHref = () => {
  let signInButton = document.getElementsByTagName('button')[1];
  signInButton.setAttribute('onclick', `window.location.href = '${url}/login'`);
};

export { loginButtonHref };