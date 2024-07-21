import React, { useRef, useState } from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function AppDownload() {
  return (
    <div className="app-download" id="app-download">
      <div className="left-content">
        <h2>Why choose us ?</h2>
        <p>
          We ANSCADD are constantly innovating and solving new challenges to
          bring creativity and high-quality education in the field of CADD
          design training for the technical environment. we projecting your
          design necessities throughout our CADD design solutions.
        </p>
        <div className="app-download-playform">
          <div className="icon">
            <i className="fa-solid fa-graduation-cap"></i>
            <span>Certification</span>
          </div>
          <div className="icon">
            <i className="fa-solid fa-graduation-cap"></i>
            <span>Certification</span>
          </div>
          <div className="icon">
            <i className="fa-solid fa-graduation-cap"></i>
            <span>Certification</span>
          </div>
        </div>
      </div>
      <div className="right-content">
        <h2>Notice Board</h2>
        <img src={assets.course_22} alt="" />
        <h3>Event</h3>
      </div>
    </div>
  );
}

export default AppDownload;
