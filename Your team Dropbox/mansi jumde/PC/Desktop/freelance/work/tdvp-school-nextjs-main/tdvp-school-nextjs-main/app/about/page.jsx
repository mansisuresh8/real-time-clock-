import React from "react";
import Image from "next/image";
import HeroSection from "../components/HeroSection";

const About = () => {
  return (
    <div>
      <HeroSection imageSrc="/images/about/about-1.png" title="About Us" />
      <section
        className={`bg-[url("/images/about/about-bg-2.png")] bg-cover bg-no-repeat bg-center w-full px-4 md:px-28 py-8 md:py-12`}
      >
        <section className="flex flex-col justify-between items-start">
          <div className="flex justify-center md:justify-between items-start flex-col md:flex-row w-full">
            <div className="w-full md:w-[40%] md:pe-8">
              <p className="text-xl md:text-3xl ">
                Inspiring Story Of The{" "}
                <span className="font-semibold text-red-500">
                  Doon Valley Public School.
                </span>
              </p>
              <p className="my-4 md:my-6 text-sm text-[#3C5567]">
                Shri Harsh Singhal to provide high-quality education infused
                with Indian culture and values to the students of Deoband, a
                small town. His dedication and relentless efforts have
                transformed this dream into reality with the name of The Doon
                Valley Public School, making it one of the most esteemed and
                progressive educational institutions in western Uttar Pradesh.
              </p>
              <p className="text-sm text-[#3C5567]">
                With this vision and commitment to bridge the gap between
                international educational standards and the rich cultural
                heritage of India. His brother and the chairman of the school
                Shri Raj Kishore Gupta has converted this dream into reality.
              </p>
            </div>

            <div className="my-5 md:my-0 md:w-[60%]">
              <Image
                src="/images/about/about-2.png"
                alt=""
                className="object-contain w-full"
                width={200}
                height={100}
              />
            </div>
          </div>

          <div className="mt-0 md:mt-8 ">
            <p className="text-sm  text-[#3C5567]">
              Under the guidance of Chairman Shri Raj Kishor Gupta and Director
              Shri Anurag Singhal, this journey continues with four more
              branches in Muzzaffarnagar (U.P.). It will undoubtedly leave a
              lasting legacy and continue to positively impact the lives of many
              students, contributing to their personal growth and the betterment
              of society as a whole. Shri Harsh Singhal&apos;s dream has indeed
              become a symbol of excellence and a source of inspiration for
              generations to come.
            </p>
          </div>
        </section>

        <div className="my-4 md:my-8">
          <p className="text-lg md:text-2xl text-[#10171D] text-center md:text-start">
            We aim at producing{" "}
            <span className="font-semibold text-[#FF0D00]">
              engaged, productive and contributing citizens for building an
              equitable,
            </span>{" "}
            inclusive & plural society as envisaged by our constitution.
          </p>
        </div>

        <section className="my-6 md:my-10 flex justify-start items-start">
          <div className="hidden md:block me-8 w-[300px]">
            <Image
              src="/images/about/about-icon-1.png"
              alt=""
              className="object-contain w-full"
              width={200}
              height={10}
            />
          </div>
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="w-full md:col-span-2">
                <div className="flex justify-start items-center">
                  <div className="md:hidden w-8 me-4">
                    <Image
                      src="/images/about/about-icon-1.png"
                      alt=""
                      className="object-contain w-full"
                      width={200}
                      height={10}
                    />
                  </div>
                  <p className="text-[#10171D] text-xl font-bold">VISION</p>
                </div>
                <div>
                  <p className="my-4 md:my-6 text-sm text-[#3C5567]">
                    We at The Doon Valley envision an education system rooted in
                    Indian ethos that contribute making India into an equitable
                    and vibrant knowledgeable society. Our vision is to create a
                    dynamic and transformative learning community that nurtures
                    exceptional leadership qualities in every student. We aspire
                    to be a hub of innovation, guiding young minds to cultivate
                    the skills, values, and mindset essential for success in the
                    21st century and beyond.
                  </p>
                  <p className="my-4 md:my-6 text-sm  text-[#3C5567]">
                    Our educational approach revolves around a curriculum and
                    pedagogy that prioritize the comprehensive development of
                    the students. We strive to equip them with 21st-century
                    skills while eliminating undue academic pressure, promoting
                    essential learning, and emphasizing critical thinking
                    through experiential learning. Here we adopt interactive and
                    holistic approach by integrating across subjects to develop
                    rigorous outlook.
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center w-full ">
                <div className="w-1/2 md:w-3/4">
                  <Image
                    src="/images/about/about-3.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-6 md:my-10 flex justify-between items-start">
          <div className="hidden md:block me-8 w-60">
            <Image
              src="/images/about/about-icon-2.png"
              alt=""
              className="object-contain w-full"
              width={200}
              height={10}
            />
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="w-full md:col-span-2">
                <div className=" flex justify-start items-center">
                  <div className="md:hidden w-8 me-4">
                    <Image
                      src="/images/about/about-icon-2.png"
                      alt=""
                      className="object-contain w-full"
                      width={200}
                      height={10}
                    />
                  </div>
                  <p className="text-[#10171D] text-xl font-bold">MISSION</p>
                </div>
                <p className="my-4 md:my-6 text-sm  text-[#3C5567]">
                  We at Doon Valley move forward with a mission to develop good
                  human beings capable of rational thought and action possessing
                  compassion and empathy, courage and resilience, scientific
                  temper and creative imagination with sound ethical moorings
                  and values.
                </p>
                <p className="my-4 md:my-6 text-sm  text-[#3C5567]">
                  Our mission is to empower students to become scientists,
                  innovators, visionary leaders, courageous risk-takers,
                  talented artists, inspirational champions, and compassionate
                  individuals who can create a meaningful impact in society. We
                  believe in equipping our students with the skills and
                  knowledge necessary to make this world a better place to live
                  for all.
                </p>
                <p className="my-4 md:my-6 text-sm  text-[#3C5567]">
                  The Doon Valley Public School embodies the philosophy that
                  &apos;Success is a journey, not a destination.&apos; We uphold
                  the principles of &quot;Perception and Perfection,&quot;
                  continually monitoring and maintaining the quality of
                  education, ensuring that our standards are unwaveringly high.
                </p>
              </div>

              <div className="flex justify-center items-center">
                <div className="w-1/2 md:w-3/4">
                  <Image
                    src="/images/about/about-4.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
