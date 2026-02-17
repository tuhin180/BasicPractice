import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slides from "../Slides";
import { heroSlides } from "../../lib/Lib";
import { LeftArrowIcon, RightArrowIcon } from "../../lib/IconProvider";

const Hero = () => {
  const swiperRef = useRef(null);
  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };
  const handleNext = () => {
    swiperRef.current?.slideNext();
  };
  return (
    <div className="relative">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={{
          type: "fraction",
        }}
        modules={[Pagination, Navigation]}
        loop={true}
        className="mySwiper"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Slides slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90  rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:bg-pink-600 cursor-pointer"
      >
        {LeftArrowIcon("#FF5A3C", 24, 24)}
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90  rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:bg-pink-600 cursor-pointer"
      >
        {RightArrowIcon("#FF5A3C", 24, 24)}
      </button>
    </div>
  );
};

export default Hero;
