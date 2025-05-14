import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Gtech from './pages/Gtech'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Example routes, replace with your actual components */}
        {/* <Route path="/aboutus" element={<AboutUs />} /> */}
        <Route path="/gtech" element={<Gtech />} />
        {/* <Route path="/event-management" element={<EventManagement />} /> */}
        {/* <Route path="/fmcg" element={<FMCG />} /> */}
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        {/* <Route path="/contact" element={<ContactUs />} /> */}
      </Routes>
    </Router>
  )
}

export default App