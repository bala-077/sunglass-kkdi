import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import logo from '/Sunglasschettinad.png'

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
              <img src={logo} alt="Sunglasschettinad logo" className='w-40 h-20' />
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
            <ul className="space-y-2 md:space-y-3">
              {[
                { path: '/', label: 'Home' },
                { path: '/aboutus', label: 'About Us' },
                { path: '/digitaly-ai-solutions', label: 'Digitaly AI Tech Solution' },
                { path: '/gtech', label: 'G-TEC' },
                { path: '/event-management', label: 'Event Management' },
                { path: '/fmcg', label: 'FMCG' },
                { path: '/contact', label: 'Contact Us' },
              ].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(item.path)}
                    className={`text-sm cursor-pointer relative flex items-center group transition-all duration-200 ${location.pathname === item.path ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'
                      }`}
                  >
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full transition-all duration-200 ${location.pathname === item.path ? 'bg-blue-600' : 'bg-transparent group-hover:bg-blue-400'
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
                <a
                  href="https://maps.app.goo.gl/WTvDLWkRNjKn1FAM8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 text-sm"
                >
                  Dial Karaikudi, No.8 Muthoorani East, Muthupattinam, Karaikudi-630 001
                </a>
              </div>
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 rounded-lg mr-3 text-white shadow-md">
                  <FaPhone size={14} className="rotate-90" />
                </div>
                <a href="tel:+919442338670" className="text-gray-500 hover:text-blue-600 text-sm">
                  +919442338670
                </a>
              </div>
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 rounded-lg mr-3 text-white shadow-md">
                  <FaEnvelope size={14} />
                </div>
                <a href="mailto:admin@digitaly.live" className="text-gray-500 hover:text-blue-600 text-sm">
                  admin@digitaly.live
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs order-2 mt-3 md:mt-0">
            &copy; {new Date().getFullYear()} Sunglass. All rights reserved.
          </p>
          <div className="flex gap-4 md:order-2">
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