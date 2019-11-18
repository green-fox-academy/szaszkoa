'use strict';

// dark mode function
let styleSheetRef = document.querySelector('link');
let switchElement = document.getElementsByClassName('checkbox')[0];

switchElement.addEventListener('change', () => {
  if (switchElement.checked === true) {
    styleSheetRef.setAttribute('href', "/styles/dark.css");
  } else if (switchElement.checked === false){
    styleSheetRef.setAttribute('href', "/styles/light.css");
  };
});
