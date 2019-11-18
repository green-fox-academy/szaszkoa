'use strict';

// dark mode function
const darkMode = () => {
  //grabbing swith DOM element
  let styleSheetRef = document.querySelector('link');
  let switchElement = document.getElementsByClassName('checkbox')[0];

  // assigning secondary stylesheet value based on checkbox state
  switchElement.addEventListener('change', () => {
    if (switchElement.checked === true) {
      styleSheetRef.setAttribute('href', "/styles/dark.css");
    } else if (switchElement.checked === false) {
      styleSheetRef.setAttribute('href', "/styles/light.css");
    };
  });
};

export { darkMode };
