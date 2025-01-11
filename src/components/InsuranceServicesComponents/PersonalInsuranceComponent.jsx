import React from "react";
import { FaUser } from "react-icons/fa";

const PersonalInsuranceComponent = () => {
  return (
    <div className="bg-white dark:bg-gray-950 dark:text-white h-full">
      <div className="container mx-auto py-[100px] px-6 flex flex-col lg:flex-row w-full items-start justify-between gap-8">
        {/* Left Side: Business Overview Content */}
        <div className="flex-1 text-left">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 pl-2.5">
            Personal Insurance
          </h1>
          <div className="flex items-start gap-2 mb-4">
            <FaUser className="text-4xl text-primary" />
            <p className="text-gray-600 dark:text-gray-400">
              Equilibrium Insurance Brokerage offers a comprehensive range of
              personal insurance solutions designed to safeguard individuals and
              families from Life&rsquo;s unexpected challenges. Whether you are
              looking to protect your home, vehicle, health, or financial
              well-being, we have a variety of coverage options tailored to meet
              your unique needs. Our home insurance policies ensure your
              property and belongings are covered from damage, theft, or natural
              disasters. With our auto insurance plans, you can drive with
              confidence, knowing that your car and liabilities are adequately
              protected. Life insurance provides your loved ones with financial
              security in the event of an unforeseen tragedy, while our health
              insurance options offer you access to essential medical care and
              treatments.
              <br /> <br />
              Additionally, our personal liability coverage helps you manage
              legal and financial risks in the event of accidents or injuries
              caused by you. At Equilibrium, we work closely with you to provide
              personalized, cost-effective solutions to ensure your peace of
              mind and protection in every aspect of your life.
            </p>
          </div>
        </div>

        {/* Right Side: Static Image with Lazy Loading */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/personal.jpg" // Replace with the actual image path
            alt="Personal Insurance"
            className="w-full max-w-md lg:h-[80vh] sm:h-[50vh] object-cover rounded shadow-lg"
            loading="lazy" // Lazy load the image
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInsuranceComponent;
