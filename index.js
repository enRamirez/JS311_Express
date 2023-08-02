// this is my final file when i get my routes and controllers

const express = require('express');
let app = express();
let PORT = 5001;
app.use(express.json());

// let my app know hwere th public stuff is (for homework)
app.use(express.static('public'));

// require the routes in the todoRoutes.js
const toDos = require('./routes/todoRoutes');
// use the toDos reoutes in your app
app.use(toDos); 


app.listen(PORT, () => {console.log("App is listening on port", PORT)})