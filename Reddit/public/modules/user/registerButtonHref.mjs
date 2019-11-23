'use strict';

const url = 'http://localhost:8080';

const registerButtonHref = () => {
  let registerButton = document.getElementsByClassName('signup')[0];
  registerButton.setAttribute('onclick', `window.location.href = '${url}/signup'`);
};

export { registerButtonHref };