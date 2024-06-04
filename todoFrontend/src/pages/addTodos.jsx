import { useState } from "react";
import { Navbar } from "./Navbar";
import axios from "axios";

export function AddTodos(){
    const [task , setTask] = useState('');
    const [description , setDescription] = useState('')

    async function addTodobackend(){
        try {
            
            const userId = await axios.get("http://localhost:3000/v1/task/getid" , {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            } )
            
            const response = await axios.post("http://localhost:3000/v1/task/addtodo" ,
            {
                userId : userId ,
                task : task,
                description : description,
                isCompleted : false,
                delete : false
            },
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
            } catch (error) {
                console.log('error in adding the todo')   
            }
        }
    
        function clearData(){
            setTask('')
            setDescription('')
        }
    
    return(
        <>
        <Navbar />
            <div className="card w-1/3 h-1/2">
            <div className="input flex flex-col">
                <input  onChange={(e) =>{ setTask(e.target.value)       }} value={task} type="text" placeholder="Enter the Task"></input>
                <input  onChange={(e) =>{ setDescription(e.target.value)}} value={description} type="text" placeholder="Enter the Task Description"></input>
            </div>
            <div className="buttons flex flex-row justify-between align-middle w-1/3">
                <button onClick={()=>{addTodobackend() ; clearData()}}>Add</button>
                <button onClick={clearData}>Clear</button>
            </div>
                
            </div>
        </>
    )
}
