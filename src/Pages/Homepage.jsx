import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Components
import Hero from "../components/Hero/Hero.jsx";
import AboutUs from "../components/About/AboutUs.jsx";
import Services from "../components/Services/Services.jsx";
import WhyChooseUs from "../components/ChooseUs/ChooseUs.jsx";
import Testimonial from "../components/Testimonial/Testimonial.jsx";
import Faq from "../components/Faq/Faq.jsx";
import TeamSecond from "../components/TeamSecond/TeamSecond.jsx";
import Cta from "../components/Cta/Cta.jsx";
import BrandsLogo from "../components/BrandsLogo/BrandsLogo.jsx";
import BusinessOutlook from "../components/BusinessOutlook/BusinessOutlook.jsx";

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Loading, please wait...
          </div>
          <div className="w-1/2">
            <Skeleton height={50} className="mb-4" />
            <Skeleton height={200} />
            <Skeleton height={100} className="my-4" />
          </div>
        </div>
      ) : (
        // Actual components after loading
        <>
          <Hero />
          <BrandsLogo />
          <AboutUs />
          <Services />
          <WhyChooseUs />
          <BusinessOutlook />
          <Testimonial />
          <Faq />
          <TeamSecond />
          <Cta />
        </>
      )}
    </div>
  );
};

export default Homepage;
