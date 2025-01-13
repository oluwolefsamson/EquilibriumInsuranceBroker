import React from "react";
import Brand1 from "../../assets/brands/1.png";
import Brand2 from "../../assets/brands/2.png";
import Brand3 from "../../assets/brands/3.png";
import Brand4 from "../../assets/brands/4.jpg";
import Brand5 from "../../assets/brands/5.png";

const BrandsLogo = () => {
  return (
    <div className="container pb-8 pt-8 sm:pt-2 dark:bg-gray-800 sm:mt-0">
      <div className="py-3 md:px-32 flex flex-wrap items-center justify-evenly gap-6">
        <img
          src={Brand1}
          alt="Brand 1"
          className="lg:w-[100px] md:w-[80px] sm:w-[60px] w-[50px]" // Improved width for responsiveness
        />
        <img
          src={Brand4}
          alt="Brand 4"
          className="lg:w-[100px] lg:h-[50px] md:w-[80px] sm:w-[60px] w-[50px]"
        />
        <img
          src={Brand2}
          alt="Brand 2"
          className="lg:w-[100px] md:w-[80px] sm:w-[60px] w-[50px]"
        />
        <img
          src={Brand5}
          alt="Brand 5"
          className="lg:w-[100px] md:w-[80px] sm:w-[60px] w-[50px]"
        />
        <img
          src={Brand3}
          alt="Brand 3"
          className="lg:w-[100px] md:w-[80px] sm:w-[50px] w-[40px]"
        />
      </div>
    </div>
  );
};

export default BrandsLogo;
