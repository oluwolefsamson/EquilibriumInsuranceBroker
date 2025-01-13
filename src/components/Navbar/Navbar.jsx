import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import DesignedLogo from "../DesinedLogo";

export const MenuLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Services", link: "/services" },
  { id: 5, name: "Brochure", link: "/brochure" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <DesignedLogo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {MenuLinks.map(({ id, name, link }) => (
              <Link
                key={id}
                to={link}
                className="text-lg font-poppins font-medium tracking-wide transition-colors duration-300 hover:text-sky-500 dark:hover:text-sky-400"
              >
                {name}
              </Link>
            ))}
            <Link to="/contact">
              <button className="primary-btn">Contact</button>
            </Link>
            <DarkMode />
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
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
        {showMenu && <ResponsiveMenu showMenu={showMenu} />}
      </div>
    </header>
  );
};

export default Navbar;
