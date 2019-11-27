'use strict';

import { timeCalculator } from '../functions/timeDisplay.mjs'

const setSlider = (element) => {
  let mainSlider = document.querySelector('#time_slider');
  mainSlider.setAttribute('max', `${element.duration}`);
  let maxValue = document.querySelector('#total');
  maxValue.innerHTML = timeCalculator(element.duration);
  let minValue = document.querySelector('#remaining')
  minValue.innerHTML = timeCalculator(0)
};

export { setSlider };