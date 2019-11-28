'use strict';

let headerText = document.querySelector('p');
let button = document.querySelector('button');
let inputUrl = document.querySelector('#url');
let inputAlias = document.querySelector('#alias');


const aliasUsed = () => {
  headerText.innerHTML = 'Your alias is already in use!';
  headerText.setAttribute('style', 'color: red');
};

const expectedBehaviour = (element) => {
  headerText.innerHTML = `Your URL is aliased to <strong>${element[0].alias}</strong> and your secret code is <strong>${element[0].secretCode}</strong>.`
  inputUrl.value = '';
  inputAlias.value = '';
};

button.addEventListener('click', () => {
  let fetchSettings = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "url": `${inputUrl.value}`,
      "alias": `${inputAlias.value}`
    }),
    mode: 'cors'
  };

  fetch('http://localhost:3000/api/links', fetchSettings)
    .then((response) => {
      if (response.status == 400) {
        aliasUsed();
      } else {
        return response.json();
      };
    })
    .then((response) => {
      try {
        expectedBehaviour(response);
      } catch{ };
    })
    .catch(error => {
      console.error(error);
    });
});
