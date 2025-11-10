import React from 'react'

function TaskListNumbers({data}) {
    return (
        
        <div className='flex screen justify-between gap-5 mt-10'>
            
            <div className='px-9 py-6 rounded-xl bg-red-400 w-[45%]'>
                <h1 className='text-2xl font-semibold'>{data.taskCount.new_task}</h1>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            
            <div className='px-9 py-6 rounded-xl bg-blue-600 w-[45%]'>
                <h1 className='text-2xl font-semibold'>{data.taskCount.completed}</h1>
                <h3 className='text-xl font-medium'>Completed Task</h3>
            </div>
            
            <div className='px-9 py-6 rounded-xl bg-green-600 w-[45%]'>
                <h1 className='text-2xl font-semibold'>{data.taskCount.active}</h1>
                <h3 className='text-xl font-medium'>Accepted Task</h3>
            </div>
            
            <div className='px-9 py-6 rounded-xl bg-yellow-600 w-[45%]'>
                <h1 className='text-2xl font-semibold'>{data.taskCount.failed}</h1>
                <h3 className='text-xl font-medium'>Failed Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers