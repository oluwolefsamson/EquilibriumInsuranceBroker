import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MenuLinks } from "./Navbar";
import { Link } from "react-router-dom";
const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 left-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-transform duration-300 md:hidden rounded-r-xl shadow-md`}
    >
      {/* User Profile Section */}
      <div className="flex items-center justify-start gap-3">
        <FaUserCircle size={50} />
        <div>
          <h1>Hello User</h1>
          <h1 className="text-sm text-slate-500">Premium user</h1>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="mt-12">
        <ul className="space-y-4 text-xl">
          {MenuLinks.map((data) => (
            <li key={data.name}>
              <a
                href={data.link}
                className="mb-5 inline-block hover:text-primary"
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
        <Link to="/contact">
          {" "}
          <button className="primary-btn">Get in Touch</button>
        </Link>
      </nav>

      {/* Footer Section */}
      <div className="footer mt-auto">
        <h1>
          Made with ❤ by <a href="https://dilshad-ahmed.github.io/">Dilshad</a>
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
