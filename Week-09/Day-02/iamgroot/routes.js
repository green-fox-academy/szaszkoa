'use strict'

const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  if(req.query.message){
    res.status(200).json({
      "recieved": req.query.message,
      "translated": "I am Groot!"
    });
  } else {
    res.status(400).json({
      "error": "I am Groot!"
    });
  };
});

module.exports = app;