import React from "react";
import {
  FaRegStar,
  FaNetworkWired,
  FaBook,
  FaCheckCircle,
  FaGraduationCap,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Personalized Approach",
      description:
        "We believe in delivering tailored solutions by understanding your unique needs, preferences, and risk tolerance. Our team goes beyond cookie-cutter insurance policies to create personalized coverage plans that align perfectly with your goals.",
      icon: <FaRegStar />,
    },
    {
      title: "Extensive Network",
      description:
        "With access to an extensive network of reputable insurance providers, we offer a wide range of coverage options at competitive prices. By leveraging our strong relationships, we negotiate favorable terms to find the best-suited policies for you.",
      icon: <FaNetworkWired />,
    },
    {
      title: "Expertise and Experience",
      description:
        "Our team of seasoned professionals possesses in-depth industry knowledge and experience. Staying up-to-date with the latest trends, regulations, and best practices, we provide you with informed advice and reliable service every step of the way.",
      icon: <FaBook />,
    },
    {
      title: "Claims Advocacy",
      description:
        "We understand the importance of effective claims management. Acting as your dedicated advocate, we ensure your claims are handled promptly, professionally, and with the utmost care, giving you peace of mind when you need it most.",
      icon: <FaCheckCircle />,
    },
    {
      title: "Commitment to Client Education",
      description:
        "We empower our clients through knowledge. From offering educational resources and workshops to personalized consultations, we help you make informed decisions about your insurance needs and navigate the complexities of the industry with confidence.",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto text-center ">
        <h1 className="py-3 text-4xl font-bold tracking-tight dark:text-white sm:text-5xl text-blue-600 text-center">
          Why Choose Us
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-xl mx-auto text-center">
          At Equilibrium Insurance Brokerage, we pride ourselves on being more
          than just an insurance provider. Here's why you should choose us:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white  shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
              data-aos="fade-up"
            >
              <div className="text-blue-600 dark:text-blue-400 text-5xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900   mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-md">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
