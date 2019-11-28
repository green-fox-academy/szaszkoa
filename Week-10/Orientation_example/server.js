'use strict';

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static('public'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'newuser',
  password: 'password',
  database: 'urlaliser'
});

const tableName = 'urls';

connection.connect((err) => {
  err ? console.error(new Error(err)) : console.log(`Database *urlaliser* connected!`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/views/index.html');
});

app.post('/api/links', (req, res) => {
  let checkQuery = `SELECT alias FROM ${tableName} WHERE alias = ${connection.escape(req.body.alias)};`
  connection.query(checkQuery, (err, result) => {
    if (result.length == 0) {
      let secretCode = Math.floor(1000 + Math.random() * 9000);
      let query = `INSERT INTO ${tableName} (url, alias, secretCode) VALUES (${connection.escape(req.body.url)}, ${connection.escape(req.body.alias)}, ${connection.escape(secretCode)});`;
      connection.query(query, (err, result) => {
          let returnQuery = `SELECT * FROM ${tableName} WHERE url =  ${connection.escape(req.body.url)} AND alias = ${connection.escape(req.body.alias)};`;
          connection.query(returnQuery, (err, result) => {
            err ? res.send(new Error(err)) : res.status(200).send(JSON.stringify(result));
          });
      });
    } else {
      res.status(400).send();
    };
  });
});

app.get('/a/:alias', (req, res) => {
  let query = `UPDATE ${tableName} SET hitCount = hitCount +1 WHERE alias = ${connection.escape(req.params.alias)};`;
  connection.query(query, (err, result) => {
    if (result.affectedRows == 0) {
      res.status(404).send();
    } else {
      let redirectQuery = `SELECT url FROM ${tableName} WHERE alias = ${connection.escape(req.params.alias)};`;
      connection.query(redirectQuery, (err, result) => {
        res.status(200).redirect(result[0].url);
      });
    };
  });
});

app.get('/api/links', (req, res) => {
  let query = `SELECT id, url, alias, hitCount FROM ${tableName};`;
  connection.query(query, (err, result) => {
    err ? res.status(404).send(new Error(err)) : res.status(200).send(JSON.stringify(result));
  });
});

app.delete('/api/links/:id', (req, res) => {
  let checkQuery = `SELECT * FROM ${tableName} WHERE  id = ${connection.escape(req.params.id)};`;
  connection.query(checkQuery, (err, result) => {
    if (result.length != 0) {
      let doubleCheckQuery = `SELECT * FROM ${tableName} WHERE secretCode = ${connection.escape(req.body.secretCode)} AND id = ${connection.escape(req.params.id)};`;
      connection.query(doubleCheckQuery, (err, result) => {
        if (result.length != 0) {
          let query = `DELETE FROM ${tableName} WHERE id = ${connection.escape(req.params.id)};`;
          connection.query(query, (err, result) => {
            err ? res.send(new Error(err)) : res.status(204).send();
          });
        } else {
          res.status(403).send();
        };
      });
    } else {
      res.status(404).send();
    };
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port *${PORT}*.`);
});
