import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainlayout from './layout/Mainlayout';
import Gtech from './pages/Gtech';
import EventManagement from './pages/EventManagement';
import Fmcg from './pages/Fmcg';
import ContactUs from './pages/ContactUs';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route path="gtech" element={<Gtech />} />
          <Route path="aboutus" element={<About />} />
          <Route path="event-management" element={<EventManagement />} />
          <Route path="fmcg" element={<Fmcg />} />
          {/* <Route path="gallery" element={<Gallery />} /> */}
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
