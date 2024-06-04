import { Navbar } from "./Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function ShowTodo(){
    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);

    function exportToShowAllTodos(todo){
        navigate('/allTodo' , {state : todo})
    }

    useEffect(()=>{
        async function fetchTodo(){
            try {
                const response = await axios.get("http://localhost:3000/v1/task/gettodo", {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                });
                setTodos(response.data.tasks);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchTodo();
    }, []);

    function handleUpdate(todo){
        navigate('/update', { state: { todo } });
    }

    function isCompleted(todo){
        try {
            const completed = axios.put("http://localhost:3000/v1/task/completed" , {
                task : todo.task,
                description : todo.description
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })

            window.location.reload();
        } catch (error) {
            console.log("there is an error " , error )   
        }
    }


    function unfinshed(todo){
        try {
            const completed = axios.put("http://localhost:3000/v1/task/unfinished" , {
                task : todo.task,
                description : todo.description
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })

            window.location.reload();
        } catch (error) {
            console.log("there is an error " , error )   
        }
    }


    function deleteTodo(todo){
        try {
            const completed = axios.put("http://localhost:3000/v1/task/delete" , {
                task : todo.task,
                description : todo.description
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
        } catch (error) {
            console.log("there is an error " , error )   
        }
    }

    return (
        <>
            <Navbar />
            
            <div className="flex flex-row justify-between">
            <div className="main bg-red-400 m-4">
            <div>todos to complete</div>
                {todos.map((todo, index) => 
                    (todo.isCompleted === false && todo.delete === false) && (
                     (
                        <div key={index} className="flex ">
                            <div>{todo.task} || {todo.description}</div>  
                            <div className="p-2 ">
                                <button className="px-2" onClick={() => handleUpdate(todo)}>Update</button>
                                <button className="px-2" onClick={() => isCompleted(todo)}>Done</button>
                                <button className="px-2" onClick={() => deleteTodo(todo)}>Delete</button>
                            </div>
                        </div>
                    )
                ))}
            </div>
            <div className="justify-center content-center mr-4">
                <div>Completed todos</div>
                {todos.map((todo, index) => 
                    (todo.isCompleted === true && todo.delete === false) && (
                     (
                        <div key={index} className="flex justify-between">
                            <div>{todo.task} || {todo.description}</div>  
                            <div>
                                <button className=" px-4" onClick={()=>unfinshed(todo)}>Un Done</button>
                            </div>
                        </div>
                    )
                ))}
            </div>
            </div>
        </>
    );
    
}
