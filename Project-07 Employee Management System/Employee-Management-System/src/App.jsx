import React, { useContext, useEffect, useState } from "react";
import './index.css'
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./Utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if(loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }

  }, [])

  const handleLogin = (email, password) => {

    if(userData) {
      
      const admin = userData.admin.find((e) => 
        email == e.email && password == e.password);

      if(admin) {
        setUser('admin')
        setLoggedInUserData(admin)
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}));
        return;
      }
      
      const employees = userData.employees.find((e) => 
        email == e.email && password == e.password);

      if(employees) {
        setUser('employees')
        setLoggedInUserData(employees) 
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'employees', data: employees}))
        return;
      }
    }

    else {
      alert("Invalid Credentials");
    }
  }


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? (<AdminDashboard changeUser={setUser} data={loggedInUserData}/>) : (user == 'employees' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : '')}
    </>
  )
}

export default App;