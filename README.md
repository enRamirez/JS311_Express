# JS311_Express Examples

create a backend that is 
always running 
listening for requests

request
*** verb (GET, POST, PUT, DELETE)
- URL or domain
*** route - what comes after the domain
- query (sometimes) - the stuff after the "?" 
- body (sometimes) 
- header (sometimes for extra options or params) we wont do this much

response 
*** body 
*** response/status code
- header (usually dont care about this)

When we are working on our computers, we are the server.

http://localhost:5001/ plus a route

CLASS 3

review
path (route) params:
you can have only one path param
i.e.
GET /todos/:id and 
GET /todos/: completed
are the same - the word is just a placeholder

query params
you can have more than one, but we'll just use  one in our examples for now
GET /todos?completed=false
GET /todos?completed=true

one route that either has a query  value passed or not 
use conditional (if statement) to find teh right option

***********

todo object should have.
- id : id of the rodo item
- description: what the todo is
- completed : true or false


we're building a todo backend and here is what we want to support:

route that returns all the todos in our list 
 GET /todos
 return an array of all todo objects

route that returns a single todo based on the id provided
 GET /todos/:id:id is the id of the todo to return if it exists
    otherwise return message "Id not found"

route that will delete a single todo based on the id provided
 DELETE /todos/:id:id is the id of the todo that was deleted
    return message with the item that was deleted

route that adds a single todo to the list
 POST /todos
    body should include an object that has a description.
    we'll make a function that generates a random id that's added
       when the new todo is created
    ex: body: {"description" : "feed the dog"}

route that updates an existing todo based on the id provided
 PUT /todos/:id
 ex: /todos/10, body= {"description": "buy groceries", "completed": true}


we're going to build a function to generate a random id