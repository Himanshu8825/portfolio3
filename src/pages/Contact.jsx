import React from "react";
import { MdOutlineEmail, MdOutlinePhoneInTalk } from "react-icons/md";
import { TfiNewWindow } from "react-icons/tfi";
import { contact_bg } from "../assets/index";

const Contact = () => {
  return (
    <>
      <div
        className=" contact_bg bg-transparent md:w-full flex flex-col justify-center items-center"
        id="contact"
      >
        {/* <img src={contact_bg} alt="" /> */}
        <p className="text-4xl text-bg-primary font-Rubik p-8 font-medium">
          Contact With Us
        </p>

        <div className="gradient-background p-[2rem] opacity-[0.85] backdrop-blur-[100px] rounded-3xl font-Roboto">
          <form action="" className="flex flex-col gap-2 text-white">
            <div className="flex justify-between gap-4">
              <label htmlFor="firstName">
                First Name <sup className="text-red-700">*</sup>
                <input
                  type="text"
                  placeholder="First Name"
                  id="firstName"
                  className="w-full px-2 py-2 text-gray-700 bg-white rounded-md focus:outline-none"
                />
              </label>
              <label htmlFor="lastName">
                Last Name <sup className="text-red-700">*</sup>
                <input
                  type="text"
                  placeholder="Last Name"
                  id="lastName"
                  className="w-full px-2 py-2 text-gray-700 bg-white rounded-md focus:outline-none"
                />
              </label>
            </div>
            <span className="flex flex-col items-start">
              <label htmlFor="email" className="">
                Email Address <sup className="text-red-700">*</sup>
              </label>
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Email Address"
                  id="email"
                  className="w-full px-2 py-2 text-gray-700 bg-white rounded-md focus:outline-none"
                />
                <MdOutlineEmail className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 text-xl text-gray-600" />
              </div>
            </span>

            <span className="flex flex-col relative">
              <label htmlFor="mobile" className="">
                Your Contact Number <sup className="text-red-700">*</sup>
              </label>
              <div className="relative w-[50%]">
                <input
                  type="mobile"
                  placeholder="Contact Number"
                  id="mobile"
                  className="w-full px-2 py-2 text-gray-700 bg-white rounded-md focus:outline-none"
                />
                <MdOutlinePhoneInTalk className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 text-xl text-gray-600" />
              </div>
            </span>

            <span className="flex flex-col relative">
              <label htmlFor="message">Message</label>
              <div className="relative w-full">
                <textarea
                  name="message"
                  id="message"
                  cols=""
                  rows="1"
                  placeholder="Hi! Please write your message here."
                  className="w-full px-2 py-2 text-gray-700 bg-white rounded-md focus:outline-none resize-none"
                ></textarea>
                <TfiNewWindow className="absolute bottom-0 right-0 transform rotate-90 mr-2 mb-4 text-xl text-gray-600" />
              </div>
            </span>
          </form>
        </div>

        <button className="text-lg text-white bg-bg-secondary font-Roboto px-4 py-2 rounded-xl m-4 hover:opacity-85">
          Submit
        </button>
      </div>
    </>
  );
};

export default Contact;
