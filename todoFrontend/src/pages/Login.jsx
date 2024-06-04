import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { useState } from "react";
import axios from "axios";

export function Login(){
    const navigate = useNavigate();
    const signup =()=>{
        navigate("/SignUp");
    }
    const [signinMail , setsignInMail] = useState('');
    const [SignInpassword , setSignInPassword] = useState('');


    async function userSignIn(){
            const response = await axios.post("http://localhost:3000/v1/user/signin" , {
                mail : signinMail , 
                password : SignInpassword
            } ,{
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
            localStorage.setItem("token" , response.data.token);
            console.log( response.data.token)

            if(response){
                console.log("user signin successfully ")
                navigate('/')
            }
    }
    return (
        <>
        <Navbar />
            <div>
                <div className="flex flex-col ">
                    <input onChange={e =>{ setsignInMail(e.target.value)     }} type="text" placeholder="Enter The Email"></input>
                    <input onChange={e =>{ setSignInPassword(e.target.value) }} type="text" placeholder="Enter The Password"></input>
                </div>
                <div className="flex flex-col justify-between ">
                    <button onClick={userSignIn}>Login</button>
                    <p>Create a New Account <button onClick={signup}>SignUp</button></p>
                </div>
            </div>
        </>
    )
}
