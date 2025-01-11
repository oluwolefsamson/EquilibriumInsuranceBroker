import React from "react";
import { FaHome } from "react-icons/fa";

const ClaimAssistanceComponent = () => {
  return (
    <div className="bg-white dark:bg-gray-950 dark:text-white h-full">
      <div className="container mx-auto py-[100px] px-6 flex flex-col lg:flex-row w-full items-start justify-between gap-8">
        {/* Left Side: Claims Assistance Content */}
        <div className="flex-1 text-left">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 pl-2.5">
            Claims Assistance
          </h1>

          <div className="flex items-start gap-2 mb-4">
            <FaHome className="text-4xl text-primary" />
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              At Equilibrium Insurance Brokerage, we offer dedicated claims
              assistance to ensure that our clients receive the support they
              need throughout the claims process. Our experienced team acts as
              your advocate, working closely with insurance providers to
              expedite the settlement process. We aim to ensure that you receive
              fair compensation for your losses, whether it be property damage,
              injury, or any other insured event. With our expertise, we help
              simplify the complex claims process, allowing you to focus on what
              matters most during challenging times. Trust us to guide you every
              step of the way, ensuring that your claim is handled efficiently
              and fairly.
            </p>
          </div>
        </div>

        {/* Right Side: Static Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/claim.jpg" // Replace with the actual image path
            alt="Brochure"
            className="w-full max-w-md object-cover rounded h-[50vh]  shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ClaimAssistanceComponent;
