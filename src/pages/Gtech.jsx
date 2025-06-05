import React, { useEffect } from 'react';
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
  FaRegClock,
  FaBook,
  FaBriefcase,
  FaUserGraduate,
  FaCheckCircle
} from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';
import gtechHeroImg from '/gtechHeroImg.jpg';
import { FiAward, FiBookOpen, FiUserCheck } from 'react-icons/fi';
import gtechHero from '/gtech.jpg';
import classroomImg from '/gtech.jpg';
import studentsImg from '/gtech.jpg';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import user from '/user.png';
import gtechimg from '/gtechImg1.jpg';

const Gtech = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  // Training Programs Data
  const programs = [
    {
      title: "Full Stack Development",
      icon: <FaLaptopCode className="text-xl" />,
      color: "blue",
      description: "Master MERN and Python stacks with hands-on projects and real-world applications.",
      skills: ["React", "Node.js", "MongoDB", "Django", "Express", "REST APIs"],
      duration: "3-6 Months",
      projects: "5+ Projects",
      placement: "90% Placement Rate"
    },
    {
      title: "Web & Mobile Development",
      icon: <FaMobileAlt className="text-xl" />,
      color: "green",
      description: "Build responsive websites and cross-platform mobile applications with modern frameworks.",
      skills: ["Flutter", "React Native", "JavaScript", "HTML/CSS", "Responsive Design", "UI/UX"],
      duration: "3-5 Months",
      projects: "4+ Projects",
      placement: "85% Placement Rate"
    },
    {
      title: "Data Science & AI",
      icon: <FaChartLine className="text-xl" />,
      color: "purple",
      description: "Learn data analysis, visualization, and machine learning algorithms with Python and R.",
      skills: ["Python", "TensorFlow", "Pandas", "SQL", "Data Visualization", "ML Algorithms"],
      duration: "4-6 Months",
      projects: "3+ Capstone Projects",
      placement: "80% Placement Rate"
    },
    {
      title: "Office & Business Tools",
      icon: <FaDatabase className="text-xl" />,
      color: "indigo",
      description: "Master essential software for business operations and office productivity.",
      skills: ["Tally", "MS Office", "QuickBooks", "Computer Basics", "Accounting", "Business Communication"],
      duration: "2-3 Months",
      projects: "Practical Assignments",
      placement: "95% Placement Rate"
    }
  ];

  const features = [
    { 
      icon: <FaLaptopCode className="text-2xl" />, 
      title: "Comprehensive Courses", 
      description: "From fundamentals to advanced technologies, covering the complete spectrum of IT skills.",
      color: "indigo" 
    },
    { 
      icon: <FaUserTie className="text-2xl" />, 
      title: "Industry Experts", 
      description: "Learn from professionals with real-world experience and up-to-date industry knowledge.",
      color: "green" 
    },
    { 
      icon: <FaCertificate className="text-2xl" />, 
      title: "Certification", 
      description: "Earn recognized certifications that validate your skills to employers.",
      color: "indigo" 
    },
    { 
      icon: <FaHandshake className="text-2xl" />, 
      title: "Placement Assistance", 
      description: "Dedicated support to help you transition from learning to employment.",
      color: "purple" 
    },
    { 
      icon: <FiBookOpen className="text-2xl" />, 
      title: "Practical Curriculum", 
      description: "80% hands-on training with real-world projects and case studies.",
      color: "red" 
    },
    { 
      icon: <FiAward className="text-2xl" />, 
      title: "Industry Partnerships", 
      description: "Direct connections with hiring companies and tech organizations.",
      color: "purple" 
    }
  ];

  const staffAugmentationBenefits = [
    "Deployment on live projects with our partner companies",
    "Short-term and long-term placement opportunities",
    "Direct exposure to industry workflows and client interactions",
    "Professional work experience to enhance your resume",
    "Mentorship from senior developers and managers",
    "Potential for full-time employment offers"
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Hero Section - Reduced padding on mobile */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] min-h-[400px] sm:min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10" />
        <img
          src={gtechHeroImg}
          alt="GTEC Computer Education"
          className="absolute inset-0 w-full h-full object-cover "
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">GTEC</span> Computer Education
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-xs md:text-sm lg:text-lg max-w-3xl mx-auto mb-4 sm:mb-6"
          >
            Transforming careers through industry-aligned IT training and professional development.
          </motion.p>
          <motion.button
            whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/contact-us', { state: { slug: 'gtech' }} )}
            className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-5 py-3 rounded-lg hover:shadow-lg transition-all font-medium cursor-pointer"
          >
            Enroll Now
          </motion.button>
        </div>
      </section>

      {/* Introduction Section - Reduced padding */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pr-4 xl:pr-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              <span className="text-blue-600">Bridging the Gap</span> Between Education and Employment
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-3 sm:mb-4">
              As proud partners of <strong className="text-blue-600">GTEC Computer Education</strong>, we deliver cutting-edge training programs designed for freshers, job seekers, and working professionals.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6">
              With a perfect blend of theoretical knowledge and practical application, we prepare students for real-world challenges.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src={gtechimg}
              alt="GTEC Classroom"
              className="w-full h-auto object-cover rounded-xl md:h-92"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 text-white">
              <h3 className="text-base sm:text-lg font-bold mb-1">Our Training Facility</h3>
              <p className="text-xs">Modern labs with the latest hardware and software</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Reduced padding */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-10"
          >
            <span className="text-blue-600 font-semibold text-xs sm:text-sm">WHY CHOOSE US</span>
            <h2 className="text-2xl  md:text-3xl font-bold text-gray-900 mt-1 mb-2 sm:mb-3">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Key Differentiators</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className={`bg-white p-4 sm:p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-${feature.color}-500`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-${feature.color}-100 flex items-center justify-center text-${feature.color}-600 mb-3 sm:mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Training Programs Section - Reduced padding */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-10"
          >
            <span className="text-blue-600 font-semibold text-xs sm:text-sm">OUR PROGRAMS</span>
            <h2 className="text-2xl  md:text-3xl font-bold text-gray-900 mt-1 mb-2 sm:mb-3">
              Industry-Ready <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Training Programs</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto" />
            <p className="text-gray-600 text-xs sm:text-sm max-w-3xl mx-auto mt-3 sm:mt-4">
              Comprehensive courses designed to make you job-ready in today's competitive market
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-lg shadow-md border-l-4 border-${program.color}-500 overflow-hidden hover:shadow-lg transition-all duration-300`}
              >
                <div className="p-4 sm:p-5">
                  <div className="flex items-center mb-3">
                    <div className={`bg-${program.color}-100 p-2 sm:p-3 rounded-lg mr-3 text-${program.color}-600`}>
                      {program.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{program.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">{program.description}</p>
                  
                  <div className="mb-3 sm:mb-4">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {program.skills.map((skill, i) => (
                        <span key={i} className={`bg-${program.color}-100 text-${program.color}-800 text-xs px-2 sm:px-3 py-1 rounded-full`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-3 text-start text-xs sm:text-sm sm:grid-cols-3">
                    <div>
                      <div className={`text-${program.color}-600 font-bold`}>{program.duration}</div>
                      <div className="text-gray-500">Duration</div>
                    </div>
                    <div>
                      <div className={`text-${program.color}-600 font-bold`}>{program.projects}</div>
                      <div className="text-gray-500">Projects</div>
                    </div>
                    <div>
                      <div className={`text-${program.color}-600 font-bold`}>{program.placement}</div>
                      <div className="text-gray-500">Placement</div>
                    </div>
                  </div>
                </div>
                <div className={`bg-${program.color}-50 px-4 sm:px-5 py-2 border-t border-${program.color}-100`}>
                  <button 
                    onClick={() => navigate('/contact-us', { state: { details: { slug: 'gtech', program: program.title } } })}
                    className={`w-full text-center cursor-pointer text-${program.color}-600 font-medium hover:text-${program.color}-700 text-xs sm:text-sm`}
                  >
                    Get connect with team →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Augmentation Section - Reduced padding */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-10"
          >
            <span className="text-blue-600 font-semibold text-xs sm:text-sm">CAREER LAUNCHPAD</span>
            <h2 className="text-2xl  md:text-3xl font-bold text-gray-900 mt-1 mb-2 sm:mb-3">
              Staff <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Augmentation Program</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto" />
            <p className="text-gray-600 text-xs sm:text-sm max-w-3xl mx-auto mt-3 sm:mt-4">
              Get real-world experience while you learn with our unique employment bridge program
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-md">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center">
                  <IoIosRocket className="mr-2 text-blue-600" />
                  How It Works
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {staffAugmentationBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                        <FaCheckCircle className="text-blue-600 text-xs" />
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            >
              <div className="bg-blue-600 text-white p-3 sm:p-4 rounded-lg shadow-md">
                <h3 className="font-bold mb-2 text-blue-100 text-xs sm:text-sm">For Students</h3>
                <ul className="space-y-1 text-blue-100 text-xs">
                  <li className="flex items-start">
                    <span className="bg-white text-blue-600 rounded-full w-4 h-4 flex items-center justify-center mr-2 flex-shrink-0 text-xs">1</span>
                    <span>Gain practical experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white text-blue-600 rounded-full w-4 h-4 flex items-center justify-center mr-2 flex-shrink-0 text-xs">2</span>
                    <span>Build professional network</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white text-blue-600 rounded-full w-4 h-4 flex items-center justify-center mr-2 flex-shrink-0 text-xs">3</span>
                    <span>Enhance your resume</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-indigo-600 text-white p-3 sm:p-4 rounded-lg shadow-md">
                <h3 className="font-bold mb-2 text-indigo-100 text-xs sm:text-sm">For Companies</h3>
                <ul className="space-y-1 text-indigo-100 text-xs">
                  <li className="flex items-start">
                    <span className="bg-white text-indigo-600 rounded-full w-4 h-4 flex items-center justify-center mr-2 flex-shrink-0 text-xs">1</span>
                    <span>Access pre-trained talent</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white text-indigo-600 rounded-full w-4 h-4 flex items-center justify-center mr-2 flex-shrink-0 text-xs">2</span>
                    <span>Flexible staffing solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white text-indigo-600 rounded-full w-4 h-4 flex items-center justify-center mr-2 flex-shrink-0 text-xs">3</span>
                    <span>Reduced hiring risks</span>
                  </li>
                </ul>
              </div>
              
              <div className="sm:col-span-2 bg-white p-3 sm:p-4 rounded-lg shadow-md border border-gray-200">
                <h3 className="font-bold mb-2 text-gray-900 text-xs sm:text-sm">Success Stories</h3>
                <div className="flex items-start">
                  <img src={user} alt="Successful Students" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-2 sm:mr-3" />
                  <div>
                    <p className="text-gray-700 italic mb-1 text-xs">"The staff augmentation program gave me the real-world experience I needed to land my dream job."</p>
                    <p className="text-gray-600 text-xs">- Rahul K., Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Reduced padding */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4"
          >
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200">Launch</span> Your Tech Career?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-100 text-xs sm:text-sm mb-4 sm:mb-6 max-w-3xl mx-auto"
          >
            Join our next batch and take the first step toward becoming an industry-ready professional.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center"
          >
            <button 
              onClick={() => navigate('/contact-us', { state: { details: { slug: 'gtech' } } })}
              className="px-5 sm:px-6 py-2 sm:py-3 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-gray-100 transition-colors text-sm sm:text-base cursor-pointer"
            >
              Enroll Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gtech;