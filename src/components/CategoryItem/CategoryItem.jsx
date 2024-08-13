import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import CategoryCourse from "../CategoryCourse/CategoryCourse";

function CategoryItem({ categories }) {
  const { food_list } = useContext(StoreContext);
  return (
    <div>
      {food_list.map((item, index) => {
        if (categories === item.category) {
          return (
            <CategoryCourse
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
  );
}

export default CategoryItem;
