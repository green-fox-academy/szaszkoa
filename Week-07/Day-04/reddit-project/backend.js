'use strict';

// boilerplate

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const env = require('dotenv').config();
const app = express();
const PORT = 8080;
const tableName = 'posts';

app.use(bodyParser.urlencoded({ extended: false }));

const jsonParser = bodyParser.json();

// connection details

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DBNAME
});

// standard response after successfull query operations

const responseSettings = {
  'Content-type': 'application/JSON',
  'Access-Control-Allow-Origin': '*',
  'Accept': 'application/JSON',
  'Status': 200
};

// database conneciton

connection.connect((err) => {
  err ? console.error(new Error(err)) : console.log(`Database ${process.env.DB_DBNAME} successfully connected.`);
});

// get all posts

app.get('/posts', (req, res) => {
  let query = `SELECT * FROM ${tableName}`;
  connection.query(query, (err, result) => {
    err ? res.send(new Error(err)) : res.set(responseSettings).send(JSON.stringify(result));
  });
});

// post a new post, and send back the full JSON of the last post in the same time

app.post('/posts', jsonParser, (req, res) => {
  let inputQuery = `INSERT INTO ${tableName} (title, url) VALUES('${connection.escape(req.body.title)}','${connection.escape(req.body.url)}');`;
  let outputQuery = `SELECT * FROM ${tableName} WHERE id = (SELECT MAX(id) FROM ${tableName})`;
  connection.query(inputQuery, (err, result) => {
    err ? res.send(new Error(err)) :
      connection.query(outputQuery, (err, result) => {
        err ? res.send(new Error(err)) : res.set(responseSettings).send(JSON.stringify(result));
      });
  });
});

// upvote post

app.put('/posts/:id/upvote', (req, res) => {
  let query = `UPDATE ${tableName} SET score = score +1 WHERE (id = ${connection.escape(req.params.id)})`;
  connection.query(query, (err, result) => {
    err ? res.send(new Error(err)) : res.set(responseSettings).send(JSON.stringify(result));
  });
});

// downvote post

app.put('/posts/:id/downvote', (req, res) => {
  let query = `UPDATE ${tableName} SET score = score -1 WHERE (id= ${connection.escape(req.params.id)})`;
  connection.query(query, (err, result) => {
    err ? res.send(new Error(err)) : res.set(responseSettings).send(JSON.stringify(result));
  });
});


// delete post
// username functionality is still missing

app.delete('/posts/:id', (req, res) => {
  let query = `DELETE FROM ${tableName} WHERE id = ${connection.escape(req.params.id)}`;
  connection.query(query, (err, result) => {
    err ? res.send(new Error(err)) : res.set(responseSettings).send(`Record with ID ${req.params.id} have been deleted`);
  });
});

// title modification

// app.put('/posts/:id', (req, res) => {
//   let query = `UPDATE ${tableName} SET title = ${}`
// })


app.listen(PORT, () => {
  console.log(`Backend listening on port number ${PORT}.`);
});
