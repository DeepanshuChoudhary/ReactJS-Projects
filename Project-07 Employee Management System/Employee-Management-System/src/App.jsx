import React, { useEffect, useState } from "react";
import './index.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./Utils/LocalStorage";

const App = () => {

//   useEffect(() => {
//     // setLocalStorage()
//     getLocalStorage()
//   },)

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if(email == 'admin@me.com' && password == '123') {
      // console.log("This is Admin")
      setUser('admin')
    }else if(email == 'user@me.com' && password == '123') {
      // console.log("This is User")
      setUser('employee ')
    } else {
      alert('Invalid Credentials')
    }
  }

  // handleLogin('user@me.com', 123);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App;