'use strict';

import { switchSelected } from '../functions/switchSelected.mjs';
import { currentSong } from '../dataRequests/currentSong.mjs';

const prevNextSong = () => {
  let rewind = document.querySelector('#rewind');
  const audioElement = document.querySelector('audio');
  rewind.addEventListener('click', async () => {
    audioElement.currentTime = 0;
    audioElement.pause();
    switchSelected('prev');
    await currentSong(); // switches the src tag
    audioElement.play();
  });
  let forward = document.querySelector('#forward');
  forward.addEventListener('click', async () => {
    audioElement.currentTime = 0;
    audioElement.pause();
    switchSelected('next');
    await currentSong(); // switches the src tag
    audioElement.play();
  });
};

export { prevNextSong };