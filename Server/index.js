// require() is how you import libraries or files into code

const express = require('express'); //gives you access to all the tools that Express provides, so you can set up your server, handle HTTP requests etc.
const mongoose = require('mongoose'); //helps you interact with MongoDB, your database.
const cors = require('cors'); //a security feature that allows or restricts web browsers from making requests to a different domain than the one that served the web page.
const TodoModel = require('./Models/Todo');

const app = express(); //creating an instance of Express
app.use(cors()); // telling the Express server to allow cross-origin requests so front-end (React) can make requests to back-end (Express) without browser blocking them.
app.use(express.json()); //telling Express server to parse incoming requests that have JSON payloads

mongoose.connect('mongodb://127.0.0.1:27017/test')

//app.get (to get all tasks)- handles GET requests to the specified route and '/get' is the route or endpoint where this GET request will be received.
app.get('/get', (req, res) =>{
    TodoModel.find() //Query the MongoDB database to find all tasks.
    .then(result => res.json(result)) // then backend sends the task to frontend
    .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) => {
    const {id} = req.params; //Extract the task id from the request
    TodoModel.findByIdAndUpdate({_id: id}, {done: true}) //Query the MongoDB database to find the task with the specified id and update it.
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/delete/:id', (req, res) => {
    const {id} = req.params; //Extract the task id from the request
    TodoModel.findByIdAndDelete({_id: id}, {done: true}) //Query the MongoDB database to find the task with the specified id and delete it.
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
//app.post (to add a task)- handles POST requests to the specified route and '/add' is the route or endpoint where this POST request will be received. 
// req is request and res is response. req.body.task is accessing the task that was sent by the front-end.
//you're just capturing the task and storing it in a variable called task.
app.post('/add', (req, res) => {
    const task = req.body.task; //Extract the task from the request body
    TodoModel.create({
        task_description: task // after receiving the post request with the new task, create a new entry in database.
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

//app.listen() tells Express server to start listening for incoming requests from front end on port 3001
app.listen(3001, () => { 
    console.log('Server is Running')
})
