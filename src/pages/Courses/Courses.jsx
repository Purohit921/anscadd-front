import React, { useState } from "react";
import "./Courses.css";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

function Courses() {
  const [category, setCategory] = useState("All");
  return (
    <div className="app-land">
      <div className="App">
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
      </div>
    </div>
  );
}

export default Courses;
