import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './App.jsx';
import AuthProvider from './context/AuthProvider.jsx'

// localStorage.clear();

createRoot(document.getElementById('root')).render (
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
)