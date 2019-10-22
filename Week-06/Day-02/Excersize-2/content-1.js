'use strict';

let pList = document.getElementsByTagName('p')

for(let i = 0;i<pList.length;i++){
  pList[i].innerText = 'goat rabbit cat dog'
}


// this sets every <p> tag to strong cat


let pList2 = document.getElementsByTagName('p')

for(let i = 0;i<pList2.length;i++){
  pList2[i].innerHTML = pList2[pList2.length-1].innerHTML
}

//or, another solution: 

// for(let i = 0;i<pList2.length;i++){
//   pList2[i].innerHTML = 'goat rabbit <strong>cat</strong> dog'
// }


