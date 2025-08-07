import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './App'
import AuthContext from "./context/AuthContext";
import TaskContext from "./context/TaskContext";

// localStorage.clear()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <TaskContext>
        <App />
      </TaskContext>
    </AuthContext>
  </StrictMode>
)