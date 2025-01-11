import React from "react";
import { FaBriefcase } from "react-icons/fa";

const CommercialInsuranceComponent = () => {
  return (
    <div className="bg-white dark:bg-gray-950 dark:text-white h-full">
      <div className="container mx-auto py-[100px] px-6 flex flex-col lg:flex-row w-full items-start justify-between gap-8">
        {/* Left Side: Business Overview Content */}
        <div className="flex-1 text-left">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 pl-2.5">
            Commercial Insurance
          </h1>
          <div className="flex items-start gap-2 mb-4">
            <FaBriefcase className="text-4xl text-primary" />
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Equilibrium Insurance Brokerage specializes in assisting
              businesses of all sizes in managing their risk exposures. Our
              comprehensive commercial insurance services cover a wide range of
              needs. From property insurance that protects your assets, to
              general liability insurance safeguarding you from third-party
              claims, we offer tailored coverage for every aspect of your
              business. Our workers' compensation insurance ensures your
              employees are covered in the event of workplace accidents, while
              our professional liability insurance protects your business
              against claims of negligence in your professional services.
              <br /> <br />
              Additionally, we provide business interruption insurance, ensuring
              your business can maintain financial stability during unforeseen
              events that may disrupt your operations. At Equilibrium, we work
              closely with each client to create a personalized risk management
              strategy that provides comprehensive protection and peace of mind.
            </p>
          </div>
        </div>

        {/* Right Side: Static Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/commercial.jpg" // Replace with the actual image path
            alt="Brochure"
            className="w-full max-w-md object-cover lg:h-[75vh] sm:h-[50vh] rounded shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CommercialInsuranceComponent;
