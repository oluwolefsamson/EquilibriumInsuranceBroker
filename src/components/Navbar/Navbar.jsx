import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/logo.jpg";
import DarkMode from "./DarkMode";

export const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/#about",
  },
  {
    id: 3,
    name: "Services",
    link: "/#services", // No dropdown, just a direct link
  },
  {
    id: 4,
    name: "Projects",
    link: "/#projects",
  },
  {
    id: 5,
    name: "Brochure",
    link: "/#services",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative w-full dark:bg-gray-950 dark:text-white z-50 duration-300 pt-3 pb-9">
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <a target="_blank" href="#" className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="w-[50px] h-[50px]" />
            <span className="text-2xl sm:text-3xl font-bold leading-tight text-green-400">
              EQUILIBRIUM
              <p className="text-sm sm:text-base font-bold text-green-700 sm:block">
                INSURANCE BROKER NIG LTD
              </p>
            </span>
          </a>

          {/* Desktop view Navigation */}
          <nav className="hidden lg:block">
            {" "}
            {/* Using lg instead of md for breakpoint at 800px */}
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="relative py-4">
                  <a
                    href={link}
                    className="text-lg font-medium py-2 hover:text-primary hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {name}
                  </a>
                </li>
              ))}
              <button className="primary-btn">Get in Touch</button>
              <DarkMode />
            </ul>
          </nav>

          {/* Mobile view Drawer */}
          <div className="flex items-center gap-4 lg:hidden">
            {" "}
            {/* Adjusted to hide on lg and above */}
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
