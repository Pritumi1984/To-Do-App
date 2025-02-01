import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function Create () {

    const [task, setTask] = useState();

    //Axios is a popular JavaScript library used to make HTTP requests (like GET, POST, PUT, DELETE) from the browser or Node.js environment.
    // axios.post("URL") is used to send an HTTP POST request to the URL specified.
    //The handleAdd function sends a POST request to the server at 'http://localhost:3001/add' with the new task ({task: task}).
    const handleAdd = () => {
        axios.post('http://localhost:3001/add', {task: task})
        .then(result => {
            location.reload(); //reloads the page
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="create_form">
            <input type="text" placeholder='Enter task' onChange={(e) => setTask(e.target.value)} />
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Create;