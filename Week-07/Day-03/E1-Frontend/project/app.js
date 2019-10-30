'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false }))

const jsonParser = bodyParser.json();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// doubling ENDPOINT
app.get('/doubling', (req, res) => {

  let errorJSON = {
    'error': 'Please provide an input'
  }

  let outputJSON = {
    'received': req.query.input * 1,
    'result': req.query.input * 2
  }

  if (req.query.input) {
    res.send(outputJSON);
  } else {
    res.send(errorJSON);
  };
});

// greeter Endpoint
app.get('/greeter', (req, res) => {
  let responseJSON = {};

  if (req.query.name && req.query.title) {
    responseJSON = {
      'welcome_message': `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    };
    res.send(responseJSON);
  } else if (req.query.name) {
    responseJSON = {
      'error': 'Please provide a title!'
    };
    res.send(responseJSON);
  } else if (req.query.title) {
    responseJSON = {
      'error': 'Please provide a name!'
    };
    res.send(responseJSON);
  } else {
    responseJSON = {
      'error': 'Please provide a name and a title!'
    };
    res.send(responseJSON);
  };
});

// append A endpont

app.get('/appenda/:text', (req, res) => {
  let responseJSON = {
    'appended': `${req.params.text}a`
  };
  res.send(responseJSON);
})


app.get('/appenda', (req, res) => {
  res.status(404);
  res.send();
})

// do until endpoint
// sum: 7+6+5+4+3+2+1 if the input is 7
// factor: 5*4*3*2*1 if the input is 5


app.post('/dountil/:action', jsonParser, (req, res) => {
  if (req.params.action === 'sum') {
    let result = 0;
    for (let i = 0; i < req.body.until; i++) {
      result += req.body.until - i;
    };
    res.send(
      {
        'result': result
      }
    );
  } else if (req.params.action === 'factor') {
    let result = 1;
    for (let i = 0; i < req.body.until; i++) {
      result = result * (req.body.until - i);
    };
    res.send(
      {
        'result': result
      }
    );
  } else {
    res.send(
      {
        'error': 'Please provide a number!'
      }
    );
  };
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});