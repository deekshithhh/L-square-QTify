import React, { useState, useEffect } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import LeftArrow from "../../../assets/LeftArrow.png";

import styles from "./CarouselLeft.module.css";

const LeftCarouselArrow = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBeginning(swiper.isBeginning);
    });
  }, []);

  return (
    <div className={styles.LeftCarouselArrow}>
      {!isBeginning && (
        <img
          src={LeftArrow}
          alt="Prev Arrow"
          onClick={() => swiper.slidePrev()}
        />
      )}
    </div>
  );
};

export default LeftCarouselArrow;
