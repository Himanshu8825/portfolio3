import React from "react";
import { Hero } from "../assets/index";

import Footer from "../components/Footer";
import { AboutMe, Work, Gallery, Contact, Blog, Award } from "../Index";

const Home = () => {
  return (
    <>
      <div className="image h-[672px] flex items-center gap-4 ss:justify-between relative flex-col ss:flex-row ">
        <span className="ml-8 ">
          <span className="p-[2rem]">
            <p className="text-bg-primary font-Roboto ss:text-[3.8rem] ss:leading-[4.5rem] text-3xl leading-[2rem] ss:pl-8 ss:mt-[-6rem]  ">
              Keep <span className="text-bg-secondary">Going After</span> <br />
              What You Truly <br />
              <span className="text-bg-secondary">Believe In</span>, Just{" "}
              <span className="text-bg-secondary">
                Not <br />
                Blindly
              </span>
            </p>
            <p className="text-bg-primary ss:text-4xl text-2xl font-Roboto font-normal mt-2 pl-12 ">
              -Bibin Babu
            </p>
          </span>
        </span>
        <span>
          <img
            src={Hero}
            alt="Hero"
            loading="lazy"
            className="w-[320px] h-[220px] ss:w-[700px] ss:h-[500px]"
          />
        </span>
        <span className="absolute ss:left-[28rem] ss:bottom-6 bottom-4 left-12 ">
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
