import React from "react";
import { icon, work_card1, work_card2, work_card3 } from "../assets/index";

const Work = () => {
  return (
    <>
      <div className="work_bg py-4 ">
        <img
          src={icon}
          alt=""
          className=" rotate-180 p-4 ml-8   h-[70px] cursor-pointer "
        />
      </div>
      <span className="flex justify-around flex-col md:flex-row items-center px-4  p-8">
        <span className="order-1 md:order-2">
          <img
            src={work_card1}
            alt=""
            className="w-[340px] mb-4 md:mb-0 md:mr-4 md:w-auto"
          />
        </span>
        <span className="bg-work_bg w-full md:max-w-[50rem] m-2 md:m-0 rounded-3xl font-Roboto p-6 flex flex-col border border-bg-secondary order-1 md:order-2">
          <p className="font-Rubik text-2xl underline mb-4">Title1</p>
          <p className="text-black text-lg">
            Technology has greatly revolutionized the way we live today, opening
            up new opportunities and possibilities. It has empowered individuals
            and businesses alike, providing them with the tools and resources
            they need to thrive in the digital age. However, navigating the
            world of technology can be daunting, especially for newcomers.
            Fortunately, there are pioneers and trailblazers who pave the way,
            introducing new technology to get started and succeed in the world.
            Without their support, investment, and guidance, many good startups
            and innovations would fail and would not see the day of the light.
            One such great investor and Entrepreneur is Bibin Babu who has over
            the years given his so much contribution to innovation and start-ups
            in India.
          </p>
        </span>
      </span>
      <span className="flex justify-around flex-col md:flex-row items-center px-4  p-4">
        <span className="order-1 md:order-2">
          <img
            src={work_card2}
            alt=""
            className="w-[340px] mb-4 md:mb-0 md:mr-4 md:w-auto"
          />
        </span>
        <span className="bg-work_bg w-full md:max-w-[50rem] m-2 md:m-0 rounded-3xl font-Roboto p-6 flex flex-col border border-bg-secondary order-1 md:order-2">
          <p className="font-Rubik text-2xl underline mb-4">Title1</p>
          <p className="text-black text-lg">
            Technology has greatly revolutionized the way we live today, opening
            up new opportunities and possibilities. It has empowered individuals
            and businesses alike, providing them with the tools and resources
            they need to thrive in the digital age. However, navigating the
            world of technology can be daunting, especially for newcomers.
            Fortunately, there are pioneers and trailblazers who pave the way,
            introducing new technology to get started and succeed in the world.
            Without their support, investment, and guidance, many good startups
            and innovations would fail and would not see the day of the light.
            One such great investor and Entrepreneur is Bibin Babu who has over
            the years given his so much contribution to innovation and start-ups
            in India.
          </p>
        </span>
      </span>
      <span className="flex justify-around flex-col md:flex-row items-center px-4 pt-4  pb-[4rem]">
        <span className="order-1 md:order-2">
          <img
            src={work_card3}
            alt=""
            className="w-[340px] mb-4 md:mb-0 md:mr-4 md:w-auto"
          />
        </span>
        <span className="bg-work_bg w-full md:max-w-[50rem] m-2 md:m-0 rounded-3xl font-Roboto p-6 flex flex-col border border-bg-secondary order-1 md:order-2">
          <p className="font-Rubik text-2xl underline mb-4">Title1</p>
          <p className="text-black text-lg">
            Technology has greatly revolutionized the way we live today, opening
            up new opportunities and possibilities. It has empowered individuals
            and businesses alike, providing them with the tools and resources
            they need to thrive in the digital age. However, navigating the
            world of technology can be daunting, especially for newcomers.
            Fortunately, there are pioneers and trailblazers who pave the way,
            introducing new technology to get started and succeed in the world.
            Without their support, investment, and guidance, many good startups
            and innovations would fail and would not see the day of the light.
            One such great investor and Entrepreneur is Bibin Babu who has over
            the years given his so much contribution to innovation and start-ups
            in India.
          </p>
        </span>
      </span>

      <div className="work_bg py-4 ">
        <img
          src={icon}
          alt=""
          className=" rotate-180 p-4 ml-8 h-[70px] cursor-pointer "
        />
      </div>
    </>
  );
};

export default Work;
