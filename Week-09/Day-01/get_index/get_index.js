'use strict';


function getIndex(list, value) {
  let counter = -1;
  let result = -1;
  list.forEach(element => {
    counter++;
    element === value ? result = counter : null;
  });
  return result;
};

module.exports = getIndex;