import React from 'react';
import { 
  FaBusinessTime,
  FaMusic,
  FaGlassCheers,
  FaBullhorn,
  FaMicrophone,
  FaCalendarAlt,
  FaPhotoVideo,
  FaClipboardCheck
} from 'react-icons/fa';
import eventManagement from '/event-Management.jpg';

const EventManagement = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative w-full">
        <img
          src={eventManagement}
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Our event management division operates with creativity, precision, and local expertise. Based in Karaikudi, we provide end-to-end event planning and execution services, making us a preferred partner for both social and corporate events.
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaClipboardCheck className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">End-to-End Planning</h3>
                <p className="text-gray-600">Comprehensive event management from concept to execution.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex items-start">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <FaCalendarAlt className="text-purple-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Local Expertise</h3>
                <p className="text-gray-600">Deep knowledge of Karaikudi venues and vendors.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <FaPhotoVideo className="text-green-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">AV Production</h3>
                <p className="text-gray-600">Professional audio-visual setup and technical support.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex items-start">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <FaMicrophone className="text-red-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Talent Coordination</h3>
                <p className="text-gray-600">Access to performers, speakers, and emcees.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaBusinessTime className="mr-3 text-blue-600" />
            Our Event Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 border-l-4 border-blue-500">
              <div className="flex items-center mb-3">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <FaBusinessTime className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Corporate Events</h3>
              </div>
              <p className="text-gray-600 mb-3">Professional management for business gatherings, product launches, and team events.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Seminars</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Conferences</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Product Launches</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Annual Days</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 border-l-4 border-purple-500">
              <div className="flex items-center mb-3">
                <div className="bg-purple-100 p-2 rounded-lg mr-4">
                  <FaMusic className="text-purple-600 text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Cultural Programs</h3>
              </div>
              <p className="text-gray-600 mb-3">Vibrant celebrations of local traditions and artistic performances.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Stage Shows</span>
                <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Music Concerts</span>
                <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Dance Performances</span>
                <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">Festivities</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 border-l-4 border-pink-500">
              <div className="flex items-center mb-3">
                <div className="bg-pink-100 p-2 rounded-lg mr-4">
                  <FaGlassCheers className="text-pink-600 text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Weddings & Receptions</h3>
              </div>
              <p className="text-gray-600 mb-3">Unforgettable celebrations with perfect coordination and elegant execution.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded-full">Weddings</span>
                <span className="bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded-full">Receptions</span>
                <span className="bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded-full">Anniversaries</span>
                <span className="bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded-full">Private Parties</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 border-l-4 border-red-500">
              <div className="flex items-center mb-3">
                <div className="bg-red-100 p-2 rounded-lg mr-4">
                  <FaBullhorn className="text-red-600 text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Promotional Campaigns</h3>
              </div>
              <p className="text-gray-600 mb-3">Impactful marketing events that create buzz and engagement.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Roadshows</span>
                <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Store Openings</span>
                <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Brand Activations</span>
                <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">PR Events</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full Service Package */}
        <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-800">
                <FaClipboardCheck className="mr-3 text-blue-600" />
                Complete Event Solutions
              </h2>
              <p className="mb-4 text-gray-600">
                We handle every aspect of your event to ensure flawless execution and unforgettable experiences.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCalendarAlt className="mt-1 mr-3 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700">Venue selection and booking</span>
                </li>
                <li className="flex items-start">
                  <FaPhotoVideo className="mt-1 mr-3 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700">Stage design and audio-visual production</span>
                </li>
                <li className="flex items-start">
                  <FaGlassCheers className="mt-1 mr-3 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700">Catering and hospitality management</span>
                </li>
                <li className="flex items-start">
                  <FaMicrophone className="mt-1 mr-3 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700">Entertainment and talent coordination</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="font-semibold mb-3 text-blue-600">Why Choose Us</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0">1</span>
                  <span className="text-gray-700">Local market expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0">2</span>
                  <span className="text-gray-700">Vendor network</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0">3</span>
                  <span className="text-gray-700">Attention to detail</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0">4</span>
                  <span className="text-gray-700">Stress-free experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Plan Your Perfect Event?</h2>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Let us handle the details while you enjoy the experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-colors">
              Get a Quote
            </button>
            <button className="bg-white border border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-full shadow-md transition-colors hover:bg-blue-50">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventManagement;