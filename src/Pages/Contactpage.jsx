import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaSpinner } from "react-icons/fa"; // Import spinner icon

// Components
import Contact from "../components/Contact/Contact";
import ContactForm from "../components/ContactForm/ContactForm";

const Contactpage = () => {
  return (
    <div>
      <Contact />
      <ContactForm />
    </div>
  );
};

export default Contactpage;
