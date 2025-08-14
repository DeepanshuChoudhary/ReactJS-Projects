import React from 'react'

const Header = (props) => {

    const logOutUser = () => {
        localStorage.setItem('loggedInUser', '');
        // window.location.reload()
        // console.log(props.changeUser);
        props.changeUser('')
    }

    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-bold'>Hello <br /> <span className='text-4xl font-semibold'>Anshu</span></h1>
            <button className='bg-red-500 text-white px-5 py-2 rounded-lg text-lg font-medium'
                onClick={logOutUser}
            >Log Out</button>
        </div>
    )
}

export default Header