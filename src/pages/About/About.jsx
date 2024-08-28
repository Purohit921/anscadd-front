import Header from "../../components/Header/Header.jsx";
import "./About.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { assets } from "../../assets/assets";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AboutHeader from "../../components/AboutHeader/AboutHeader.jsx";

function About() {
  return (
    <div className="header">
      <div className="header-contents">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-center">
            <img src={assets.header_img} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-center">
            <img src={assets.header_img} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-center">
            <img src={assets.header_img} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-center">
            <img src={assets.header_img} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-center">
            <img src={assets.header_img} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-center">
            <img src={assets.header_img} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-center">
            <img src={assets.header_img} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-center">
            <img src={assets.header_img} alt="" />
          </SwiperSlide>
        </Swiper>
        <div className="header-text">
          <h3>Start learning new things with</h3>
          <h2>ANS CADD</h2>
          <p>
            Study any topic, any time. Choose from best of expert-led courses
            now.
          </p>
          <input
            className="hero-input"
            type="text"
            placeholder="Search here any topic"
          />
        </div>
      </div>
      <div className="app-land">
        <div className="App">
          <section className="about_achievements">
            <div className="container about_achievements-container">
              <div className="about_achievements-left">
                <img src="./images/about achievements.svg" alt="" />
              </div>
              <div className="about_achievements-right">
                {/* <div className="achievements_cards">
                  <article className="achievements-card">
                    <span className="achievements-icon">
                      <i className="fa-solid fa-video"></i>
                    </span>
                    <h3>70+</h3>
                    <p>Courses</p>
                  </article>
                  <article className="achievements-card">
                    <span className="achievements-icon">
                      <i className="fa-solid fa-user"></i>
                    </span>
                    <h3>7,000+</h3>
                    <p>Students</p>
                  </article>
                  <article className="achievements-card">
                    <span className="achievements-icon">
                      <i className="fa-solid fa-award"></i>
                    </span>
                    <h3>2</h3>
                    <p>Branches</p>
                  </article>
                </div> */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
