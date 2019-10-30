'use strict';

// {
//   "what": "sum",
//   "numbers": [1, 2, 5, 10]
// }

// eg. /arrays with {"what": "sum", "numbers": [1,2,5,10]} will respond {"result": 18}
// eg. /arrays with {"what": "multiply", "numbers": [1,2,5,10]} will respond {"result": 100}
// eg. /arrays with {"what": "double", "numbers": [1,2,5,10]} will respond {"result": [2,4,10,20]}

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: false }))

const jsonParser = bodyParser.json();

app.get('/', (req, res) => {
  res.status(200);
  res.send('Hello World!');
});

app.post('/', jsonParser, (req, res) => {
  if (req.body.what == 'sum') {
    let result = 0;
    for (let i = 0; i < req.body.numbers.length; i++) {
      result += req.body.numbers[i];
    };
    res.status(200);
    res.send(
      {
        'result': result
      }
    );
  } else if (req.body.what == 'multiply') {
    let result = 1;
    for (let i = 0; i < req.body.numbers.length; i++) {
      result = result * req.body.numbers[i];
    };
    res.status(200);
    res.send(
      {
        'result': result
      }
    );
  } else if (req.body.what == 'double') {
    let result = [];
    for (let i = 0; i < req.body.numbers.length; i++) {
      result.push(req.body.numbers[i] * 2);
    };
    res.status(200);
    res.send(
      {
        'result': result
      }
    );
  } else {

    let sameple = {
      "what": "sum",
      "numbers": [1, 2, 5, 10]
    }

    res.status(404);
    res.send(`Input doesnt match criteria! Expected input is ${sample}: `)
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port number ${PORT}`);
});
