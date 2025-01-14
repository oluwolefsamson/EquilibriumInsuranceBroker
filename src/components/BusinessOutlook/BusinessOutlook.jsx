import { useState } from "react";
import outlook from "../../assets/website/businessOutlook.jpg";

export default function Example() {
  const [isImageLoaded1, setIsImageLoaded1] = useState(false);
  const [isImageLoaded2, setIsImageLoaded2] = useState(false);

  const handleImageLoad1 = () => setIsImageLoaded1(true);
  const handleImageLoad2 = () => setIsImageLoaded2(true);

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
      {/* Header Section */}
      <div className="text-center space-y-4 mb-12 sm:mb-16">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight dark:text-white"
        >
          Our Business Outlook
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300"
        >
          Delivering exceptional insurance and consultancy services tailored to
          meet both individual and business needs, with a focus on innovation,
          reliability, and satisfaction.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        {/* Left Column */}
        <div className="space-y-6 sm:space-y-8">
          <h2
            data-aos="fade-right"
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-gray-200"
          >
            Why Choose Us
          </h2>
          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 dark:text-gray-400"
          >
            We are dedicated to providing top-notch insurance solutions tailored
            to diverse client needs. Our services span risk management, claim
            administration, retail marketing, and comprehensive insurance
            products. Trust us for reliability, innovation, and outstanding
            customer support.
          </p>
          <a
            data-aos="fade-right"
            data-aos-delay="200"
            href="/services"
            className="inline-block bg-blue-600 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-sm sm:text-lg font-medium shadow-md hover:bg-blue-700 transition duration-300"
          >
            Explore Our Services
          </a>
        </div>

        {/* Right Column */}
        <div
          data-aos="fade-left"
          className="flex justify-center items-center relative"
        >
          {!isImageLoaded1 && (
            <div className="absolute inset-0 w-full h-full bg-gray-200 animate-pulse rounded-lg"></div>
          )}
          <img
            src={outlook}
            alt="Business Visual"
            onLoad={handleImageLoad1}
            className={`rounded-lg shadow-lg transition-opacity duration-500 w-full max-w-lg object-cover ${
              isImageLoaded1 ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      {/* Additional Content */}
    </div>
  );
}
