import { useState } from "react";
import { useNavigate } from "react-router-dom"

export function Navbar(){
    const [loginLogo , setLoginLogo] =useState('Login')
    const navigate = useNavigate();
    return (
        <>
            <nav >
                <ul className="flex justify-between px-5 py-6 bg-color-reddish">
                    <li>
                        <button
                            onClick={() => {
                                navigate("/");
                            }}
                            className="text-color-offwhite text-xl"
                        >
                            Todo
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                navigate("/Login");
                            }}
                            className="text-color-offwhite text-xl"
                        >
                            {loginLogo}
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    );
    
    
}