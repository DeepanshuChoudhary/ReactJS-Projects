import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {

    console.log(data);

    return (
        <div id='tasklist' className='flex items-center justify-start gap-5 flex-nowrap h-[55%] w-full py-5 mt-10 rounded-2xl overflow-auto'>
            
            {/* {data.tasks.map(() => {
                return <h1>Hello guys</h1>
            })} */}

            <AcceptTask />
            
            <NewTask />
            
            <CompleteTask />
            
            <FailedTask />
            
        </div>
    )
}

export default TaskList