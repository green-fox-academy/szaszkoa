'use strict';

const setCurrentSong = (element) => {
  let audioTag = document.querySelector('audio');
  audioTag.src = element.path;
};

export { setCurrentSong };