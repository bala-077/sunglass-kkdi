import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer className="bg-white text-gray-800 py-12 px-4 shadow-inner">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mb-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-600 flex items-center">
              <span className="bg-blue-100 p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Sunglass
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering skills and enabling success through comprehensive training and services across multiple industries.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-100 hover:bg-blue-200 p-3 rounded-full text-blue-600 transition-colors">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-100 hover:bg-pink-200 p-3 rounded-full text-pink-600 transition-colors">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-blue-100 hover:bg-blue-200 p-3 rounded-full text-blue-600 transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2 border-gray-200">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => navigate('/aboutus')}
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center bg-transparent border-none outline-none cursor-pointer p-0"
                >
                  <span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/gtech')}
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center bg-transparent border-none outline-none cursor-pointer p-0"
                >
                  <span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
                  GTEC Training
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/event-management')}
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center bg-transparent border-none outline-none cursor-pointer p-0"
                >
                  <span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
                  Event Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/fmcg')}
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center bg-transparent border-none outline-none cursor-pointer p-0"
                >
                  <span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
                  FMCG Distribution
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/gallery')}
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center bg-transparent border-none outline-none cursor-pointer p-0"
                >
                  <span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/contact')}
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center bg-transparent border-none outline-none cursor-pointer p-0"
                >
                  <span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2 border-gray-200">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-3 text-blue-600">
                  <FaMapMarkerAlt />
                </div>
                <p className="text-gray-600 text-sm">
                  123 Business Street, Karaikudi<br />
                  Tamil Nadu, India - 630001
                </p>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rotate-90 rounded-lg mr-3 text-green-600">
                  <FaPhone />
                </div>
                <a href="tel:+919876543210" className="text-gray-600 hover:text-blue-600 transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center">
                <div className="bg-red-100 p-2 rounded-lg mr-3 text-red-600">
                  <FaEnvelope />
                </div>
                <a href="mailto:info@gtech.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  info@gtech.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sunglass. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <button
              onClick={() => navigate('/privacy-policy')}
              className="text-gray-500 hover:text-blue-600 text-sm transition-colors bg-transparent border-none outline-none cursor-pointer p-0"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => navigate('/terms')}
              className="text-gray-500 hover:text-blue-600 text-sm transition-colors bg-transparent border-none outline-none cursor-pointer p-0"
            >
              Terms of Service
            </button>
            <button
              onClick={() => navigate('/sitemap')}
              className="text-gray-500 hover:text-blue-600 text-sm transition-colors bg-transparent border-none outline-none cursor-pointer p-0"
            >
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer