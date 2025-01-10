import React from "react";
import aboutImage from "../../assets/website/aboutImg.jpg"; // Replace with the appropriate image path
import { FaTrophy } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import GradientBackground from "../GradientBackground";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Section: Text Content */}
          <div className="md:w-1/2">
            <h1 className="my-8 border-l-8  border-primary/50 py-2 pl-2 text-3xl font-bold text-blue-600  dark:text-white">
              About Us
            </h1>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
              Equilibrium Insurance Broker (EIB) is a liability company
              incorporated on 18th July 2022, with an authorized share capital
              of N5 Million, as prescribed by the Insurance Act of 2003. The
              professional indemnity of N10 Million is in place to protect the
              liability of the firm and the interest of clients against loss or
              damage that may arise.
            </p>
            <div className="text-start mt-4">
              <a
                href="#contact"
                className="inline-block bg-institution text-white py-2 px-5 rounded-lg text-md font-semibold hover:bg-secondary transition-colors duration-300"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="md:w-1/2">
            <img
              src={aboutImage}
              alt="Equilibrium Insurance"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-400 to-green-300 p-8 rounded-xl shadow-xl text-blue-600  dark:text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-center ">
            Our Mission
          </h3>
          <p className="text-lg text-center mb-6 text-white">
            Our mission is to provide unparalleled insurance solutions that meet
            the diverse needs of our clients. We strive to offer services that
            are transparent, accessible, and reliable, ensuring that every
            customer’s needs are met with professionalism and care.
          </p>
        </div>

        {/* Our Values Section */}
        <div className="mt-16">
          <GradientBackground />
          <h1 className="my-8 border-l-8  border-primary/50 py-2 pl-2 text-3xl font-bold text-blue-600  dark:text-white">
            Our Core Values
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1: Excellence */}
            <div className="text-center bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-trophy text-2xl">
                  <FaTrophy />
                </i>
              </div>

              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Excellence
              </h4>
              <p className="text-md text-gray-600">
                We strive for excellence in everything we do, ensuring
                high-quality service and outstanding results for our clients.
              </p>
            </div>
            {/* Value 2: Professionalism */}
            <div className="text-center bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-briefcase text-2xl">
                  <FaBriefcase />
                </i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Professionalism
              </h4>
              <p className="text-md text-gray-600">
                We maintain the highest standards of professionalism, building
                trust and providing reliable services to all our clients.
              </p>
            </div>
            {/* Value 3: Accountability */}
            <div className="text-center bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-check-circle text-2xl">
                  <FaClipboardCheck />
                </i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Accountability
              </h4>
              <p className="text-md text-gray-600">
                We take responsibility for our actions and decisions, ensuring
                full accountability in delivering exceptional results.
              </p>
            </div>
            {/* Value 4: Customer Focus */}
            <div className="text-center bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-2xl">
                  <FaUsers />
                </i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Customer Focus
              </h4>
              <p className="text-md text-gray-600">
                Our clients are at the core of everything we do. We prioritize
                their needs, providing tailored solutions that exceed
                expectations.
              </p>
            </div>
            {/* Value 5: Innovation */}
            <div className="text-center bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-lightbulb text-2xl">
                  <FaLightbulb />
                </i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Innovation
              </h4>
              <p className="text-md text-gray-600">
                We embrace new ideas and creative solutions, continuously
                evolving to meet the challenges of an ever-changing industry.
              </p>
            </div>
            {/* Value 6: Team Work */}
            <div className="text-center bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users-cog text-2xl">
                  <FaHandsHelping />
                </i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Team Work
              </h4>
              <p className="text-md text-gray-600">
                We work collaboratively as a team, supporting each other to
                achieve the best results and drive continuous improvement.
              </p>
            </div>
          </div>

          {/* Call to Action Button */}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg mb-6">
            Ready to secure your future? Get in touch with us today and discover
            the best insurance options tailored to your needs.
          </p>
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block bg-institution text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-secondary transition-colors duration-300"
            >
              Get in Touch with Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
