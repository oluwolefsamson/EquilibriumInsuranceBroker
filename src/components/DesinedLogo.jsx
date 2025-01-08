import React from "react";
import logoImg from "../assets/website/logo.jpg";

const DesignedLogo = () => {
  return (
    <div>
      <a href="#" className="flex items-center gap-3">
        <img
          src={logoImg}
          alt="Logo"
          className="w-10 h-10 md:w-8 md:h-8" // Reduce logo size on smaller screens
        />
        <span className="text-2xl font-bold text-green-400 md:text-xl">
          EQUILIBRIUM
          <p className="text-sm font-bold text-green-700 md:text-xs ">
            INSURANCE BROKER NIG LTD
          </p>
        </span>
      </a>
    </div>
  );
};

export default DesignedLogo;
