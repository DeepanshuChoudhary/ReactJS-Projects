import React from 'react'

const Header = ({data}) => {

    console.log(data);

    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-bold'>Hello <br /> <span className='text-4xl font-semibold'>{data.firstname}</span></h1>
            <button className='bg-red-500 text-white px-5 py-2 rounded-lg text-lg font-medium'>Log Out</button>
        </div>
    )
}

export default Header