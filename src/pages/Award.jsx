import React from "react";
import { Award1, Award2, Award3, Award4 } from "../assets/index";

const Award = () => {
  return (
    <>
      <div className=" award  p-[2rem]">
        <span className="text-white font-Rubik">
          <span className="flex justify-center p-8">
            <p className="text-4xl ">Awards and Recognition</p>
          </span>
          <span className="flex justify-evenly gap-4">
            <img src={Award1} alt="" loading="lazy"  />

            <img src={Award2} alt="" loading="lazy" />

            <img src={Award3} alt="" loading="lazy" />

            <img src={Award4} alt="" loading="lazy" />
          </span>
        </span>
      </div>
    </>
  );
};

export default Award;
