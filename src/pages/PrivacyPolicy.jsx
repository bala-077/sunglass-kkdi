import React, { useEffect } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaShieldAlt,
  FaUserLock,
  FaInfoCircle,
  FaDatabase,
  FaSearch,
  FaSync
} from 'react-icons/fa';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-2 sm:px-4">
      <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">Privacy Policy</h1>
        
        {/* Company Info */}
        <div className="mb-6 text-center">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-700">SUNGLASSCHETTINAD RETAIL PRIVATE LIMITED</h2>
          <div className="flex flex-col items-start justify-center gap-1 sm:gap-2 text-sm sm:text-base text-gray-600 mb-1 md:items-center">
            <div className="flex items-start gap-4 text-start md:gap-3 md:items-center md:text-center">
              <FaMapMarkerAlt className="text-indigo-500 text-2xl md:text-sm" />
              <p className='text-xs md:text-sm'>Address: Dial Karaikudi, No.8 Muthoorani East, Muthupattinam, Karaikudi-630 001</p>
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
            At SUNGLASSCHETTINAD RETAIL PRIVATE LIMITED, safeguarding your privacy is our top priority. This Privacy Policy outlines how we collect, use, store, and protect your personal information when you interact with our platforms. As a company operating in India, we comply with applicable privacy laws and regulations.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {/* Section 1 */}
          <section className="border-b pb-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-3">
              <FaInfoCircle className="text-indigo-600 text-2xl md:text-lg" />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">1. About This Privacy Notice</h2>
            </div>
            <p className="mb-3 text-sm sm:text-base text-gray-600">This Privacy Notice is designed to inform you about:</p>
            <ul className="list-disc pl-4 sm:pl-6 space-y-1 text-sm sm:text-base text-gray-700">
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> What personal data do we collect</li>
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> Why do we collect it</li>
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> How do we use it</li>
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> How do we safeguard it</li>
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> Your rights and choices</li>
            </ul>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              We may update this policy periodically and encourage you to review any changes posted here.
            </p>
          </section>

          {/* Section 2 */}
          <section className="border-b pb-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-3">
              <FaDatabase className="text-indigo-600 text-2xl md:text-lg" />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">2. How We Collect Personal Information</h2>
            </div>
            <p className="mb-3 text-sm sm:text-base text-gray-600">We may collect personal data when you voluntarily provide it, including (but not limited to):</p>
            <ul className="list-disc pl-4 sm:pl-6 space-y-1 text-sm sm:text-base text-gray-700">
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> Identity and Contact Details: Name, address, email, phone number</li>
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> Purchase and transaction information</li>
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> Marketing preferences and other data you voluntarily submit</li>
            </ul>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              If you provide us with personal data about others (e.g., emergency contact), you confirm you have informed them and obtained their consent where necessary.
            </p>
          </section>

          {/* Section 3 */}
          <section className="border-b pb-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-3">
              <FaSearch className="text-indigo-600 text-2xl md:text-lg" />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">3. Why We Collect Your Personal Information</h2>
            </div>
            <p className="mb-3 text-sm sm:text-base text-gray-600">We use your data to:</p>
            <ul className="list-disc pl-4 sm:pl-6 space-y-1 text-sm sm:text-base text-gray-700">
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> Provide requested products, services, or information</li>
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> Maintain and manage our relationship with you</li>
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> Send administrative or legal notices</li>
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> Perform analytics and market research</li>
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> Inform you about new products or events</li>
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> Personalize our communications</li>
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> Detect and prevent unlawful activity</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="border-b pb-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-3">
              <FaShieldAlt className="text-indigo-600 text-3xl md:text-lg" />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">4. How We Protect Your Personal Information</h2>
            </div>
            <p className="mb-3 text-sm sm:text-base text-gray-600">We use industry-standard security protocols to prevent unauthorized access, loss, or misuse of personal data. Specifically:</p>
            <ul className="list-disc pl-4 sm:pl-6 space-y-1 text-sm sm:text-base text-gray-700">
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> Data is stored securely on servers managed by our trusted service providers</li>
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> Regular backups are taken to ensure data availability and integrity</li>
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> We employ robust access controls and monitoring tools</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="border-b pb-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-3">
              <FaUserLock className="text-indigo-600 text-2xl md:text-lg" />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">5. Face Data Handling Policy</h2>
            </div>
            <p className="mb-3 text-sm sm:text-base text-gray-600">If our services involve face recognition or biometric data, we handle such data with utmost care. Details include:</p>
            <ul className="list-disc pl-4 sm:pl-6 space-y-1 text-sm sm:text-base text-gray-700">
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> Use: For secure access or verification purposes</li>
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> Storage Duration: Data is retained only for the required period; deleted once no longer needed</li>
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> Third-Party Sharing: Face data is not shared with or stored by any third party unless explicitly stated</li>
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> Purpose: Strictly limited to the functionality it supports</li>
            </ul>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              By using our app or systems, you consent to the terms outlined above.
            </p>
          </section>

          {/* Section 6 */}
          <section className="border-b pb-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-3">
              <FaSync className="text-indigo-600 text-2xl md:text-lg" />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">6. Updates to This Privacy Notice</h2>
            </div>
            <p className="mb-3 text-sm sm:text-base text-gray-600">This Privacy Policy may be revised periodically to reflect:</p>
            <ul className="list-disc pl-4 sm:pl-6 space-y-1 text-sm sm:text-base text-gray-700">
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> Legal or regulatory changes</li>
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> New data practices</li>
              <li className="flex items-start gap-1 sm:gap-2"><span className="text-indigo-500">•</span> Organizational changes</li>
            </ul>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Changes will be posted on this page. Continued use of our services signifies your acceptance of any revisions.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <div className="flex items-center gap-2 sm:gap-3 mb-3">
              <FaEnvelope className="text-indigo-600 text-2xl md:text-lg" />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">7. Contact Us</h2>
            </div>
            <p className="mb-3 text-sm sm:text-base text-gray-600">If you have any questions, concerns, or requests regarding this Privacy Policy or how we process your personal data, please contact us:</p>
            <div className="text-sm sm:text-base text-gray-700 space-y-1">
              <div className="flex items-center gap-1 sm:gap-2">
                <FaEnvelope className="text-indigo-500" />
                <p>Email: admin@dialkaraikudi.com</p>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <FaMapMarkerAlt className="text-indigo-500" />
                <p>Address: Dial Karaikudi, No.8 Muthoorani East, Muthupattinam, Karaikudi-630 001</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy