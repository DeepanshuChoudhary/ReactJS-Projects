import React from "react";

const TaskListNumbers = () => {

    return (
        <div id='tasklist' className='flex mt-10 justify-between gap-5 screen flex-nowrap overflow-x-auto'>
            <div className='px-9 py-6 rounded-xl w-[45%] bg-red-400'> 
                <h1 className='text-3xl font-semibold'>0</h1>
                <h3 classname='text-xl font-medium'>New Task</h3>
            </div>
            
            <div className='px-9 py-6 rounded-xl w-[45%] bg-blue-400'> 
                <h1 className='text-3xl font-semibold'>0</h1>
                <h3 classname='text-xl font-medium'>New Task</h3>
            </div>
            
            <div className='px-9 py-6 rounded-xl w-[45%] bg-green-400'> 
                <h1 className='text-3xl font-semibold'>0</h1>
                <h3 classname='text-xl font-medium'>New Task</h3>
            </div>
            
            <div className='px-9 py-6 rounded-xl w-[45%] bg-yellow-400'> 
                <h1 className='text-3xl font-semibold'>0</h1>
                <h3 classname='text-xl font-medium'>New Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers;