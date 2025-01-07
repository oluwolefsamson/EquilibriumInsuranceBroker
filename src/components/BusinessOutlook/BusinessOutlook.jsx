import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import outlook from "../../assets/website/businessOutlook.jpg";
import outlook2 from "../../assets/website/outlookImg.jpg";

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden dark:bg-gray-950 dark:text-white duration-300 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      {/* Header */}
      <div className="pb-12 text-center space-y-3">
        <h1 data-aos="fade-up" className="text-3xl font-semibold sm:text-3xl  ">
          Our Business Outlook
        </h1>
        <p
          data-aos="fade-up"
          className=" text-sm text-gray-600 dark:text-gray-400"
        >
          We are committed to delivering exceptional insurance and consultancy
          services tailored to individual and business needs.
        </p>
      </div>
      <div className="absolute inset-0 -z-10 overflow-hidden"></div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"></div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src={outlook2}
            className="w-[48rem] max-w-none  bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-[-50px]">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7  lg:max-w-lg">
              <div className="">
                <img
                  src={outlook}
                  alt=""
                  className=""
                  style={{
                    borderRadius: "50%",
                  }}
                />
              </div>
              <p className=" paragraphText py-6 border-l-8  border-institution/50 pl-4">
                We are dedicated to providing top-notch insurance solutions
                tailored to meet diverse client needs. With a focus on
                innovation, reliability, and customer satisfaction, our services
                span risk management, claim administration, retail marketing,
                and comprehensive insurance products. Our commitment is to
                empower clients with secure and seamless insurance experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
