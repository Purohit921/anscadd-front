import React from "react";
import "./BlogHighlights.css";
import { blog_list } from "../../assets/assets";

function BlogHighlights({ category, setCategory }) {
  console.log(category);
  return (
    <div>
      <div className="explore-menu" id="explore-menu">
        <h1>Highlights</h1>
        <p className="explore-menu-text">Highlights of auspicious events</p>
        <div className="explore-menu-list">
          {blog_list.map((item, index) => {
            return (
              <div
                onClick={() => {
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  );
                }}
                key={index}
                className="explore-menu-list-item"
              >
                <img
                  className={category === item.menu_name ? "active" : ""}
                  src={item.menu_image}
                  alt=""
                />
                <p>{item.menu_name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BlogHighlights;
