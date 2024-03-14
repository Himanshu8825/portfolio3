import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, AboutMe, Work, Gallery, Contact, Blog, Award } from "./Index";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      {/* className="fixed top-0 left-0 right-0 bg-white" */}
      <section>
        <Navbar />
      </section>
      <section>
        <Home />
      </section>
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
      <section>
        <Footer />
      </section>
    </>
  );
};

export default App;
