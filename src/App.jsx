import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BrandsLogo from "./components/BrandsLogo/BrandsLogo.jsx";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import BlogsComp from "./components/Blogs/BlogsComp.jsx";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/About/AboutUs.jsx";
import BusinessOutlook from "./components/BusinessOutlook/BusinessOutlook.jsx";
import Cta from "./components/Cta/Cta.jsx";
import Faq from "./components/Faq/Faq.jsx";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <BrandsLogo />
      <AboutUs />
      <Services />
      <BusinessOutlook />
      <Testimonial />
      <Faq />
      <Cta />
      {/* <BlogsComp /> */}
      <Footer />
    </div>
  );
};

export default App;
