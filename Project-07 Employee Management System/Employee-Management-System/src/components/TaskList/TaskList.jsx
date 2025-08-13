import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {

    console.log(data);

    return (
        <div id='tasklist' className='flex items-center justify-start gap-5 flex-nowrap h-[55%] w-full py-5 mt-10 rounded-2xl overflow-auto'>
            
            {data.tasks.map((e, idx) => {

                if(e.active) {
                    return <AcceptTask key={idx}/>
                }

                if(e.new_task) {
                    return <NewTask key={idx}/>
                }

                if(e.completed) {
                    return <CompleteTask key={idx}/>
                }

                if(e.failed) {
                    return <FailedTask key={idx}/>
                }

            })}

        </div>
    )
}

export default TaskList