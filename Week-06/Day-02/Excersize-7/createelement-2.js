'use strict';

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

let childToRemove = document.getElementsByTagName('li')[0];
document.getElementsByTagName('ul')[0].removeChild(childToRemove);

let asteroidList = document.getElementsByClassName('asteroids')[0];

for(let i = 0; i<planetData.length;i++){
  if(planetData[i].asteroid === true){
    let node = document.createElement('li');
    node.innerText = planetData[i].content;
    node.setAttribute('class', planetData[i].category);
    asteroidList.appendChild(node);
  }
}

