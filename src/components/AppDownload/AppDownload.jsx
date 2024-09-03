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
            <i className="fa-solid fa-chalkboard-user"></i>
            <span>Expert Instructor</span>
          </div>
          <div className="icon">
            <i className="fa-solid fa-headset"></i>
            <span>Lifetime Support</span>
          </div>
        </div>
      </div>
      <div className="req-container">
        <h2 className="request-info">Request Information</h2>
        <div className="form">
          <form className="contact_form">
            <div className="form_name">
              <input
                type="text"
                name="First name"
                id=""
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="Last name"
                id=""
                placeholder="Last Name"
                required
              />
            </div>
            <input
              type="email"
              name="Email Address"
              id=""
              placeholder="Email Address"
              required
            />
            <input
              type="tel"
              name="phone number"
              id=""
              placeholder="Your phone number"
              required
            />
            <input
              type="date"
              name="date"
              placeholder="Choose a date"
              id=""
              required
            />
            <select name="branch" id="" required>
              <option selected disabled>
                Choose Department
              </option>
              <option value="">Civil Engineering</option>
              <option value="">Mechanical Engineering</option>
              <option value="">Electrical Engineering</option>
              <option value="">Diploma</option>
              <option value="">Master Diploma</option>
              <option value="">Web Development</option>
            </select>
            <textarea
              name="message"
              rows="7"
              id=""
              placeholder="Your Message"
            ></textarea>
            <button type="submit" className="btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AppDownload;
