import React from "react";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

const App = () => {

  return (
    <div className='h-screen p-15'>
      <UserContextProvider>
        <h1 className='text-2xl'>Hello world this is Deepanshu Choudhary</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  )
}

export default App;