import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import CategoryItem from "../../components/CategoryItem/CategoryItem";

function Category() {
  const { menu_list } = useContext(StoreContext);
  const { categoryId } = useParams();
  const category = menu_list.find((e) => e.menu_id === categoryId);
  console.log(category);
  return (
    <div className="app-land">
      <div className="App">
        <CategoryItem categories={category.menu_name} />
      </div>
    </div>
  );
}

export default Category;
