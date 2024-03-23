import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  // Function to toggle the visibility of the menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="w-full flex justify-between items-center px-8 py-6">
      <span className="">
        <p className="font-Rubik text-bg-primary font-bold text-xl">
          Bibin Babu.
        </p>
      </span>
      <span className="flex items-center gap-0">
        {/* Hamburger Menu */}
        <GiHamburgerMenu
          className={`text-3xl text-bg-primary  block md:hidden cursor-pointer ${
            !showMenu ? "block" : "hidden"
          }`}
          onClick={toggleMenu}
        />
        {showMenu && (
          <div
            className="text-3xl absolute right-[2rem] top-[1.5rem] text-bg-primary"
            onClick={toggleMenu}
          >
            <RxCross2 />
          </div>
        )}
        {/* List Items */}

        <ul
          className={`text-bg-primary text-lg  font-Roboto font-semibold ss:gap-4 gap-1 ss:bg-transparent bg-white ss:p-0 p-6 ss:mt-0 mt-[1rem] ss:rounded-none rounded-xl bg-opacity-15 backdrop-filter backdrop-blur-md ss:border-none border border-bg-secondary ${
            showMenu
              ? " flex flex-col md:flex-row md:gap-8 gap-2  slideIn  absolute z-50 right-2 top-[4rem]"
              : "hidden md:flex"
          }`}
        >
          <li>
            <Link
              to="/"
              className={
                activePath === "/"
                  ? "border-b-[3px] border-b-bg-secondary text-bg-secondary"
                  : ""
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={
                activePath === "/about"
                  ? "border-b-[3px] border-b-bg-secondary text-bg-secondary"
                  : ""
              }
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/work"
              className={
                activePath === "/work"
                  ? "border-b-[3px] border-b-bg-secondary text-bg-secondary"
                  : ""
              }
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className={
                activePath === "/gallery"
                  ? "border-b-[3px] border-b-bg-secondary text-bg-secondary"
                  : ""
              }
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className={
                activePath === "/blogs" || activePath === "/blog"
                  ? "border-b-[3px] border-b-bg-secondary text-bg-secondary"
                  : ""
              }
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="#contact"
              className={
                activePath === "#contact"
                  ? "border-b-[3px] border-b-bg-secondary text-bg-secondary"
                  : ""
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </span>
    </nav>
  );
};

export default Navbar;
