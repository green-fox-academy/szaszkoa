'use strict';

const selectedSong = (item) => {
  let firstSong = document.querySelector('#tracks').childNodes[item];
  firstSong.setAttribute('id', 'selected');
}

export { selectedSong };