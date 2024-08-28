import React from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

function FoodItem({ id, name, duration, description, image }) {
  return (
    <Link to={`/courses/${id}`}>
      <div className="food-item">
        <div className="food-item-container">
          <img className="food-item-image" src={image} alt="" />
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
          </div>
          <p className="food-item-description">{description}</p>
          <p className="food-item-price">{duration} hours</p>
        </div>
      </div>
    </Link>
  );
}

export default FoodItem;
