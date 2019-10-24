'use strict';

// used to declare the package, the app, and the port which would be open
const express = require('express');
const app = express();
const PORT = 3000;

// declaration of the static ROOT folder (in this case its the root, but if it would be the assets folder, it would say 'assets')
app.use(express.static('./'))

// defining the RESponse when the / path is requested.
app.get('/', function(req, res){
  res.sendFile('index.html');
})

// listening function, for the program to know, that port 300 is the open one
app.listen(PORT, function(){
  console.log(`Yaaay, we are listening on port ${PORT}`)
})