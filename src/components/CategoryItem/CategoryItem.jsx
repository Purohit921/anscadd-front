import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import CategoryCourse from "../CategoryCourse/CategoryCourse";
import "./CategoryItem.css";

function CategoryItem({ categories }) {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display">
      <h2>Courses for you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (categories === item.category) {
            return (
              <CategoryCourse
                key={index}
                id={item.id}
                name={item.name}
                description={item.description}
                duration={item.duration}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default CategoryItem;
