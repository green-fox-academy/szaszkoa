'use strict';

const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {

  if(req.query.distance && req.query.time){
    let distance = + parseFloat(req.query.distance).toFixed(1);
    let time = + parseFloat(req.query.time).toFixed(1);
    let speed = distance/time;
  
    res.status(200).json({
      "distance": distance,
      "time": time,
      "speed": speed
    });
  } else {
    res.status(404).json({
      "error": 'No parameters have been set.'
    })
  }
});

module.exports = app;