import React, { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Your form is submitted')
        // console.log('Your form is submitted ' +email+" "+password)

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
        <div className='flex items-center justify-center h-screen'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
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
                        className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400'
                    />
                    <input type='password' 
                        required
                        value={password}
                        onChange={handlePassword}
                        placeholder="Enter your password"
                        className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400 mt-3'
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