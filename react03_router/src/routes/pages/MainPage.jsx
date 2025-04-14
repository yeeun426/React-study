import React from "react";
import { Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import css from "./Main.module.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MainPage = () => {
  return (
    <div>
      <h2>MainPage</h2>
      <div>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
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
          className={css.slider}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
      <nav>
        <a href="">리스트</a>
        <a href="">리스트</a>
        <a href="">리스트</a>
      </nav>
      <div>아래는 outlet 영역입니다.</div>
      <Outlet />
    </div>
  );
};

export default MainPage;
