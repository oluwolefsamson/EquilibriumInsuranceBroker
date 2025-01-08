import React from "react";
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

const Faq = () => {
  return (
    <section className="w-full py-[100px] bg-gray-100 dark:bg-gray-950  dark:text-white  duration-300">
      <div className="flex flex-col md:flex-row items-center justify-around gap-6 max-w-screen-xl mx-auto px-6">
        {/* Right Side - Change order on small screens */}

        <div className="w-full md:w-1/2 flex flex-col items-start gap-4 order-1 sm:order-2">
          <span className="text-2xl font-bold border-l-8  border-institution/50 pl-2 mb-4">
            FAQ
          </span>
          <span className="text-pretty text-lg/8 text-gray-300">
            At Equilibrium Insurance Broker, we strive to provide transparent
            and reliable insurance services for our clients. Below are answers
            to some of the frequently asked questions:
          </span>

          <Accordion
            allowMultipleExpanded={false}
            preExpanded={[]}
            className="mt-6 w-full"
          >
            {data.map((item, i) => (
              <AccordionItem
                key={i}
                uuid={i}
                className="mb-5 border shadow-md"
                style={{ borderRadius: "10px" }} // Explicitly setting border radius
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="flex items-center justify-between px-4 py-3 bg-white cursor-pointer rounded-lg">
                    <div className="flex items-center justify-center w-full space-x-3">
                      <div className="p-2 text-blue-700 bg-blue-100 rounded-full">
                        {item.icon}
                      </div>
                      <span className="text-green-500 font-bold text-center w-full">
                        {item.heading}
                      </span>
                      <div className="flex items-center text-blue-700 bg-blue-100 rounded-3xl p-[4px]">
                        <MdOutlineArrowDropDown size={25} />
                      </div>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="px-4 py-3 bg-white text-black paragraphText rounded-lg">
                  <p>{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        {/* Left Side - Change order on small screens */}
        <div className="w-full md:w-1/2 flex justify-center order-2 sm:order-1">
          <div className="w-full h-full overflow-hidden">
            <img
              src={faqImg}
              alt="Hero"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
