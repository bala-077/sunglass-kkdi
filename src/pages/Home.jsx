import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import heroImg from '/gtech.jpg';

const stats = [
  { label: 'AI Experts', value: 25, suffix: '+' },
  { label: 'Software Products', value: 12, suffix: '+' },
  { label: 'AI Solutions', value: 30, suffix: '+' },
  { label: 'Years Experience', value: 8, suffix: '' },
];

const services = [
  {
    title: "AI Development",
    description: "Custom AI solutions tailored to your business needs",
    icon: "🤖"
  },
  {
    title: "Machine Learning",
    description: "Advanced ML models for predictive analytics",
    icon: "🧠"
  },
  {
    title: "Computer Vision",
    description: "Image and video analysis solutions",
    icon: "👁️"
  },
  {
    title: "NLP Solutions",
    description: "Natural language processing for text analysis",
    icon: "💬"
  }
];

const testimonials = [
  {
    quote: "Their AI solution transformed our customer service operations.",
    author: "Sarah Johnson, TechCorp",
    role: "CTO"
  },
  {
    quote: "Exceptional team that delivered beyond our expectations.",
    author: "Michael Chen, Finova",
    role: "Product Director"
  }
];

const Home = () => {
  return (
    <div className="bg-[#041727] text-white">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-20 py-12 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 relative z-10">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">AI Development</span> Company <br /> Enabling Digital Transformation
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl font-medium">
              We build cutting-edge <span className="text-white font-semibold">AI solutions</span> that drive innovation and create competitive advantages for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-400 text-blue-100 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-900/30 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="flex-1 flex justify-center relative"
          >
            <div className="absolute -z-10 w-[120%] h-[120%] bg-gradient-to-r from-blue-500 to-indigo-600 opacity-20 rounded-full blur-3xl"></div>
            <img
              src={heroImg}
              alt="AI Illustration"
              className="max-w-full w-[480px] lg:w-[580px] drop-shadow-2xl rounded-2xl border-4 border-blue-500/20"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-[#041727] to-[#0a213d]">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight"
          >
            Trusted by <span className="text-blue-300">Innovative</span> Companies Worldwide
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-[#0d223a] rounded-xl shadow-xl flex flex-col items-center py-8 px-4 hover:bg-[#15325a] transition-all duration-300 border border-blue-900/50 hover:border-blue-500/30"
              >
                <span className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-2">
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                </span>
                <span className="text-base md:text-lg text-gray-200 font-medium text-center">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20 bg-[#0a213d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our <span className="text-blue-300">AI Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
            >
              Comprehensive AI solutions designed to solve complex business challenges and drive growth.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-[#112a4a] rounded-xl p-8 shadow-lg border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
                <button className="mt-6 text-blue-400 font-medium hover:text-blue-300 transition-colors">
                  Learn more →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-[#0a213d] to-[#041727]">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            What Our <span className="text-blue-300">Clients Say</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-[#112a4a] p-8 rounded-xl border border-blue-900/30 shadow-lg"
              >
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-xl italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-blue-300">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Business with AI?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto"
          >
            Schedule a free consultation with our AI experts to discuss your project needs.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-900 font-bold px-10 py-5 rounded-lg shadow-xl hover:bg-blue-100 transition-all duration-300 text-lg"
          >
            Contact Us Today
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Home;