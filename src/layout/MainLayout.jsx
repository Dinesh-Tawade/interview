import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className='d-flex'>

      <Sidebar />
         <div className="main-content">
        <Outlet />
      </div>

      </div>
   
    </>
  )
}

export default MainLayout