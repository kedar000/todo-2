import { useState } from "react";
import { Navbar } from "./Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export function Update(){
    const navigate = useNavigate();
    const location = useLocation();
    const { todo } = location.state;
    console.log(todo);

    const [prevTask, setPrevTask] = useState(todo.task);
    const [prevDescription, setPrevDescription] = useState(todo.description);
    const [updateTask, setUpdateTask] = useState('');
    const [updateDescription, setUpdateDescription] = useState('');

    function updateTodoReq(){
        
        try {
            const response = axios.put("http://localhost:3000/v1/task/updatetodo" , {
            prevTask : prevTask,
            prevDescription : prevDescription,
            task : updateTask,
            description : updateDescription

        }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        navigate('/ShowTodo')
        window.location.reload();
        console.log("success")

        } catch (error) {
            console.log("there is an error " , error)
        }
        
    }
    return (
        <>
            <Navbar />
            
            <input onChange={(e) => setUpdateTask(e.target.value)} type="text" placeholder="Task"/>
            <input onChange={(e) => setUpdateDescription(e.target.value)} type="text" placeholder="Description"/>
            <div>
                <button onClick={updateTodoReq}>Update</button>
                <button onClick={() => navigate('/ShowTodo')}>Back</button>
            </div>
        </>
    );
}
