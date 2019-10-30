'use strict';

// Example input: 
// {
//   "text": "This is my example sentence. Just for fun."
// }


// example output:
// {
//   "sith_text": "Is this example my sentence. Arrgh. Uhmm. For just fun. Err..err.err."
// }

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: false }))

const jsonParser = bodyParser.json();

app.post('/', jsonParser, (req, res) => {
  let input = req.body.text.split(' ');
  let output = [];
  for (let i = 0; i < input.length; i++) {
    if (i+1%2 == 0){
      output.splice(i,0,input[i]);
    } else {
      output.push(input[i]);
    }
  }
  res.status(200);
  res.send(JSON.stringify(output));
})

app.listen(PORT, () => {
  console.log(`Listening on port number ${PORT}`);
});