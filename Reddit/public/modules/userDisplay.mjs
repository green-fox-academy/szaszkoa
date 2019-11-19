'use strict'

const url = 'http://localhost:8080';

const userDisplay = (textDetail) => {
  let nameContainer = document.getElementsByClassName('username')[0];
  if(sessionStorage.getItem('username')){
    nameContainer.innerHTML = `${textDetail} ${sessionStorage.getItem('username')}`;
  } else {
    nameContainer.innerHtml = `Click here to sign in!`
    nameContainer.setAttribute('onclick', `window.location.href = '${url}/login'`)
  };
};

export { userDisplay };