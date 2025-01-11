import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component imports
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading"; // Loading component

// Lazy loading your pages
const Homepage = React.lazy(() => import("./Pages/Homepage"));
const Aboutpage = React.lazy(() => import("./Pages/Aboutpage"));
const Contactpage = React.lazy(() => import("./Pages/Contactpage"));
const Brochurepage = React.lazy(() => import("./Pages/Brochurepage"));
const Servicepage = React.lazy(() => import("./Pages/Servicepage"));
const ClaimsAssistance = React.lazy(() =>
  import("../src/Pages/InsuranceServices/ClaimsAssistance")
);
const ClientRelationshipManagement = React.lazy(() =>
  import("../src/Pages/InsuranceServices/ClientRelationshipManagement")
);
const CommercialInsurance = React.lazy(() =>
  import("../src/Pages/InsuranceServices/CommercialInsurance")
);
const InsuranceConsulting = React.lazy(() =>
  import("../src/Pages/InsuranceServices/InsuranceConsulting")
);
const PersonalInsurance = React.lazy(() =>
  import("../src/Pages/InsuranceServices/PersonalInsurance")
);
const RiskAssesmentAndAnalysis = React.lazy(() =>
  import("../src/Pages/InsuranceServices/RiskAssesmentAndAnalysis")
);

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set isLoaded to true once the app has finished loading
    setIsLoaded(true);
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
        {/* Conditionally render Navbar and Footer based on loading state */}
        {isLoaded && <Navbar />}

        {/* Wrapping Routes in Suspense with Loading */}
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route path="/brochure" element={<Brochurepage />} />
            <Route path="/services" element={<Servicepage />} />
            {/* Services Routes */}
            <Route path="/claims-assistance" element={<ClaimsAssistance />} />
            <Route
              path="/client-relationship-management"
              element={<ClientRelationshipManagement />}
            />
            <Route
              path="/commercial-insurance"
              element={<CommercialInsurance />}
            />
            <Route
              path="/insurance-consulting"
              element={<InsuranceConsulting />}
            />
            <Route path="/personal-insurance" element={<PersonalInsurance />} />
            <Route
              path="/risk-assesment"
              element={<RiskAssesmentAndAnalysis />}
            />
            {/* Fallback Page */}
            <Route path="*" element={<Homepage />} />
          </Routes>
        </Suspense>

        {/* Conditionally render Footer after loading */}
        {isLoaded && <Footer />}
      </div>
    </Router>
  );
};

export default App;
