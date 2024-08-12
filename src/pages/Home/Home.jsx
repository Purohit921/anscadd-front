import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import Welcome from "../../components/Welcome/Welcome";
import NoticeBoard from "../../components/NoticeBoard/NoticeBoard";

function Home() {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <Welcome />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
      <NoticeBoard />
    </div>
  );
}

export default Home;
