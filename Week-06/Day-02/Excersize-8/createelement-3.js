'use strict';

const kids = [
  { 'petName': 'Wattled crane', 'owner': 'Bryant' },
  { 'petName': 'Devil, tasmanian', 'owner': 'Alejandro' },
  { 'petName': 'Mynah, common', 'owner': 'Nelie' },
  { 'petName': 'Dolphin, common', 'owner': 'Mariele' },
  { 'petName': 'Gray duiker', 'owner': 'Maddalena' },
  { 'petName': 'Crab (unidentified)', 'owner': 'Lucine' },
  { 'petName': 'Ant (unidentified)', 'owner': 'Lorianna' },
  { 'petName': 'Bison, american', 'owner': 'Tommie' },
  { 'petName': 'Yellow mongoose', 'owner': 'Vivyan' },
  { 'petName': 'Carpet snake', 'owner': 'Veda' },
  { 'petName': 'Lesser mouse lemur', 'owner': 'Isidor' },
];

let articleElement = document.getElementById('pets');

for(let i = 0; i<kids.length; i++){
  let parent = document.createElement('h3');
  parent.innerHTML = kids[i].owner;
  let child = document.createElement('p');
  child.innerHTML = kids[i].petName;
  articleElement.appendChild(parent);
  articleElement.appendChild(child);
}