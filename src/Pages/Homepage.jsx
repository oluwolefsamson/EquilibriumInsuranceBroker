import React from "react";

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
import BoardMembers from "../components/BoardMembers/BoardMembers.jsx";

const Homepage = () => {
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Hero />
      <BrandsLogo />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <BusinessOutlook />
      <Testimonial />
      <Faq />
      <BoardMembers />
      <TeamSecond />
      <Cta />
    </div>
  );
};

export default Homepage;
