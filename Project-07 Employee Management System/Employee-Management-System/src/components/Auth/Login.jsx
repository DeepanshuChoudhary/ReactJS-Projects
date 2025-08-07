import React, { useState } from "react";

const Login = ({handleLogin}) => {

    // console.log(handleLogin)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Your form is submitted')
        // console.log('Your form is submitted ' +email+" "+password)

        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

    const handleEmail = (e) => {
        // console.log(e)
        setEmail(e);
        // setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        // console.log(e.target.value)
        setPassword(e.target.value);
    }

    return (
        <div className='flex items-center justify-center h-screen bg-[#1c1c1c]'>
            <div className='outline-none px-20 py-40 rounded-xl bg-[#242424]'>
                <form className='flex flex-col items-center justify-center'>
                    <input type='email'
                        required
                        value={email}
                        onChange={(e) => {
                            handleEmail(e.target.value)
                        }}
                        // onChange={(e) => {
                        //     setEmail(e.target.value)
                        // }}
                        placeholder="Enter your email"
                        className='bg-[#1c1c1c] rounded-full py-3 px-5 text-xl outline-none placeholder:text-gray-400'
                    />
                    <input type='password' 
                        required
                        value={password}
                        onChange={handlePassword}
                        placeholder="Enter your password"
                        className='bg-[#1c1c1c] rounded-full py-3 px-5 text-xl outline-none placeholder:text-gray-400 mt-3'
                    />
                    <button type='submit'
                        onClick={handleSubmit}
                        className='rounded-full py-2 px-28 text-xl outline-none bg-emerald-600 text-white mt-7'
                    >Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login