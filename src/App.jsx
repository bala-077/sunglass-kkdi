import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainlayout from './layout/Mainlayout';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndComdition from './pages/TermsAndComdition';
import NotFoundPage from './pages/PageNotFound';

// Lazy load components
const Home = React.lazy(() => import('./pages/Home'));
const Gtech = React.lazy(() => import('./pages/Gtech'));
const EventManagement = React.lazy(() => import('./pages/EventManagement'));
const Fmcg = React.lazy(() => import('./pages/Fmcg'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));
const About = React.lazy(() => import('./pages/About'));
const Digitaly = React.lazy(() => import('./pages/Digitaly'));

// Attractive Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[calc(100vh-112px)] bg-gradient-to-r from-blue-50 to-indigo-50">
    <div className="text-center">
      <div className="relative inline-block">
        {/* Pulse animation */}
        <div className="w-24 h-24 rounded-full bg-purple-100 animate-ping absolute inset-0"></div>
        
        {/* Rotating circle */}
        <div className="w-24 h-24 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        
        {/* Logo or initials can be placed here */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-purple-600 font-bold text-xl">GS</span>
        </div>
      </div>
      
      {/* Text with fade animation */}
      <div className="mt-8 space-y-2">
        <p className="text-purple-600 text-lg font-semibold animate-pulse">
          Loading your experience
        </p>
        <div className="flex justify-center gap-1">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<Home />} />
            <Route path="gtech" element={<Gtech />} />
            <Route path="digitaly-ai-solutions" element={<Digitaly />} />
            <Route path="aboutus" element={<About />} />
            <Route path="event-management" element={<EventManagement />} />
            <Route path="fmcg" element={<Fmcg />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-conditions" element={<TermsAndComdition />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;