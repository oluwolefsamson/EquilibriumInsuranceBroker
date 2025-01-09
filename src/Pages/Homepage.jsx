import React from "react";

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

// Component import

const Homepage = () => {
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      {/* <Navbar /> */}
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
      {/* <BlogsComp /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Homepage;
