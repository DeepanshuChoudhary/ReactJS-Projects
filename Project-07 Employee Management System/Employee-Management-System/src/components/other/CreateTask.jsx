import React from "react";

const CreateTask = () => {

    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
                <form className='flex w-full flex-wrap items-start justify-between'>

                    <div className='w-1/2'>
                        <div>
                            <h3>Task Title</h3>
                            <input type='text' placeholder='Enter Task Title' 
                                className='bg-[#242424] text-sm py-1 px-2 w-4/5 rounded outline-none  border-[1px] border-gray-400 mb-4'
                            />
                        </div>
                        
                        <div>
                            <h3>Date</h3>
                            <input type='date' 
                                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-[#242424] border-[1px] border-gray-400 mb-4'
                            />
                        </div>

                        <div>
                            <h3>Assign To</h3>
                            <input type='text' 
                                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-[#242424] border-[1px] border-gray-400 mb-4'
                            />
                        </div>

                        <div>
                            <h3>Category</h3>
                            <input type='text' placeholder='Development, Design, etx..' 
                                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-[#242424] border-[1px] border-gray-400 mb-4'
                            />
                        </div>
                    </div>


                    <div className='w-1/2'>
                        <h3>Description</h3>
                        <textarea cols='30' rows='10'
                            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-[#242424] border-[1px] border-gray-400'
                            ></textarea>
                        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded-lg text-sm mt-4 w-full'>Create Task</button>
                    </div>

                </form>
            </div>
    )
}

export default CreateTask