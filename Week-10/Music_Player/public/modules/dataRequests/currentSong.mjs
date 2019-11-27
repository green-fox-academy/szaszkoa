'use strict';

import { displayCurrSong } from "../DOMmanipulation/displayCurrentSong.mjs";
import { setSlider } from "../DOMmanipulation/setSlider.mjs";
import { setCurrentSong } from "../DOMmanipulation/setCurrentSong.mjs";

const currentSong = async () => {

  let currentlySelected = document.querySelector('#selected');
  let song_id = currentlySelected.dataset.songId
  await fetch(`http://localhost:5000/song/${song_id}`)
    .then(response => response.json())
    .then(songData => {
      displayCurrSong(songData[0]);
      setSlider(songData[0]);
      setCurrentSong(songData[0]);
    })
    .catch(error => {
      console.log(error);
    });

};

export { currentSong };