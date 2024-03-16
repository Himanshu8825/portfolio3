import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <div className="w-full flex justify-between items-center px-8 py-6 ">
      <span>
        <p className="font-Rubik text-bg-primary font-bold text-xl">
          Bibin Babu.
        </p>
      </span>
      <span>
        <ul className="text-bg-primary text-base font-Roboto font-medium flex justify-start items-center gap-8 cursor-pointer">
          <li>
            <Link
              to="/"
              className={
                activePath === "/" ? "underline text-bg-secondary " : ""
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
    </div>
  );
};

export default Navbar;
