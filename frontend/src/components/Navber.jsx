import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["home", "about", "skills", "services", "projects", "contact"];

  return (
    <div className="bg-black/5 w-full h-16 flex justify-between items-center px-6 md:px-10 border-b border-zinc-800 shadow-lg fixed top-0 left-0 z-50">
      {/* Logo */}
      <span className="text-2xl font-semibold tracking-wide text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300">
        Amine_codes
        <span className="text-blue-600 dark:text-blue-400">.</span>
      </span>


      {/* Desktop Nav */}
      <div className="hidden md:flex items-center justify-evenly p-2 text-white text-lg w-[60%] rounded-full bg-gray-400/40">
        {navLinks.map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            offset={-70}
            spy={true} // 👈 enables scroll spy feature
            activeClass="text-black  bg-blue-400 p-1 border-transparent rounded-xl font-semibold" // 👈 active section styling
            className="cursor-pointer transition-all duration-50 hover:text-black"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden text-white text-2xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-zinc-900/90 text-white flex flex-col items-center gap-4 py-6 md:hidden shadow-lg">
          {navLinks.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="text-blue-400 font-semibold"
              className="cursor-pointer transition-all duration-300 hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 transition-all duration-300">
            Let's Talk
          </button>
        </div>
      )}

      {/* Desktop Button */}
      <button className="hidden md:block bg-blue-500 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-600 hover:-translate-y-0.5 transition-all duration-300 shadow-md">
        Let's Talk
      </button>
    </div>
  );
}

export default Navbar;
