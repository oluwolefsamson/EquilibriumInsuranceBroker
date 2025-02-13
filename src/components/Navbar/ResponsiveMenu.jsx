import React from "react";

import { MenuLinks } from "./Navbar";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const handleCloseMenu = () => {
    setShowMenu(false); // Closes the sidebar
  };

  return (
    <div
      className={`${
        showMenu ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 left-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-transform duration-300 md:hidden rounded-r-xl shadow-md`}
    >
      {/* Navigation Links */}
      <nav className="mt-12">
        <ul className="space-y-4 text-xl">
          {MenuLinks.map((data) => (
            <li key={data.name}>
              <Link
                to={data.link}
                className="mb-5 inline-block "
                onClick={handleCloseMenu} // Close the menu when navigating
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/contact" onClick={handleCloseMenu}>
          <button className="primary-btn">Contact</button>
        </Link>
      </nav>
    </div>
  );
};

export default ResponsiveMenu;
