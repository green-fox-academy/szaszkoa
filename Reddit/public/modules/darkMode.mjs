'use strict';

// dark mode function
const darkMode = () => {
  //grabbing swith DOM element
  let styleSheetRef = document.querySelector('link');
  let switchElement = document.getElementsByClassName('checkbox')[0];

  // assigning secondary stylesheet value based on checkbox state
  switchElement.addEventListener('change', () => {
    switchElement.checked ? styleSheetRef.setAttribute('href', "/styles/dark.css") : styleSheetRef.setAttribute('href', "/styles/light.css");
  });
};

export { darkMode };
