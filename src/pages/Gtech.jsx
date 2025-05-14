import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaChartLine, 
  FaDatabase, 
  FaUserTie, 
  FaGraduationCap,
  FaCertificate,
  FaHandshake,
  FaUsers,
  FaRegClock
} from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';
import gtech from '/gtech.jpg';

const Gtech = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardHover = {
    scale: 1.02,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
  };

  return (
    <motion.div 
      className="max-w-6xl mx-auto p-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-xl overflow-hidden"
        whileHover={cardHover}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Hero Section */}
        <div className="relative">
          <img
            src={gtech}
            alt="Gtech"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-blue-600/50 flex items-end p-8">
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl font-bold text-white mb-2">
                GTEC Computer Education Partner
              </h1>
              <p className="text-xl text-blue-100">
                Empowering careers through industry-relevant IT training
              </p>
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <motion.p 
            className="mb-8 text-lg text-gray-700 leading-relaxed"
            variants={itemVariants}
          >
            As proud partners of <span className="font-semibold text-blue-600">GTEC Computer Education</span>, we deliver cutting-edge training programs designed for freshers, job seekers, and working professionals. Our curriculum bridges the gap between academic learning and industry requirements.
          </motion.p>

          {/* Features Grid */}
          <motion.div 
            className="grid md:grid-cols-2 gap-6 mb-12"
            variants={containerVariants}
          >
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md flex items-start"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaLaptopCode className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Comprehensive Courses</h3>
                <p className="text-gray-600">From fundamentals to advanced technologies, covering the complete spectrum of IT skills.</p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md flex items-start"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <FaUserTie className="text-indigo-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Industry Experts</h3>
                <p className="text-gray-600">Learn from professionals with real-world experience and up-to-date industry knowledge.</p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md flex items-start"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <FaCertificate className="text-green-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Certification</h3>
                <p className="text-gray-600">Earn recognized certifications that validate your skills to employers.</p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md flex items-start"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <FaHandshake className="text-purple-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Placement Assistance</h3>
                <p className="text-gray-600">Dedicated support to help you transition from learning to employment.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Training Programs */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaGraduationCap className="mr-3 text-blue-600" />
              Our Training Programs
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Program 1 */}
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <FaLaptopCode className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Full Stack Development</h3>
                </div>
                <p className="text-gray-600 mb-3">Master MERN and Python stacks with hands-on projects and real-world applications.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">React</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Node.js</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">MongoDB</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Django</span>
                </div>
              </motion.div>

              {/* Program 2 */}
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <FaMobileAlt className="text-green-600 text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Web & Mobile Development</h3>
                </div>
                <p className="text-gray-600 mb-3">Build responsive websites and cross-platform mobile applications with modern frameworks.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Flutter</span>
                  <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">React Native</span>
                  <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">JavaScript</span>
                  <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">HTML/CSS</span>
                </div>
              </motion.div>

              {/* Program 3 */}
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <FaChartLine className="text-purple-600 text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Data Science & AI</h3>
                </div>
                <p className="text-gray-600 mb-3">Learn data analysis, visualization, and machine learning algorithms with Python and R.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Python</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">TensorFlow</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Pandas</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">SQL</span>
                </div>
              </motion.div>

              {/* Program 4 */}
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-yellow-100 p-2 rounded-lg mr-4">
                    <FaDatabase className="text-yellow-600 text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Office & Business Tools</h3>
                </div>
                <p className="text-gray-600 mb-3">Master essential software for business operations and office productivity.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Tally</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">MS Office</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">QuickBooks</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Computer Basics</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Staff Augmentation */}
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white mb-8"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <IoIosRocket className="mr-3 text-yellow-300" />
                  Staff Augmentation Program
                </h2>
                <p className="mb-4 text-blue-100">
                  We bridge the gap between learning and employment by providing real-world exposure through our unique staff augmentation model.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaUsers className="mt-1 mr-3 text-blue-200 flex-shrink-0" />
                    <span>Deployment on live projects with our partner companies</span>
                  </li>
                  <li className="flex items-start">
                    <FaRegClock className="mt-1 mr-3 text-blue-200 flex-shrink-0" />
                    <span>Short-term and long-term placement opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <FaHandshake className="mt-1 mr-3 text-blue-200 flex-shrink-0" />
                    <span>Direct exposure to industry workflows and client interactions</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/3 bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="font-semibold mb-3 text-yellow-300">Benefits</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0">1</span>
                    <span>Gain practical experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0">2</span>
                    <span>Build professional network</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0">3</span>
                    <span>Enhance your resume</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0">4</span>
                    <span>Potential for full-time offers</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center py-8"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Transform Your Career?</h2>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our next batch and take the first step toward becoming an industry-ready professional.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enroll Now
              </motion.button>
              <motion.button 
                className="bg-white border border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Syllabus
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Gtech;