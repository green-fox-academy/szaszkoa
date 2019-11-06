'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const jsonParser = bodyParser.json();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/' ,(req, res) => {
  res.sendfile('./public/login_form.html');
});

app.post('/send', jsonParser, (req, res) => {
  console.log(req.body.user_name);
  console.log(req.body.password);
});

app.listen(PORT, () => {
  console.log(`Listening on port number ${PORT}`);
});