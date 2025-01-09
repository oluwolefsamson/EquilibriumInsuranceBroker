import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaSpinner } from "react-icons/fa"; // Import spinner icon

// Components
import Services from "../components/Services/Services.jsx";
import ChooseUs from "../components/ChooseUs/ChooseUs.jsx";

const Servicepage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data (or loading components)
    const timer = setTimeout(() => setLoading(false), 2000); // Set a timeout for 2 seconds
    return () => clearTimeout(timer); // Clean up timeout on unmount
  }, []);

  return (
    <div className="py-[20px]">
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <div className="flex items-center space-x-2">
            <FaSpinner className="animate-spin text-gray-700 dark:text-gray-300 text-3xl" />
            <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Loading, please wait...
            </div>
          </div>
          {/* Skeleton loaders for Services and ChooseUs components */}
          <div className="w-3/4 md:w-1/2 space-y-4">
            <Skeleton height={200} className="mb-4" />
            <Skeleton height={300} />
          </div>
        </div>
      ) : (
        <>
          <Services />
          <ChooseUs />
        </>
      )}
    </div>
  );
};

export default Servicepage;
