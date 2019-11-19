'use strict';

// boilerplate

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const env = require('dotenv').config();
const app = express();
const PORT = 8080;
const postsTable = 'posts';
const usersTable = 'users';

app.use(bodyParser.urlencoded({ extended: true }));
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
  err ? console.error(new Error(err)) : console.log(`Database *${process.env.DB_DBNAME}* successfully connected.`);
});

// serving the HTML files
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/newpost', (req, res) => {
  res.sendFile(__dirname + '/public/newpost.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/public/signup.html');
});

// get all posts
app.get('/posts', (req, res) => {
  let query = `SELECT post_id, title, url, timestamp, score, vote, username FROM ${postsTable}
  LEFT JOIN ${usersTable} ON ${postsTable}.owner = ${usersTable}.user_id;`;
  connection.query(query, (err, result) => {
    let errorMessage = `Could not get posts.`;
    err ? res.send({ 'Message': errorMessage, 'Error': err }) : res.set(responseSettings).send(JSON.stringify(result));
  });
});

// post a new post, and send back the full JSON of the last post in the same time
app.post('/posts', jsonParser, (req, res) => {
  let inputQuery = `INSERT INTO ${postsTable} (title, url, timestamp, score, owner, vote) 
  VALUES(${connection.escape(req.body.title)},
  ${connection.escape(req.body.url)},
  '${Math.floor(Date.now() / 1000)}',
   '0',${connection.escape(req.body.user_id)},'0');`;
  let outputQuery = `SELECT * FROM ${postsTable} WHERE post_id = (SELECT MAX(post_id) FROM ${postsTable});`;
  connection.query(inputQuery, (err, result) => {
    let errorMessage = `Could not create post.`
    err ? res.send({ 'Message': errorMessage, 'Error': err }) :
      connection.query(outputQuery, (err, result) => {
        err ? res.send({ 'Message': errorMessage, 'Error': err }) : res.set(responseSettings).redirect('http://localhost:8080/'); // PRAISE GÁBOR *****
      });
  });
});


//vote PUT header settings
const putResponseSettings = {
  'Content-type': 'application/JSON',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'PUT',
  'Accept': 'application/JSON',
  'Status': 200
};

// upvote post
app.put('/posts/:id/upvote', (req, res) => {
  let query = `UPDATE ${postsTable} 
  SET score = score +1, vote = vote + 1 
  WHERE (post_id = ${connection.escape(req.params.id)});`;
  connection.query(query, (err, result) => {
    err ? res.send(new Error(err)) : res.set(putResponseSettings).send(JSON.stringify(result));
  });
});

// downvote post
app.put('/posts/:id/downvote', (req, res) => {
  let query = `UPDATE ${postsTable} 
  SET score = score -1, vote = vote -1 
  WHERE (post_id= ${connection.escape(req.params.id)});`;
  connection.query(query, (err, result) => {
    err ? res.send(new Error(err)) : res.set(putResponseSettings).send(JSON.stringify(result));
  });
});

// delete post
app.delete('/posts/:id', (req, res) => {
  let query = `DELETE FROM ${postsTable} 
  WHERE post_id = ${connection.escape(req.params.id)};`;
  connection.query(query, (err, result) => {
    err ? res.send(new Error(err)) : res.set(responseSettings).send(`Record with ID ${req.params.id} have been deleted`);
  });
});

// register Endpoint
app.post('/signup', jsonParser, (req, res) => {
  let query = `INSERT INTO ${usersTable} (username, first_name, last_name, email, password) VALUES (
    ${connection.escape(req.body.username)},
    ${req.body.first_name ? connection.escape(req.body.first_name) : null},
    ${req.body.last_name ? connection.escape(req.body.last_name) : null},
    ${connection.escape(req.body.email)},
    ${connection.escape(req.body.password)});`
  connection.query(query, (err, result) => {
    err ? res.send(new Error(err)) : res.set(putResponseSettings).redirect('http://localhost:8080/');
  })
})

const specialHeaderSettings = {
  'Content-type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Accept': 'application/JSON',
  'Status': 200
};

// login endpoint, responding with a username in JSON
app.post('/validate', jsonParser, (req, res) => {
  let query = `SELECT username, user_id FROM ${usersTable} 
    WHERE username = ${connection.escape(req.body.username)} 
    AND password = ${connection.escape(req.body.password)};`
    connection.query(query, (err, result) => {
    err ? res.status(401).send(new Error(err)) : res.set(specialHeaderSettings).send(JSON.stringify(result));
  });
});

app.listen(PORT, () => {
  console.log(`Backend listening on port number ${PORT}.`);
});
