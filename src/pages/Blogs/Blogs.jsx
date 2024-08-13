import React, { useState } from "react";
import "./Blogs.css";
import BlogHighlights from "../../components/BlogHighlights/BlogHighlights";
import PostDisplay from "../../components/PostDisplay/PostDisplay";

function Blogs() {
  const [category, setCategory] = useState("All");
  return (
    <div className="app-land">
      <div className="App">
        <BlogHighlights category={category} setCategory={setCategory} />
        <PostDisplay category={category} />
      </div>
    </div>
  );
}

export default Blogs;
