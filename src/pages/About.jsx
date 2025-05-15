import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import img1 from '/gtech.jpg';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // State for count animation
  const [startCount, setStartCount] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Icons data
  const features = [
    { icon: 'fas fa-lightbulb', title: 'Innovation', color: 'bg-indigo-100 text-indigo-600' },
    { icon: 'fas fa-brain', title: 'Intelligence', color: 'bg-blue-100 text-blue-600' },
    { icon: 'fas fa-tachometer-alt', title: 'Speed', color: 'bg-amber-100 text-amber-600' },
    { icon: 'fas fa-shield-alt', title: 'Security', color: 'bg-green-100 text-green-600' },
  ];

  const leaders = [
    {
      title: 'Founder & CEO',
      name: 'Alex Johnson',
      role: 'Visionary Leader',
      icon: 'fas fa-crown',
      color: 'bg-amber-100 text-amber-600'
    },
    {
      title: 'CTO',
      name: 'Sarah Chen',
      role: 'Tech Innovator',
      icon: 'fas fa-microchip',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'CFO',
      name: 'Michael Rodriguez',
      role: 'Financial Strategist',
      icon: 'fas fa-chart-line',
      color: 'bg-green-100 text-green-600'
    }
  ];

  const stats = [
    { number: 50, suffix: '+', label: 'Happy Clients', icon: 'fas fa-smile', color: 'text-indigo-600' },
    { number: 100, suffix: '+', label: 'Projects', icon: 'fas fa-project-diagram', color: 'text-blue-600' },
    { number: 20, suffix: '+', label: 'Team Members', icon: 'fas fa-users', color: 'text-amber-600' },
    { number: 5, suffix: '', label: 'Global Offices', icon: 'fas fa-globe', color: 'text-green-600' }
  ];

  return (
    <div className="font-sans antialiased bg-white text-gray-900 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full">
        <img
          src={img1}
          alt="Event Management"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end p-8">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Professional Event Management
            </h1>
            <p className="text-lg sm:text-xl text-gray-100">
              Creating memorable experiences in Karaikudi and beyond
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Core Values</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`${feature.color} bg-opacity-50 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100`}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-white text-blue-500 flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6 mx-auto shadow-sm">
                  <i className={feature.icon} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 text-center mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-600 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      {/* About Text Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-3 md:mb-4"
          >
            Who We Are
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-4 md:mb-6"
          >
            Founded in 2022, <b>[Your Company Name]</b> is a dynamic and diversified private limited company based in India. With headquarters in Chennai and a modern development center in Karaikudi, we provide high-quality services and products across technology, training, event management, distribution, and utility sectors.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto"
          >
            Our goal is to drive innovation, create value, and deliver excellence across every vertical. We believe in a customer-first approach, combined with a passion for technology, quality, and service.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={ref} className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-6">
              By The <span className="text-gray-600">Numbers</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl md:rounded-2xl p-6 md:p-10 text-center border border-gray-100 hover:border-blue-100 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className={`w-14 h-14 md:w-20 md:h-20 rounded-full ${stat.color} bg-opacity-10 flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6 mx-auto`}>
                  <i className={stat.icon} />
                </div>
                <div className={`text-3xl md:text-5xl font-extrabold mb-1 md:mb-2 ${stat.color}`}>
                  {startCount && (
                    <CountUp 
                      end={stat.number} 
                      duration={2.5} 
                      suffix={stat.suffix} 
                      startOnMount={false}
                    />
                  )}
                </div>
                <div className="text-sm md:text-lg text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-striped-brick.png')] opacity-10" />
        
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200">Transform</span> Your Business?
            </h2>
            <p className="text-base md:text-xl text-white/90 mb-8 md:mb-10 max-w-3xl mx-auto">
              Let's build something extraordinary together. Get in touch with our team today.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
            >
              <button className="px-6 py-3 md:px-8 md:py-4 bg-white text-blue-600 font-bold rounded-lg md:rounded-xl shadow-md hover:bg-gray-100 transition-colors text-sm md:text-base" onClick={() => navigate('/contact', { state: { details: "Enquiry"}})}>
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;