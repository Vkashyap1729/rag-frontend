import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import IronMan from './componenets/Loaders/IronMan.jsx'
import { Box } from '@mui/material'
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <><App/></>
    ),
  },
  {
    path: 'chatWindow',
    element: <Box><IronMan/></Box>
  },
  {
    path: 'logout',
    element: <>logout</>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
  </React.StrictMode>
)
