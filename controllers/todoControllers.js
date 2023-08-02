// in homework for day 4, you'll need to require the data file

let db = [];

const postTodo = (req,res) => {

    let newItem = {};

    newItem.description = req.body.description
    newItem.completed = false;
    newItem.id = randomInt();

    // send to database array
    db.push(newItem);

    res.json(newItem);

}

const getAllTodos = (req,res) => {
    console.log("GET /todos")

    res.json(db);
}

const getById = (req, res) => {
    let myId = req.params.id;

    let matchingItem = db.find((item,index) => {
        return item.id == myId;
    })

    if(matchingItem) {
        res.json(matchingItem);
    } else {
        res.send("ID not found")
        
    }
}

const deleteTodo = (req,res) => {
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
}

const updateTodo = (req, res) => {
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
}

const randomInt = () => {
    let randomFloat = Math.random();
    let bigRandomFloat = randomFloat * 100000;
    let randomInt = Math.floor(bigRandomFloat);

    return randomInt;
}

module.exports = {postTodo, getAllTodos, getById, deleteTodo, updateTodo}