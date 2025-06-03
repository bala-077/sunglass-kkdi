import React, { useEffect, useState } from 'react';
import { FaInfoCircle, FaBuilding, FaCalendarAlt, FaShoppingCart, FaImages, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import logo from '/Sunglasschettinad.png';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'About Us', path: '/aboutus' },
  { name: 'Digitaly AI Tech Solution ', path: '/digitaly-ai-solutions' },
  { name: 'G-Tec', path: '/gtech' },
  { name: 'Event Management', path: '/event-management' },
  { name: 'FMCG', path: '/fmcg' },
  { name: 'Contact Us', path: '/contact' },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // <-- Add this
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Remove activeItem state and logic

  const handleItemClick = (path) => {
    navigate(path);
    setSidebarOpen(false);
  };

  return (
    <> 
      <nav className="sticky top-0 shadow-sm z-50  bg-white backdrop-blur-md border-b border-gray-100 px-4 sm:px-8 py-3">
        <div className="max-w-7xl flex items-center justify-between">
          {/* Logo Section */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => {
              navigate('/');
            }}
          >
            <img 
              src={logo} 
              alt="Logo" 
              className="h-12 w-20 object-contain rounded-full transition-all duration-500" 
            />
          </div>

          {/* Hamburger for mobile */}
          <button
            className="lg:hidden flex items-center text-2xl text-gray-700 hover:text-indigo-600 transition-colors duration-200 focus:outline-none"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>

          {/* Navigation Items for desktop */}
          <ul className="hidden lg:flex space-x-5">
            {navItems.map((item) => (
              <li key={item.name}>
                <div
                  onClick={() => handleItemClick(item.path)}
                  className={`relative px-1 py-2 font-medium cursor-pointer text-xl transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-indigo-600'
                      : 'text-gray-700 hover:text-indigo-600'
                  }`}
                >
                  <span className="relative">
                    {item.name}
                    {location.pathname === item.path && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600 rounded-full"></span>
                    )}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-[700px]'
        } lg:hidden transition-transform duration-300 ease-in-out`}
      >
        <div className="relative w-80 h-full bg-white shadow-xl">
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700 transition-colors duration-200"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>

          {/* Logo in sidebar */}
          <div 
            className="flex items-center p-6 cursor-pointer"
            onClick={() => {
              navigate('/');
              setSidebarOpen(false);
            }}
          >
            <img 
              src={logo} 
              alt="Logo" 
              className="h-10 w-10 object-contain mr-3 rounded-full" 
            />
            <span className="text-lg font-bold text-gray-800">Sunglass</span>
          </div>

          {/* Mobile menu items */}
          <ul className="py-2 px-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <div
                  onClick={() => handleItemClick(item.path)}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200  cursor-pointer ${
                    location.pathname === item.path
                      ? 'text-indigo-600 font-medium'
                      : 'text-gray-700 hover:text-indigo-600'
                  }`}
                >
                  <span className="text-sm tracking-wide">{item.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;