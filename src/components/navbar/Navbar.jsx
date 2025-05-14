import React, { useState } from 'react'
import { FaInfoCircle, FaBuilding, FaCalendarAlt, FaShoppingCart, FaImages, FaEnvelope, FaBars } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import logo from './empty.png'
import SideNavbar from './SideNavbar'

const navItems = [
  { name: 'About Us', path: '/aboutus', icon: <FaInfoCircle /> },
  { name: 'Gtech', path: '/gtech', icon: <FaBuilding /> },
  { name: 'Event Management', path: '/event-management', icon: <FaCalendarAlt /> },
  { name: 'FMCG', path: '/fmcg', icon: <FaShoppingCart /> },
  { name: 'Gallery', path: '/gallery', icon: <FaImages /> },
  { name: 'Contact Us', path: '/contact', icon: <FaEnvelope /> },
]

const Navbar = () => {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <nav className="flex items-center justify-between bg-white shadow px-8 py-4">
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
          <img src={logo} alt="Logo" className="h-12 w-12 object-contain mr-4 rounded-full shadow-md hover:scale-105 transition-transform duration-200" />
          <span className="text-xl font-bold text-gray-800 tracking-wide">Gtech</span>
        </div>
        {/* Hamburger for small screens */}
        <button
          className="lg:hidden flex items-center text-2xl text-gray-700"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars />
        </button>
        {/* Navigation Items for large screens */}
        <div className="hidden lg:flex gap-6 items-center">
          {navItems.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => navigate(item.path)}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 bg-transparent border-none outline-none cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-50 active:scale-95"
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </nav>
      {/* Sidebar for small screens */}
      <SideNavbar open={sidebarOpen} setOpen={setSidebarOpen} navItems={navItems} />
    </>
  )
}

export default Navbar