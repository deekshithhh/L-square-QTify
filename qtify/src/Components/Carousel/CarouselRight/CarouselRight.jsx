import React, { useState, useEffect } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import RightArrow from "../../../assets/RightArrow.png";
import styles from "./Carouselright.module.css";

const RightCarouselArrow = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  }, []);

  return (
    <div className={styles.RightCarouselArrow}>
      {!isEnd && (
        <img
          src={RightArrow}
          alt="Next Arrow"
          onClick={() => swiper.slideNext()}
        />
      )}
    </div>
  );
};

export default RightCarouselArrow;
