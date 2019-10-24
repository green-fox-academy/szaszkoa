'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

// you can add a query listener with the req.query.<something> callback. 
// query looks like ?name='value'. It will give back the value of the key if a query is present

app.get('/', (req, res) => {
  if (req.query.name) {
    res.render('home', {
      name: req.query.name
    })
  } else {
    res.render('home', {
      name: 'Guest'
    });
  }
});

app.get('/', (req, res) => {
})

app.listen(PORT, () => {
  console.log(`Imminent breach at port ${PORT}`);
})