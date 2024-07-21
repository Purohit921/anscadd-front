import React, { useContext } from "react";
import "./PostDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import Post from "../Post/Post.jsx";

function PostDisplay({ category }) {
  const { post_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Precious moments</h2>
      <div className="food-display-list">
        {post_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <Post
                key={index}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default PostDisplay;
