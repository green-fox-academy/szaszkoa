'use strict';

import { generateSongs } from "../DOMmanipulation/generateSongs.mjs";
import { selectedSong } from "../DOMmanipulation/selectedSongs.mjs";
import { setSlider } from "../DOMmanipulation/setSlider.mjs";
import { displayCurrSong } from "../DOMmanipulation/displayCurrentSong.mjs"
import { setCurrentSong } from "../DOMmanipulation/setCurrentSong.mjs";

const getSongs = async () => {
  await fetch('http://localhost:5000/songs')
    .then(response => response.json())
    .then(songs => {
      for (let i = 0; i < songs.length; i++) {
        if (i == 0) {
          setSlider(songs[i]);
          displayCurrSong(songs[i]);
          setCurrentSong(songs[i]);
        };
        generateSongs(songs[i]);
      };
      selectedSong(0)
    });
};


export { getSongs };