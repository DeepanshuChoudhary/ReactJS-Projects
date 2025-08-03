import React, { useEffect, useState } from 'react'

const Github = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/DeepanshuChoudhary')
            .then((response) => response.json())
            .then((response) =>  {
                setData(response)
            })
    }, [])

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt="github profile"/>
        </div>
    )
}

export default Github
