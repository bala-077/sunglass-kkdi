import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-white text-blue-900 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand and tagline */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-extrabold tracking-wide mb-2 text-blue-800">Sunglass</span>
          <span className="text-sm text-blue-500">Empowering Skills, Enabling Success</span>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col items-center">
          <span className="font-semibold mb-2 text-blue-700">Quick Links</span>
          <ul className="space-y-1 text-blue-500">
            <li><a href="/aboutus" className="hover:text-blue-800 transition">About Us</a></li>
            <li><a href="/gtech" className="hover:text-blue-800 transition">Gtech</a></li>
            <li><a href="/event-management" className="hover:text-blue-800 transition">Event Management</a></li>
            <li><a href="/fmcg" className="hover:text-blue-800 transition">FMCG</a></li>
            <li><a href="/gallery" className="hover:text-blue-800 transition">Gallery</a></li>
            <li><a href="/contact" className="hover:text-blue-800 transition">Contact Us</a></li>
          </ul>
        </div>
        {/* Contact & Social */}
        <div className="flex flex-col items-center md:items-end">
          <span className="font-semibold mb-2 text-blue-700">Contact</span>
          <span className="text-blue-500 text-sm mb-2 flex items-center gap-2">
            <FaEnvelope className="text-blue-700" /> info@gtech.com
          </span>
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition text-xl"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition text-xl"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition text-xl"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-200 mt-8 pt-4 text-center text-blue-500 text-xs">
        &copy; {new Date().getFullYear()} Gtech. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
