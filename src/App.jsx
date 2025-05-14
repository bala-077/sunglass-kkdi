import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainlayout from './layout/Mainlayout';
import Gtech from './pages/Gtech';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route path="gtech" element={<Gtech />} />
          {/* <Route path="aboutus" element={<AboutUs />} /> */}
          {/* <Route path="event-management" element={<EventManagement />} /> */}
          {/* <Route path="fmcg" element={<FMCG />} /> */}
          {/* <Route path="gallery" element={<Gallery />} /> */}
          {/* <Route path="contact" element={<ContactUs />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
