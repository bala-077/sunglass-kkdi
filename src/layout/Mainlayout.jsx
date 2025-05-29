import React, { Suspense } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const PageLoader = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh]">
    <div className="relative mb-8 text-center">
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent animate-pulse">
          SUNGLASS
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent animate-pulse">
          CHETTINAD
        </h1>
      </div>
    </div>
    <div className="relative">
      <div className="w-16 h-16 border-4 border-green-200 rounded-full"></div>
      <div className="w-16 h-16 border-t-4 border-orange-500 animate-spin rounded-full absolute left-0 top-0"></div>
    </div>
  </div>
);

const Mainlayout = () => {
  return (
    <div>
      <Navbar/>
      <div className='bg-gray-50 w-full min-h-[calc(100vh-112px)]'>
        <Suspense fallback={<PageLoader />}>
          <Outlet/>
        </Suspense>
      </div>
      <Footer/>
    </div>
  )
}

export default Mainlayout
