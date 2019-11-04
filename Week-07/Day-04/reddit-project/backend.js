'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 8080;
const databaseName = 'reddit';
const tableName = 'posts';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'newuser',
  password: 'password',
  database: databaseName
});

connection.connect((err) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('Database successfully connected.');
  };
});

app.get('/posts', (req, res) => {
  connection.query(`SELECT * FROM ${tableName}`, 
  (err, result) => {
    if (err) {
      console.error(err);
      res.status(500);
      res.send();
      return;
    };
    res.status(200).setHeader('Contet-type', 'application/JSON');
    res.setHeader('Accept', 'application/JSON');
    res.send(result);
  });
});


app.listen(PORT, () => {
  console.log(`Backend listening on port number ${PORT}.`);
});
