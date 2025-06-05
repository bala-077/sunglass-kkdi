import React, { useEffect } from 'react';
import {
  FaBusinessTime,
  FaMusic,
  FaGlassCheers,
  FaBullhorn,
  FaMicrophone,
  FaCalendarAlt,
  FaPhotoVideo,
  FaClipboardCheck,
  FaMapMarkerAlt,
  FaUsers,
  FaRegSmile
} from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import eventHerImg from '/abouts.jpg'
import { useNavigate } from 'react-router-dom';
import eventManagement from '/event-Management.jpg';
import { motion } from 'framer-motion';

const EventManagement = () => {
  const navigate = useNavigate();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <div className="w-full bg-white">
      {/* Hero Section - Matching Digital Transformation Style */}
      <div className="relative w-full h-screen max-h-[80vh] overflow-hidden">
        <img
          src={eventHerImg}
          alt="Event Management"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-7xl mx-auto w-full"
          >
            <div className="max-w-2xl">
              <h1 className=" text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Unforgettable Experiences</span>
              </h1>
              <p className="text-sm md:text-lg text-gray-100 mb-8">
                Professional event management services in Karaikudi that transform your vision into reality
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-medium cursor-pointer"
                  onClick={() => navigate('/contact-us', { state:  { slug: 'event-management' } })}
                >
                  Plan Your Event <FiArrowRight className="inline ml-2" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Enhanced Introduction */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">
              Karaikudi's Premier Event Partners
            </span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Combining <span className="font-semibold text-blue-600">digital innovation</span> with <span className="font-semibold text-indigo-600">event expertise</span>, we bring a unique approach to event management. Our tech-enabled solutions ensure seamless planning while our local knowledge guarantees authentic experiences.
          </p>
        </div>

        {/* Features Grid with Enhanced UI */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <FaClipboardCheck className="text-blue-600 text-2xl" />,
              title: "Digital Planning Tools",
              desc: "Online dashboards for real-time event tracking",
              bg: "bg-blue-100"
            },
            {
              icon: <FaCalendarAlt className="text-purple-600 text-2xl" />,
              title: "Local Expertise",
              desc: "Deep Karaikudi market knowledge",
              bg: "bg-purple-100"
            },
            {
              icon: <FaPhotoVideo className="text-green-600 text-2xl" />,
              title: "Tech Integration",
              desc: "Advanced AV and digital solutions",
              bg: "bg-green-100"
            },
            {
              icon: <FaMicrophone className="text-red-600 text-2xl" />,
              title: "Talent Network",
              desc: "Curated performers and speakers",
              bg: "bg-red-100"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className={`${feature.bg} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Enhanced Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">
              Our Comprehensive Services
            </span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto mb-6" />

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Corporate Events",
                icon: <FaBusinessTime className="text-blue-600 text-xl" />,
                desc: "Tech-enabled business gatherings with digital integration",
                tags: ["Hybrid Conferences", "Product Launches", "Team Building"],
                border: "border-blue-500"
              },
              {
                title: "Cultural Programs",
                icon: <FaMusic className="text-purple-600 text-xl" />,
                desc: "Celebrating local heritage with modern production values",
                tags: ["Music Festivals", "Dance Performances", "Traditional Events"],
                border: "border-purple-500"
              },
              {
                title: "Weddings & Receptions",
                icon: <FaGlassCheers className="text-pink-600 text-xl" />,
                desc: "Seamless celebrations with digital planning tools",
                tags: ["Destination Weddings", "Receptions", "Anniversaries"],
                border: "border-pink-500"
              },
              {
                title: "Promotional Campaigns",
                icon: <FaBullhorn className="text-red-600 text-xl" />,
                desc: "Data-driven marketing events with digital analytics",
                tags: ["Brand Activations", "Retail Launches", "PR Stunts"],
                border: "border-red-500"
              }
            ].map((service, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-md border-l-4 ${service.border} hover:translate-y-[-5px] transition-transform`}>
                <div className="flex items-center mb-4">
                  <div className={`${service.border.replace('border', 'bg')}100 p-3 rounded-lg mr-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-5">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`${service.border.replace('border', 'bg')}100 ${service.border.replace('border', 'text')}-800 text-xs px-3 py-1 rounded-full`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section - New Addition */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-500 mb-20 py-12 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2 flex items-center justify-center">
                  <FaCalendarAlt className="mr-2" /> 250+
                </div>
                <p className="text-blue-100">Events Managed</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 flex items-center justify-center">
                  <FaMapMarkerAlt className="mr-2" /> 50+
                </div>
                <p className="text-blue-100">Venues Partnered</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 flex items-center justify-center">
                  <FaUsers className="mr-2" /> 10K+
                </div>
                <p className="text-blue-100">Attendees Served</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 flex items-center justify-center">
                  <FaRegSmile className="mr-2" /> 100%
                </div>
                <p className="text-blue-100">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>


        {/* Enhanced Full Service Package */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-3 shadow-lg border border-gray-200 mb-5 overflow-hidden md:p-10 md:mb-16">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/3 mb-10 lg:mb-0 lg:pr-10">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                  End-to-End Digital Event Solutions
                </span>
              </h2>
              <p className="text-base text-gray-700 mb-8 leading-relaxed md:text-lg">
                Our unique combination of <span className="font-semibold text-blue-600">event expertise</span> and <span className="font-semibold text-indigo-600">digital innovation</span> ensures your event stands out in today's competitive landscape.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  { icon: <FaCalendarAlt className="text-blue-500 text-xl" />, text: "Venue sourcing with 3D virtual tours" },
                  { icon: <FaPhotoVideo className="text-blue-500 text-xl" />, text: "Hybrid event streaming solutions" },
                  { icon: <FaClipboardCheck className="text-blue-500 text-xl" />, text: "Digital attendee management" },
                  { icon: <FaMicrophone className="text-blue-500 text-xl" />, text: "Augmented reality experiences" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="mt-1 mr-4 flex-shrink-0">{item.icon}</span>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/3 bg-white p-2 rounded-xl shadow-md border border-blue-100 md:p-8">
              <h3 className="text-xl font-semibold mb-6 text-blue-600 flex items-center">
                <FaRegSmile className="mr-2" /> Why We're Different
              </h3>
              <ul className="space-y-4">
                {[
                  "Tech-forward event solutions",
                  "Data-driven decision making",
                  "Seamless digital integration",
                  "Local market specialization",
                  "Sustainable event practices"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center py-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Elevate Your Event?</span>
          </h2>
          <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto md:text-lg">
            Let's combine digital innovation with unforgettable experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="cursor-pointer bg-gradient-to-r w-48 from-blue-600 to-indigo-500 hover:from-blue-700
               hover:to-indigo-600 text-center text-white font-semibold py-4 px-10 rounded-full shadow-lg transition-all flex items-center justify-center md:w-full"
              onClick={() => navigate('/contact-us',  { state:  { slug: 'event-management' } })}
            >
              Get Started <FiArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventManagement;