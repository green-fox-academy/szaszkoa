'use strict';

const express = require('express');
const env = require('dotenv').config();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/public', express.static('public'));

// *** DB CONNECTION ***

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DBNAME
});

const songsTable = 'songs';
const playlistsTable = 'playlists';
const songInPlaylist = 'songinplaylist';

connection.connect((err) => {
  err ? console.error(new Error(err)) : console.log(`Database *${process.env.DB_DBNAME}* connected!`);
});

// *** START OF ENDPOINTS ***

// serving main page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/views/index.html');
});

// *** DATA GETTING ENDPOINTS ***

// get playlists
app.get('/playlists', (req,res) => {
  let query = `SELECT * FROM ${playlistsTable};`;
  connection.query(query, (err, result) => {
    err ? res.send(err) : res.set(200).send(JSON.stringify(result));
  });
});

// get songs
app.get('/songs', (req, res) => {
  let query = `SELECT * FROM ${songsTable};`;
  connection.query(query, (err, result) => {
    err ? res.send(err) : res.set(200).send(JSON.stringify(result));
  });
});

//get selected song data
app.get('/song/:id', (req,res) => {
  let query = `SELECT * FROM ${songsTable} WHERE song_id = ${connection.escape(req.params.id)};`;
  connection.query(query, (err, result) => {
    err ? res.send(err) : res.set(200).send(JSON.stringify(result));
  });
});

// *** LISTENING ON PORT ***

app.listen(PORT, () => {
  console.log(`Listening on port *${PORT}*`);
});

