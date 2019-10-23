'use strict';

// INSTRUCTIONS
// Do not modify this file
// 
//   1, Build up the necessary structure with JavaScript (try to use semantically correct elements)
//   2, Achive the same design by css
//   3, Try not to use css classes
//   4, Add some functionality to the buttons
//       - If "Up" is clicked the selection should move up by one
//       - If "Down" is clicked the selection should move down by one
//       - If "X" is clicked the selected item should be removed and the first item should be selected
//       - If ">" is clicked the selected item should be moved to the right side and the first item on the left side should be selected
//   5, Check all the edge cases, no error should be printed to the console
//
//   https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/dom/assets/list-manager.jpg

let body = document.getElementsByTagName('body')[0];

// creating left container

let leftListContainer = document.createElement('ul');
leftListContainer.setAttribute('class', 'box left');
body.appendChild(leftListContainer);
let items = ['bread', 'milk', 'orange', 'tomato', 'bananas'];
for (let i = 0; i < items.length; i++) {
  let node = document.createElement('li');
  node.innerHTML = items[i];
  if (i == 0) {
    node.setAttribute('class', 'highlight');
  }
  leftListContainer.appendChild(node);
}

// creating buttons
let buttonContainer = document.createElement('nav');
buttonContainer.setAttribute('class', 'buttons');
body.appendChild(buttonContainer);
let buttonText = ['Up', '>', 'X', 'Down'];
let onClickFnc = ['up()', 'add()', 'remove()', 'down()']
for (let i = 0; i < buttonText.length; i++) {
  let node = document.createElement('button');
  node.setAttribute('onclick', onClickFnc[i])
  node.innerHTML = buttonText[i];
  buttonContainer.appendChild(node);
}


// creating right container

let rightListContainer = document.createElement('ul');
rightListContainer.setAttribute('class', 'box right');
body.appendChild(rightListContainer);

// BUTTON FUNCTIONS

// moving selection DOWN
let down = () => {
  let listItemCount = document.getElementsByClassName('box left')[0].childElementCount;
  let listItems = document.getElementsByClassName('box left')[0].childNodes;
  for (let i = 0; i < listItemCount; i++) {
    if (listItems[i].getAttribute('class') == 'highlight') {
      if (i == listItemCount - 1) {
        listItems[i].removeAttribute('class');
        listItems[0].setAttribute('class', 'highlight');
        i = listItemCount;
      } else {
        listItems[i].removeAttribute('class');
        listItems[i + 1].setAttribute('class', 'highlight');
        i = listItemCount;
      }
    }
  }
}

// moving selection UP
let up = () => {
  let listItemCount = document.getElementsByClassName('box left')[0].childElementCount;
  let listItems = document.getElementsByClassName('box left')[0].childNodes;
  for (let i = 0; i < listItemCount; i++) {
    if (listItems[i].getAttribute('class') == 'highlight') {
      if (i == 0) {
        listItems[0].removeAttribute('class');
        listItems[listItemCount - 1].setAttribute('class', 'highlight');
        i = listItemCount;
      } else {
        listItems[i].removeAttribute('class');
        listItems[i - 1].setAttribute('class', 'highlight');
        i = listItemCount;
      }
    }
  }
}

// removing highlighted element

let remove = () => {
  try {
  let toRemove = document.getElementsByClassName('highlight')[0];
  let parent = toRemove.parentNode;
  parent.removeChild(toRemove);
    document.getElementsByClassName('box left')[0].childNodes[0].setAttribute('class', 'highlight');
  } catch {}
  }

// moving highlighted element

let add = () => {
  try{
    let toAdd = document.getElementsByClassName('highlight')[0];
    let parent = document.getElementsByClassName('right box')[0];
    remove();
    toAdd.removeAttribute('class')
    parent.appendChild(toAdd);
  } catch {}
}