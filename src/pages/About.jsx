import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import img1 from '/gtech.jpg';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

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

  // Enhanced features with invisible icons
  const features = [
    {
      title: 'Innovation Driven',
      description: 'We constantly push boundaries with cutting-edge solutions tailored for Karaikudi businesses',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      title: 'Local Expertise',
      description: 'Deep understanding of Karaikudi market dynamics and business needs',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Rapid Execution',
      description: 'Quick turnaround without compromising quality standards',
      color: 'bg-amber-100 text-amber-600'
    },
    {
      title: 'Data Protection',
      description: 'Enterprise-grade security for your business information',
      color: 'bg-green-100 text-green-600'
    },
  ];

  const stats = [
    { number: 150, suffix: '+', label: 'Businesses Empowered', color: 'text-indigo-600' },
    { number: 95, suffix: '%', label: 'Client Retention', color: 'text-blue-600' },
    { number: 24, suffix: '/7', label: 'Support Availability', color: 'text-amber-600' },
    { number: 5, suffix: 'x', label: 'Faster Implementation', color: 'text-green-600' }
  ];

  return (
    <div className="font-sans antialiased bg-white text-gray-900 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-screen max-h-[80vh] overflow-hidden">
        <img
          src={img1}
          alt="Digital Solutions in Karaikudi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto w-full"
          >
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Digital Transformation <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Experts</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-100 mb-8">
                Empowering Karaikudi businesses with innovative technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-medium cursor-pointer"
                  onClick={() => navigate('/contact')}
                >
                  Connect with us <FiArrowRight className="inline ml-2" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Choose Us</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto" />
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              We combine global technology standards with deep local market understanding
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`${feature.color} bg-opacity-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100`}
              >
                <div className="mb-6">
                  <div className="w-12 h-1 bg-current opacity-50 mb-2"></div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Text Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img src={img1} alt="Our Team" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-blue-600 font-semibold">OUR STORY</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-2">
                Pioneering Digital Solutions in Karaikudi
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Digitaly began as a small startup with a vision to transform how businesses in Karaikudi leverage technology. Today, we're the region's leading digital solutions provider, serving over 150 local businesses with our innovative platforms and services.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                What sets us apart is our unique blend of technical expertise and deep understanding of local business challenges. From our flagship Dial Karaikudi directory to our enterprise SaaS solutions, every product is designed with the Karaikudi business community in mind.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6"
              >
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {startCount && (
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={2}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-yellow-300">Digitally Transform</span> Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our team is ready to help you leverage technology for growth. Let's discuss how we can support your business goals.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all cursor-pointer"
                onClick={() => navigate('/contact')}
              >
                Get Started Today
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;