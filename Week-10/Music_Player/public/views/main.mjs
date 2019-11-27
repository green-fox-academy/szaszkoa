'use strict'

import { playAndPause } from '../modules/buttons/playPause.mjs';
import { getPlaylists } from '../modules/dataRequests/getPlaylists.mjs';
import { getSongs } from '../modules/dataRequests/getSongs.mjs';
import { prevNextSong } from '../modules/DOMmanipulation/prevNextSong.mjs';

class MediaPlayer {

  initialize = () => {
    playAndPause();
    getPlaylists();
    getSongs();
    prevNextSong();
  };

};

const webPlayer = new MediaPlayer;
webPlayer.initialize();