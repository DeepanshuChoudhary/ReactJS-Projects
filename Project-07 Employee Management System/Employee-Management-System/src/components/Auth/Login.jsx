import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    // console.log(handleLogin)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandle = (e) => {
        e.preventDefault();
        // console.log("Email is submit", email);
        // console.log("Password is submit", password);

        handleLogin(email, password);

        setEmail('');
        setPassword('');
    }

    const emailHandle = (e) => {
        setEmail(e.target.value);
        // console.log(email);
    }

    const passwordHandle = (e) => {
        setPassword(e.target.value);
        // console.log(e.target.value);
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='bg-[#242424] px-20 py-30 rounded-xl'>
                <form 
                    onSubmit={(e) => submitHandle(e)}
                    className='flex flex-col items-center justify-center'
                >
                    
                    {/* Email */}
                    <input className="bg-[#1c1c1c] rounded-xl px-3 text-xl py-3 outline-none placeholder:text-gray-400" 
                    value={email}
                    onChange ={(e) => {
                        emailHandle(e);
                    }}
                    required
                    type='email' 
                    placeholder='Enter your email'
                    />
                    
                    {/* Password */}
                    <input className=" mt-4 bg-[#1c1c1c] rounded-xl px-3 text-xl py-3 outline-none placeholder:text-gray-400" 
                    value={password}
                    onChange={(e) => {
                        passwordHandle(e)
                    }}
                    required
                    type='password' 
                    placeholder='Enter your password'
                    />
                    
                    {/* Submit */}
                    <button className="mt-7 w-full border-none bg-emerald-600 rounded-xl px-3 text-xl py-2 outline-none placeholder:text-white">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login                                                                                                      