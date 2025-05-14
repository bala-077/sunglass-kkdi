import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
const Mainlayout = () => {
  return (
    <div>
      <Navbar/>
      <div className='bg-gray-50 w-full min-h-[calc(100vh-112px)]'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Mainlayout
