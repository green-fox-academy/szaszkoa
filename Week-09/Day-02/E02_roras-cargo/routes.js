'use strict';

const express = require('express');
const app = express();

let rocketsShip = {
  "caliber25": 0,
  "caliber30": 0,
  "caliber50": 0,
  "shipstatus": "empty",
  "ready": false
}

let ammoAvailable = rocketsShip.caliber25 + rocketsShip.caliber30 + rocketsShip.caliber50;

app.get('/rocket', (req, res) => {
  res.status(200).json(rocketsShip);
});

app.get('/rocket/fill', (req, res) => {
  if(req.query.caliber && req.query.amount){
    let inputCaliber = req.query.caliber;
    let inputAmount = parseInt(req.query.amount);
    let statusPercentage = ((ammoAvailable + inputAmount) / 12500) * 100
  
    if (req.query.caliber == '.25') {
      rocketsShip.caliber25 += inputAmount;
    } else if (req.query.caliber == '.30') {
      rocketsShip.caliber30 += inputAmount;
    } else if (req.query.caliber == '.50') {
      rocketsShip.caliber50 += inputAmount;
    };
  
    rocketsShip.shipstatus = statusPercentage == 0 ? 'empty' : statusPercentage == 100 ? 'full' : statusPercentage > 100 ? 'overloaded' : `${statusPercentage}%`;
    rocketsShip.ready = rocketsShip.shipstatus == 'full' ? true : false;
  
    let response = {
      "received": inputCaliber,
      "amount": inputAmount,
      "shipstatus": statusPercentage == 0 ? 'empty' : statusPercentage == 100 ? 'full' : statusPercentage > 100 ? 'overloaded' : `${statusPercentage}%`,
      "ready": statusPercentage == 100 ? true : false
    };
  
    res.status(200).json(response);
  } else {
    res.status(400).json({
      'error': 'No query sent'
    });
  };
});

module.exports = app;