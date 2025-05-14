import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import img1 from '/gtech.jpg'; 

const About = () => {
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

  // Icons data
  const features = [
    { icon: 'fas fa-rocket', title: 'Innovation', color: 'from-purple-500 to-pink-500' },
    { icon: 'fas fa-brain', title: 'Intelligence', color: 'from-blue-500 to-cyan-400' },
    { icon: 'fas fa-bolt', title: 'Speed', color: 'from-yellow-500 to-orange-500' },
    { icon: 'fas fa-shield-alt', title: 'Security', color: 'from-green-500 to-teal-400' },
  ];

  const leaders = [
    {
      title: 'Founder & CEO',
      name: 'Alex Johnson',
      role: 'Visionary Leader',
      icon: 'fas fa-crown',
      color: 'bg-gradient-to-br from-amber-400 to-orange-500'
    },
    {
      title: 'CTO',
      name: 'Sarah Chen',
      role: 'Tech Innovator',
      icon: 'fas fa-microchip',
      color: 'bg-gradient-to-br from-blue-400 to-indigo-600'
    },
    {
      title: 'CFO',
      name: 'Michael Rodriguez',
      role: 'Financial Strategist',
      icon: 'fas fa-chart-line',
      color: 'bg-gradient-to-br from-emerald-400 to-green-600'
    }
  ];

  return (
    <div className="font-sans antialiased text-gray-900 overflow-x-hidden">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-black/60"
            aria-hidden="true"
          />
          <img
            src={img1}
            alt="Background"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>

        {/* Animated floating icons */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -20, x: Math.random() * 100 - 50 }}
              animate={{ 
                opacity: [0, 0.7, 0],
                y: [0, Math.random() * 200 - 100],
                x: [0, Math.random() * 200 - 100]
              }}
              transition={{ 
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute text-white/20 text-4xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            >
              <i className={`fas fa-${['star', 'circle', 'square', 'hexagon'][i % 4]}`} />
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center mb-8">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl shadow-xl"
              >
                <i className="fas fa-cubes" />
              </motion.div>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300">
                Innovating
              </span>{' '}
              <span className="text-white">Tomorrow's Solutions</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-10 leading-relaxed"
            >
              We combine cutting-edge technology with visionary thinking to create solutions that transform businesses and empower communities.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.button
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
              >
                Explore Our Work
              </motion.button>
              <motion.button
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/20 shadow-lg transition-all duration-300 hover:bg-white/20"
              >
                Meet Our Team
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="animate-bounce flex flex-col items-center">
            <span className="text-white mb-2">Scroll Down</span>
            <i className="fas fa-chevron-down text-white text-xl" />
          </div>
        </motion.div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-white relative">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-blue-700 mb-4"
          >
            Who We Are
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-6"
          >
            Founded in 2022, <b>[Your Company Name]</b> is a dynamic and diversified private limited company based in India. With headquarters in Chennai and a modern development center in Karaikudi, we provide high-quality services and products across technology, training, event management, distribution, and utility sectors.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-base text-gray-600 max-w-2xl mx-auto"
          >
            Our goal is to drive innovation, create value, and deliver excellence across every vertical. We believe in a customer-first approach, combined with a passion for technology, quality, and service.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300">Core Values</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`bg-gradient-to-br ${feature.color} rounded-2xl p-8 shadow-2xl hover:shadow-xl transition-all duration-300`}
              >
                <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white text-3xl mb-6 mx-auto">
                  <i className={feature.icon} />
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-3">{feature.title}</h3>
                <p className="text-gray-200 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-100 to-transparent z-0" />
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Leadership</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visionary thinkers and industry experts driving innovation forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className={`h-48 ${leader.color} flex items-center justify-center`}>
                  <i className={`${leader.icon} text-white text-6xl`} />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{leader.title}</p>
                  <p className="text-gray-600 mb-6">{leader.role}</p>
                  <div className="flex justify-center space-x-4">
                    <motion.a 
                      whileHover={{ y: -3 }}
                      href="#" 
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <i className="fab fa-linkedin-in" />
                    </motion.a>
                    <motion.a 
                      whileHover={{ y: -3 }}
                      href="#" 
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <i className="fab fa-twitter" />
                    </motion.a>
                    <motion.a 
                      whileHover={{ y: -3 }}
                      href="#" 
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <i className="fas fa-envelope" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with CountUp */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 to-purple-900 text-white relative overflow-hidden">
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 }}
              animate={{ 
                opacity: [0, 0.8, 0],
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100]
              }}
              transition={{ 
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute w-2 h-2 rounded-full bg-white/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              By The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-200">Numbers</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: 50, suffix: '+', label: 'Happy Clients', icon: 'fas fa-smile' },
              { number: 100, suffix: '+', label: 'Projects', icon: 'fas fa-project-diagram' },
              { number: 20, suffix: '+', label: 'Team Members', icon: 'fas fa-users' },
              { number: 5, suffix: '', label: 'Global Offices', icon: 'fas fa-globe' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.07 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 text-center border border-white/10 hover:bg-white/20 transition-all duration-300 shadow-xl"
              >
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-3xl text-white mb-6 mx-auto">
                  <i className={stat.icon} />
                </div>
                <div className="text-5xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-200 flex items-center justify-center">
                  <CountUp 
                    end={stat.number} 
                    duration={2.5} 
                    suffix={stat.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
                <div className="text-lg text-white/80 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-striped-brick.png')] opacity-10" />
        
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-200">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Let's build something extraordinary together. Get in touch with our team today.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
                View Case Studies
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;