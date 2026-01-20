import { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
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
  const toggleMenu = () => setShowMenu((prev) => !prev);
  const closeMenu = () => setShowMenu(false);

  return (
    <header className="relative z-50">
      {/* Header Bar */}
      <div className="bg-white/80 dark:bg-[#062e1c]/80 backdrop-blur-md border-b border-green-200/60 dark:border-green-900">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <Link to="/" onClick={closeMenu}>
              <DesignedLogo />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-2">
              {MenuLinks.map(({ id, name, link }) => (
                <NavLink
                  key={id}
                  to={link}
                  className={({ isActive }) =>
                    [
                      "px-4 py-2 rounded-xl text-sm font-medium transition-all",
                      "text-green-900 hover:bg-green-100 hover:text-green-800",
                      "dark:text-green-100 dark:hover:bg-green-900/40",
                      isActive
                        ? "bg-green-100 text-green-900 dark:bg-green-900/60 dark:text-green-200"
                        : "",
                    ].join(" ")
                  }
                >
                  {name}
                </NavLink>
              ))}

              {/* Divider */}
              <span className="mx-2 h-6 w-px bg-green-200 dark:bg-green-800" />

              <DarkMode />

              {/* Contact Button */}
              <Link to="/contact">
                <button className="rounded-xl px-4 py-2 text-sm font-semibold text-white bg-green-800 hover:bg-green-900 active:scale-[0.98] transition shadow-sm">
                  Contact
                </button>
              </Link>
            </nav>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 md:hidden">
              <DarkMode />
              <button
                onClick={toggleMenu}
                className="p-2 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/50 hover:bg-green-100 dark:hover:bg-green-900 transition"
              >
                {showMenu ? <HiMenuAlt1 size={26} /> : <HiMenuAlt3 size={26} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <>
          {/* Backdrop */}
          <div
            onClick={closeMenu}
            className="fixed inset-0 bg-black/20 z-40"
          />

          {/* Panel */}
          <div className="relative z-50 bg-white dark:bg-[#062e1c] border-b border-green-200 dark:border-green-900">
            <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col gap-2">
              {MenuLinks.map(({ id, name, link }) => (
                <NavLink
                  key={id}
                  to={link}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    [
                      "px-4 py-3 rounded-xl text-base font-medium transition",
                      "text-green-900 hover:bg-green-100",
                      "dark:text-green-100 dark:hover:bg-green-900/50",
                      isActive
                        ? "bg-green-100 text-green-900 dark:bg-green-900/60 dark:text-green-200"
                        : "",
                    ].join(" ")
                  }
                >
                  {name}
                </NavLink>
              ))}

              <Link to="/contact" onClick={closeMenu} className="mt-2">
                <button className="w-full rounded-xl px-4 py-3 font-semibold text-white bg-green-800 hover:bg-green-900 transition shadow-sm">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
