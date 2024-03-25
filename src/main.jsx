import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { routers } from './Renders/Renders';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider render={routers} ></RouterProvider>
  </React.StrictMode>,
)
