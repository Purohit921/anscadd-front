import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets.js";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="footer-logo" src={assets.logo} alt="" />
          <p>
            Study any topic, any time. Choose from best of expert-led courses
            now.
          </p>
          <div className="footer-social-icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="footer-content-center">
          <h2>SERVICES</h2>
          <ul>
            <li>
              <Link to="">Engineering Services</Link>
            </li>
            <li>
              <Link to="">GIS Services</Link>
            </li>
            <li>
              <Link to="">Live Projects</Link>
            </li>
            <li>
              <Link to="">Web Development</Link>
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+91 9090-557-799</li>
            <li>anscadd@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ ANS CADD - All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
