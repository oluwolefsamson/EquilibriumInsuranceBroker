import React, { useState } from "react";
import { MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import contactImg from "../../assets/website/contactImg.jpg";

const Contact = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="w-full p-8 lg:py-[120px] flex flex-col items-center justify-center">
      <div className="flex flex-wrap items-center justify-between w-full max-w-screen-xl px-6">
        {/* Left Side */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <div data-aos="fade-left">
            <span className="text-2xl font-semibold text-institution">
              Easy to Contact us
            </span>
          </div>
          <span className="text-lg text-gray-600 dark:text-white">
            We are always ready to help by providing the best services for you.
            We believe a good place to live can make your life better.
          </span>

          <div className="flex flex-wrap gap-6 mt-6">
            {/* First Row */}
            <div className="flex flex-wrap gap-6 w-full sm:w-1/2 md:w-full">
              <div className="flex flex-col items-center bg-white p-4 border border-gray-300 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-1/2 md:w-auto">
                <div className="flex items-center gap-4">
                  <div className="flex justify-center items-center bg-lightBlue rounded-full p-2">
                    <MdCall size={25} color="green" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold dark:text-gray-700">
                      Call
                    </span>
                  </div>
                </div>
                <a href="">
                  <button className="w-full bg-lightBlue text-green-600 py-2 font-semibold hover:bg-green-600 hover:text-white transition-all">
                    Call Now
                  </button>
                </a>
              </div>

              <div className="flex flex-col items-center bg-white p-4 border border-gray-300 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-1/2 md:w-auto">
                <div className="flex items-center gap-4">
                  <div className="flex justify-center items-center bg-lightBlue rounded-full p-2">
                    <FaWhatsapp size={25} color="green" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold dark:text-gray-700">
                      Whatsapp
                    </span>
                  </div>
                </div>
                <a href="https://wa.link/xdcypy">
                  <button className="w-full bg-lightBlue text-green-600 py-2 font-semibold hover:bg-green-600 hover:text-white transition-all">
                    Chat Now
                  </button>
                </a>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-wrap gap-6 w-full sm:w-1/2 md:w-full">
              <div className="flex flex-col items-center bg-white p-4 border border-gray-300 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-1/2 md:w-auto">
                <div className="flex items-center gap-4">
                  <div className="flex justify-center items-center bg-lightBlue rounded-full p-2">
                    <BsInstagram size={25} color="green" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold dark:text-gray-700">
                      Instagram
                    </span>
                  </div>
                </div>
                <a href="https://www.instagram.com/equilibriuminsurancebroker/">
                  <button className="w-full text-green-600 py-2 font-semibold hover:bg-green-600 hover:text-white transition-all">
                    Send Message
                  </button>
                </a>
              </div>

              <div className="flex flex-col items-center bg-white p-4 border border-gray-300 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-1/2 md:w-auto">
                <div className="flex items-center gap-4">
                  <div className="flex justify-center items-center bg-lightBlue rounded-full p-2">
                    <BiLogoGmail size={25} color="green" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold dark:text-gray-700">
                      Gmail
                    </span>
                  </div>
                </div>
                <a href="mailto:equilibriuminsurancebroker@gmail.com">
                  <button className="w-full bg-lightBlue text-green-600 py-2 font-semibold hover:bg-green-600 hover:text-white transition-all">
                    Send Mail
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <div className="relative w-full h-full">
            {!imageLoaded && (
              <div className="animate-pulse bg-gray-300 rounded-md w-full lg:h-[500px] md:h-[800px] sm:h-[200px]" />
            )}
            <img
              src={contactImg}
              alt="Contact"
              onLoad={() => setImageLoaded(true)}
              className={`w-full lg:h-[500px] md:h-[800px] sm:h-[200px] object-cover rounded-md ${
                imageLoaded ? "block" : "hidden"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
