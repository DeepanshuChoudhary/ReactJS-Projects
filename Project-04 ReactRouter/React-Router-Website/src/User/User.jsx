import React from "react";
import { useParams } from 'react-router-dom';

const User = () => {

    const {userid} = useParams()

    return (
        <div className='bg-gray-600 text-white text-3xl p-4'>  
            <h1>Users: {userid}</h1>
        </div>
    )
}

export default User;