'use strict';

const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
  let distance = + parseFloat(req.query.distance).toFixed(1);
  let time = + parseFloat(req.query.time).toFixed(1);
  let speed = distance/time;

  res.status(200).json({
    "distance": distance,
    "time": time,
    "speed": speed
  });
});

module.exports = app;