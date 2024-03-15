import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import WorkProject from "./components/WorkProject";
import GalleryComp from "./components/GalleryComp";
import BlogComp from "./components/BlogComp";
import { Home } from "./Index";

const App = () => {
  return (
    <>
      {/* className="fixed top-0 left-0 right-0 bg-white" */}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/work" element={<WorkProject />} />
        <Route path="/gallery" element={<GalleryComp />} />
        <Route path="/blog" element={<BlogComp />} />
      </Routes>

      {/* <Aboutme/> */}
      {/* <WorkProject /> */}
      {/* <GalleryComp /> */}
      {/* <BlogComp /> */}
    </>
  );
};

export default App;
