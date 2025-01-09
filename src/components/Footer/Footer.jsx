import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterLinks = [
  {
    title: "About Us",
    link: "/#about",
  },
  {
    title: "Our Services",
    link: "/#services",
  },
  {
    title: "Careers",
    link: "/#careers",
  },
  {
    title: "Contact Us",
    link: "/#contact",
  },
];
const HelpLinks = [
  {
    title: "Customer Support",
    link: "/#support",
  },
  {
    title: "Claims Process",
    link: "/#claims-process",
  },
  {
    title: "Terms & Conditions",
    link: "/#terms",
  },
  {
    title: "Privacy Policy",
    link: "/#privacy-policy",
  },
];
const ResourcesLinks = [
  {
    title: "Insurance Resources",
    link: "/#resources",
  },
  {
    title: "FAQ",
    link: "/#faq",
  },
  {
    title: "Subscribe to Newsletters",
    link: "https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ?sub_confirmation=1",
  },
];

const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <section className="container py-10">
        <div className="grid md:grid-cols-3 py-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              Equilibrium Insurance Broker
            </h1>
            <p className="text-sm cursor-pointer hover:translate-x-1 duration-300 space-x-1 text-gray-400">
              At Equilibrium Insurance Broker, we offer tailored insurance
              solutions to protect what matters most to you. Our team is
              dedicated to helping you find the right coverage, offering peace
              of mind and security.
            </p>
            <br />
            {/* Social Handles */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#">
                <FaInstagram className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-2xl hover:text-primary duration-300" />
              </a>
            </div>
            <br />
            {/* Address */}
            <div className="text-gray-400 mt-6">
              <p>Suite 203, Anbeez Plaza,</p>
              <p>Wuse Zone 5, Opposite former CAC Office,</p>
              <p>Ndola Crescent, Abuja.</p>
              <p>
                Tel:{" "}
                <a href="tel:08054288271" className="hover:text-primary">
                  08054288271
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:equilibriuminsurancebroker@gmail.com"
                  className="hover:text-primary"
                >
                  equilibriuminsurancebroker@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Company
              </h1>
              <ul className={`flex flex-col gap-3`}>
                {FooterLinks.map((link) => (
                  <li
                    key={link.title}
                    className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400"
                  >
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Help
              </h1>
              <ul className="flex flex-col gap-3">
                {HelpLinks.map((link) => (
                  <li
                    key={link.title}
                    className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400"
                  >
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Resources
              </h1>
              <ul className="flex flex-col gap-3">
                {ResourcesLinks.map((link) => (
                  <li
                    key={link.title}
                    className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400"
                  >
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          {new Date().getFullYear()} All Rights Reserved. <br />
          <span style={{ color: "skyblue" }}>EIB</span>.
        </p>
      </section>
    </div>
  );
};

export default Footer;
