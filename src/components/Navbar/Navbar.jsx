import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import DesignedLogo from "../DesinedLogo";

export const MenuLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Services", link: "/service" },
  { id: 4, name: "Projects", link: "/projects" },
  { id: 5, name: "Brochure", link: "/brochure" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <div className="sticky top-0 bg-white dark:bg-gray-950 dark:text-white z-50 ">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        {/* Logo Section */}
        <DesignedLogo />

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 md:gap-4">
            {MenuLinks.map(({ id, name, link }) => (
              <li key={id}>
                <a
                  href={link}
                  className="text-lg font-poppins font-normal tracking-wide  transition-colors duration-300 md:text-md font-sans" // Updated font styles
                >
                  {name}
                </a>
              </li>
            ))}
            <Link to="/contact">
              <button className="primary-btn">Contact</button>
            </Link>
            <DarkMode />
          </ul>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <DarkMode />
          {showMenu ? (
            <HiMenuAlt1
              onClick={toggleMenu}
              className="cursor-pointer"
              size={30}
            />
          ) : (
            <HiMenuAlt3
              onClick={toggleMenu}
              className="cursor-pointer"
              size={30}
            />
          )}
        </div>
      </div>

      {/* Responsive Menu */}
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
