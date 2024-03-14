import React from "react";
import { FaFacebookSquare, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-black h-[150px] text-white font-Roboto flex flex-col justify-center items-center">
        <span className="flex flex-col gap-2 p-2">
          <p>Follow For More-</p>
          <span className="flex gap-3 cursor-pointer">
            <FaFacebookSquare />
            <FaInstagram />
            <FaXTwitter />
            <FaYoutube />
            <FaLinkedin />
          </span>
        </span>
        <hr className="bg-white w-full  m-4  " />
      </div>
    </>
  );
};

export default Footer;
