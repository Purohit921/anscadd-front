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
      <SwiperSlide className="testimonials">Testimonial 1</SwiperSlide>
      <SwiperSlide className="testimonials">Testimonial 2</SwiperSlide>
      <SwiperSlide className="testimonials">Testimonial 3</SwiperSlide>
      <SwiperSlide className="testimonials">Testimonial 4</SwiperSlide>
      <SwiperSlide className="testimonials">Testimonial 5</SwiperSlide>
      <SwiperSlide className="testimonials">Testimonial 6</SwiperSlide>
    </Swiper>
  );
}

export default Testimonials;
