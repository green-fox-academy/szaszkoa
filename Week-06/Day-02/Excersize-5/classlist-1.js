'use strict';

let list = document.getElementsByTagName('p');

if(list[list.length-1].className == 'dolphin'){
  document.getElementsByClassName('apple')[0].innerText = 'pear';
};

if(list[0].className == 'apple'){
  document.getElementsByClassName('cat')[0].innerText = 'dog';
};

document.getElementsByTagName('p')[0].setAttribute("class", `${document.getElementsByTagName('p')[0].className} red`);

let styleList = document.getElementsByClassName('balloon')[0];
styleList.style.borderRadius = '0%';

