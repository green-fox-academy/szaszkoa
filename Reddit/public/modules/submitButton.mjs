'use strict'

const url = 'http://localhost:8080';

// assigning the new post pages link to the *submit new post* button
const submitButtonHref = () => {
  let submitButton = document.querySelector('button');
  submitButton.setAttribute('onclick', `window.location.href = '${url}/newpost'`);
};

export { submitButtonHref };

