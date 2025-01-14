import React from "react";
import { FaHandsHelping } from "react-icons/fa";

const RiskAnalysisAndAssesmentComponent = () => {
  return (
    <div className="bg-white dark:bg-gray-950 dark:text-white h-full">
      <div className="container mx-auto py-[100px] px-6 flex flex-col lg:flex-row w-full items-start justify-between gap-8">
        {/* Left Side: Business Overview Content */}
        <div className="flex-1 text-left">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 ">
            Risk Assessment and Analysis
          </h1>
          <div className="flex items-start gap-2 mb-4">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              At Equilibrium Insurance Brokerage, we specialize in conducting
              thorough risk assessments and analysis to identify potential
              vulnerabilities within your business or personal coverage. Our
              team works closely with you to assess your existing insurance
              coverage, evaluating gaps and recommending necessary adjustments
              to ensure comprehensive protection. We help clients understand the
              risks they may face and develop tailored risk management
              strategies that mitigate these risks, ensuring that they are
              adequately protected against unforeseen events.
              <br />
              <br />
              Whether it is property, liability, or other areas of risk, our
              goal is to offer peace of mind by providing proactive solutions
              that address your unique needs. Trust us to help you safeguard
              your future with customized risk management strategies.
            </p>
          </div>
        </div>

        {/* Right Side: Static Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/risk.jpg" // Replace with the actual image path
            alt="Brochure"
            className="w-full max-w-md  lg:h-[65vh] sm:h-[50vh] object-cover rounded shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default RiskAnalysisAndAssesmentComponent;
