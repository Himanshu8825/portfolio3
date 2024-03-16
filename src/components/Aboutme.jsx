import React from "react";
import { Card1, Card2, Card3, icon } from "../assets/index";

const Aboutme = () => {
  return (
    <>
      <div id="about">
        <img
          src={icon}
          alt=""
          className="rotate-180 m-4 ml-8 h-[40px] cursor-pointer"
        />

        <span className="flex flex-col md:flex-row justify-around p-4">
          <span className="w-full md:w-[18rem] m-4">
            <h5 className="mb-2 text-2xl font-bold video py-2 rounded text-center font-Rubik">
              Entrepreneur
            </h5>
            <div className="bg-bg-primary px-1 py-1 m-2"></div>
            <span className="flex flex-col justify-center items-center">
              <img src={Card1} alt="" />
              <p className="mb-3 font-normal text-gray-700 text-center p-2 font-Roboto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </span>
          </span>

          <span className="flex justify-center items-center">
            <span className=" bg-about_bg w-full md:max-w-[50rem]  m-2 md:m-0 rounded-3xl font-Roboto p-6   order-1 md:order-2 ">
              <p className="text-black text-lg p-4 ">
                Technology has greatly revolutionized the way we live today,
                opening up new opportunities and possibilities. It has empowered
                individuals and businesses alike, providing them with the tools
                and resources they need to thrive in the digital age. However,
                navigating the world of technology can be daunting, especially
                for newcomers. Fortunately, there are pioneers and trailblazers
                who pave the way, introducing new technology to get started and
                succeed in the world. Without their support, investment, and
                guidance, many good startups and innovations would fail and
                would not see the day of the light. One such great investor and
                Entrepreneur is Bibin Babu who has over the years given his so
                much contribution to innovation and start-ups in India.
              </p>
            </span>
          </span>
        </span>
        <span className="flex flex-col md:flex-row justify-around p-4">
          <span className="w-full md:w-[18rem] m-4">
            <h5 className="mb-2 text-2xl font-bold video py-2 rounded text-center font-Rubik">
              Entrepreneur
            </h5>
            <div className="bg-bg-primary px-1 py-1 m-2"></div>
            <span className="flex flex-col justify-center items-center">
              <img src={Card2} alt="" />
              <p className="mb-3 font-normal text-gray-700 text-center p-2 font-Roboto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </span>
          </span>

          <span className="flex justify-center items-center">
            <span className=" bg-about_bg w-full md:max-w-[50rem]  m-2 md:m-0 rounded-3xl font-Roboto p-6   order-1 md:order-2 ">
              <p className="text-black text-lg p-4 ">
                Technology has greatly revolutionized the way we live today,
                opening up new opportunities and possibilities. It has empowered
                individuals and businesses alike, providing them with the tools
                and resources they need to thrive in the digital age. However,
                navigating the world of technology can be daunting, especially
                for newcomers. Fortunately, there are pioneers and trailblazers
                who pave the way, introducing new technology to get started and
                succeed in the world. Without their support, investment, and
                guidance, many good startups and innovations would fail and
                would not see the day of the light. One such great investor and
                Entrepreneur is Bibin Babu who has over the years given his so
                much contribution to innovation and start-ups in India.
              </p>
            </span>
          </span>
        </span>
        <span className="flex flex-col md:flex-row justify-around p-4">
          <span className="w-full md:w-[18rem] m-4">
            <h5 className="mb-2 text-2xl font-bold video py-2 rounded text-center font-Rubik">
              Entrepreneur
            </h5>
            <div className="bg-bg-primary px-1 py-1 m-2"></div>
            <span className="flex flex-col justify-center items-center">
              <img src={Card3} alt="" />
              <p className="mb-3 font-normal text-gray-700 text-center p-2 font-Roboto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </span>
          </span>

          <span className="flex justify-center items-center">
            <span className=" bg-about_bg w-full md:max-w-[50rem]  m-2 md:m-0 rounded-3xl font-Roboto p-6   order-1 md:order-2 ">
              <p className="text-black text-lg p-4 ">
                Technology has greatly revolutionized the way we live today,
                opening up new opportunities and possibilities. It has empowered
                individuals and businesses alike, providing them with the tools
                and resources they need to thrive in the digital age. However,
                navigating the world of technology can be daunting, especially
                for newcomers. Fortunately, there are pioneers and trailblazers
                who pave the way, introducing new technology to get started and
                succeed in the world. Without their support, investment, and
                guidance, many good startups and innovations would fail and
                would not see the day of the light. One such great investor and
                Entrepreneur is Bibin Babu who has over the years given his so
                much contribution to innovation and start-ups in India.
              </p>
            </span>
          </span>
        </span>

        <img
          src={icon}
          alt=""
          className="rotate-180 p-4 mx-auto h-[70px] cursor-pointer"
        />
      </div>
    </>
  );
};

export default Aboutme;
