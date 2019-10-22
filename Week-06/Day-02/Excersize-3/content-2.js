'use strict';

let edibles = ['apple', 'banana', 'cat', 'dog'];
let listItems = document.getElementsByTagName('li');
let listItemQuery = document.querySelectorAll('li');

/*
First solution

for(let i = 0; i<listItems.length;i++){
  listItems[i].innerHTML = edibles[i];
}

let completeList = document.getElementsByTagName('ul')[0];

completeList.style.backgroundColor = 'limegreen'

*/

// second solution

for (let i = 0; i < listItemQuery.length; i++) {
  listItemQuery[i].innerText = edibles[i];
}

let completeList = document.querySelector('ul')
// completeList.classList.value = 'limegreen'

//OR

completeList.setAttribute('class', 'limegreen')

