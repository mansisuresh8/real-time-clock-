import React from "react";
import Image from "next/image";
import Link from "next/link";

import HeroSection from "../components/HeroSection";
import { FaArrowRight } from "react-icons/fa6";

const NewsEvents = () => {
  return (
    <div>
      <HeroSection
        imageSrc="/images/newsEvent/news-event-hero-1.png"
        title="News & Events"
      />

      <section
        className={`bg-[url("/images/newsEvent/news-event-bg-1.png")] bg-cover bg-no-repeat bg-center w-full py-2 md:py-6`}
      >
        <div className=" px-4 md:px-28">
          {/* Annual Function */}
          <section className="my-8">
            <div className="flex justify-start items-start flex-col">
              <p className="font-semibold md:font-bold text-lg md:text-2xl">
                Annual Function
              </p>
              <p className="text-[#3C5567] text-sm md:text-base">
                Celebrating Bharat@100: Envisioning India&apos;s Future
              </p>
            </div>

            <div className="flex justify-start items-center w-full mt-2">
              <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
              <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
            </div>

            <div className="my-4 md:my-8 ">
              <section className="grid grid-cols-1 md:grid-cols-5 md:gap-4">
                <div className="w-full">
                  <Image
                    src="/images/newsEvent/news-event-1.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="my-4 md:my-0 md:col-span-4">
                  <p className="text-sm text-[#3C5567]">
                    Our Annual Function{" "}
                    <span className="font-semibold">
                      {" "}
                      &quot;Bharat@100&quot;{" "}
                    </span>{" "}
                    was a vibrant portrayal of our aspirations and dreams for
                    envisioning the nation&apos;s path and progress as it
                    celebrates its centenary of independence. The aim of this
                    event was to instill in our students a sense of
                    responsibility and commitment towards contributing
                    positively to the future of our beloved nation.
                  </p>

                  <p className="text-sm text-[#3C5567] my-2 md:my-4">
                    This portrayal ignited the spark of imagination and ambition
                    in every young mind to be a catalyst for India&apos;s
                    progress our students showcased their talents through
                    stirring speeches, melodious songs, and vibrant dance
                    performances, embodying the essence of patriotism and
                    national pride.
                  </p>

                  <p className="text-sm text-[#FF0D00] font-semibold italic">
                    The Program was witnessed by officials, Dignitaries from
                    various departments and our parents.
                  </p>
                </div>
              </section>
            </div>

            <section className="mb-8 md:mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <Image
                    src="/images/newsEvent/news-event-2.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  <Image
                    src="/images/newsEvent/news-event-3.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  <Image
                    src="/images/newsEvent/news-event-4.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  <Image
                    src="/images/newsEvent/news-event-5.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </section>
          </section>

          {/* Independence Day */}
          <section className="my-8">
            <div className="flex justify-start items-start flex-col">
              <p className="font-semibold md:font-bold text-lg md:text-2xl">
                Independence Day
              </p>
              <p className="text-[#3C5567] text-sm md:text-base">15 Aug 2023</p>
            </div>

            <div className="flex justify-start items-center w-full mt-2">
              <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
              <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
            </div>

            <div className="my-4 md:my-8 ">
              <section className="grid grid-cols-1 md:grid-cols-5 md:gap-4">
                <div className="my-4 md:my-0 md:col-span-4">
                  <p className="text-sm text-[#3C5567]">
                    We are elated to share the joyous celebrations of{" "}
                    <span className="font-semibold">
                      India&apos;s 77th Independence Day at The Doon Valley.
                    </span>{" "}
                    This year&apos;s commemoration was a testament to our unity,
                    diversity, and the indomitable spirit that defines our great
                    nation. With flag hoisting ceremonies, cultural
                    performances, and patriotic presentations, we paid homage to
                    the sacrifices of our freedom fighters and reaffirmed our
                    commitment to upholding the values of liberty, equality, and
                    fraternity.
                  </p>
                  <p className="text-sm text-[#3C5567] my-2">
                    Our students showcased their talents through stirring
                    speeches, melodious songs, and vibrant dance performances,
                    embodying the essence of patriotism and national pride.
                    Through various activities and discussions, we reaffirmed
                    our pledge to contribute positively to India&apos;s growth
                    and progress.
                  </p>
                </div>

                <div className="order-first md:order-last">
                  <Image
                    src="/images/newsEvent/news-event-6.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={200}
                  />
                </div>
              </section>
            </div>

            <section className="mb-8 md:mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <Image
                    src="/images/newsEvent/news-event-7.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  <Image
                    src="/images/newsEvent/news-event-8.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  <Image
                    src="/images/newsEvent/news-event-9.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  <Image
                    src="/images/newsEvent/news-event-10.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </section>
          </section>
        </div>

        <div className="bg-[#F4F6F9] flex justify-between items-center px-4 md:px-44 my-4 md:my-8">
          <div>
            <p className="text-sm md:text-base flex justify-start items-center">
              <span className="hidden md:block">
                Discover, Inquire, Enroll: Elevate Your Future with a
              </span>
              <span className="ms-1">School Admission</span>{" "}
              <span className="font-semibold ms-1"> Inquiry Call.</span>
            </p>
          </div>
          <div>
            <Link href={"/enquiry"}>
              <button className="bg-[#FF0D00] text-white py-3 md:py-5 px-6 md:px-8 flex justify-center items-center">
                <span className="whitespace-nowrap">Book A Call</span>
                <div className=" ms-2">
                  <FaArrowRight />
                </div>
              </button>
            </Link>
          </div>
        </div>

        <div className=" px-4 md:px-28">
          <section className="my-8">
            <div className="flex justify-start items-start flex-col">
              <p className="text-lg md:text-xl">
                Empowering Minds, Igniting Insights: Unveiling the Latest in
                Education News!
              </p>
            </div>

            <div className="flex justify-start items-center w-full mt-2">
              <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
              <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
            </div>

            <div className="my-4 md:my-8 ">
              <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="">
                  <Image
                    src="/images/newsEvent/news-event-11.png"
                    alt=""
                    className="object-cover h-32 md:h-44 w-96"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="">
                  <Image
                    src="/images/newsEvent/news-event-12.png"
                    alt=""
                    className="object-cover h-32 md:h-44 w-96"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="">
                  <Image
                    src="/images/newsEvent/news-event-13.png"
                    alt=""
                    className="object-cover h-32 md:h-44 w-96"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="">
                  <Image
                    src="/images/newsEvent/news-event-14.png"
                    alt=""
                    className="object-cover h-32 md:h-44 w-96"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="">
                  <Image
                    src="/images/newsEvent/news-event-15.png"
                    alt=""
                    className="object-cover h-32 md:h-44 w-96"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="">
                  <Image
                    src="/images/newsEvent/news-event-16.png"
                    alt=""
                    className="object-cover h-32 md:h-44 w-96"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="">
                  <Image
                    src="/images/newsEvent/news-event-17.png"
                    alt=""
                    className="object-cover h-32 md:h-44 w-96"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="">
                  <Image
                    src="/images/newsEvent/news-event-18.png"
                    alt=""
                    className="object-cover h-32 md:h-44 w-96"
                    width={200}
                    height={200}
                  />
                </div>
              </section>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default NewsEvents;
