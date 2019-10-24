'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

const toDo = [
  'get up',
  'survive',
  'go back to bed'
]

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
  res.render('home', {toDo})
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})