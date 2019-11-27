'use strict'

import { playAndPause } from '../modules/buttons/playPause.mjs';
import { getPlaylists } from '../modules/dataRequests/getPlaylists.mjs';
import { getSongs } from '../modules/dataRequests/getSongs.mjs';

class MediaPlayer {

  initialize = () => {
    playAndPause();
    getPlaylists();
    getSongs();
  };

};

const webPlayer = new MediaPlayer;
webPlayer.initialize();