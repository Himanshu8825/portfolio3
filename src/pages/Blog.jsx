import React from "react";
import { blog, icon, card_bg } from "../assets/index";
import { IoMdTime } from "react-icons/io";

const Blog = () => {
  return (
    <div className="blog grid ss:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-[2rem]">
      <p className="text-4xl text-white font-Rubik pt-8 text-center col-span-full">
        Stay Updated With My Blogs.
      </p>
      <div className="flex flex-col bg-white p-6 m-[2rem] rounded-3xl bg-opacity-15 backdrop-filter backdrop-blur-lg border border-bg-secondary">
        <span className="flex-grow">
          <img src={blog} alt="Blog" />
          <p className="underline text-white text-2xl font-Rubik">Topic</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
            mollitia necessitatibus natus illo, cupiditate eum exercitationem
            odio in fugit alias?
          </p>
          <span className="flex justify-between m-2 text-white font-Roboto">
            <span className="flex items-center">
              <img src={card_bg} alt="" className="mr-2" />
              <p className="m-0">By TOI</p>
            </span>
            <span className="flex items-center">
              <IoMdTime className="mr-1 text-xl" />
              <p className="m-0">07:00 PM</p>
            </span>
          </span>
          <img src={icon} alt="" className="mx-auto cursor-pointer" />
        </span>
      </div>
      <div className="flex flex-col bg-white p-6 m-[2rem] rounded-3xl bg-opacity-15 backdrop-filter backdrop-blur-lg border border-bg-secondary">
        <span className="flex-grow">
          <img src={blog} alt="Blog" />
          <p className="underline text-white text-2xl font-Rubik">Topic</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
            mollitia necessitatibus natus illo, cupiditate eum exercitationem
            odio in fugit alias?
          </p>
          <span className="flex justify-between m-2 text-white font-Roboto">
            <span className="flex items-center">
              <img src={card_bg} alt="" className="mr-2" />
              <p className="m-0">By TOI</p>
            </span>
            <span className="flex items-center">
              <IoMdTime className="mr-1 text-xl" />
              <p className="m-0">07:00 PM</p>
            </span>
          </span>
          <img src={icon} alt="" className="mx-auto cursor-pointer" />
        </span>
      </div>
      <div className="flex flex-col bg-white p-6 m-[2rem] rounded-3xl bg-opacity-15 backdrop-filter backdrop-blur-lg border border-bg-secondary">
        <span className="flex-grow">
          <img src={blog} alt="Blog" />
          <p className="underline text-white text-2xl font-Rubik">Topic</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
            mollitia necessitatibus natus illo, cupiditate eum exercitationem
            odio in fugit alias?
          </p>
          <span className="flex justify-between m-2 text-white font-Roboto">
            <span className="flex items-center">
              <img src={card_bg} alt="" className="mr-2" />
              <p className="m-0">By TOI</p>
            </span>
            <span className="flex items-center">
              <IoMdTime className="mr-1 text-xl" />
              <p className="m-0">07:00 PM</p>
            </span>
          </span>
          <img src={icon} alt="" className="mx-auto cursor-pointer" />
        </span>
      </div>
    </div>
  );
};

export default Blog;
