'use strict';

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;
const databaseName = 'reddit';
const tableName = 'posts';

app.use(bodyParser.urlencoded({ extended: false }));

const jsonParser = bodyParser.json();

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
        console.error(JSON.stringify(err));
        res.status(500);
        res.send();
        return;
      };
      res.status(200).setHeader('Contet-type', 'application/JSON');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Accept', 'application/JSON');
      res.send(JSON.stringify(result));
    });
});

app.post('/posts', jsonParser, (req, res) => {
  let inputTitle = req.body.title;
  let inputURL = req.body.url;
  // req.header('Content-type', 'application/json') check for it$!
  connection.query(`INSERT INTO ${tableName}
    (title, url)
    VALUES ('${inputTitle}', '${inputURL}');`
    , (err, result) => {
      if (err) {
        res.status(500);
        res.send(JSON.stringify(err));
        return;
      };
      connection.query(`SELECT * FROM ${tableName}
      WHERE id = (SELECT MAX(id) FROM posts);`
        , (err, result) => {
          if (err) {
            res.status(500);
            res.send(JSON.stringify(err));
            return;
          } else {
            res.status(200).setHeader('Content-type', 'application/JSON');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Accept', 'application/JSON');
            res.send(JSON.stringify(result));
          }
        })
    });
});

app.put('/posts/:id/upvote', (req, res) => {
  connection.query(` ;`, (err, result) => {

  })
});


app.listen(PORT, () => {
  console.log(`Backend listening on port number ${PORT}.`);
});
