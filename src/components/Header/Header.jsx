import "./Header.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { assets } from "../../assets/assets";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Header() {
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
          <h3>ANS CADD</h3>
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
    </div>
  );
}

export default Header;
