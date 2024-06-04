import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import axios from "axios";
import { useState } from "react";

export function SignUp(){
   
    const [username , setUsername] = useState('');
    const [mail , setMail] = useState('');
    const [password , setPassword] = useState('');

    const navigate = useNavigate();
    const back = ()=>{
        navigate("/Login");

    }

    async function userSignup(){
        const response = await axios.post("http://localhost:3000/v1/user/signup" , {
            username , 
            mail , 
            password
        })

        localStorage.setItem("token" , response.data.token);
        console.log(response.data.token)
        back()
        

    }

     

    return(
        <>
            <Navbar />
            <div className="container flex flex-col">
                <div>SignUp</div>
                <div className="flex flex-col ">
                    <input onChange={e => { setUsername(e.target.value) }} type="text"  placeholder="Enter The Username"></input>
                    <input onChange={e => { setMail(e.target.value)     }} type="email"  placeholder="Enter The Email Address"></input>
                    <input onChange={e => { setPassword(e.target.value) }} type="text"  placeholder="Enter The Password"></input>
                </div>
                <div className="felx  w-1/3 flex-row justify-between">
                    <button  className="px-5" onClick={userSignup}>signUp</button>
                    <button onClick={back}>Back</button>
                </div>

            </div>
        </>
    )
}