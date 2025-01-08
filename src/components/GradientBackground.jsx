// src/components/GradientBackground.jsx

import React from "react";

const GradientBackground = () => {
  return (
    <div
      className="absolute z-0 w-[800px] h-[900px] rounded-[50%] blur-lg lg:block hidden"
      style={{
        background:
          "linear-gradient(to bottom, rgba(34, 197, 94, 0.6), rgba(59, 130, 246, 0.6))",
        opacity: 0.4,
        transform: "none", // Ensure no scaling
      }}
    ></div>
  );
};

export default GradientBackground;
