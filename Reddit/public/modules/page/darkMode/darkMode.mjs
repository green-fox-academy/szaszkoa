'use strict';

import { setSessionStorage } from '../sessionStorage.mjs';
import { setTransition, removeButtonTransition } from './darkModeTransition.mjs';

// dark mode function with Session Storage attribute setting
const darkMode = (tagNames, classNames) => {
  let styleSheetRef = document.querySelector('link');
  let switchElement = document.getElementsByClassName('checkbox')[0];

  // checking session storage for existing setting and setting the switch according the value
  if (sessionStorage.getItem('darkMode') == 'off' || null) {
    removeButtonTransition();
    switchElement.checked = false;
    styleSheetRef.setAttribute('href', "/styles/light.css");
    setSessionStorage('darkMode', 'off');
  } else if (sessionStorage.getItem('darkMode') == 'on') {
    removeButtonTransition();
    switchElement.checked = true;
    styleSheetRef.setAttribute('href', "/styles/dark.css");
    setSessionStorage('darkMode', 'on');
  };

  // assigning darkMode stylesheet value based on checkbox state and setting Session Storage
  switchElement.addEventListener('change', () => {
    if (switchElement.checked) {
      setTransition(tagNames, classNames);
      setSessionStorage('darkMode', 'on');
      styleSheetRef.setAttribute('href', "/styles/dark.css");
    } else {
      setTransition(tagNames, classNames);
      setSessionStorage('darkMode', 'off');
      styleSheetRef.setAttribute('href', "/styles/light.css");
    };

  });
};

export { darkMode };
