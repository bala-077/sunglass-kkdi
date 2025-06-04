import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import notFoundImage from '/404.svg'; // replace with your custom image path

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-white via-gray-100 to-indigo-100 px-4">
      <div className="text-center max-w-md">
        <img
          src={notFoundImage}
          alt="404 Illustration"
          className="w-72 mx-auto mb-6"
        />
        <h1 className="text-5xl font-bold text-indigo-700 mb-2">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found.</p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center cursor-pointer px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          <FaArrowLeft className="mr-2" />
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
