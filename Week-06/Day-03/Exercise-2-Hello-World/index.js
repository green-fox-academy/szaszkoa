'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

// setting up EJS as our view engine. EJS looks into folders, 
// so we dont have to specify the exact address, and rood folder.
app.set('view engine', 'ejs');

// if the file we are giving back is an EJS file, we can embed JS code in it. 
// the data can be specified in the GET/RES method, as below.
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Hello World',
    message: 'Total feline world-domination',
    livesOfCats: 9,
    overLords: 'Cats'
  })
})

// just a listening to a port mehod :)
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})