// check
// console.log("loading main.js")

// brings in all the functions we need from express module
const express = require('express');

// create an application object that uses express 
let app = express();

// define a port the will communicate through 
let PORT = 5001;

// for testing, our domain name is http://localhost:5001

// for any request where the route is "/hello"
// send a string as the response
app.get('/hello', (req, res) => {
    res.send("Hi there from the hello route")
})

// write a GET with a route that will let send get a message by name
// route /hello/John
app.get('/hello/:name', (req, res) => {
    
    let value = req.params.name;
    let message = `Hello ${value}`;

    res.send(message)
})

// write a GET route definition that uses query parameter

// request url contains /bye?name=Jeff    --> "See you later Jeff"
// request url contains /bye?name=Smith   --> "See you later Smith"
// request url contains /bye              --> "See you later"

// HINT: you get the query parameter using: req.query.name
app.get('/bye', (req, res) => {

    let  value = req.query.name;
    
    if(value) {
        res.send(`See you later ${value}`)
    } else {
        res.send(`See you later`)
    }
})



app.listen(PORT, () => {console.log("App is listening on port", PORT)})