import React from "react";
import UserContext from "../Context/UserContext";
import { useState } from "react";
import { useContext } from "react";

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

    return (
        <div>
            <h2>Login</h2>
            <input className='bg-white text-black rounded-lg p-1' 
                type='text'
                placeholder="username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            /> {" "}
            <input className='bg-white text-black rounded-lg p-1'
                type='password'
                placeholder="password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /> {" "}
            <button onClick={handleSubmit}
                className='bg-blue-800 p-1 rounded-lg' 
            >Submit</button>
        </div>
    )
}

export default Login