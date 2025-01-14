import React from "react";
import { FaHandsHelping } from "react-icons/fa";

const ClientsRelationshipManagementComponent = () => {
  return (
    <div className="bg-white dark:bg-gray-950 dark:text-white h-full">
      <div className="container mx-auto py-[100px] px-6 flex flex-col lg:flex-row w-full items-start justify-between gap-8">
        {/* Left Side: Client Relationship Management Content */}
        <div className="flex-1 text-left">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 ">
            Client Relationship Management
          </h1>
          <div className="flex items-start gap-2 mb-4">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed  max-w-full lg:max-w-lg">
              At Equilibrium Insurance Brokerage, we prioritize building
              long-term relationships with our clients based on trust,
              transparency, and exceptional service. Our team is committed to
              understanding each client's evolving needs and providing ongoing
              support. We continuously review insurance programs to ensure they
              remain relevant and adjust coverage as circumstances change. Our
              approach ensures that our clients' needs are always met with
              personalized, timely, and effective service.
              <br />
              <br />
              In addition to our commitment to transparency, we offer a variety
              of tailored insurance solutions to suit diverse client needs. Our
              expert advisors guide clients through the complexities of coverage
              options, ensuring they receive the best protection for their
              unique situations. With our state-of-the-art tools and customer
              service-driven philosophy, we aim to make insurance easy,
              accessible, and affordable for all our clients.
            </p>
          </div>
        </div>

        {/* Right Side: Static Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/client.jpg" // Replace with the actual image path
            alt="Brochure"
            className="w-full max-w-md lg:h-[75vh] sm:h-[50vh] object-cover rounded shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientsRelationshipManagementComponent;
