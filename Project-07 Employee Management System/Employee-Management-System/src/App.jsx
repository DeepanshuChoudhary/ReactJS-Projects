import React, { useContext, useEffect, useState } from "react";
import './index.css'
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./Utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {

  // useEffect(() => {
  //   // setLocalStorage()
  //   // getLocalStorage()
  // })

  const [user, setUser] = useState(null);

  const AuthData = useContext(AuthContext);

  useEffect(() => {
    if(AuthData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if(loggedInUser) {
        setUser(loggedInUser.role);
      }
    }
  }, [AuthData])

  const handleLogin = (email, password) => {
    // if(email == 'admin@admin.com' &&  password == '123') {
    //   setUser('admin')
    // } 
    if(AuthData && AuthData.admin.find((e) => 
    email == e.email && password == e.password)) {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }
    
    // else if(email == 'employees@example.com' && password == '123') {
    //   setUser('employees')
    else if(AuthData && AuthData.employees.find((e) => 
    email == e.email && password == e.password)) {
      setUser('employees')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'employees'}))
    }

    else {
      alert("Invalid Credentials");
    }
  }


  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user == 'admin' ? (<AdminDashboard />) : (user == 'employees' ? <EmployeeDashboard /> : '') }
      {/* {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />} */}
    </>
  )
}

export default App;