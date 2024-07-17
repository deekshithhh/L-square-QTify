import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import RightCarouselArrow from "./CarouselRight/CarouselRight";
import LeftCarouselArrow from "./CarouselLeft/CarouselLeft";
// Import Swiper styles
import "swiper/css";

const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);
};

const Carousel = ({ Album, renderComponent }) => {
  console.log(Album, "Album");

  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={6}
      modules={[Navigation]}
      initialSlide={0}
      style={{ padding: "0px 20px" }}
      allowTouchMove
    >
      <Controls data={Album} />
      <LeftCarouselArrow />
      <RightCarouselArrow />
      {Album.map((ele) => (
        <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Carousel;
