import React from "react";
import { FaMedkit } from "react-icons/fa";

const InsuranceConsultingComponent = () => {
  return (
    <div className="bg-white dark:bg-gray-950 dark:text-white h-full">
      <div className="container mx-auto py-[100px] px-6 flex flex-col lg:flex-row w-full items-start justify-between gap-8">
        {/* Left Side: Insurance Consulting Content */}
        <div className="flex-1 text-left">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 ">
            Insurance Consulting
          </h1>
          <div className="flex items-start gap-2 mb-4">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              At Equilibrium Insurance Brokerage, we offer expert insurance
              consulting services to both individuals and businesses. Our
              consultants specialize in risk management, coverage optimization,
              and designing insurance programs tailored to your specific needs.
              We work closely with our clients to understand their unique
              objectives and develop strategic insurance plans that align with
              their goals. Whether you are looking to optimize your existing
              coverage or need help designing a new insurance program, our
              experienced consultants provide the insights and advice necessary
              to ensure comprehensive protection and risk mitigation.
            </p>
          </div>
        </div>

        {/* Right Side: Static Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/bro1.jpg" // Replace with the actual image path
            alt="Brochure"
            className="w-full max-w-md h-auto object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default InsuranceConsultingComponent;
