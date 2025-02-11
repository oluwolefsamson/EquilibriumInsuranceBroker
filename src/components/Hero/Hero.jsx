"use client";

import { useState, useEffect } from "react";
import hero1 from "../../assets/website/hero1.jpg";
import hero2 from "../../assets/website/hero2.jpg";
import hero4 from "../../assets/website/hero4.jpg";

const sliderImages = [
  { type: "image", src: hero1 },
  { type: "image", src: hero2 },
  { type: "image", src: hero4 },
  { type: "color", color: "black" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative md:h-[850px] lg:h-[900px] w-full overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {sliderImages.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background:
                slide.type === "image" ? `url(${slide.src})` : slide.color,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              width: "100%",
            }}
          >
            {slide.type === "image" && !loaded && (
              <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
            )}
            {slide.type === "image" && (
              <img
                src={slide.src}
                alt="Slide"
                className="w-full h-full object-cover hidden"
                loading="lazy"
                onLoad={() => setLoaded(true)}
              />
            )}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-20 md:py-48 lg:py-56 text-center">
          <h1 className="text-5xl font-bold tracking-tight lg:leading-normal sm sm:text-7xl text-gray-100 dark:text-white">
            Secure Your Future with
            <span className="text-green-300 dark:text-gradient ">
              Equilibrium Insurance Broker
            </span>
          </h1>
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
              className="text-sm/6 font-semibold text-gray-200"
            >
              Learn More <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-5 bg-black bg-opacity-30"></div>
    </div>
  );
}
