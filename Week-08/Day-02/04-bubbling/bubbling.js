'use strict';

// Here is an image inspector, but the buttons are not implemented yet, that will
// be your task!
//  - the nav buttons (up, down, left, right) move the background by 10px
//  - the zoom buttons increase/decrease the image by 20%
//  - attach only two event listeners to the nav element
//    - one for navigation
//    - one for zooming

let navigation = document.querySelector('nav');
let image = document.querySelector('.img-inspector');

let positionX = 0;
let positionY = 0;
let zoom = 200;

navigation.addEventListener('click', manipulation);
// navigation.addEventListener('click', zoom)

function manipulation(event) {
  if (event.path[0].textContent == 'Up') {
    positionY -= 10;
  } else if (event.path[0].textContent == 'Down') {
    positionY += 10;
  } else if (event.path[0].textContent == 'Left') {
    positionX -= 10;
  } else if (event.path[0].textContent == 'Right') {
    positionX += 10;
  } else if (event.path[0].textContent == 'Zoom in'){
    zoom += 20;
  } else if (event.path[0].textContent == 'Zoom out'){
    zoom -= 20;
  }
  image.setAttribute('style', `background-position-y:${positionY}px; background-position-x:${positionX}px; background-size: ${zoom}%`);
};