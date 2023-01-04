import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Welcome from '@views/Welcome'
import Login from '@views/Login'
import Register from '@views/Register'

import './styles/styles.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App