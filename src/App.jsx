import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  Home,
  Navbar,
  Aboutme,
  WorkProject,
  GalleryComp,
  BlogComp,
  ReactEditor,
  BlogPage,
} from "./Index";

const App = () => {
  return (
    <>
      {/* className="fixed top-0 left-0 right-0 bg-white" */}

      <div className=" overflow-hidden">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutme />} />
          <Route path="/work" element={<WorkProject />} />
          <Route path="/gallery" element={<GalleryComp />} />
          <Route path="/blog" element={<BlogComp />} />
          <Route path="blog2" element={<BlogPage />} />
          <Route path="/editor" element={<ReactEditor />} />
        </Routes>
      </div>
      {/* <Aboutme/> */}
      {/* <WorkProject /> */}
      {/* <GalleryComp /> */}
      {/* <BlogComp /> */}
    </>
  );
};

export default App;
