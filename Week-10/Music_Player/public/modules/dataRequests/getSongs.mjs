'use strict';

import { generateSongs } from "../DOMmanipulation/generateSongs.mjs";

const getSongs = () => {
  fetch('http://localhost:5000/songs')
    .then(response => response.json())
    .then(songs => {
      songs.forEach(element => {
        generateSongs(element);
      });
    });
};

export { getSongs };