import React from 'react'

const NewTask = () => {
    return (
        <div className='flex-shrink-0 h-full p-5 w-[450px] bg-yellow-600 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm font-semibold'>High</h3>
                <h4 className='text-lg font-bold'>29 July 2024</h4>
            </div>
            <h2 className='mt-5 text-3xl font-semibold'>Complete ReactJS project</h2>
            <p className='text-sm mt-2'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestiae fugit enim quasi. Quod, numquam!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestiae fugit enim quasi. Quod, numquam!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestiae fugit enim quasi. Quod, numquam!
            </p>

            <div className='mt-5'>
                <button className='bg-green-700 py-1 px-2 text-sm rounded-lg w-full'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask