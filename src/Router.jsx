import React from 'react'
import Profile from './Profile'
import ErrorPage from './ErrorPage'
import Card from './Components/Card'
import { createBrowserRouter } from 'react-router-dom'

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Card />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/profile',
    element: <Profile />,
    errorElement: <ErrorPage />,
  }
])


export default Router