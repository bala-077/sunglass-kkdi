import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className=" w-full space-y-8 bg-white  p-10">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Contact Us</h2>
          <p className="mt-3 text-base text-gray-600">
            Complete the form below and we will contact you to discuss your project.<br />
            Your information will be kept confidential.
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="First Name*"
            required
            className="border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 shadow-sm bg-gray-50"
          />
          <input
            type="text"
            placeholder="Last Name*"
            required
            className="border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 shadow-sm bg-gray-50"
          />
          <input
            type="email"
            placeholder="Company Email*"
            required
            className="border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 shadow-sm bg-gray-50"
          />
          <input
            type="text"
            placeholder="Company Name*"
            required
            className="border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 shadow-sm bg-gray-50"
          />
          <input
            type="text"
            placeholder="Job Title*"
            required
            className="border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 shadow-sm bg-gray-50"
          />
          <select
            required
            className="border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 shadow-sm bg-gray-50"
          >
            <option value="">Select a country*</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            {/* Add more countries as needed */}
          </select>
          <textarea
            placeholder="Comments*"
            required
            rows={4}
            className="md:col-span-2 border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 shadow-sm bg-gray-50 resize-none"
          ></textarea>
          <button
            type="submit"
            className="md:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:from-blue-700 hover:to-indigo-600 transition duration-200 text-lg tracking-wide"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
