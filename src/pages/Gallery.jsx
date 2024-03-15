import React from "react";
import images from "../Image";

const Gallery = () => {
  console.log(images.images);
  return (
    <>
      <div className="bg-black">
        <p className="text-white text-4xl font-Rubik text-center p-8">
          Sneak peek to my world
        </p>

        <span className="w-full flex justify-center">
          <span className="grid grid-cols-3 p-[2rem] gap-6 w-[80%] cursor-pointer">
            {images.images.map((image) => (
              <img
                key={image.id}
                src={image.src}
                alt={`Image ${image.id}`}
                className="w-[350px] h-[250px] rounded-xl hover:border hover:border-bg-secondary transform transition-transform hover:scale-110"
              />
            ))}
          </span>
        </span>
      </div>
    </>
  );
};

export default Gallery;
