'use strict';

const playAndPause = () => {
  const playButton = document.getElementById('pause_play');
  const audioElement = document.querySelector('audio');
  playButton.addEventListener('click', () => {
    console.log('kiscica');
    if (playButton.className == 'play') {
      audioElement.play();
      playButton.className = 'pause';
    } else if (playButton.className == 'pause') {
      audioElement.pause();
      playButton.className = 'play';
    };
  });
};

export { playAndPause };