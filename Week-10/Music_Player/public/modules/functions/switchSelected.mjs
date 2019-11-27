'use strict';

const switchSelected = (direction) => {

    let selected = document.querySelector('#selected');
    let nextTrack = selected.nextSibling;
    let prevTrack = selected.previousSibling;
    
    if (direction == 'next'){
      selected.removeAttribute('id', 'selected');
      nextTrack.setAttribute('id', 'selected');
    } else if (direction == 'prev') {
      selected.removeAttribute('id', 'selected');
      prevTrack.setAttribute('id', 'selected');
    };
};

export { switchSelected };