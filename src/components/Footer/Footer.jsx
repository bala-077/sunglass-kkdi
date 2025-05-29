import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 text-gray-800 py-8 px-4 md:px-6 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2 rounded-xl mr-3 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Sunglass
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Empowering skills and enabling success through comprehensive training and services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-blue-600">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/aboutus', label: 'About Us' },
                { path: '/digitaly-ai-solutions', label: 'Digitaly AI Tech Solution' },
                { path: '/gtech', label: 'G-TEC Computer Center ' },
                { path: '/event-management', label: 'Event Management' },
                { path: '/fmcg', label: 'FMCG' },
                { path: '/contact', label: 'Contact Us' },
              ].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(item.path)}
                    className={`text-sm text-gray-600 hover:text-blue-600 transition-all duration-200 flex items-center group bg-transparent border-none outline-none cursor-pointer p-0 ${
                      location.pathname === item.path ? 'text-blue-600 font-medium' : ''
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full mr-2 transition-all duration-200 group-hover:mr-3 ${
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
            <h4 className="text-lg font-semibold mb-4 text-gray-800 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-blue-600">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2 rounded-lg mr-3 text-white shadow-md">
                  <FaMapMarkerAlt size={14} />
                </div>
                <p className="text-gray-500 text-xs">
                8, Muthoorani East, Near Vidhyagiri School, Karaikudi<br />
                  Tamil Nadu, India - 630001
                </p>
              </div>
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 rounded-lg mr-3 text-white shadow-md">
                  <FaPhone size={14} className="rotate-90" />
                </div>
                <a href="tel:+919876543210" className="text-gray-500 hover:text-blue-600 text-xs">
                  +91 9876543210
                </a>
              </div>
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 rounded-lg mr-3 text-white shadow-md">
                  <FaEnvelope size={14} />
                </div>
                <a href="mailto:admin@digitaly.live" className="text-gray-500 hover:text-blue-600 text-xs">
                admin@digitaly.live
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-3 md:mb-0">
            &copy; {new Date().getFullYear()} Sunglass. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[
              { path: '/privacy-policy', label: 'Privacy Policy' },
              { path: '/terms-conditions', label: 'Terms' },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className="text-gray-500 hover:text-blue-600 text-xs transition-colors bg-transparent border-none outline-none cursor-pointer"
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