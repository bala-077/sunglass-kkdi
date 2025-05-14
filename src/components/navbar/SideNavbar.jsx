import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

const SideNavbar = ({ open, setOpen, navItems }) => {
  const navigate = useNavigate()

  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-40 transition-opacity duration-300 ${open ? 'block' : 'hidden'} lg:hidden`}
      onClick={() => setOpen(false)}
    >
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 flex flex-col gap-6 transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="self-end text-2xl text-gray-700 mb-4"
          onClick={() => setOpen(false)}
        >
          <FaTimes />
        </button>
        {navItems.map((item) => (
          <button
            key={item.name}
            type="button"
            onClick={() => {
              navigate(item.path)
              setOpen(false)
            }}
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-blue-50 active:scale-95 text-lg"
          >
            {item.icon}
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default SideNavbar