"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Autoplay } from "swiper/modules";

import HeroSlider from "./components/HeroSlider";
import Slider from "./components/Slider";

const Home = () => {
  const [TypewriterText] = useTypewriter({
    words: ["Quality Education.", "Better Learning.", "Superior Instruction."],
    loop: false,
  });

  return (
    <div>
      <section
        className={`bg-[url("/images/home/home-bg-1.png")] bg-cover bg-no-repeat bg-center w-full`}
      >
        <div className="md:ps-20 flex justify-center md:justify-between items-center h-full flex-col md:flex-row">
          <div className="w-full md:w-1/2 px-4 py-6 md:py-14 md:me-16 flex flex-col justify-center md:justify-between items-start">
            <div className="w-2/3 cursor-pointer">
              <Image
                src="/images/home/home-hero-icon-1.png"
                alt=""
                className="object-contain w-full"
                width={200}
                height={10}
              />
            </div>

            <div className="flex justify-center items-start my-6 h-20 md:h-28 md:w-[400px]">
              <p className="uppercase text-white text-2xl md:text-4xl font-bold">
                Transforming Lives Through{" "}
                <span className="text-[#FF0D00]">
                  {TypewriterText} <Cursor cursorColor="#FF0D00" />
                </span>
              </p>
            </div>

            <div className="mb-4">
              <p className="text-[#DDDDDD] text-sm md:text-lg">
                Nurturing curiosity, igniting passion, and reaching for the
                stars with a supportive community and dedicated educators.
              </p>
            </div>

            <div className="mt-4">
              <Link href={"/enquiry"}>
                <button className="bg-white rounded py-3 px-8 font-medium">
                  Enquiry
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-[calc(50%+86px)] relative">
            <HomeHeroSlider />
          </div>
        </div>
      </section>

      <section
        className={`bg-[url("/images/home/home-bg-2.png")] bg-cover bg-no-repeat bg-center container mx-auto px-4 md:px-20 py-8 md:py-12 `}
      >
        <section className="flex justify-center items-center flex-col md:flex-row">
          <div className=" w-full md:w-1/2 md:m-12">
            <p className="font-semibold text-xl md:text-3xl">
              Welcome To The Doon Valley,
            </p>
            <p className="my-4 md:my-6 text-sm md:text-base">
              Doon Valley Public School, Deoband, is a co-educational English
              medium public school, which aims to facilitate each student to
              reach his /her potential. We aim to develop each member to develop
              its optimum and reach their desired goals in life. We strongly
              believe in nurturing each child to be a sound individual,
              mentally, physically and spiritually.
            </p>
            <p className="text-sm md:text-base my-4 md:my-0">
              The school offers an environment to its students which allows for
              their multifaceted growth and development into responsible
              citizens and professionals of tomorrow, where competition is
              favoured, achievement is applauded and individual dynamism is
              encouraged.
            </p>
          </div>
          <div className="w-full md:w-1/2  my-4 md:mx-0 md:m-12">
            <Image
              src="/images/home/home-image-1.png"
              alt=""
              className="object-contain w-full"
              width={200}
              height={10}
            />
          </div>
        </section>

        <section className="px-0 md:px-36">
          <div className="text-center gap-4 my-6 md:my-10">
            <p className="text-lg md:text-2xl font-semibold">
              Shri Harsh Kumar Singhal, an eminent educationist
            </p>

            <p className="my-4 md:my-6 text-sm md:text-base">
              Driven by a visionary&apos;s commitment to holistic education, The
              Doon Valley Public School strives for all-round student
              development under a highly qualified team, carving a global
              presence and fostering a new, dynamic India.
            </p>

            <p className="font-bold my-4 text-sm md:text-base">
              - Mr. Raj Kishor Gupta Chairman
            </p>
          </div>

          <div className="flex justify-center items-end gap-2 md:gap-8">
            <div>
              <Image
                src="/images/home/home-image-2.png"
                alt=""
                className="object-contain w-full"
                width={200}
                height={10}
              />
            </div>
            <div>
              <Image
                src="/images/home/home-image-3.png"
                alt=""
                className="object-contain w-full"
                width={200}
                height={10}
              />
            </div>
            <div>
              <Image
                src="/images/home/home-image-4.png"
                alt=""
                className="object-contain w-full"
                width={200}
                height={10}
              />
            </div>
          </div>

          {/* <div className="flex justify-center items-center">
            <div className="w-full ">
              <HomeImageSlider />
            </div>
          </div> */}
        </section>
      </section>
    </div>
  );
};

export default Home;

const HomeHeroSlider = () => {
  const homeHeroSlides = [
    {
      id: 1,
      imageSrc: "/images/home/home-hero-1.png",
      title: "Capturing the Magic:",
      paragraph: "Our Annual School Spectacle Unveiled!",
    },
    {
      id: 2,
      imageSrc: "/images/home/home-hero-2.png",
      title: "Blessings Captured:",
      paragraph: "Moments of Reverence in School Life.",
    },
    {
      id: 3,
      imageSrc: "/images/home/home-hero-3.png",
      title: "Welcoming Wisdom:",
      paragraph: "Capturing Special Moments with Our Guests.",
    },
    {
      id: 4,
      imageSrc: "/images/home/home-hero-4.png",
      title: "Dancing to Krishna's Melody:",
      paragraph: "Our School's Joyful Celebration.",
    },
    // {
    //   id: 5,
    //   imageSrc: "/images/home/home-hero-5.png",
    //   title: "Teaching Heroes:",
    //   paragraph: "Priceless Impact In Every Click.",
    // },
  ];

  const homeHeroSliderConfig = {
    slidesPerView: 1,
    modules: [Autoplay],
    loop: true,
    speed: 2000,
    autoplay: { delay: 5000 },
  };

  return (
    <div>
      <HeroSlider slides={homeHeroSlides} config={homeHeroSliderConfig} />
    </div>
  );
};

const HomeImageSlider = () => {
  const homeImageSlides = [
    {
      id: 1,
      imageSrc: "/images/home/home-image-2.png",
    },
    {
      id: 2,
      imageSrc: "/images/home/home-image-3.png",
    },
    {
      id: 3,
      imageSrc: "/images/home/home-image-4.png",
    },
  ];

  const homeImageSliderConfig = {
    slidesPerView: 1,
    modules: [Autoplay],
    loop: true,
    speed: 2000,
    autoplay: { delay: 5000 },
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };

  return (
    <div>
      <p>Update</p>
      <Slider slides={homeImageSlides} config={homeImageSliderConfig} />
    </div>
  );
};
