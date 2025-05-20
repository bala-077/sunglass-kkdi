import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Define field configs for each slug
const FORM_FIELDS = {
  'gtech': [
    { name: 'studentName', label: 'Student Name*', type: 'text', required: true },
    { name: 'email', label: 'Email*', type: 'email', required: true },
    { name: 'phone', label: 'Phone*', type: 'text', required: true },
    { 
      name: 'grade', 
      label: 'Education Level*', 
      type: 'select', 
      options: ['School', 'UG (Undergraduate)', 'PG (Postgraduate)']
    },
    { name: 'school', label: 'School/College Name', type: 'text', required: false },
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
  'event-management': [
    { name: 'eventType', label: 'Event Type*', type: 'select', 
      options: ['Corporate Event', 'Wedding', 'Cultural Program', 'Promotional Event'], 
      required: true 
    },
    { name: 'eventDate', label: 'Event Date*', type: 'date', required: true },
    { name: 'contactPerson', label: 'Contact Person*', type: 'text', required: true },
    { name: 'email', label: 'Email*', type: 'email', required: true },
    { name: 'phone', label: 'Phone*', type: 'text', required: true },
    { name: 'eventLocation', label: 'Event Location', type: 'text', required: false },
    { name: 'attendees', label: 'Expected Attendees', type: 'number', required: false },
    { name: 'budget', label: 'Approximate Budget', type: 'text', required: false },
    { name: 'specialRequirements', label: 'Special Requirements', type: 'textarea', required: false }
  ],
  'default': [
    { name: 'firstName', label: 'First Name*', type: 'text', required: true },
    { name: 'lastName', label: 'Last Name*', type: 'text', required: true },
    { name: 'email', label: 'Email*', type: 'email', required: true },
    { name: 'company', label: 'Company*', type: 'text', required: true },
    { name: 'jobTitle', label: 'Job Title*', type: 'text', required: true },
    { name: 'country', label: 'Country*', type: 'select', required: true },
    { name: 'comments', label: 'Comments*', type: 'textarea', required: false },
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
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,6}$/;
    const nameRegex = /^[a-zA-Z\s'-]+$/;
    
    fields.forEach(field => {
      const value = formData[field.name]?.trim();
      
      if (field.required && !value) {
        newErrors[field.name] = `${field.label.replace('*', '')} is required`;
        return;
      }

      switch (field.type) {
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            newErrors[field.name] = 'Please enter a valid email address';
          }
          break;
          
        case 'text':
          if (field.name.includes('Name')) {
            if (!nameRegex.test(value)) {
              newErrors[field.name] = 'Please enter a valid name';
            }
          }
          break;
          
        case 'phone':
          if (!phoneRegex.test(value)) {
            newErrors[field.name] = 'Please enter a valid phone number';
          }
          break;
          
        case 'select':
          if (!value) {
            newErrors[field.name] = `Please select a ${field.label.replace('*', '')}`;
          }
          break;
          
        case 'textarea':
          if (value.length < 10) {
            newErrors[field.name] = 'Please provide more details (minimum 10 characters)';
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
        { ...formData, slug } // <-- replace enquiryDetails with slug
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

  // Add motion import

  // Add animation variants
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
          {/* Remove or update these lines if you don't have purpose/message in your state anymore */}
          {/* {enquiryDetails?.purpose && (
            <p className="mt-2 text-lg text-blue-700 font-semibold">{enquiryDetails.purpose}</p>
          )}
          {enquiryDetails?.message && (
            <p className="mt-1 text-base text-gray-600">{enquiryDetails.message}</p>
          )} */}
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
              className={field.type === 'textarea' ? 'md:col-span-2' : ''}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-2">
                {field.label}
              </label>
              {field.type === 'select' ? (
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
              ) : field.type === 'textarea' ? (
                <>
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
                    />
                  </div>
                  <div className="text-sm text-gray-500 bg-white px-2 rounded">
                    {250 - (formData[field.name]?.length || 0)} characters remaining
                  </div>
                </>
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors[field.name] ? 'border-red-500' : 'border-gray-200'
                  } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none`}
                />
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