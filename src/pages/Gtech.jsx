import React from 'react'
<<<<<<< HEAD
import gtech from '../../public/gtech.jpg'
=======
import gtech from '/gtech.jpg'
>>>>>>> b08a6c41d9ad810a1ea826d02942383d2fa39339

const Gtech = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow mt-8">
      <img
        src={gtech}
        alt="Gtech"
        className="w-full h-64 object-cover rounded-lg mb-6 shadow"
      />
      <h1 className="text-2xl font-bold text-blue-700 mb-4">
        Authorized IT Training (GTEC Computer Education Partner)
      </h1>
      <p className="mb-4 text-gray-700">
        We are proud partners of GTEC Computer Education, a trusted name in skill development. Our training programs are designed for freshers, job seekers, and working professionals who want to upskill in technology and IT services.
      </p>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Training Offerings:</h2>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <span className="font-medium">Full Stack Development (MERN, Python)</span> – Hands-on project-based learning for modern web development.
        </li>
        <li>
          <span className="font-medium">Web & Mobile App Development</span> – Courses covering front-end and back-end technologies.
        </li>
        <li>
          <span className="font-medium">Data Science and AI</span> – Curriculum designed to cover data analysis, visualization, machine learning.
        </li>
        <li>
          <span className="font-medium">Tally, MS Office, and Computer Basics</span> – Foundational courses for students and non-technical learners.
        </li>
      </ul>
      <p className="text-gray-700">
        <span className="font-medium">Staff Augmentation</span> – Beyond training, we help students gain real-world exposure by deploying them on live projects or deputing them to client organizations for short or long-term roles. This bridges the gap between learning and employment.
      </p>
    </div>
  )
}

export default Gtech