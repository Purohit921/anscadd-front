import Header from "../../components/Header/Header.jsx";
import "./About.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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
          <SwiperSlide className="text-majhi">Banner 1</SwiperSlide>
          <SwiperSlide className="text-majhi">Banner 2</SwiperSlide>
          <SwiperSlide className="swiper-center">Banner 3</SwiperSlide>
          <SwiperSlide className="swiper-center">Banner 4</SwiperSlide>
          <SwiperSlide className="swiper-center">Banner 5</SwiperSlide>
          <SwiperSlide className="swiper-center">Banner 6</SwiperSlide>
          <SwiperSlide className="swiper-center">Banner 7</SwiperSlide>
          <SwiperSlide className="swiper-center">Banner 8</SwiperSlide>
        </Swiper>
        <div className="header-text">
          <h2>Start learning new things with</h2>
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
                <h1>Achievements</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                  modi aperiam repudiandae ut totam praesentium quibusdam quae
                  sequi! Cumque nesciunt doloribus quis reiciendis, odio optio.
                </p>
                <div className="achievements_cards">
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
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
