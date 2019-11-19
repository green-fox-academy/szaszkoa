'use strict';

const authenticationError = () => {
  let titleH2 = document.querySelector('h2');
  titleH2.style.color = 'red';
  titleH2.innerText = 'Username and/or Password is not correct'
};

export { authenticationError };