'use strict';

import { timeCalculator } from "../functions/timeDisplay.mjs";

const generateSongs = (element) => {
  let item = document.createElement('div');
  let songsContainer = document.getElementById('tracks');
  let number = document.createElement('span');
  number.className = 'number';
  number.innerText = element.song_id;
  let name = document.createElement('span');
  name.className = 'title';
  name.innerText = element.title;
  let duration = document.createElement('span');
  duration.className = 'duration';
  duration.innerText = timeCalculator(element.duration);
  item.className = `track`;
  item.dataset.songId = element.song_id;
  item.appendChild(number);
  item.appendChild(name);
  item.appendChild(duration);
  songsContainer.appendChild(item);
};

export { generateSongs };