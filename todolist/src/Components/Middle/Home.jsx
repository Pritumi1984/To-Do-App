import React, { useEffect } from 'react';
import Create from './Create';
import { useState } from 'react';
import axios from 'axios';
import { FaCircle } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FcTodoList } from "react-icons/fc";

function Home() {

    const [todos, setTodos] = useState([]);

    //useEffect lets you automatically run some code (called a "side effect") when something happens
    useEffect(() => {
        axios.get('http://localhost:3001/get') // fetch all tasks from the server
        .then(result => setTodos(result.data)) // This updates your list of todos.
        .catch(err => console.log(err))
    }, [] //The empty array tells React to only run this once when the component loads.
    )

    const handleEdit = (id) =>{
        axios.put('http://localhost:3001/update/'+id)
        .then(result => {
            location.reload();
        })
        .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/'+id)
        .then(result => {
            location.reload();
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="home">
            <h2 className='todoHeading'><FcTodoList className='icon'/>To-Do List</h2>
            <Create />
            {
                todos.length === 0 
                ? 
                <h2> No Record</h2>
                :
                todos.map(todo =>(
                    <div className='task_design'>

                        <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                            {todo.done 
                            ? <IoIosCheckmarkCircle className='icon'/>
                            : <FaCircle className='icon'/>}
                            <p className={todo.done ? 'line_through' : ""}>{todo.task_description}</p>
                        </div>
                        <div>
                            <span><RiDeleteBin6Line className='icon' 
                            onClick={() => handleDelete(todo._id)}/></span>
                        </div>


                    </div>
                ))
            }
            

        </div>
    )
}

export default Home;