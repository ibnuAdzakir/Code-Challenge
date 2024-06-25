"use client";
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  {
    title: "About",
    path: "about",
  },
  {
    title: "Services",
    path: "services",
  },
  {
    title: "Teams",
    path: "teams",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavClick = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <a href="/" className="text-2xl md:text-5xl text-white font-semibold">
          Logo
        </a>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div
          className={`${navbarOpen ? "block" : "hidden"} md:block md:w-auto`}
          id="navbar"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-0 p-4 md:p-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <ScrollLink
                  to={link.path}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-white hover:text-gray-300"
                  onClick={handleNavClick}
                >
                  {link.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
