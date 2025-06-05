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
  FaSync,
  FaBalanceScale,
  FaExclamationTriangle,
  FaGavel,
  FaBook
} from 'react-icons/fa';

const TermsAndCondition = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-2 sm:px-4">
      <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">Terms and Conditions</h1>
        
        {/* Company Info */}
        <div className="mb-6 text-center">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-700">SUNGLASSCHETTINAD RETAIL PRIVATE LIMITED</h2>
          <div className="flex flex-col items-start justify-center gap-1 sm:gap-2 text-sm sm:text-base text-gray-600 mb-1 md:items-center">
            <div className="flex items-start gap-4 text-start md:gap-3 md:items-center md:text-center">
              <FaMapMarkerAlt className="text-indigo-500 text-2xl md:text-sm" />
              <p className='text-xs md:text-sm'>Address: Dial Karaikudi, No.8 Muthoorani East, Muththupattinam, Karaikudi</p>
            </div>
            <div className="flex items-center text-xs text-start gap-2 sm:gap-3 mt-2 md:mt-0 md:text-sm md:text-center">
              <FaPhone className="text-indigo-500 rotate-90 text-xl md:text-sm" />
              <p>Contact: +919442338670</p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-6 p-3 sm:p-4 bg-indigo-50 rounded-lg">
          <p className="text-sm sm:text-base text-gray-700">
            Welcome to Sunclass Chettinad Retail Private Limited. These Terms and Conditions govern your use of our services, website, mobile applications, and any other products or services provided by us. You agree to be bound by these terms by accessing or using our services.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {/* Section 1 */}
          <section className="border-b pb-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-3">
              <FaUserCog className="text-indigo-600 text-2xl md:text-lg" />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-700">
              By using our services, you confirm that you are at least 18 years old or using the services under parental supervision. If you do not agree with any part of these terms, please do not use our services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="border-b pb-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-3">
              <FaSync className="text-indigo-600 text-2xl md:text-lg" />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">2. Changes to Terms</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-700">
              We may update these Terms and Conditions from time to time. Any changes will be posted on this page, and continued use of the services after changes constitutes your acceptance of those changes.
            </p>
          </section>

          {/* Section 3 */}
          <section className="border-b pb-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-3">
              <FaUserLock className="text-indigo-600 text-2xl md:text-lg" />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">3. User Responsibilities</h2>
            </div>
            <p className="mb-3 text-sm sm:text-base text-gray-600">You agree to use our services for lawful purposes only and not to engage in any activity that:</p>
            <ul className="list-disc pl-4 sm:pl-6 space-y-1 text-sm sm:text-base text-gray-700">
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> Violates any laws or regulations</li>
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> Infringes on the rights of others</li>
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> Disrupts the operation of our services</li>
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> Attempts to access or tamper with our systems without authorization</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="border-b pb-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-3">
              <FaBook className="text-indigo-600 text-2xl md:text-lg" />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">4. Intellectual Property</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-700">
              All content provided on our platforms, including logos, graphics, text, and software, is the property of Sunclass Chettinad Retail Private Limited and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
            </p>
          </section>

          {/* Section 5 */}
          <section className="border-b pb-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-3">
              <FaShoppingCart className="text-indigo-600 text-2xl md:text-lg" />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">5. Product and Service Information</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-700">
              We make every effort to ensure the accuracy of the information regarding our products and services. However, we do not guarantee that descriptions, pricing, or availability are accurate, complete, or error-free. We reserve the right to correct any errors and to change or update information at any time without prior notice.
            </p>
          </section>

          {/* Section 6 */}
          <section className="border-b pb-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-3">
              <FaExclamationTriangle className="text-indigo-600 text-2xl md:text-lg" />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">6. Limitation of Liability</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-700">
              To the fullest extent permitted by law, Sunclass Chettinad Retail Private Limited shall not be liable for any damages arising from the use or inability to use our services, including but not limited to direct, indirect, incidental, or consequential damages.
            </p>
          </section>

          {/* Section 7 */}
          <section className="border-b pb-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-3">
              <FaShieldAlt className="text-indigo-600 text-2xl md:text-lg" />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">7. Termination</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-700">
              We reserve the right to suspend or terminate your access to our services at any time, without notice, for conduct that we believe violates these Terms and Conditions or is otherwise harmful to our business or users.
            </p>
          </section>

          {/* Section 8 */}
          <section className="border-b pb-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-3">
              <FaBalanceScale className="text-indigo-600 text-2xl md:text-lg" />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">8. Governing Law</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-700">
              These Terms and Conditions are governed by the laws of India, without regard to its conflict of law principles. Any disputes arising from these terms shall be resolved in the courts located in Karaikudi.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <div className="flex items-center gap-2 sm:gap-3 mb-3">
              <FaEnvelope className="text-indigo-600 text-2xl md:text-lg" />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">9. Contact Us</h2>
            </div>
            <p className="mb-3 text-sm sm:text-base text-gray-600">If you have any questions or concerns about these Terms and Conditions, please contact us:</p>
            <div className="text-sm sm:text-base text-gray-700 space-y-1">
              <div className="flex items-center gap-1 sm:gap-2">
                <FaEnvelope className="text-indigo-500" />
                <p>Email: admin@dialkaraikudi</p>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <FaMapMarkerAlt className="text-indigo-500" />
                <p>Address: Dial Karaikudi, No.8 Muthoorani East, Muththupattinam, Karaikudi-630 001</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TermsAndCondition