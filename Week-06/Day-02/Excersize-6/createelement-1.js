'use strict';

let itemsToAdd = ['The Green Fox', 'The Lamplighter'];

for(let i = 0; i<itemsToAdd.length; i++){
  let node = document.createElement('li');
  node.innerHTML = itemsToAdd[i];
  document.getElementsByClassName('asteroids')[0].appendChild(node);
}

//adding a new heading
let heading = document.createElement('h1')
heading.innerHTML = 'I can add elements to the DOM!';
document.getElementsByClassName('container')[0].appendChild(heading)

//adding a new picture
let image = document.createElement('img')
image.setAttribute('src','https://i.imgur.com/7ImK8Yq.jpg')
document.getElementsByClassName('container')[0].appendChild(image)

