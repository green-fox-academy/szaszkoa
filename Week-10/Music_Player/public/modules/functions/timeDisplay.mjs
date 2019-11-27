'use strict';

const timeCalculator = (timeInSeconds) => {
  let minutes = Math.floor(timeInSeconds/60);
  let seconds = timeInSeconds - (minutes*60);

  return `${minutes}:${seconds < 10 ? '0'+seconds : seconds}`
};

export { timeCalculator };