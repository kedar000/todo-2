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
            <div className="bg-color-offwhite flex items-center justify-center h-screen">
                <div className="w-full max-w-md mx-auto bg-color-lightgreen p-8 rounded-lg shadow-md">
                    <h2 class="text-3xl font-bold mb-8 text-center font-mono ">Login</h2>
                    <div className="flex flex-col ">
                        <p className=" text-sm font-semibold mb-1 font-mono ">Email</p>
                        <input onChange={e =>{ setsignInMail(e.target.value)     }} 
                            type="text" 
                            placeholder="Enter The Email"
                            className="mb-5 font-mono shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        ></input>
                        <p className=" text-sm font-semibold mb-1 jmt-6 font-mono">Password</p>
                        <input onChange={e =>{ setSignInPassword(e.target.value) }} 
                            type="password" 
                            placeholder="Enter The Password"
                            className="shadow font-mono appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        ></input>
                    </div>
                    <div className="flex flex-col justify-between ">

                        <button onClick={userSignIn}
                        className=" w-full bg-color-reddish mt-8 mb-4 p-2  rounded-md text-color-offwhite text-l font-semibold font-mono"
                        >Login</button>

                        <p className=" w-full justify-center text-center font-mono text-sm px-3"
                        >Create a New Account ? <button onClick={signup} className="align-baseline underline cursor-pointer ">Signup</button></p>
                    </div>
                </div>
            </div>
        </>
    )
}
