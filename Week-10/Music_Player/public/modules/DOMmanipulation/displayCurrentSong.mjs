'use strict';

const displayCurrSong = (element) => {
  let songName = document.querySelector('#song');
  songName.innerText = element.title;
  let bandName = document.querySelector('#band');
  bandName.innerText = element.artist;
};

export { displayCurrSong };