'use strict';

{/* <option value="moon">Moon</option>
<option value="2001-space-odyssey">2001: Space Odyssey</option>
<option value="contact">Contact</option>
<option value="darkest-hour">Darkest-Hour</option>
<option value="there-will-be-blood">There Will Be Blood</option>
<option value="american-beauty">American Beauty</option>
<option value="airplane">airplane!</option>
<option value="deadpool">Deadpool</option>
<option value="waynes-world">Wayne's World</option> */}

let movies = [
  { 'class': 'sci-fi', 'value': "moon", 'title': 'Moon' },
  { 'class': 'sci-fi', 'value': "2001-space-odyssey", 'title': 'Space Odyssey' },
  { 'class': 'sci-fi', 'value': "contact", 'title': 'Contact' },
  { 'class': 'drama', 'value': "darkest-hour", 'title': 'Darkest Hour' },
  { 'class': 'drama', 'value': "there-will-be-blood", 'title': 'There Will Be Blood' },
  { 'class': 'drama', 'value': "american-beauty", 'title': 'American Beauty' },
  { 'class': 'comedy', 'value': "airplane", 'title': 'Airplane!' },
  { 'class': 'comedy', 'value': "deadpool", 'title': 'Deadpool' },
  { 'class': 'comedy', 'value': "waynes-world", 'title': 'Wayne\'s World' }
]

const genre = document.getElementById('genre-select');
const movie = document.getElementById('movie-select');
let selectedMovie = document.getElementsByTagName('p')[0];

genre.addEventListener('change', filterMovies);

function filterMovies() {
  movie.innerHTML = '<option value="">Select a movie</option>';
  selectedMovie.innerText = 'The selected movie is - '
  for (let i = 0; i < movies.length; i++) {
    if (genre.value == movies[i].class) {
      let newOption = document.createElement('option');
      newOption.textContent = movies[i].title;
      newOption.setAttribute('value', movies[i].value);
      movie.appendChild(newOption);
    };
  };
};

movie.addEventListener('change', displayMovie);


function displayMovie(){
  let selectedOne = "";
  for(let i = 0; i < movies.length; i++){
    movie.value == movies[i].value ? selectedOne = movies[i].title : undefined;
  };
  selectedMovie.innerText = `The selected movie is ${selectedOne}`;
};
