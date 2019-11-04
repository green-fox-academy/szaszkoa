'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 8080;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'newuser',
  password: 'password',
  database: 'bookinfo'
});

connection.connect((err) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('Successfully connected.');
  };
});

app.get('/', (req, res) => {
  connection.query(
    `SELECT 
    book_name AS 'Book_Name', 
    aut_name AS 'Author_Name', 
    cate_descrip AS 'Category', 
    pub_name AS 'Publisher', 
    book_price AS 'Price' 
    FROM book_mast
    LEFT JOIN author ON book_mast.aut_id = author.aut_id
    LEFT JOIN category ON book_mast.cate_id = category.cate_id
    LEFT JOIN publisher ON book_mast.pub_id = publisher.pub_id;`,
    (err, rows) => {
      if (err) {
        console.error(err);
        return;
      };
      res.status(200);
      // res.setHeader('Access-Control-Allow-Origin', '*');
      res.send(rows);
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port number ${PORT}`);
});


// app.listen(PORT, () => {
//   console.log(`Listening on port number ${PORT}`);
// });