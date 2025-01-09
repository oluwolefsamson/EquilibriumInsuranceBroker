import { useState } from "react";
import outlook from "../../assets/website/businessOutlook.jpg";
import outlook2 from "../../assets/website/outlookImg.jpg";
import GradientBackground from "../GradientBackground";

export default function Example() {
  const [isImageLoaded1, setIsImageLoaded1] = useState(false);
  const [isImageLoaded2, setIsImageLoaded2] = useState(false);

  // Handle image load for both images
  const handleImageLoad1 = () => setIsImageLoaded1(true);
  const handleImageLoad2 = () => setIsImageLoaded2(true);

  return (
    <div className="relative isolate overflow-hidden dark:bg-gray-950 dark:text-white duration-300 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      {/* Header */}

      <div className="pb-12 text-center space-y-3">
        <h1
          data-aos="fade-up"
          className="text-3xl font-semibold sm:text-3xl text-blue-600  dark:text-white"
        >
          Our Business Outlook
        </h1>
        <p
          data-aos="fade-up"
          className="text-sm text-gray-600 dark:text-gray-400"
        >
          We are committed to delivering exceptional insurance and consultancy
          services tailored to individual and business needs.
        </p>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden"></div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 lg:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start ">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"></div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          {/* Skeleton Loader for Image 1 */}
          {!isImageLoaded1 && (
            <div className="w-[48rem] sm:w-[57rem] h-[auto] bg-gray-200 animate-pulse rounded-md shadow-xl ring-1 ring-gray-400/10"></div>
          )}
          <img
            alt=""
            src={outlook2}
            onLoad={handleImageLoad1}
            className={`w-[48rem] sm:w-[57rem] bg-gray-900 shadow-xl ring-1 ring-gray-400/10 transition-opacity duration-500 ${
              isImageLoaded1 ? "opacity-100" : "opacity-0"
            } hidden sm:block`} // 'hidden sm:block' hides the image on mobile and shows on small screens and larger
          />
        </div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-[-50px]">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 lg:max-w-lg">
              <div className="flex justify-center">
                {/* Skeleton Loader for Image 2 */}
                {!isImageLoaded2 && (
                  <div className="w-32 h-32 rounded-full bg-gray-200 animate-pulse"></div>
                )}
                <img
                  src={outlook}
                  alt=""
                  onLoad={handleImageLoad2}
                  className={`w-90 h-[400px] rounded-full transition-opacity duration-500 ${
                    isImageLoaded2 ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ borderRadius: "50%" }}
                />
              </div>{" "}
              <div className="border-l-8 border-institution/50 pl-4">
                {" "}
                <p className="py-4  text-gray-600 dark:text-gray-400">
                  We are dedicated to providing top-notch insurance solutions
                  tailored to meet diverse client needs. With a focus on
                  innovation, reliability, and customer satisfaction, our
                  services span risk management, claim administration, retail
                  marketing, and comprehensive insurance products. Our
                  commitment is to empower clients with secure and seamless
                  insurance experiences.
                </p>{" "}
                <div className="text-start mt-4">
                  <a
                    href="#contact"
                    className="inline-block bg-institution text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-secondary transition-colors duration-300"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
