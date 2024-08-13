import { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Category() {
  const { menu_list } = useContext(StoreContext);
  const { categoryId } = useParams();
  const category = menu_list.find((e) => e.menu_id === categoryId);
  console.log(category);
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
      </div>
      <div className="app-land">
        <div className="App">
          <CategoryItem categories={category.menu_name} />
        </div>
      </div>
    </div>
  );
}

export default Category;
