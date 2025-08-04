import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {

    const {user} = useContext(UserContext)

    if(!user) {
        return <div>Please Login</div>
    }

    else {
        return <div>Welcome here {user.username}</div>
    }

}

export default Profile