import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';

// Define field configs for each slug
const FORM_FIELDS = {
  'gtech': [
    { name: 'studentName', label: 'Student Name*', type: 'text', required: true },
    { name: 'email', label: 'Email*', type: 'email', required: true },
    { name: 'phone', label: 'Phone*', type: 'text', required: true },
    { name: 'grade', label: 'Class*', type: 'text', required: true },
    { name: 'school', label: 'School Name', type: 'text', required: false },
    { name: 'comments', label: 'Comments', type: 'textarea', required: false },
  ],
  'fmcg': [
    { name: 'companyName', label: 'Company Name*', type: 'text', required: true },
    { name: 'contactPerson', label: 'Contact Person*', type: 'text', required: true },
    { name: 'email', label: 'Email*', type: 'email', required: true },
    { name: 'phone', label: 'Phone*', type: 'text', required: true },
    { name: 'productInterest', label: 'Product Interest*', type: 'text', required: true },
    { name: 'comments', label: 'Comments', type: 'textarea', required: false },
  ],
  'default': [
    { name: 'firstName', label: 'First Name*', type: 'text', required: true },
    { name: 'lastName', label: 'Last Name*', type: 'text', required: true },
    { name: 'email', label: 'Email*', type: 'email', required: true },
    { name: 'company', label: 'Company*', type: 'text', required: true },
    { name: 'jobTitle', label: 'Job Title*', type: 'text', required: true },
    { name: 'country', label: 'Country*', type: 'select', required: true },
    { name: 'comments', label: 'Comments*', type: 'textarea', required: true },
  ]
};

const COUNTRIES = [
  'India', 'USA', 'UK', 'Canada',
  'Australia', 'Germany', 'France', 'Other'
];

const ContactUs = () => {
  const enquiryDetails = useLocation()?.state?.details;
  const slug = enquiryDetails?.slug || 'default';
  console.log(slug)

  // Pick the correct fields for the slug
  const fields = FORM_FIELDS[slug] || FORM_FIELDS['default'];

  // Initialize formData with all possible fields
  const initialFormData = {};
  Object.values(FORM_FIELDS).flat().forEach(f => {
    if (f.type === 'select') {
      initialFormData[f.name] = '';
    } else {
      initialFormData[f.name] = '';
    }
  });

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    emailjs.init('_xS_bQ1zhNcYZ3um6');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    fields.forEach(field => {
      if (field.required) {
        if (!formData[field.name] || !formData[field.name].trim()) {
          newErrors[field.name] = `${field.label.replace('*', '')} is required`;
        }
      }
      if (field.type === 'email' && formData[field.name]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.name])) {
          newErrors[field.name] = 'Please enter a valid email';
        }
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fill all required fields correctly');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await emailjs.send(
        'service_l8r7vo7',
        'template_9qe2ykk',
        { ...formData, enquiryDetails }
      );

      if (response.status === 200) {
        toast.success('Message sent successfully! We will contact you soon.');
        setFormData(initialFormData);
      } else {
        throw new Error('Unexpected response status');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error(`Failed to send message: ${error.text || 'Please try again later.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-2 sm:px-4 lg:px-8">
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        className="w-full max-w-xs sm:max-w-sm"
      />

      <div className="w-full max-w-4xl space-y-6 bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-lg mx-2 sm:mx-4">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            Contact Us
          </h2>
          {/* Show extra details if present */}
          {enquiryDetails?.purpose && (
            <p className="mt-2 text-base text-blue-700 font-semibold">{enquiryDetails.purpose}</p>
          )}
          {enquiryDetails?.message && (
            <p className="mt-1 text-sm text-gray-600">{enquiryDetails.message}</p>
          )}
          <p className="mt-2 text-sm sm:text-base text-gray-600 px-2">
            {slug === 'g-tech' && 'Please fill in student details for G-Tech enquiry.'}
            {slug === 'fmcg' && 'Please fill in your company and product interest for FMCG enquiry.'}
            {slug === 'default' && 'Complete the form below and we will contact you to discuss your project. Your information will be kept confidential.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          <div className="space-y-4 md:col-span-2">
            {fields.map(field => (
              <div key={field.name} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                <label htmlFor={field.name} className="sr-only">{field.label}</label>
                {field.type === 'select' ? (
                  <select
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={`w-full border ${errors[field.name] ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg px-4 py-2 sm:px-5 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 shadow-sm bg-gray-50`}
                    aria-invalid={!!errors[field.name]}
                    aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                  >
                    <option value="">Select a country*</option>
                    {COUNTRIES.map(country => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                ) : field.type === 'textarea' ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    placeholder={field.label}
                    value={formData[field.name]}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full border ${errors[field.name] ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg px-4 py-2 sm:px-5 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 shadow-sm bg-gray-50 resize-none`}
                    aria-invalid={!!errors[field.name]}
                    aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                  ></textarea>
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    placeholder={field.label}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={`w-full border ${errors[field.name] ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg px-4 py-2 sm:px-5 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 shadow-sm bg-gray-50`}
                    aria-invalid={!!errors[field.name]}
                    aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                  />
                )}
                {errors[field.name] && (
                  <p id={`${field.name}-error`} className="mt-1 text-xs sm:text-sm text-red-500">
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="md:col-span-2 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-2 sm:py-3 px-4 rounded-lg font-semibold shadow-lg hover:from-blue-700 hover:to-indigo-600 transition duration-200 text-base sm:text-lg tracking-wide ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;