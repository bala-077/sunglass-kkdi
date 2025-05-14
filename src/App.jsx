import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainlayout from './layout/Mainlayout';
import Gtech from './pages/Gtech';
import EventManagement from './pages/EventManagement';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
        <Route index element={<Home/>}/>
          <Route path="gtech" element={<Gtech />} />
          <Route path="aboutus" element={<About/>} />
          <Route path="event-management" element={<EventManagement />} />
          <Route path="contact" element={<ContactUs/>} />
        </Route>
        </Routes>
    </Router>
  );
};

export default App;
