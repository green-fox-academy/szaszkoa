'use strict'

const addUserToInput = () => {
  let inputField = document.getElementById('user_id');
  inputField.value = sessionStorage.getItem('user_id') ? parseInt(sessionStorage.getItem('user_id')) : parseInt(0);
};

export { addUserToInput };