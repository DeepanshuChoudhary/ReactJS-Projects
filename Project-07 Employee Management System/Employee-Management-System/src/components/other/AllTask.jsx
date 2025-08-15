import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData,setUserData] = useContext(AuthContext)

    console.log(userData.employees)

    return (

        <div className='bg-[#242424] p-5 mt-5 rounded-lg'>
            <div id="tasklist" className='p-5 h-80'>

                <div className='bg-red-600 font-bold py-2 px-4 rounded-lg flex justify-between mb-3' >
                    <h2 className='w-1/5 text-lg'>Employee Name</h2>
                    <h3 className='w-1/5 text-lg'>New Task</h3>
                    <h5 className='w-1/5 text-lg'>Active Task</h5>
                    <h5 className='w-1/5 text-lg'>Completed</h5>
                    <h5 className='w-1/5 text-lg'>Failed</h5>
                </div>

                <div id='tasklist' className='h-[80%] overflow-auto'>
                    {userData.employees.map((e, idx) => {

                        return (
                            <div key={idx} className='bg-blue-600 py-2 px-4 rounded-lg flex justify-between mb-3' >
                                <h5 className='w-1/5 text-lg font-medium'>{e.firstname}</h5>
                                <h5 className='w-1/5 text-lg font-medium text-blue-600'>{e.taskCount.new_task}</h5>
                                <h5 className='w-1/5 text-lg font-medium text-purple-600'>{e.taskCount.active}</h5>
                                <h5 className='w-1/5 text-lg font-medium text-green-600'>{e.taskCount.completed}</h5>
                                <h5 className='w-1/5 text-lg font-medium text-red-600'>{e.taskCount.failed}</h5>
                            </div>
                        )

                    })}

                </div>

            </div>
        </div>

    )
}

export default AllTask
