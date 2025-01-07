"use client";

import { useState, useEffect } from "react";
import hero1 from "../../assets/website/hero1.jpg";
import hero2 from "../../assets/website/hero2.jpg";
import hero3 from "../../assets/website/hero3.jpg";
import hero4 from "../../assets/website/hero4.jpg";

const sliderImages = [hero1, hero2, hero4];

export default function Example() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[900px] w-full overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-30" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center ">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Secure Your Future with Equilibrium Insurance Broker Nig Ltd.
          </h1>
          <p className="mt-8 text-lg font-medium sm:text-xl/8">
            At Equilibrium Insurance Broker Nig Ltd, we specialize in offering
            comprehensive and personalized insurance solutions. Whether it's for
            your health, property, or business, we've got you covered with
            tailored policies that give you peace of mind.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a href="#" className="text-sm/6 font-semibold text-gray-200 ">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-5 bg-black bg-opacity-30"></div>
    </div>
  );
}
