import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Greeting from './Greeting'
import Welcome from './Welcome'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/greeting',
    element: <Greeting />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App