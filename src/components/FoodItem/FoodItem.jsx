import React from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

function FoodItem({ id, name, price, description, image }) {
  return (
    <div className="food-item">
      <div className="food-item-container">
        <Link to={`/courses/${id}`}>
          <img className="food-item-image" src={image} alt="" />
        </Link>
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">{price} hours</p>
      </div>
    </div>
  );
}

export default FoodItem;
