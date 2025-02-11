import React from "react";
import {
  FaHome,
  FaCar,
  FaUser,
  FaMedkit,
  FaBriefcase,
  FaHandsHelping,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const servicesData = [
  {
    name: "Personal Insurance",
    icon: <FaUser className="text-4xl text-primary" />,
    description:
      "Equilibrium Insurance Brokerage offers a wide range of personal insurance solutions to protect individuals and families from unexpected events. Our offerings include home insurance, auto insurance, life insurance, health insurance, and personal liability coverage.",
    route: "/personal-insurance",
    aosDelay: "0",
  },
  {
    name: "Commercial Insurance",
    icon: <FaBriefcase className="text-4xl text-primary" />,
    description:
      "We specialize in assisting businesses of all sizes in managing their risk exposures. Our commercial insurance services cover areas such as property insurance, general liability insurance, workers' compensation insurance, professional liability insurance, and business interruption insurance.",
    route: "/commercial-insurance",
    aosDelay: "300",
  },
  {
    name: "Risk Assessment and Analysis",
    icon: <FaHandsHelping className="text-4xl text-primary" />,
    description:
      "Equilibrium Insurance Brokerage conducts thorough risk assessments and analysis for clients to identify potential vulnerabilities and develop tailored risk management strategies. We assist in evaluating existing insurance coverage and recommending adjustments to ensure comprehensive protection.",
    route: "/risk-assesment",
    aosDelay: "500",
  },
  {
    name: "Claims Assistance",
    icon: <FaHome className="text-4xl text-primary" />,
    description:
      "We provide dedicated support to our clients throughout the claims process, acting as their advocate when filing insurance claims. Our team works closely with insurance providers to expedite claim settlements and ensure fair compensation for losses.",
    route: "/claims-assistance",
    aosDelay: "700",
  },
  {
    name: "Insurance Consulting",
    icon: <FaMedkit className="text-4xl text-primary" />,
    description:
      "Equilibrium Insurance Brokerage offers professional insurance consulting services for individuals and businesses seeking expert advice on risk management, coverage optimization, and insurance program design.",
    route: "/insurance-consulting",
    aosDelay: "900",
  },
  {
    name: "Client Relationship Management",
    icon: <FaHandsHelping className="text-4xl text-primary" />,
    description:
      "We prioritize building long-term relationships with our clients based on trust, transparency, and exceptional service. Our team is committed to understanding each client's evolving needs. ",
    route: "/client-relationship-management",
    aosDelay: "1100",
  },
];

const Services = () => {
  return (
    <>
      {/* Anchor for navigation */}
      <span id="services"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header Section */}
          <div className="py-12 text-center space-y-3">
            <h1 className=" text-4xl font-bold tracking-tight dark:text-white sm:text-5xl dark:border-institution/50 pl-2  text-blue-600 ">
              Explore Our Insurance Services
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-xl mx-auto text-center">
              At Equilibrium Insurance Brokerage, we offer tailored insurance
              solutions to protect your personal and business assets.
            </p>
          </div>

          {/* Services Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {servicesData.map((service) => (
              <div
                data-aos="zoom-in-down"
                key={service.name}
                className="card space-y-3 sm:space-y-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
              >
                {/* Service Icon */}
                <div className="w-16 h-16 bg-blue-100 mx-auto rounded-full flex items-center justify-center">
                  <i className="fas fa-check-circle text-2xl">{service.icon}</i>
                </div>

                {/* Service Name */}
                <h1 className="text-lg font-semibold text-gray-800 text-center">
                  {service.name}
                </h1>

                {/* Service Description */}
                <p className="text-md text-gray-600 text-center ">
                  {service.description}
                </p>

                {/* Read More Button */}
                <Link
                  to={service.route}
                  className="text-sm/6 font-semibold flex items-center justify-center text-blue-500 "
                >
                  Learn More <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
