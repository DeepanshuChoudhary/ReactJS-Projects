import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App'
import './index.css';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import User from "./User/User"
import Github, { githubInfoLoader } from "./Github/Github"

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path="/" element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User />} />
      {/* <Route path='Github' element={<Github />} /> */}
      <Route loader={githubInfoLoader} path='github' element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)