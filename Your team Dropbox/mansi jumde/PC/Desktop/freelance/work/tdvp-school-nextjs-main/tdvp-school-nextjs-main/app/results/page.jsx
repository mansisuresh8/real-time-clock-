import React from "react";
import Image from "next/image";

import HeroSection from "../components/HeroSection";

const Results = () => {
  return (
    <div>
      <HeroSection
        imageSrc="/images/results/result-hero-1.png"
        title="Results"
      />

      <section
        className={`bg-[url("/images/results/result-bg-1.png")] bg-cover bg-no-repeat bg-center w-full px-4 md:px-28 py-2 md:py-6`}
      >
        <section className="mt-4 md:mt-10 mb-8 md:mb-16">
          <div className="flex justify-start items-start flex-col">
            <p className="font-semibold md:font-bold text-lg md:text-2xl">
              10th And 12th class
            </p>

            <p className="text-sm text-[#3C5567] mt-1">2022-2023</p>
          </div>

          <div className="flex justify-start items-center w-full mt-2">
            <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
            <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
          </div>

          <div className="my-4 md:my-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="flex justify-center items-center md:items-start">
              <Image
                src="/images/results/result-1.png"
                alt=""
                className="object-contain w-full"
                width={200}
                height={300}
              />
            </div>
            <div className="flex justify-center items-center md:items-start">
              <Image
                src="/images/results/result-2.png"
                alt=""
                className="object-contain w-full"
                width={200}
                height={300}
              />
            </div>
          </div>
        </section>

        <section className="mt-4 md:mt-10 mb-8 md:mb-16">
          <div className="flex justify-start items-start flex-col">
            <p className="font-semibold md:font-bold text-lg md:text-2xl">
              10th And 12th class
            </p>

            <p className="text-sm text-[#3C5567] mt-1">2021-2022</p>
          </div>

          <div className="flex justify-start items-center w-full mt-2">
            <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
            <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
          </div>

          <div className="my-4 md:my-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="flex justify-center items-center md:items-start">
              <Image
                src="/images/results/result-3.png"
                alt=""
                className="object-contain w-full"
                width={200}
                height={300}
              />
            </div>
            <div className="flex justify-center items-center md:items-start">
              <Image
                src="/images/results/result-4.png"
                alt=""
                className="object-contain w-full"
                width={200}
                height={300}
              />
            </div>
          </div>
        </section>

        <section className="mt-4 md:mt-10 mb-8 md:mb-16">
          <div className="flex justify-start items-start flex-col">
            <p className="font-semibold md:font-bold text-lg md:text-2xl">
              10th And 12th class
            </p>

            <p className="text-sm text-[#3C5567] mt-1">2020-2021</p>
          </div>

          <div className="flex justify-start items-center w-full mt-2">
            <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
            <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
          </div>

          <div className="my-4 md:my-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="flex justify-center items-center md:items-start">
              <Image
                src="/images/results/result-5.png"
                alt=""
                className="object-contain w-full"
                width={200}
                height={300}
              />
            </div>
            <div className="flex justify-center items-center md:items-start">
              <Image
                src="/images/results/result-6.png"
                alt=""
                className="object-contain w-full"
                width={200}
                height={300}
              />
            </div>
          </div>
        </section>

        <section className="mt-4 md:mt-10 mb-8 md:mb-16">
          <div className="flex justify-start items-start flex-col">
            <p className="font-semibold md:font-bold text-lg md:text-2xl">
              10th And 12th class
            </p>

            <p className="text-sm text-[#3C5567] mt-1">2019-2020</p>
          </div>

          <div className="flex justify-start items-center w-full mt-2">
            <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
            <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
          </div>

          <div className="my-4 md:my-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="flex justify-center items-center md:items-start">
              <Image
                src="/images/results/result-7.png"
                alt=""
                className="object-contain w-full"
                width={200}
                height={300}
              />
            </div>
            <div className="flex justify-center items-center md:items-start">
              <Image
                src="/images/results/result-8.png"
                alt=""
                className="object-contain w-full"
                width={200}
                height={300}
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Results;
