'use strict'

// checking username, if it does not exist, the value *Anonymous* will be assigned
const anonimify = (username) => {
  return username == 0 ? 'by <strong>Anonymous</strong>' : `by <strong>${username}</strong>`;
}

export { anonimify };