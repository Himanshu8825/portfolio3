import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center px-8 py-6">
        <span>
          <p className=" font-Rubik text-bg-primary font-bold text-xl">
            Bibin Babu.
          </p>
        </span>
        <span>
          <ul className="text-bg-secondary text-base font-Roboto font-medium flex justify-start items-center gap-8 cursor-pointer">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About Me</li>
            </Link>
            <Link to="work">
              <li>Work</li>
            </Link>
            <Link to="/gallery">
              <li>Gallery</li>
            </Link>
            <Link to="/blog">
              <li>Blog</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </span>
      </div>
    </>
  );
};

export default Navbar;
