import "./Header.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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
          <input className="hero-input" type="text" placeholder="Search here any topic" />
        </div>
      </div>
    </div>
  );
}

export default Header;
