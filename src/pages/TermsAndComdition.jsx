import React, { useEffect } from 'react';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaShieldAlt,
  FaUserLock,
  FaInfoCircle,
  FaDatabase,
  FaBell,
  FaShoppingCart,
  FaBullhorn,
  FaUserCog,
  FaSearch,
  FaSync
} from 'react-icons/fa';

const TermsAndComdition = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Privacy Policy</h1>
        
        {/* Company Info */}
        <div className="mb-8 text-center">
          <h2 className="text-xl font-semibold mb-2 text-indigo-700">SUNGLASSCHETTINAD RETAIL PRIVATE LIMITED</h2>
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-1">
            <FaMapMarkerAlt className="text-indigo-500" />
            <p>Address: Dial Karaikudi, No.8 Muthoorani East, Muththupattinam, Karaikudi-630 001</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <FaPhone className="text-indigo-500" />
            <p>Contact: +919442338670</p>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-8 p-4 bg-indigo-50 rounded-lg">
          <p className="text-gray-700">
            At SUNGLASSCHETTINAD RETAIL PRIVATE LIMITED, safeguarding your privacy is our top priority. This Privacy Policy outlines how we collect, use, store, and protect your personal information when you interact with our platforms.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section className="border-b pb-6">
            <div className="flex items-center gap-3 mb-4">
              <FaInfoCircle className="text-indigo-600 text-xl" />
              <h2 className="text-2xl font-semibold text-gray-800">1. About This Privacy Notice</h2>
            </div>
            <p className="mb-4 text-gray-600">This Privacy Notice is designed to inform you about:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="text-indigo-500">•</span> What personal data do we collect</li>
              <li className="flex items-start gap-2"><span className="text-indigo-500">•</span> Why do we collect it</li>
              <li className="flex items-start gap-2"><span className="text-indigo-500">•</span> How do we use it</li>
              <li className="flex items-start gap-2"><span className="text-indigo-500">•</span> How do we safeguard it</li>
              <li className="flex items-start gap-2"><span className="text-indigo-500">•</span> Your rights and choices</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="border-b pb-6">
            <div className="flex items-center gap-3 mb-4">
              <FaDatabase className="text-indigo-600 text-xl" />
              <h2 className="text-2xl font-semibold text-gray-800">2. How We Collect Personal Information</h2>
            </div>
            <p className="mb-4 text-gray-600">We may collect personal data when you voluntarily provide it, including (but not limited to):</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="text-indigo-500">•</span> Identity and Contact Details: Dial Karaikudi, NO.8 Muthoorani East Muththupattinam Karaikudi-630001, Contact : +919442338670</li>
              <li className="flex items-start gap-2"><span className="text-indigo-500">•</span> Purchase and transaction information</li>
              <li className="flex items-start gap-2"><span className="text-indigo-500">•</span> Marketing preferences and other data you voluntarily submit</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="border-b pb-6">
            <div className="flex items-center gap-3 mb-4">
              <FaSearch className="text-indigo-600 text-xl" />
              <h2 className="text-2xl font-semibold text-gray-800">3. Why We Collect Your Personal Information</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="text-indigo-500">•</span> Provide requested products, services, or information</li>
              <li className="flex items-start gap-2"><span className="text-indigo-500">•</span> Maintain and manage our relationship with you</li>
              <li className="flex items-start gap-2"><span className="text-indigo-500">•</span> Send administrative or legal notices</li>
              <li className="flex items-start gap-2"><span className="text-indigo-500">•</span> Perform analytics and market research</li>
              <li className="flex items-start gap-2"><span className="text-indigo-500">•</span> Inform you about new products or events</li>
              <li className="flex items-start gap-2"><span className="text-indigo-500">•</span> Personalize our communications</li>
              <li className="flex items-start gap-2"><span className="text-indigo-500">•</span> Detect and prevent unlawful activity</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="border-b pb-6">
            <div className="flex items-center gap-3 mb-4">
              <FaShieldAlt className="text-indigo-600 text-xl" />
              <h2 className="text-2xl font-semibold text-gray-800">4. How We Protect Your Personal Information</h2>
            </div>
            <p className="mb-4 text-gray-600">We use industry-standard security protocols to prevent unauthorized access to your data.</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TermsAndComdition