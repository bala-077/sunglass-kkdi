import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
// Add useLocation import
import { useNavigate, useLocation } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  const location = useLocation() // Add this line

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 text-gray-800 py-12 px-4 md:px-6 lg:px-8 shadow-lg">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mb-10">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl mr-4 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold py-3 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Sunglass
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering skills and enabling success through comprehensive training and services across multiple industries.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-100 hover:bg-blue-200 p-3 rounded-full text-blue-600 transition-all duration-300 transform hover:-translate-y-1 shadow-sm">
                <FaFacebookF className="text-lg" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-100 hover:bg-pink-200 p-3 rounded-full text-pink-600 transition-all duration-300 transform hover:-translate-y-1 shadow-sm">
                <FaInstagram className="text-lg" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-blue-100 hover:bg-blue-200 p-3 rounded-full text-blue-600 transition-all duration-300 transform hover:-translate-y-1 shadow-sm">
                <FaLinkedinIn className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-gray-800 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-blue-600">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { path: '/', label: 'Home' },
                { path: '/aboutus', label: 'About Us' },
                { path: '/digital-ai-solution', label: 'Digitaly AI Tech Solution' },
                { path: '/gtech', label: 'G-TEC Computer Center ' },
                { path: '/event-management', label: 'Event Management' },
                { path: '/fmcg', label: 'FMCG' },
                { path: '/contact', label: 'Contact Us' },
              ].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(item.path)}
                    className={`text-gray-600 hover:text-blue-600 transition-all duration-300 flex items-center group bg-transparent border-none outline-none cursor-pointer p-0 ${
                      location.pathname === item.path ? 'text-blue-600 font-medium' : ''
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 group-hover:mr-4 ${
                      location.pathname === item.path ? 'bg-blue-600' : 'bg-gray-300'
                    }`}></span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-gray-800 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-blue-600">
              Contact Us
            </h4>
            <div className="space-y-5">
              <div className="flex items-start group">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg mr-4 text-white shadow-md group-hover:rotate-6 transition-all duration-300">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-medium">Our Location</p>
                  <p className="text-gray-500 text-sm mt-1">
                    123 Business Street, Karaikudi<br />
                    Tamil Nadu, India - 630001
                  </p>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-lg mr-4 text-white shadow-md group-hover:rotate-6 transition-all duration-300">
                  <FaPhone className="rotate-90" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-medium">Phone Number</p>
                  <a href="tel:+919876543210" className="text-gray-500 hover:text-blue-600 transition-colors text-sm mt-1 block">
                    +91 9876543210
                  </a>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-red-500 to-red-600 p-3 rounded-lg mr-4 text-white shadow-md group-hover:rotate-6 transition-all duration-300">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-medium">Email Address</p>
                  <a href="mailto:admin@digitaly.live" className="text-gray-500 hover:text-blue-600 transition-colors text-sm mt-1 block">
                    admin@digitaly.live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sunglass. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { path: '/privacy-policy', label: 'Privacy Policy' },
              { path: '/terms', label: 'Terms of Service' },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className="text-gray-500 hover:text-blue-600 text-sm transition-colors bg-transparent border-none outline-none cursor-pointer p-0 hover:underline"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer