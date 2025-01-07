import React from "react";
import {
  FaHome,
  FaCar,
  FaUser,
  FaMedkit,
  FaBriefcase,
  FaHandsHelping,
} from "react-icons/fa";

const servicesData = [
  {
    name: "Personal Insurance",
    icon: <FaUser className="text-4xl text-primary" />,
    description:
      "Equilibrium Insurance Brokerage offers a wide range of personal insurance solutions to protect individuals and families from unexpected events. Our offerings include home insurance, auto insurance, life insurance, health insurance, and personal liability coverage.",
    aosDelay: "0",
  },
  {
    name: "Commercial Insurance",
    icon: <FaBriefcase className="text-4xl text-primary" />,
    description:
      "We specialize in assisting businesses of all sizes in managing their risk exposures. Our commercial insurance services cover areas such as property insurance, general liability insurance, workers' compensation insurance, professional liability insurance, and business interruption insurance.",
    aosDelay: "300",
  },
  {
    name: "Risk Assessment and Analysis",
    icon: <FaHandsHelping className="text-4xl text-primary" />,
    description:
      "Equilibrium Insurance Brokerage conducts thorough risk assessments and analysis for clients to identify potential vulnerabilities and develop tailored risk management strategies. We assist in evaluating existing insurance coverage and recommending adjustments to ensure comprehensive protection.",
    aosDelay: "500",
  },
  {
    name: "Claims Assistance",
    icon: <FaHome className="text-4xl text-primary" />,
    description:
      "We provide dedicated support to our clients throughout the claims process, acting as their advocate when filing insurance claims. Our team works closely with insurance providers to expedite claim settlements and ensure fair compensation for losses.",
    aosDelay: "700",
  },
  {
    name: "Insurance Consulting",
    icon: <FaMedkit className="text-4xl text-primary" />,
    description:
      "Equilibrium Insurance Brokerage offers professional insurance consulting services for individuals and businesses seeking expert advice on risk management, coverage optimization, and insurance program design. Our consultants work closely with clients to develop strategic insurance plans aligned with their unique goals and objectives.",
    aosDelay: "900",
  },
  {
    name: "Client Relationship Management",
    icon: <FaHandsHelping className="text-4xl text-primary" />,
    description:
      "We prioritize building long-term relationships with our clients based on trust, transparency, and exceptional service. Our team is committed to understanding each client's evolving needs, providing ongoing support, and reviewing insurance programs periodically to accommodate changes in circumstances.",
    aosDelay: "1100",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Insurance Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              At Equilibrium Insurance Brokerage, we offer tailored insurance
              solutions to protect your personal and business assets.
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {servicesData.map((service) => (
              <div
                key={service.name}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{service.icon}</div>
                <h1 className="text-lg font-semibold">{service.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="1300"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button className="primary-btn">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
