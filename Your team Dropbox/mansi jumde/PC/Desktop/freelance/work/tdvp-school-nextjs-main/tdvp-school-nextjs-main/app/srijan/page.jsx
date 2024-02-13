import React from "react";
import Image from "next/image";

import HeroSection from "../components/HeroSection";

const Srijan = () => {
  return (
    <div>
      <HeroSection imageSrc="/images/srijan/srijan-hero-1.png" title="Srijan" />
      <section
        className={`bg-[url("/images/srijan/srijan-bg-1.png")] bg-cover bg-no-repeat bg-center w-full py-2 md:py-6 px-4 md:px-28`}
      >
        <section className="my-8">
          <div className="flex justify-start items-start flex-col">
            <p className="font-bold text-lg md:text-2xl">Srijan</p>
          </div>

          <div className="flex justify-start items-center w-full mt-2">
            <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
            <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
          </div>

          <div className="my-4 md:my-8">
            <p className="text-sm text-[#3C5567]">
              The Unique Art Fest is a mesmerizing two-day celebration of
              creativity, uniting renowned and emerging artists in a dynamic
              showcase of live paintings. Students and parents were not just
              spectators; they actively engaged with the artists, absorbing
              their techniques and unique styles, fostering a deep appreciation
              for the diverse world of art. This festival was an immersive
              journey into the heart of artistic expression, leaving an
              indelible mark on all who participated, from artists to attendees.
            </p>
          </div>

          <section className="my-4 md:my-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <Image
                  src="/images/srijan/srijan-1.png"
                  alt=""
                  className="object-contain w-full"
                  width={200}
                  height={10}
                />
              </div>
              <div>
                <Image
                  src="/images/srijan/srijan-2.png"
                  alt=""
                  className="object-contain w-full"
                  width={200}
                  height={10}
                />
              </div>
              <div>
                <Image
                  src="/images/srijan/srijan-3.png"
                  alt=""
                  className="object-contain w-full"
                  width={200}
                  height={10}
                />
              </div>
              <div>
                <Image
                  src="/images/srijan/srijan-4.png"
                  alt=""
                  className="object-contain w-full"
                  width={200}
                  height={10}
                />
              </div>
              <div>
                <Image
                  src="/images/srijan/srijan-5.png"
                  alt=""
                  className="object-contain w-full"
                  width={200}
                  height={10}
                />
              </div>
              <div>
                <Image
                  src="/images/srijan/srijan-6.png"
                  alt=""
                  className="object-contain w-full"
                  width={200}
                  height={10}
                />
              </div>
              <div>
                <Image
                  src="/images/srijan/srijan-7.png"
                  alt=""
                  className="object-contain w-full"
                  width={200}
                  height={10}
                />
              </div>
              <div>
                <Image
                  src="/images/srijan/srijan-8.png"
                  alt=""
                  className="object-contain w-full"
                  width={200}
                  height={10}
                />
              </div>
              <div>
                <Image
                  src="/images/srijan/srijan-9.png"
                  alt=""
                  className="object-contain w-full"
                  width={200}
                  height={10}
                />
              </div>
              <div>
                <Image
                  src="/images/srijan/srijan-10.png"
                  alt=""
                  className="object-contain w-full"
                  width={200}
                  height={10}
                />
              </div>
              <div>
                <Image
                  src="/images/srijan/srijan-11.png"
                  alt=""
                  className="object-contain w-full"
                  width={200}
                  height={10}
                />
              </div>
              <div>
                <Image
                  src="/images/srijan/srijan-12.png"
                  alt=""
                  className="object-contain w-full"
                  width={200}
                  height={10}
                />
              </div>
              <div>
                <Image
                  src="/images/srijan/srijan-14.png"
                  alt=""
                  className="object-contain w-full"
                  width={200}
                  height={10}
                />
              </div>
              <div>
                <Image
                  src="/images/srijan/srijan-15.png"
                  alt=""
                  className="object-contain w-full"
                  width={200}
                  height={10}
                />
              </div>
              <div>
                <Image
                  src="/images/srijan/srijan-16.png"
                  alt=""
                  className="object-contain w-full"
                  width={200}
                  height={10}
                />
              </div>
              <div>
                <Image
                  src="/images/srijan/srijan-17.png"
                  alt=""
                  className="object-contain w-full"
                  width={200}
                  height={10}
                />
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Srijan;
