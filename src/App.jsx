import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./pages/About/About.jsx";
import Contactus from "./pages/Contactus/Contactus.jsx";
import Courses from "./pages/Courses/Courses.jsx";
import Course from "./pages/Course/Course.jsx";
import Blogs from "./pages/Blogs/Blogs.jsx";
import Category from "./pages/Category/Category.jsx";
import SocialMedia from "./components/SocialMedia/SocialMedia.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/categories" element={<Category />}>
          <Route path=":categoryId" element={<Category />} />
        </Route>
        <Route path="/courses" element={<Course />}>
          <Route path=":courseId" element={<Course />} />
        </Route>
      </Routes>
      <Footer />
      <SocialMedia />
    </>
  );
}

export default App;
