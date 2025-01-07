import React from "react";
import hero1 from "../../assets/website/hero1.jpg";
import hero2 from "../../assets/website/hero2.jpg";

const Hero = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300 py-5">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
          {/* Text section */}
          <div className="space-y-5 order-1 sm:order-1 xl:pr-40">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold w-full"
              style={{ lineHeight: 1.2 }}
            >
              Secure Your Future with{" "}
              <span className="text-primary">Equilibrium Insurance</span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="paragraphText"
            >
              At Equilibrium Insurance Broker Nig Ltd, we specialize in offering
              comprehensive and personalized insurance solutions. Whether it's
              for your health, property, or business, we've got you covered with
              tailored policies that give you peace of mind.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn"
            >
              Explore Our Services
            </button>
          </div>

          {/* Image section */}
          <div data-aos="zoom-in" className="order-2 sm:order-2">
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              <div className="flex items-center justify-center py-2">
                {/* First image (row) */}
                <div className="relative sm:w-[430px]">
                  <img
                    src={hero1}
                    alt="Equilibrium Insurance"
                    className="w-[320px] lg:h-[500px] md:ml-[80px] pr-1.5"
                    style={{
                      borderRadius: "0px 0px 10px 10px", // Correct syntax with space between values
                    }}
                  />
                </div>
                {/* Last two images (column) */}
                <div className="flex flex-col gap-2 sm:items-start">
                  {/* Second image */}
                  <div className="relative sm:w-[430px]">
                    <img
                      src={hero2}
                      alt="Equilibrium Insurance"
                      className="w-[300px] rounded"
                    />
                  </div>
                  {/* Third image */}
                  <div className="relative sm:w-[430px] ">
                    <img
                      src={hero2}
                      alt="Equilibrium Insurance"
                      className="w-[300px] rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
