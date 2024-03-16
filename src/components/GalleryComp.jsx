import React from "react";
import { icon } from "../assets/index";
import GalleryImg from "../Image";

const GalleryComp = () => {
  return (
    <>
      <img
        src={icon}
        alt=""
        className="rotate-180 p-4 ml-8 h-[70px] cursor-pointer"
      />
      <span className="w-full flex justify-center">
        <span className="grid xs:grid-cols-1 ss:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-[2rem] gap-6 w-[80%] cursor-pointer">
          {GalleryImg.galleryImg.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={`Image ${image.id}`}
              className="w-[350px] h-[250px] rounded-xl hover:border hover:border-bg-secondary transform transition-transform hover:scale-110"
            />
          ))}
        </span>
      </span>

      <img
        src={icon}
        alt=""
        className="rotate-180 p-4 mx-auto h-[70px] cursor-pointer"
      />
    </>
  );
};

export default GalleryComp;
