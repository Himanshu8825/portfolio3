import React from "react";
import { Card1, Card2, Card3 } from "../assets/index";

const AboutMe = () => {
  return (
    <>
      <div>
        <p className="text-4xl px-4 py-4 font-Rubik font-medium flex justify-center m-4">
          About Me
        </p>
        <span className="flex justify-between m-[2rem] gap-[4rem]">
          <span className="text-center">
            <h2 className="text-2xl font-semibold video py-3 rounded-lg m-1 font-Rubik">
              Entrepreneur
            </h2>
            <div className="bg-bg-primary px-1 py-1 m-2"></div>
            <span className="rounded shadow-lg">
              <img className="w-full" src={Card1} alt="Card1" loading="lazy" />
              <span className="px-4 py-2">
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </span>
            </span>
          </span>

          <span className="text-center">
            <h2 className="text-2xl font-semibold video py-3 rounded-lg m-1 font-Rubik">
              Speaker
            </h2>
            <div className="bg-bg-primary px-1 py-1 m-2"></div>
            <span className="rounded shadow-lg">
              <img className="w-full" src={Card2} alt="Card2" loading="lazy" />
              <span className="px-4 py-2">
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </span>
            </span>
          </span>

          <span className="text-center">
            <h2 className="text-2xl font-semibold video py-3 rounded-lg m-1 font-Rubik">
              Investor
            </h2>
            <div className="bg-bg-primary px-1 py-1 m-2"></div>
            <span className="rounded shadow-lg">
              <img className="w-full" src={Card3} alt="Card3" loading="lazy" />
              <span className="px-4 py-2">
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </span>
            </span>
          </span>
        </span>
      </div>
    </>
  );
};

export default AboutMe;
