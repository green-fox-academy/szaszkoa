'use strict'

import { setSessionStorage } from '../../page/sessionStorage.mjs';
import { authenticationError } from '../authenticationError.mjs'

const url = 'http://localhost:8080';

const loginFunction = () => {
  // grabbing the input elements
  let username = document.getElementById('username');
  let password = document.getElementById('password');

  let requestJSON = {
    'username': `${username.value}`,
    'password': `${password.value}`
  }

  // sending the login credentials
  let loginSettings = {
    method: 'POST',
    headers: { 'Content-Type': 'application/JSON' }, // nota bene: headers need to be set when sending JSON!
    body: JSON.stringify(requestJSON),
    mode: 'cors'
  };

  fetch(`${url}/validate`, loginSettings)
    .then((response) => response.json())
    .then(data => {
      try {
        setSessionStorage('username', data[0].username);
        setSessionStorage('user_id', data[0].user_id);
        window.location.href = 'http://localhost:8080/';
      } catch(error) {
        console.log(error);
        authenticationError();
      };
    })
    .catch(error => {
      console.error(error);
    });
};

export { loginFunction };