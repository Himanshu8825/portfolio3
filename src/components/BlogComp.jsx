import React from "react";
import { icon, blog, card_bg } from "../assets/index";
import { IoMdTime } from "react-icons/io";

const BlogComp = () => {
  return (
    <>

      <img
        src={icon}
        alt=""
        className="rotate-180 p-4 ml-8 h-[70px] cursor-pointer"
      />

      <span className="flex flex-col w-[25%] bg-white p-6 rounded-2xl  shadow-2xl ">
        <span className="flex-grow">
          <img src={blog} alt="Blog" />
          <p className="underline text-black text-2xl font-Rubik">Topic</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
            mollitia necessitatibus natus illo, cupiditate eum exercitationem
            odio in fugit alias?
          </p>
          <span className="flex justify-between m-2 text-black font-Roboto">
            <span className="flex items-center">
              <img src={card_bg} alt="" className="mr-2" />
              <p className="m-0">By TOI</p>
            </span>
            <span className="flex items-center text-black">
              <IoMdTime className="mr-1 text-xl" />
              <p className="m-0">07:00 PM</p>
            </span>
          </span>
        </span>
      </span>
    </>
  );
};

export default BlogComp;
