'use strict';

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

// *** START OF ENDPOINTS ***

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/views/index.html');
});


// *** LISTENING FOR PORT ***

app.listen(PORT, () => {
  console.log(`Listening on port *${PORT}*`);
});

