import React from "react";
import { Hero } from "../assets/index";

import Footer from "../components/Footer";
import {
  AboutMe,
  Work,
  Gallery,
  Contact,
  Blog,
  Award,
} from "../Index";

const Home = () => {
  return (
    <>
      <div className="image h-[672px] flex items-center justify-between relative">
        <span className="ml-8">
          <span className="p-[2rem]">
            <p className="text-bg-primary font-Roboto text-5xl leading-[3.5rem]">
              Keep <span className="text-bg-secondary">Going After</span> <br />
              What You Truly <br />
              <span className="text-bg-secondary">Believe In</span>, Just{" "}
              <span className="text-bg-secondary">Not Blindly</span>
            </p>
            <p className="text-bg-primary text-3xl font-Roboto font-normal mt-2 p-2">
              -Bibin Babu
            </p>
          </span>
        </span>
        <span>
          <img src={Hero} alt="Hero" loading="lazy" />
        </span>
        <span className="absolute left-[28rem] bottom-6">
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            className="rounded-xl"
          ></iframe>
        </span>
      </div>

      <section>
        <AboutMe />
      </section>
      <section>
        <Award />
      </section>
      <section>
        <Work />
      </section>
      <section>
        <Gallery />
      </section>
      <section>
        <Blog />
      </section>
      <section>
        <Contact />
      </section>

      <Footer />
    </>
  );
};

export default Home;
