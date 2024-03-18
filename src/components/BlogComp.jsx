import React from "react";
import { IoMdTime } from "react-icons/io";
import blogData from "../Image";
import { icon } from "../assets/index";
import { useNavigate } from "react-router";

const BlogComp = () => {
  const navigate = useNavigate();
  const redirectToBlog = (id) => {
    navigate(`/blog?blog=${id}`);
  };
  return (
    <>
      <img
        src={icon}
        alt=""
        className="rotate-180 p-4 ml-8 h-[70px] cursor-pointer "
      />
      <div className="grid ss:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6  p-[4rem] -mt-[4rem]">
        {blogData.blogData.map((blogItem) => (
          <span
            key={blogItem.id}
            className="bg-white p-6 rounded-2xl shadow-2xl cursor-pointer"
            onClick={() => redirectToBlog(blogItem.id)}
          >
            <img src={blogItem.src} alt="Blog" className="mx-auto" />
            <p className="underline text-black text-2xl font-Rubik">
              {blogItem.title}
            </p>
            <p>{blogItem.desc}</p>
            <span className="flex justify-between m-2 text-black font-Roboto">
              <span className="flex items-center">
                <img src={blogItem.profile} alt="" className="mr-2" />
                <p className="m-0">By {blogItem.author}</p>
              </span>
              <span className="flex items-center">
                <IoMdTime className="mr-1 text-xl" />
                <p className="m-0">{blogItem.time}</p>
              </span>
            </span>
          </span>
        ))}
      </div>

      <img
        src={icon}
        alt=""
        className="rotate-180 p-4 mx-auto h-[70px] cursor-pointer"
      />
    </>
  );
};

export default BlogComp;
