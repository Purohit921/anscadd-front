import React, { useState } from "react";
import "./Blogs.css";
import BlogHighlights from "../../components/BlogHighlights/BlogHighlights";
import PostDisplay from "../../components/PostDisplay/PostDisplay";

function Blogs() {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <BlogHighlights category={category} setCategory={setCategory} />
      <PostDisplay category={category} />
    </div>
  );
}

export default Blogs;
