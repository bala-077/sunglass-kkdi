import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Define field configs for each slug
const FORM_FIELDS = {
  'gtech': [
    { name: 'studentName', label: 'Student Name*', type: 'text', required: true, maxLength: 50 },
    { name: 'email', label: 'Email*', type: 'email', required: true },
    { name: 'phone', label: 'Phone*', type: 'text', required: true, maxLength: 14 },
    { 
      name: 'grade', 
      label: 'Education Level*', 
      type: 'select', 
      options: ['School', 'UG (Undergraduate)', 'PG (Postgraduate)']
    },
    { name: 'school', label: 'School/College Name', type: 'text', required: false, maxLength: 100 },
    { name: 'comments', label: 'Comments', type: 'textarea', required: false },
  ],
  'fmcg': [
    { name: 'companyName', label: 'Company Name*', type: 'text', required: true, maxLength: 100 },
    { name: 'contactPerson', label: 'Contact Person*', type: 'text', required: true, maxLength: 50 },
    { name: 'email', label: 'Email*', type: 'email', required: true },
    { name: 'phone', label: 'Phone*', type: 'text', required: true, maxLength: 15 },
    { name: 'productInterest', label: 'Product Interest*', type: 'text', required: true, maxLength: 100 },
    { name: 'comments', label: 'Comments', type: 'textarea', required: false },
  ],
  'event-management': [
    { name: 'eventType', label: 'Event Type*', type: 'select', 
      options: ['Corporate Event', 'Wedding', 'Cultural Program', 'Promotional Event'], 
      required: true 
    },
    { name: 'eventDate', label: 'Event Date*', type: 'date', required: true, min: new Date().toISOString().split('T')[0] },
    { name: 'contactPerson', label: 'Contact Person*', type: 'text', required: true, maxLength: 50 },
    { name: 'email', label: 'Email*', type: 'email', required: true },
    { name: 'phone', label: 'Phone*', type: 'text', required: true, maxLength: 15 },
    { name: 'eventLocation', label: 'Event Location', type: 'text', required: false, maxLength: 100 },
    { name: 'attendees', label: 'Expected Attendees', type: 'number', required: false, min: 1 },
    { name: 'budget', label: 'Approximate Budget', type: 'text', required: false, maxLength: 20 },
    { name: 'specialRequirements', label: 'Special Requirements', type: 'textarea', required: false }
  ],
  'default': [
    { name: 'firstName', label: 'First Name*', type: 'text', required: true, maxLength: 50 },
    { name: 'lastName', label: 'Last Name*', type: 'text', required: true, maxLength: 50 },
    { name: 'email', label: 'Email*', type: 'email', required: true },
    { name: 'company', label: 'Company*', type: 'text', required: true, maxLength: 100 },
    { name: 'jobTitle', label: 'Job Title*', type: 'text', required: false, maxLength: 50 },
    { name: 'country', label: 'Country*', type: 'select', required: true },
    { name: 'comments', label: 'Comments', type: 'textarea', required: false },
  ]
};

const COUNTRIES = [
  'India', 'USA', 'UK', 'Canada',
  'Australia', 'Germany', 'France', 'Other'
];

const ContactUs = () => {
  const location = useLocation();
  const slug = location?.state?.slug || 'default';
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
    const phoneRegex = /^(\+?\d{1,3}[- ]?)?\d{10}$/; // Improved phone regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z\s'-]+$/;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    fields.forEach(field => {
      const value = formData[field.name]?.trim();
      
      if (field.required && !value) {
        newErrors[field.name] = `${field.label.replace('*', '')} is required`;
        return;
      }

      // Skip validation if field is not required and empty
      if (!field.required && !value) return;

      switch (field.type) {
        case 'email':
          if (!emailRegex.test(value)) {
            newErrors[field.name] = 'Enter a valid email (e.g., name@domain.com)';
          }
          break;
          
        case 'text':
          if (field.name.includes('Name') || field.name.includes('Person') || 
              field.name === 'firstName' || field.name === 'lastName') {
            if (!nameRegex.test(value)) {
              newErrors[field.name] = "Only letters, spaces, - or ' allowed";
            }
            if (field.maxLength && value.length > field.maxLength) {
              newErrors[field.name] = `Maximum ${field.maxLength} characters allowed`;
            }
          }
          if (field.name === 'phone' && !phoneRegex.test(value)) {
            newErrors[field.name] = 'Invalid phone number format';
          }
          break;
          
        case 'select':
          if (field.required && !value) {
            newErrors[field.name] = `Please select a ${field.label.replace('*', '')}`;
          }
          break;
          
        case 'textarea':
          if (value && value.length < 10) {
            newErrors[field.name] = 'Please provide more details (minimum 10 characters)';
          }
          break;
          
        case 'date':
          if (field.required && !value) {
            newErrors[field.name] = `Please select a ${field.label.replace('*', '')}`;
          }
          if (value) {
            const selectedDate = new Date(value);
            selectedDate.setHours(0, 0, 0, 0);
            if (selectedDate < today) {
              newErrors[field.name] = 'Event date must be in the future';
            }
          }
          break;
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
        { ...formData, slug }
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

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        className="w-full max-w-xs sm:max-w-sm"
      />

      <motion.div
        className="w-full max-w-4xl space-y-6 bg-white rounded-xl p-6 sm:p-8 md:p-10 shadow-2xl mx-2 sm:mx-4 border border-gray-100"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              Contact Us
            </span>
          </h2>
          {slug === 'event-management' && (
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Let us help you create an unforgettable event experience. Please provide the details below.
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fields.map((field, index) => (
            <motion.div
              key={field.name}
              className={`${field.type === 'textarea' ? 'md:col-span-2' : ''} min-h-[100px]`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-2">
                {field.label}
                {field.maxLength && (
                  <span className="text-xs text-gray-500 ml-1">
                    (max {field.maxLength} chars)
                  </span>
                )}
              </label>
              {field.type === 'select' ? (
                <div>
                  <select
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors[field.name] ? 'border-red-500' : 'border-gray-200'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none`}
                  >
                    <option value="">Select {field.label.replace('*', '')}</option>
                    {(field.options || COUNTRIES).map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors[field.name] && (
                    <p className="mt-1 text-sm text-red-600">{errors[field.name]}</p>
                  )}
                </div>
              ) : field.type === 'textarea' ? (
                <div>
                  <div className="relative">
                    <textarea
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      rows={4}
                      maxLength={250}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors[field.name] ? 'border-red-500' : 'border-gray-200'
                      } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none`}
                      placeholder={field.required ? '' : 'Optional'}
                    />
                  </div>
                  <div className="flex justify-between">
                    {errors[field.name] ? (
                      <p className="text-sm text-red-600">{errors[field.name]}</p>
                    ) : (
                      <div className="text-sm text-gray-500">
                        {field.required ? '' : 'Optional field'}
                      </div>
                    )}
                    <div className="text-sm text-gray-500">
                      {formData[field.name]?.length || 0}/250 characters
                    </div>
                  </div>
                </div>
              ) : field.type === 'date' ? (
                <div>
                  <input
                    type="date"
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    min={field.min || new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors[field.name] ? 'border-red-500' : 'border-gray-200'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none`}
                  />
                  {errors[field.name] && (
                    <p className="mt-1 text-sm text-red-600">{errors[field.name]}</p>
                  )}
                </div>
              ) : (
                <div>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    min={field.min}
                    maxLength={field.maxLength}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors[field.name] ? 'border-red-500' : 'border-gray-200'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none`}
                    placeholder={field.required ? '' : 'Optional'}
                  />
                  {errors[field.name] && (
                    <p className="mt-1 text-sm text-red-600">{errors[field.name]}</p>
                  )}
                  {field.maxLength && (
                    <div className="text-xs text-gray-500 mt-1">
                      {formData[field.name]?.length || 0}/{field.maxLength} characters
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ))}

          <motion.button
            onClick={handleSubmit}
            className="md:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-6 py-4 rounded-lg hover:shadow-lg transition-all font-medium cursor-pointer text-lg w-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;