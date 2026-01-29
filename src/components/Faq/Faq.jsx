import { useState } from "react";
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
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="w-full py-20 sm:py-24 dark:text-white">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* LEFT — IMAGE */}
        <div className="order-2 lg:order-1 h-full">
          <div className="relative w-full h-full min-h-[520px] overflow-hidden rounded-3xl">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-slate-200 animate-pulse" />
            )}
            <img
              src={faqImg}
              alt="Frequently asked questions"
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>

        {/* RIGHT — FAQ */}
        <div className="order-1 lg:order-2">
          {/* Header */}
          <div className="space-y-4">
            <p className="inline-flex items-center rounded-full bg-green-50 px-4 py-1 text-sm font-semibold text-green-700 dark:bg-green-500/10 dark:text-green-300">
              FAQs
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              At Equilibrium Insurance Broker, we provide transparent and
              reliable insurance services. Here are answers to common questions.
            </p>
          </div>

          {/* Accordion */}
          <Accordion allowZeroExpanded className="mt-10 w-full" data-aos="flip-left">
            {data.map((item, i) => (
              <AccordionItem
                key={i}
                uuid={i}
                className="mb-4 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm dark:border-white/10 dark:bg-white/5"
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-700 ring-1 ring-green-100 dark:bg-green-500/10 dark:text-green-300 dark:ring-white/10">
                        {item.icon}
                      </div>

                      <span className="font-semibold text-slate-900 dark:text-white">
                        {item.heading}
                      </span>
                    </div>

                    <MdOutlineArrowDropDown
                      size={28}
                      className="text-green-700 dark:text-green-300"
                    />
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel className="px-5 pb-5 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
