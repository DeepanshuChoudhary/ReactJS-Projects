import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {

    const data = useLoaderData();

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/DeepanshuChoudhary')
    //         .then((response) => response.json())
    //         .then((response) =>  {
    //             setData(response)
    //         })
    // }, [])

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl rounded-lg'>
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt="github profile"/>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/DeepanshuChoudhary')
        return response.json();
}
