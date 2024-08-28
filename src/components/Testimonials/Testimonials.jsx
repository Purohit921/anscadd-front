import React, { useRef, useState } from "react";
import { assets } from "../../assets/assets";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Testimonials.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Testimonials() {
  return (
    <div className="testimonials">
      <Swiper
        slidesPerView={1}
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
        <SwiperSlide>
          <div className="testimonial">
            <div className="profile">
              <div class="avatar">
                <img src={assets.header_img} alt="" />
              </div>
              <div class="testimonial_info">
                <h5>Name</h5>
                <small>student</small>
              </div>
            </div>
            <div class="testimonial_body">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
                voluptas est tenetur repellendus enim magni, officia iste labore
                cupiditate nihil!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <div class="avatar">
              <img src={assets.header_img} alt="" />
            </div>
            <div class="testimonial_info">
              <h5>Name</h5>
              <small>student</small>
            </div>
            <div class="testimonial_body">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
                voluptas est tenetur repellendus enim magni, officia iste labore
                cupiditate nihil!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <div class="avatar">
              <img src={assets.header_img} alt="" />
            </div>
            <div class="testimonial_info">
              <h5>Name</h5>
              <small>student</small>
            </div>
            <div class="testimonial_body">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
                voluptas est tenetur repellendus enim magni, officia iste labore
                cupiditate nihil!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <div class="avatar">
              <img src={assets.header_img} alt="" />
            </div>
            <div class="testimonial_info">
              <h5>Name</h5>
              <small>student</small>
            </div>
            <div class="testimonial_body">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
                voluptas est tenetur repellendus enim magni, officia iste labore
                cupiditate nihil!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <div class="avatar">
              <img src={assets.header_img} alt="" />
            </div>
            <div class="testimonial_info">
              <h5>Name</h5>
              <small>student</small>
            </div>
            <div class="testimonial_body">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
                voluptas est tenetur repellendus enim magni, officia iste labore
                cupiditate nihil!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <div class="avatar">
              <img src={assets.header_img} alt="" />
            </div>
            <div class="testimonial_info">
              <h5>Name</h5>
              <small>student</small>
            </div>
            <div class="testimonial_body">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
                voluptas est tenetur repellendus enim magni, officia iste labore
                cupiditate nihil!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimonials;
