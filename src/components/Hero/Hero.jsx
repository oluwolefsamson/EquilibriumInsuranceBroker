"use client";

import { useState, useEffect } from "react";
import hero1 from "../../assets/website/hero1.jpg";
import hero2 from "../../assets/website/hero2.jpg";
import hero4 from "../../assets/website/hero4.jpg";

// Add black as a color option to the sliderImages array
const sliderImages = [
  { type: "image", src: hero1 },
  { type: "image", src: hero2 },
  { type: "image", src: hero4 },
  { type: "color", color: "black" }, // Add black as a background
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative md:h-[850px] z-20 lg:h-[900px] w-full overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {sliderImages.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-40" : "opacity-0"
            }`}
            style={{
              background:
                slide.type === "image" ? `url(${slide.src})` : slide.color, // Use color for black slide
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%", // Ensure the image fills the container
              width: "100%", // Ensure the image spans the entire width
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-20 md:py-48 lg:py-56 text-center">
          <h1 className="text-5xl font-bold tracking-tight leading-none sm:text-7xl text-gray-100 dark:text-white">
            Secure Your Future with{" "}
            <span className="text-green-300 dark:text-gradient">
              Equilibrium Insurance
            </span>
          </h1>
          {/* Shortened and sharp text content */}
          <div className="mt-5 text-lg font-semibold sm:text-xl/8 text-dark bg-white bg-opacity-50 backdrop-blur-md p-6 rounded-md transition-all duration-1000 ease-in-out hover:backdrop-blur-[15px]">
            Get personalized insurance for your health, property, or business.
            We’ve got you covered.
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-institution px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get Started
            </a>
            <a
              href="/contact"
              className="text-sm/6 font-semibold text-gray-200 "
            >
              Learn More <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Overlay (with blur effect applied only to the background behind the text) */}
      <div className="absolute inset-0 z-5 bg-black bg-opacity-30"></div>
    </div>
  );
}
