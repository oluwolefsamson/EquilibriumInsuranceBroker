import React from "react";
import Brand1 from "../../assets/brands/1.png";
import Brand2 from "../../assets/brands/2.png";
import Brand3 from "../../assets/brands/3.png";
import Brand4 from "../../assets/brands/4.jpg";
import Brand5 from "../../assets/brands/5.png";

const BrandsLogo = () => {
  return (
    <div
      className="w-full bg-black dark:bg-gray-800 py-8 "
      style={{
        borderTop: "3px solid green",
        borderBottom: "3px solid green",
      }}
    >
      <div className="flex flex-wrap items-center justify-center gap-6 px-4 max-w-screen-xl mx-auto">
        <img
          src={Brand1}
          alt="Brand 1"
          className="w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] transition-transform duration-300 hover:scale-105"
        />
        <img
          src={Brand4}
          alt="Brand 4"
          className="w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] h-auto transition-transform duration-300 hover:scale-105"
        />
        <img
          src={Brand2}
          alt="Brand 2"
          className="w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] transition-transform duration-300 hover:scale-105"
        />
        <img
          src={Brand5}
          alt="Brand 5"
          className="w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] transition-transform duration-300 hover:scale-105"
        />
        <img
          src={Brand3}
          alt="Brand 3"
          className="w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default BrandsLogo;
