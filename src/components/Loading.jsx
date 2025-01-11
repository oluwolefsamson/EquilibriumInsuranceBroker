import React from "react";
import logo from "../assets/website/logo.jpg"; // Replace with the path to your logo

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-black">
      <img
        src={logo}
        alt="Loading..."
        className="w-20 h-20 animate-spin"
        style={{ animationDuration: "2s" }} // Customize spin duration
      />
    </div>
  );
};

export default Loading;
