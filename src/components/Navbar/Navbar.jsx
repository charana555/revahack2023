import React, { useState } from "react";
import { Link } from "react-scroll";

import "./Navbar.css";

import { navs } from "./NavItems";
import "./Navbar.css";

const Navbar = () => {
  const [menubarOpen, setMenubarOpen] = useState(false);

  const toggleMenubar = () => {
    setMenubarOpen(!menubarOpen);
  };

  const closeMenubar = () => {
    setMenubarOpen(false);
  };

  const menuClass = menubarOpen ? "dropdown-menu show" : "dropdown-menu";
  const menuItemsClass = menubarOpen ? "block" : "hidden";

  return (
      <nav className={`bg-primary fixed w-full z-50 backdrop-filter backdrop-blur-lg bg-opacity-90`}>
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 font-roboto">
          {/* Logo */}
          <div>
            <Link duration={100} smooth={true} className="cursor-pointer" to="hero">
              <img src={"Images/reva-logo.png"} alt="logo" height={70} width={70} />
            </Link>
          </div>
          {/* Navlinks for Desktop */}
          <div className={`hidden md:flex md:gap-14 font-semibold ${menubarOpen ? "hidden" : ""}`}>
            {navs.map((item, i) => (
                <Link
                    key={i}
                    className="underline-hover cursor-pointer text-white text-md tracking-widest hover:text-secondary transition-all duration-200 ease-in-out"
                    to={item.navid}
                    duration={100}
                    smooth={true}
                >
                  {item.navid}
                </Link>
            ))}
          </div>
          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button className="text-white cursor-pointer menu-button" onClick={toggleMenubar}>
              {menubarOpen ? (
                  /* "X" Icon with transition effect */
                  <svg width="24" height="24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform transform rotate-90">
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
              ) : (
                  /* Hamburger icon with transition effect */
                  <svg width="30" height="20" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" className="transition-transform">
                    <rect width="25" height="2" rx="1" fill="#FFF" />
                    <rect x="9" y="8" width="15" height="2" rx="1" fill="#FFF" />
                    <rect y="16" width="25" height="2" rx="1" fill="#FFF" />
                  </svg>
              )}
            </button>
          </div>
          {/* Menubar */}
          <div className={`md:hidden w-full my-2  ${menuClass} mobile-nav`}>
            {navs.map((item, i) => (
                <Link
                    key={i}
                    className={`cursor-pointer py-4 transition-all duration-200 ease-in-out hover:text-[#81D9D2FF] ${menuItemsClass} menu-item`}
                    to={item.navid}
                    duration={100}
                    smooth={true}
                    onClick={closeMenubar}
                >
                  {item.navid}
                </Link>
            ))}
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
