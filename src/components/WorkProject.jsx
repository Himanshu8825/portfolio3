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
      <div className="flex justify-evenly items-center px-4">
        <div>
          <img src={work_card1} alt="" className="w-[340px]" />
        </div>
        <div className="bg-work_bg  w-[50rem]  m-[2rem] rounded-3xl font-Roboto p-6 flex flex-col border border-bg-secondary">
          <p className=" font-Rubik text-2xl underline px-6">Title1</p>
          <p className="text-black text-lg px-6  ">
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
        </div>
      </div>
      <div className="flex justify-evenly items-center  px-4">
        <div>
          <img src={work_card2} alt="" className="w-[340px]" />
        </div>
        <div className="bg-work_bg  w-[50rem]  m-[1rem] rounded-3xl  font-Roboto p-6 flex flex-col border border-bg-secondary">
          <p className=" font-Rubik text-2xl underline px-6">Title1</p>
          <p className="text-black text-lg px-6  ">
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
        </div>
      </div>
      <div className="flex justify-evenly items-center px-4">
        <div>
          <img src={work_card3} alt="" className="w-[340px]" />
        </div>
        <div className="bg-work_bg  w-[50rem]  m-[2rem] rounded-3xl font-Roboto p-6 flex flex-col border border-bg-secondary">
          <p className=" font-Rubik text-2xl underline px-6">Title1</p>
          <p className="text-black text-lg px-6  ">
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
        </div>
      </div>

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
