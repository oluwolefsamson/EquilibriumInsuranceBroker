import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

// Import required modules
import { EffectCards } from "swiper/modules";

const Brochure = () => {
  const handleDownload = () => {
    // Replace with the URL of your brochure file
    const brochureUrl = "/EquilibriumInsuranceBrochure.pdf";
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = ""; // Specify the downloaded file name
    link.click();
  };

  return (
    <div className="bg-white dark:bg-gray-950 dark:text-white h-full">
      <div className="container mx-auto py-[100px] px-6 flex flex-col lg:flex-row w-full items-center justify-between gap-8">
        {/* Left Side: Business Overview Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Business Overview
          </h1>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Equilibrum Insurance Brokerage is a leading independent insurance
            brokerage firm that specializes in providing comprehensive insurance
            solutions to individuals, families, and businesses. We are dedicated
            to helping our clients achieve financial protection and peace of
            mind through personalized insurance strategies tailored to their
            unique needs. With a team of experienced professionals and a vast
            network of insurance providers, we strive to find the best coverage
            options at competitive prices.
          </p>
          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-transform duration-300 ease-in-out relative group overflow-hidden"
          >
            <span className="absolute inset-0 bg-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            <span className="relative z-10">Download Brochure</span>
          </button>
        </div>

        {/* Right Side: Swiper Component */}
        <div className="flex-1 flex items-center justify-center">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper w-64 h-96"
          >
            <SwiperSlide className="flex items-center justify-center bg-blue-500 text-white text-2xl font-bold rounded-2xl shadow-lg">
              <img src="/bro1.jpg" alt="" className="h-full" />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center bg-green-500 text-white text-2xl font-bold rounded-2xl shadow-lg">
              <img src="/bro2.jpg" alt="" className="h-full" />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center bg-red-500 text-white text-2xl font-bold rounded-2xl shadow-lg">
              <img src="/bro3.jpg" alt="" className="h-full" />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center bg-yellow-500 text-white text-2xl font-bold rounded-2xl shadow-lg">
              <img src="/bro4.jpg" alt="" className="h-full" />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center bg-yellow-500 text-white text-2xl font-bold rounded-2xl shadow-lg">
              <img src="/bro5.jpg" alt="" className="h-full" />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center bg-yellow-500 text-white text-2xl font-bold rounded-2xl shadow-lg">
              <img src="/bro6.jpg" alt="" className="h-full" />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center bg-yellow-500 text-white text-2xl font-bold rounded-2xl shadow-lg">
              <img src="/bro7.jpg" alt="" className="h-full" />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center bg-yellow-500 text-white text-2xl font-bold rounded-2xl shadow-lg">
              <img src="/bro8.jpg" alt="" className="h-full" />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center bg-yellow-500 text-white text-2xl font-bold rounded-2xl shadow-lg">
              <img src="/bro9.jpg" alt="" className="h-full" />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center bg-yellow-500 text-white text-2xl font-bold rounded-2xl shadow-lg">
              <img src="/bro10.jpg" alt="" className="h-full" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Brochure;
