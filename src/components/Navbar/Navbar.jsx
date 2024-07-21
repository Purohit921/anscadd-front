import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  useEffect(() => {
    closeMenu();
  }, [menu]);
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" />
      <i class="fa-solid fa-bars nav-mob-open" onClick={openMenu}></i>

      <ul ref={menuRef} className="navbar-menu">
        <i class="fa-solid fa-xmark nav-mob-close" onClick={closeMenu}></i>

        <li
          onClick={() => {
            setMenu("home");
          }}
          className={menu === "home" ? "active" : ""}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => {
            setMenu("about");
          }}
          className={menu === "about" ? "active" : ""}
        >
          <Link to="/about">About</Link>
        </li>
        <li
          onClick={() => {
            setMenu("courses");
          }}
          className={menu === "courses" ? "active" : ""}
        >
          <Link to="/courses">Courses</Link>
        </li>
        <li
          onClick={() => {
            setMenu("contact-us");
          }}
          className={menu === "contact-us" ? "active" : ""}
        >
          <Link to="/contact">Contact Us</Link>
        </li>
        <li
          onClick={() => {
            setMenu("blogs");
          }}
          className={menu === "blogs" ? "active" : ""}
        >
          <Link to="/blogs">Blogs</Link>
        </li>
      </ul>
      <div className="navbar-right">
        <img className="navbar-search-icon" src={assets.search_icon} alt="" />
        <button className="sign-in">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
