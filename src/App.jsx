import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component imports
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Homepage from "./Pages/Homepage";
import Aboutpage from "./Pages/Aboutpage";
import Contactpage from "./Pages/Contactpage";
import Brochurepage from "./Pages/Brochurepage";
import Servicepage from "./Pages/Servicepage";

const App = () => {
  return (
    <Router>
      <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/brochure" element={<Brochurepage />} />
          <Route path="/service" element={<Servicepage />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
