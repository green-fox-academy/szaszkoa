'use strict'

import { setSessionStorage } from './sessionStorage.mjs';

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
    headers: { 'Content-Type': 'application/JSON' }, // nota bene: headers need to be sent when sending JSON!
    body: JSON.stringify(requestJSON),
    mode: 'cors'
  };

  fetch(`${url}/validate`, loginSettings)
    .then((response) => response.json())
    .then(data => {
      try { 
        setSessionStorage('username', data[0].username); 
      } catch { 
        console.log('baszki')
        // function to manipulate dom and display faulty user/password to be implemented here
      }
    })
    .catch(error => {
      console.error(error);
    });
};

export { loginFunction };