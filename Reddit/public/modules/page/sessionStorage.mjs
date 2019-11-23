'use strict'

// saving darkmode preferance in session storage
const setSessionStorage = (key, value) => {
  typeof (Storage) !== "undefined" ? sessionStorage.setItem(key, value) : console.error('Session storage is not supported!');
};

export { setSessionStorage }