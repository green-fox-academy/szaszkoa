'use strict';

const express = require('express');
const app = express();

app.get('yondu', (req, res) => {
  distance = req.query.distance;
  time = req.query.time;
  speed = distance/time;
});

modules.export = app;