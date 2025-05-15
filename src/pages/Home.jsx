import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import heroImg from '/gtech.jpg';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiCheck, FiChevronRight, FiAward, FiUsers, FiCode, FiLayers } from 'react-icons/fi';
import { FaRobot, FaBrain, FaEye, FaComments } from 'react-icons/fa';
import client1 from '/client1.png';
import client2 from '/client1.png';
import client3 from '/client1.png';
import client4 from '/client1.png';

const stats = [
  { label: 'AI Experts', value: 25, suffix: '+', description: 'Certified professionals with advanced AI expertise' },
  { label: 'Software Products', value: 12, suffix: '+', description: 'Ready-to-deploy AI solutions for various industries' },
  { label: 'AI Solutions', value: 30, suffix: '+', description: 'Custom AI implementations for unique business needs' },
  { label: 'Years Experience', value: 8, suffix: '', description: 'Delivering cutting-edge AI since 2016' },
];

const services = [
  {
    title: "AI Development",
    description: "Custom AI solutions tailored to your business needs with end-to-end development lifecycle",
    icon: <FaRobot className="text-4xl text-blue-600" />,
    features: ["Custom algorithms", "Predictive modeling", "AI integration", "Continuous optimization"]
  },
  {
    title: "Machine Learning",
    description: "Advanced ML models for predictive analytics and data-driven decision making",
    icon: <FaBrain className="text-4xl text-indigo-600" />,
    features: ["Supervised learning", "Unsupervised learning", "Deep learning", "Model deployment"]
  },
  {
    title: "Computer Vision",
    description: "Image and video analysis solutions for automation and quality control",
    icon: <FaEye className="text-4xl text-purple-600" />,
    features: ["Object detection", "Facial recognition", "Image classification", "Video analytics"]
  },
  {
    title: "NLP Solutions",
    description: "Natural language processing for text analysis, chatbots and sentiment analysis",
    icon: <FaComments className="text-4xl text-teal-600" />,
    features: ["Text classification", "Sentiment analysis", "Chatbots", "Language translation"]
  }
];

const industries = [
  { name: "Healthcare", icon: <FiLayers className="mr-2" />, description: "AI for diagnostics, patient care and drug discovery" },
  { name: "Finance", icon: <FiLayers className="mr-2" />, description: "Fraud detection, algorithmic trading and risk assessment" },
  { name: "Retail", icon: <FiLayers className="mr-2" />, description: "Personalized recommendations and inventory optimization" },
  { name: "Manufacturing", icon: <FiLayers className="mr-2" />, description: "Predictive maintenance and quality control" },
  { name: "Telecom", icon: <FiLayers className="mr-2" />, description: "Network optimization and customer churn prediction" },
  { name: "Agriculture", icon: <FiLayers className="mr-2" />, description: "Crop monitoring and yield prediction" },
];

const testimonials = [
  {
    quote: "Their AI solution transformed our customer service operations, reducing response times by 70% while maintaining 98% accuracy.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp",
    avatar: "https://randomuser.me/api/portraits/women/43.jpg"
  },
  {
    quote: "Exceptional team that delivered beyond our expectations. The predictive maintenance system has saved us millions in downtime costs.",
    author: "Michael Chen",
    role: "Product Director, Finova",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "Working with this team was a game-changer for our retail business. Their recommendation engine boosted our sales by 35%.",
    author: "David Wilson",
    role: "CEO, ShopSmart",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg"
  }
];

const clients = [
  { logo: client1, name: "TechCorp" },
  { logo: client2, name: "Finova" },
  { logo: client3, name: "MediHealth" },
  { logo: client4, name: "ShopSmart" },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
          <img
            src={heroImg}
            alt="AI Technology"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-200">
                AI-Powered
              </span>{' '}
              <span className="text-white">Business Transformation</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-10 leading-relaxed"
            >
              We deliver cutting-edge artificial intelligence solutions that drive efficiency, innovation, and competitive advantage for businesses worldwide.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <motion.button
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl flex items-center"
                onClick={() => navigate('/contact')}
              >
                Request Demo <FiArrowRight className="ml-2" />
              </motion.button>
              
              <motion.button
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl flex items-center"
                onClick={() => navigate('/solutions')}
              >
                Explore Solutions <FiChevronRight className="ml-2" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white text-2xl cursor-pointer"
            onClick={() => document.getElementById('stats').scrollIntoView({ behavior: 'smooth' })}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold">OUR IMPACT</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Transforming Businesses Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Data & AI</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We measure our success by the tangible results we deliver to our clients across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl p-8 border border-gray-100 transition-all duration-300 hover:-translate-y-2"
              >
                <span className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2 block">
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                </span>
                <span className="text-xl font-bold text-gray-800 block mb-2">{stat.label}</span>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI Solutions</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with industry knowledge to deliver solutions that drive real business results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold">INDUSTRIES WE SERVE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              AI Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Every Sector</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our expertise spans multiple industries, delivering tailored AI solutions for unique challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4 text-blue-600">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{industry.name}</h3>
                </div>
                <p className="text-gray-600">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold">CLIENT TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Clients Say</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - here's what our clients say about working with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="text-yellow-400 text-xl mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4 object-cover" />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-300 to-indigo-500 mt-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our AI experts to discuss how we can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                onClick={() => navigate('/contact')}
              >
                Get Free Consultation <FiArrowRight className="ml-1" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;