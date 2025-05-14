import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainlayout from './layout/Mainlayout';
import Gtech from './pages/Gtech';
import About from './pages/About';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route path="gtech" element={<Gtech />} />
          <Route path="aboutus" element={<About/>} />
          {/* <Route path="event-management" element={<EventManagement />} /> */}
          {/* <Route path="fmcg" element={<FMCG />} /> */}
          {/* <Route path="gallery" element={<Gallery />} /> */}
          <Route path="contact" element={<ContactUs/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
