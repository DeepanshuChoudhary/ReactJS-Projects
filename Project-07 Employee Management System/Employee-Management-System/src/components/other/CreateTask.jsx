import React from 'react'

const CreateTask = () => {
    return (
        <div className='p-5 bg-[#242424] mt-7 rounded-lg'>
                <form className='flex flex-wrap w-full items-start justify-between'>
                    <div className='w-1/2'>
                        <div>
                            <h3>Task Title</h3>
                            <input type='text' placeholder='Add the task'
                                className='text-sm py-1 w-4/5 rounded-lg outline-none bg-[#1c1c1c] border-gray-400 mb-4 px-2'
                            />
                        </div>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input type='date'
                                className='text-sm py-1 w-4/5 rounded-lg outline-none bg-[#1c1c1c] border-gray-400 mb-4 px-2'
                            />
                        </div>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                            <input type='text' placeholder='Employee Name'
                                className='text-sm py-1 w-4/5 rounded-lg outline-none bg-[#1c1c1c] border-gray-400 mb-4 px-2'
                            />
                        </div>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input type='text' placeholder='JavaScript, ReactJS, etc...'
                                className='text-sm py-1 w-4/5 rounded-lg outline-none bg-[#1c1c1c] border-gray-400 mb-4 px-2'
                            />
                        </div>
                    </div>

                    <div className='w-2/5 flex flex-col items-start'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea className='w-full h-44 text-sm py-2 px-4 rounded-lg outline-none bg-[#1c1c1c] border-gray-400' name="" id=""></textarea>
                        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                    </div>

                </form>
            </div>
    )
}

export default CreateTask