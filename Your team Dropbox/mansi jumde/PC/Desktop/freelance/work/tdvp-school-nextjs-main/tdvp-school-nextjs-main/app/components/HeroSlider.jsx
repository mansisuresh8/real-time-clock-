import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/swiper-bundle.css";

const HeroSlider = ({ slides, config }) => {
  return (
    <Swiper {...config} className="mySwiper">
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative">
            <Image
              src={slide.imageSrc}
              alt=""
              className="object-contain w-full"
              width={200}
              height={10}
            />
            <div className="absolute bottom-2 md:bottom-4 right-2 md:right-8 ">
              <p className="text-white flex justify-end items-end flex-col text-xs md:text-lg font-medium">
                <span className="text-[#FF0D00]">{slide.title}</span>
                <span>{slide.paragraph}</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
