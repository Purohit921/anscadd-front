import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Testimonials() {
  return (
    <div className="testimonials">
      <Swiper
        slidesPerView={3}
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
        <SwiperSlide>Testimonial 1</SwiperSlide>
        <SwiperSlide>Testimonial 2</SwiperSlide>
        <SwiperSlide>Testimonial 3</SwiperSlide>
        <SwiperSlide>Testimonial 4</SwiperSlide>
        <SwiperSlide>Testimonial 5</SwiperSlide>
        <SwiperSlide>Testimonial 6</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimonials;
