const mongoose = require('mongoose') //importing the Mongoose library

// mongoose.Schema: A schema is like a blueprint for your MongoDB data.
// It defines the structure of the data stored in database.
// every "todo" in the database will have a field called task, and it will be of type String.
const TodoSchema = new mongoose.Schema({
    task_description: String,
    done:{
        type: Boolean,
        default: false
    }
})

//TodoModel is the variable used to interact with the "todos" collection (e.g., to add, delete, or retrieve tasks).
const TodoModel = mongoose.model("todos", TodoSchema) //in MongoDB, the collection is called "todos"
module.exports = TodoModel