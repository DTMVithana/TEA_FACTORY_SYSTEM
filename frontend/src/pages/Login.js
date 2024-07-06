import React, { useState } from "react";
import axios from "axios";
import "../styles/LLayoutStyles.css";

export default function LoginUser() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [userLoginStatus, setUserLoginStatus] = useState(null);

    const checkUser = async (event) => {
        event.preventDefault();
        try {
            // Your login logic here
            // Assuming login is successful
            setUserLoginStatus("success");
            // Redirect to the dashboard
            window.location.href = "http://localhost:3001/dash";
        } catch (error) {
            setUserLoginStatus("error");
            console.error("Login failed:", error);
        }
    };

    return (
        <>  
        <div className="login">                 
            <div className="h-screen flex items-center justify-center">
                <form className="bg-gray-400 p-12 rounded shadow-md" onSubmit={checkUser}>
                <div className="text-center mb-8">
                        <h2 className="text-5xl font-bold">Batuwangala Tea Factory</h2>
                    </div>
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold">Welcome!</h2>
                    </div>
                    <h2 className="text-center mb-4 text-lg font-bold">Login</h2>
                    <div className="mb-4">
                        <input
                            type="text"
                            className="w-full px-3 py-2 border rounded"
                            placeholder="Username"
                            pattern="[A-Z]{2}[0-9]{3}"
                            required
                            onChange={(event) => { setUserName(event.target.value); }}
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="password"
                            className="w-full px-3 py-2 border rounded"
                            placeholder="Password"
                            pattern="[a-z]{4-8}"
                            minLength="4"
                            maxLength="8"
                            required
                            onChange={(event) => { setPassword(event.target.value); }}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="bg-green-700 text-white px-8 py-3 rounded hover:bg-green-600 focus:bg-green-600">
                            Login
                        </button>
                    </div>
                </form>
            </div>
            </div> 
        </>
    );
}