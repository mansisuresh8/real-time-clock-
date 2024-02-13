import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/swiper-bundle.css";

const Slider = ({ slides, config }) => {
  return (
    <Swiper {...config} className="mySwiper">
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Image
            src={slide.imageSrc}
            alt=""
            className="object-contain w-full"
            width={200}
            height={10}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
