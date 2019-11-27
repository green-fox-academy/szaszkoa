'use strict';

const getPlaylists = async () => {
  await fetch('http://localhost:5000/playlists')
    .then(response => response.json())
    .then(playlists => {
      playlists.forEach(element => {
        let item = document.createElement('li');
        let playlistContainer = document.getElementById('playlists');
        item.className = 'playlist';
        item.innerText = element.title;
        playlistContainer.appendChild(item);
      });
    });
};

export { getPlaylists };