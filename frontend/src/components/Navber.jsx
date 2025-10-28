import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["home", "about", "skills", "services", "projects", "contact"];

  return (
    <div className="bg-black/40 backdrop-blur-md w-full h-16 flex justify-between items-center px-6 md:px-12 border-b border-zinc-700 shadow-lg fixed top-0 left-0 z-50">
      
      {/* Logo */}
      <span className="text-2xl font-bold text-white tracking-wide cursor-pointer">
        The_coder<span className="text-blue-500">.</span>
      </span>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 text-white">
        {navLinks.map(section => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={600}
            offset={-90}
            spy={true}
            activeClass="active-nav"
            className="nav-link cursor-pointer transition-all duration-200 hover:text-blue-400"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden text-white text-3xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Mobile Dropdown */}
      <div className={`absolute top-16 left-0 w-full bg-black/95 transition-all ease-in-out duration-300
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}>
        <div className="flex flex-col items-center gap-6 py-6 text-white">
          {navLinks.map(section => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-90}
              spy={true}
              activeClass="text-blue-400"
              className="cursor-pointer text-lg hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
          <button className="bg-blue-500 px-5 py-2 rounded-full text-white font-medium hover:bg-blue-600 transition">
            Let's Talk
          </button>
        </div>
      </div>

      {/* Desktop call to action */}
      <button className="hidden md:block bg-blue-500 px-5 py-2 rounded-full text-white font-medium hover:bg-blue-600 transition">
        Let's Talk
      </button>

      {/* Tailwind applied with CSS utility for GSAP targeting */}
      <style>{`
        .nav-link {
          padding: 4px 0;
        }
        .active-nav {
          color: #60a5fa;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}

export default Navbar;
