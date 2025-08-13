import React from 'react'

const NewTask = ({data}) => {
    return (
        <div className='flex-shrink-0 h-full p-5 w-[450px] bg-yellow-600 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm font-semibold'>{data.task_category}</h3>
                <h4 className='text-lg font-bold'>{data.task_date}</h4>
            </div>
            <h2 className='mt-5 text-3xl font-semibold'>{data.task_title}</h2>
            <p className='text-sm mt-2'>
                {data.task_description}
            </p>

            <div className='mt-5'>
                <button className='bg-green-700 py-1 px-2 text-sm rounded-lg w-full'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask