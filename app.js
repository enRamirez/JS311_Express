// check
// console.log("loading main.js")

// brings in all the functions we need from express module
const express = require('express');

// create an application object that uses express 
let app = express();

// define a port the will communicate through 
let PORT = 5001;

// make sure all data passing back and forth is in json format
// using a middleware component
app.use(express.json());


// route that returns all the todos in our list 
/**
 * need an array var to hold my todo objects
 * read teh description from the request body
 * and create a new todo with the description
 * use a random number for the id
 * set the completed to false
 */

let db = []; // just for testing. we'd really use a database so the data us persistant.

app.post("/todos", (req,res) => {

    let newItem = {};

    newItem.description = req.body.description
    newItem.completed = false;
    newItem.id = randomInt();

    db.push(newItem);

    res.json(newItem);
})

// route that returns a single todo based on the id provided
app.get("/todos", (req,res) => {
    // console.log("GET /todos")

    res.json(db);
})


// route that will delete a single todo based on the id provided
/**
 * get the id of the todo we want from the route param
 * find that todo in our 'database' that matches the route id
 * if we find it, return the todo
 * otherwise return message 'not found'
 */
app.get("/todos/:id", (req, res) => {
    let myId = req.params.id;

    let matchingItem = db.find((item,index) => {
        return item.id == myId;
    })

    if(matchingItem) {
        res.json(matchingItem);
    } else {
        res.send("ID not found")
        
    }
})


// route that adds a single todo to the list
app.delete("/todos/:id", (req,res) => {
    let myId = req.params.id;

    let matchingIndex = db.findIndex((item,index) => {
        return item.id == myId;
    })
     if(matchingIndex) {
        let deletedItem = db.splice(matchingIndex, 1)
        res.json(deletedItem);
     } else {
        res.send("ID not found");
     }
})


// route that updates an existing todo based on the id provided

/**
 * 
 * get the param id from the route
 * var that holds the description from the body that i'm sending/updating
 * var that holds the completed from the body that i'm sending/updating
 *      let completed = req.body.completed
 * 
 * find the item that matched the id (find should work, or findIndex)
 * 
 * if we find the matching item, matchingItem.completed = completed 
 * otherwise send invalid id msg
 * 
 */

app.put("/todos/:id", (req, res) => {
    let myId = req.params.id;
    let description = req.body.description; 
    let completed = req.body.completed == true;

    let matchingIndex = db.find((item, index) => {
        return item.id == myId;
    })

    if(matchingItem) {
        matchingItem.description = description;
        matchingItem.completed = completed;
        res.json(matchingItem);
    } else {
        res.send("Invalid ID")
    } 
})




const randomInt = () => {
    let randomFloat = Math.random();
    let bigRandomFloat = randomFloat * 100000;
    let randomInt = Math.floor(bigRandomFloat);

    return randomInt;
}


app.listen(PORT, () => {console.log("App is listening on port", PORT)})