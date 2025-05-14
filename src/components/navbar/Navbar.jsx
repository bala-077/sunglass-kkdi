import React, { useState } from 'react';
import { FaInfoCircle, FaBuilding, FaCalendarAlt, FaShoppingCart, FaImages, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import logo from '/empty.png';
import { useNavigate } from 'react-router-dom';

const navItems = [
  { name: 'About Us', path: '/aboutus' },
  { name: 'Gtech', path: '/gtech' },
  { name: 'Event Management', path: '/event-management' },
  { name: 'FMCG', path: '/fmcg' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact Us', path: '/contact' },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (path, name) => {
    navigate(path);
    setActiveItem(name);
    setSidebarOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-gray-100 px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => {
              navigate('/');
              setActiveItem('');
            }}
          >
            <img 
              src={logo} 
              alt="Logo" 
              className="h-12 w-12 object-contain mr-3 rounded-full group-hover:rotate-6 transition-all duration-500" 
            />
            <span className="text-xl font-bold text-gray-800 tracking-wide group-hover:text-indigo-600 transition-colors duration-300">
              Gtech
            </span>
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
          <ul className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  onClick={() => handleItemClick(item.path, item.name)}
                  className={`relative px-1 py-2 font-medium cursor-pointer transition-all duration-300 ${
                    activeItem === item.name
                      ? 'text-indigo-600'
                      : 'text-gray-700 hover:text-indigo-600'
                  }`}
                >
                  <span className="relative">
                    {item.name}
                    {activeItem === item.name && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600 rounded-full"></span>
                    )}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
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
              setActiveItem('');
              setSidebarOpen(false);
            }}
          >
            <img 
              src={logo} 
              alt="Logo" 
              className="h-10 w-10 object-contain mr-3 rounded-full" 
            />
            <span className="text-lg font-bold text-gray-800">Gtech</span>
          </div>

          {/* Mobile menu items */}
          <ul className="py-2 px-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  onClick={() => handleItemClick(item.path, item.name)}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer ${
                    activeItem === item.name
                      ? 'text-indigo-600 font-medium'
                      : 'text-gray-700 hover:text-indigo-600'
                  }`}
                >
                  <span className="text-sm tracking-wide">{item.name}</span>
                </a>
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