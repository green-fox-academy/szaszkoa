'use strict'

// defining a function to set transition on darkmode impacted elements to prevent transition when a session storage value is stored

const setTransition = (tagNames, classNames) => {
  // targeting the DOM elements changing color
  let nodeArray = [];
  tagNames.forEach(node => {
    nodeArray.push(document.getElementsByTagName(node)[0]);
  });
  classNames.forEach(node => {
    nodeArray.push(document.getElementsByClassName(node)[0]);
  });

  nodeArray.forEach(node => {
    node.style.transition = "1s";
  });
};

// trageting the switch to render on the new page without animation
const removeButtonTransition = () => {
  let sliderBackground = document.getElementsByClassName('slider')[0];
  // let sliderButton = window.getComputedStyle(document.getElementsByClassName('slider')[0], ':before');
  sliderBackground.style.transition = "0s"; 
};

export { setTransition, removeButtonTransition };