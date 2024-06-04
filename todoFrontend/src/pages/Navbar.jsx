import { useState } from "react";
import { useNavigate } from "react-router-dom"

export function Navbar(){
    const [loginLogo , setLoginLogo] =useState('Login')
    const navigate = useNavigate();
    return (
        <>
            <nav>
                <ul className="flex justify-between px-5 py-6 bg-gray-800">
                    <li>
                        <button
                            onClick={() => {
                                navigate("/");
                            }}
                            className="text-off-white"
                        >
                            Logo
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                navigate("/Login");
                            }}
                            className="text-off-white"
                        >
                            {loginLogo}
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    );
    
    
}