import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../Utils/accordion";
import faqImg from "../../assets/website/faq.png";
import GradientBackground from "../GradientBackground";

const Faq = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div>
      <GradientBackground />
      <section className="w-full py-[100px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-300">
        <div className="flex flex-col md:flex-row items-center justify-around gap-6 max-w-screen-xl mx-auto px-6">
          {/* Right Side - FAQ Accordion */}
          <div className="w-full md:w-1/2 flex flex-col items-start gap-4 order-1 sm:order-2">
            <span className=" text-4xl font-bold tracking-tight  dark:text-white sm:text-5xl   dark:border-institution/50 pl-2 mb-4 text-blue-600 ">
              FAQ
            </span>
            <span className="text-lg text-gray-600 dark:text-gray-400">
              At Equilibrium Insurance Broker, we strive to provide transparent
              and reliable insurance services for our clients. Below are answers
              to some of the frequently asked questions:
            </span>

            <Accordion allowZeroExpanded className="mt-6 w-full">
              {data.map((item, i) => (
                <AccordionItem
                  key={i}
                  uuid={i}
                  className="mb-5 border shadow-md"
                  style={{ borderRadius: "10px" }}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 cursor-pointer rounded-lg">
                      <div className="flex items-center justify-center w-full space-x-3">
                        <div className="p-2 text-blue-700 bg-blue-100 rounded-full">
                          {item.icon}
                        </div>
                        <span className="text-gray-500 font-semibold w-full text-start">
                          {item.heading}
                        </span>
                        <div className="text-blue-700">
                          <MdOutlineArrowDropDown size={25} />
                        </div>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-4 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg">
                    <p>{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Left Side - Image with Skeleton Loader */}
          <div className="w-full md:w-1/2 flex justify-center order-2 sm:order-1">
            <div className="w-full h-full overflow-hidden">
              {!imageLoaded && (
                <div className="w-full h-full bg-gray-300 dark:bg-gray-700 animate-pulse rounded-3xl"></div>
              )}
              <img
                src={faqImg}
                alt="Hero"
                className={`w-full h-full object-cover rounded-3xl transition-opacity duration-300 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
