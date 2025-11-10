import React from 'react'

const CompleteTask = ({data}) => {
    return (
        <div className='flex-shrink-0 h-full p-5 w-[450px] bg-yellow-600 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm font-semibold'>{data.task_category}</h3>
                <h4 className='text-lg font-bold'>{data.task_date}</h4>
            </div>
            <h2 className='mt-5 text-3xl font-semibold'>{data.task_title}</h2>
            <p className='text-sm mt-2'>{data.task_description}</p>
            
            <div className='mt-5'>
                <button className='w-full bg-green-700 rounded-lg py-1 px-2 text-sm'>Completed</button>
            </div>
        </div>
    )
}

export default CompleteTask