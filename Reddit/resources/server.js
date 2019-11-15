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
app.use(express.static('public'))

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


app.get('/', (req, res) => {
  res.sendFile('/index.html');
});

app.get('/', (req, res) => {
  res.sendFile('/newpost.html');
});

// get all posts

app.get('/posts', (req, res) => {
  let query = `SELECT * FROM ${tableName}`;
  connection.query(query, (err, result) => {
    let errorMessage = `Could not get posts.`;
    err ? res.send({ 'Message': errorMessage, 'Error': err }) : res.set(responseSettings).send(JSON.stringify(result));
  });
});

// post a new post, and send back the full JSON of the last post in the same time

app.post('/posts', jsonParser, (req, res) => {
  let inputQuery = `INSERT INTO ${tableName} (title, url, timestamp, score, owner, vote) VALUES(${connection.escape(req.body.title)},${connection.escape(req.body.url)}, '${Math.floor(Date.now()/1000)}', '0','0','0');`;
  let outputQuery = `SELECT * FROM ${tableName} WHERE post_id = (SELECT MAX(post_id) FROM ${tableName})`;
  connection.query(inputQuery, (err, result) => {
    let errorMessage = `Could not create post.`
    err ? res.send({ 'Message': errorMessage, 'Error': err }) :
      connection.query(outputQuery, (err, result) => {
        err ? res.send({ 'Message': errorMessage, 'Error': err }) : res.set(responseSettings).send(JSON.stringify(result));
      });
  });
});

// upvote post

const putResponseSettings = {
  'Content-type': 'application/JSON',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'PUT',
  'Accept': 'application/JSON',
  'Status': 200
};


app.put('/posts/:id/upvote', (req, res) => {
  let query = `UPDATE ${tableName} SET score = score +1, vote = vote + 1 WHERE (post_id = ${connection.escape(req.params.id)})`;
  connection.query(query, (err, result) => {
    err ? res.send(new Error(err)) : res.set(putResponseSettings).send(JSON.stringify(result));
  });
});

// downvote post

app.put('/posts/:id/downvote', (req, res) => {
  let query = `UPDATE ${tableName} SET score = score -1, vote = vote -1 WHERE (post_id= ${connection.escape(req.params.id)})`;
  connection.query(query, (err, result) => {
    err ? res.send(new Error(err)) : res.set(putResponseSettings).send(JSON.stringify(result));
  });
});

// delete post
// username functionality is still missing

app.delete('/posts/:id', (req, res) => {
  let query = `DELETE FROM ${tableName} WHERE post_id = ${connection.escape(req.params.id)}`;
  connection.query(query, (err, result) => {
    err ? res.send(new Error(err)) : res.set(responseSettings).send(`Record with ID ${req.params.id} have been deleted`);
  });
});

// listening on port

app.listen(PORT, () => {
  console.log(`Backend listening on port number ${PORT}.`);
});
