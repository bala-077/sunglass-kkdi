import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainlayout from './layout/Mainlayout';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndComdition from './pages/TermsAndComdition';

// Lazy load components
const Home = React.lazy(() => import('./pages/Home'));
const Gtech = React.lazy(() => import('./pages/Gtech'));
const EventManagement = React.lazy(() => import('./pages/EventManagement'));
const Fmcg = React.lazy(() => import('./pages/Fmcg'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));
const About = React.lazy(() => import('./pages/About'));
const Digitaly = React.lazy(() => import('./pages/Digitaly'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50">
    <div className="relative">
      <div className="w-20 h-20 border-purple-200 border-4 rounded-full"></div>
      <div className="w-20 h-20 border-purple-700 border-t-4 animate-spin rounded-full absolute left-0 top-0"></div>
      <div className="absolute top-24 w-full text-center">
        <p className="text-purple-700 text-lg font-semibold">Loading...</p>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
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
