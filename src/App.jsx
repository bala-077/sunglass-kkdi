import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainlayout from './layout/Mainlayout';
import Gtech from './pages/Gtech';
import EventManagement from './pages/EventManagement';
import Fmcg from './pages/Fmcg';
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import Home from './pages/Home';
import Digitaly from './pages/Digitaly';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="gtech" element={<Gtech />} />
          <Route path="digitaly" element={<Digitaly />} />
          <Route path="aboutus" element={<About />} />
          <Route path="event-management" element={<EventManagement />} />
          <Route path="fmcg" element={<Fmcg />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
        </Routes>
    </Router>
  );
};

export default App;
