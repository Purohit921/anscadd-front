import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import { Link } from "react-router-dom";

function ExploreMenu({ category, setCategory }) {
  console.log(category);
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our courses</h1>
      <p className="explore-menu-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
        soluta tempore rerum!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <Link to={`/categories/${item.menu_id}`}>
              <div key={index} className="explore-menu-list-item">
                <p>{item.menu_name}</p>
                <div className="name_explored">
                  <div className="sub_menu">
                    <div>{item.menu_submenu_1}</div>
                    <div>{item.menu_submenu_2}</div>
                    <div>{item.menu_submenu_3}</div>
                  </div>
                  <img
                    className={category === item.menu_name ? "active" : ""}
                    src={item.menu_image}
                    alt=""
                  />
                </div>
                <button>Explore Category</button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ExploreMenu;
