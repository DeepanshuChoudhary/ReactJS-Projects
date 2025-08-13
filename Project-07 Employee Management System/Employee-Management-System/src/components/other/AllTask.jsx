import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const authData = useContext(AuthContext)

    console.log(authData.employees)

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
                    {authData.employees.map((e) => {

                        return <div className='bg-blue-600 py-2 px-4 rounded-lg flex justify-between mb-3' >
                            <h5 className='w-1/5 text-lg font-medium'>{e.firstname}</h5>
                            <h5 className='w-1/5 text-lg font-medium text-blue-600'>{e.taskCount.new_task}</h5>
                            <h5 className='w-1/5 text-lg font-medium text-purple-600'>{e.taskCount.active}</h5>
                            <h5 className='w-1/5 text-lg font-medium text-green-600'>{e.taskCount.completed}</h5>
                            <h5 className='w-1/5 text-lg font-medium text-red-600'>{e.taskCount.failed}</h5>
                        </div>

                    })}

                </div>

                {/* <div className='bg-green-700 py-2 px-4 rounded-lg flex justify-between mb-3'>
                    <h2>Aryan Singh</h2>
                    <h3>Password Generator</h3>
                    <h5>Status</h5>
                </div>

                <div className='bg-blue-600 py-2 px-4 rounded-lg flex justify-between mb-3'>
                    <h2>Sarthak Sharma</h2>
                    <h3>Real Time Currency Converter</h3>
                    <h5>Status</h5>
                </div>

                <div className='bg-purple-400 py-2 px-4 rounded-lg flex justify-between mb-3'>
                    <h2>Aman Kasana</h2>
                    <h3>React Route Website</h3>
                    <h5>Status</h5>
                </div>

                <div className='bg-pink-400 py-2 px-4 rounded-lg flex justify-between mb-3'>
                    <h2>Aakash Kasana</h2>
                    <h3>ReactJS</h3>
                    <h5>Status</h5>
                </div>

                <div className='bg-orange-400 py-2 px-4 rounded-lg flex justify-between mb-3'>
                    <h2>Nishant Nagar</h2>
                    <h3>Website Project</h3>
                    <h5>Status</h5>
                </div>

                <div className='bg-amber-900 py-2 px-4 rounded-lg flex justify-between mb-3'>
                    <h2>Ajay Nagar</h2>
                    <h3>Website Project</h3>
                    <h5>Status</h5>
                </div>

                <div className='bg-blue-800 py-2 px-4 rounded-lg flex justify-between mb-3'>
                    <h2>Anshu Nagar</h2>
                    <h3>Website Project</h3>
                    <h5>Status</h5>
                </div>

                <div className='bg-cyan-500 py-2 px-4 rounded-lg flex justify-between mb-3'>
                    <h2>Ankit Sharma</h2>
                    <h3>Website Project</h3>
                    <h5>Status</h5>
                </div>

                <div className='bg-emerald-900 py-2 px-4 rounded-lg flex justify-between mb-3'>
                    <h2>Amit Kamal</h2>
                    <h3>Website Project</h3>
                    <h5>Status</h5>
                </div>

                <div className='bg-indigo-900 py-2 px-4 rounded-lg flex justify-between mb-3'>
                    <h2>Amit Raj</h2>
                    <h3>Website Project</h3>
                    <h5>Status</h5>
                </div> */}
            </div>
        </div >

    )
}

export default AllTask
