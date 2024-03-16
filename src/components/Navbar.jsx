import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

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
            className="text-3xl absolute right-5 top-0 text-bg-primary"
            onClick={toggleMenu}
          >
            x
          </div>
        )}
        {/* List Items */}

        <ul
          className={`text-bg-primary text-lg  font-Roboto font-semibold gap-4 ${
            showMenu
              ? "flex flex-col md:flex-row md:gap-8 gap-2"
              : "hidden md:flex"
          }`}
        >
          <li>
            <Link
              to="/"
              className={
                activePath === "/" ? "underline text-bg-secondary" : ""
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={
                activePath === "/about" ? "underline text-bg-secondary" : ""
              }
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/work"
              className={
                activePath === "/work" ? "underline text-bg-secondary" : ""
              }
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className={
                activePath === "/gallery" ? "underline text-bg-secondary" : ""
              }
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={
                activePath === "/blog" ? "underline text-bg-secondary" : ""
              }
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/#"
              className={
                activePath === "/#" ? "underline text-bg-secondary" : ""
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
