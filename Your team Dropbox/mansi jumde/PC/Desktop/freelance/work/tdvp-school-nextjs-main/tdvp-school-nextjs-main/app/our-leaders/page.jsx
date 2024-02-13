import React from "react";
import Image from "next/image";

import HeroSection from "../components/HeroSection";

const OurLeaders = () => {
  return (
    <div>
      <HeroSection
        imageSrc="/images/ourLeaders/our-leaders-hero.png"
        title="Our Leaders"
      />

      <section
        className={`bg-[url("/images/ourLeaders/our-leaders-bg-1.png")] bg-cover bg-no-repeat bg-center w-full px-4 md:px-28`}
      >
        <div className=" ">
          <div className="py-8 flex justify-center items-center">
            <div className="w-full md:w-[40%]">
              <p className="text-lg md:text-2xl  text-center font-semibold">
                Our Leaders Insights{" "}
                <span className="text-[#FF0D00]">Chairman</span>,{" "}
                <span className="text-[#FF0D00]">Director</span>, &
                <span className="text-[#FF0D00]"> Principal</span>{" "}
              </p>
            </div>
          </div>

          <div className="mb-8 md:mb-16">
            <p className="font-bold text-lg md:text-2xl">CHAIRMAN MESSAGE</p>

            <div className="flex justify-start items-center w-full mt-2">
              <div className="bg-[#3CCF4E] h-[2px] w-40 rounded-full"></div>
              <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
            </div>

            <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-start my-4 md:my-8">
              <div className="text-sm">
                <p>
                  Our mission is to provide the children of India with the
                  necessary skills to face the challenges of 21st century. Doon
                  Valley group is enduring and grooming the children for more
                  than 25 Years and has made holistic education its mission.
                </p>

                <p className="my-4">
                  The Doon Valley School caters to the educational needs of over
                  4000 learners annually, we&apos;ve been entrusted with their
                  future, their careers & their lives ahead, We need to nurture
                  them as learners, inculcate values & arm them with the skills
                  that will help them make the nation proud.
                </p>
                <p className="my-4">
                  The management of TDVPS brings together a great learning
                  community. We strive to build independent, responsible global
                  citizens through a widely accepted curriculum & practices that
                  are based on learner-centric education. Our network of schools
                  aim to fuse the strong cultural fundamentals of Indian society
                  with advanced learning tools. As we open our doors to each new
                  generation of students, expectations run high as we believe
                  that each & every one of them will shine like the stars in our
                  sky. Every day, every year we scale heights unstoppable.
                </p>
                <p>Best Wishes!</p>
              </div>
              <div className="my-4 md:my-0 md:ms-12">
                <div className="w-full md:w-56">
                  <Image
                    src="/images/ourLeaders/our-leaders-2.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={300}
                  />
                </div>
                <div className="text-[#3CCF4E] text-sm text-center">
                  <p className="font-bold">Mr.Raj Kishor Gupta</p>
                  <p className="font-semibold">Chairman</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8 md:mb-16 flex flex-col">
            <p className="font-bold text-lg md:text-2xl">DIRECTOR MESSAGE</p>

            <div className="flex justify-start items-center w-full mt-2">
              <div className="bg-[#F4CE14] h-[2px] w-40 rounded-full"></div>
              <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
            </div>

            <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-start my-4 md:my-8">
              <div className="text-sm flex flex-col gap-4">
                <p>Dear Parents, Students, and Well-wishers,</p>
                <p>
                  We at The Doon Valley are quite proud of developing not just
                  young brains but also the responsible and morally pure adults.
                  We are steadfast in our commitment to establishing high moral
                  standards and encouraging a profound respect for our vibrant
                  Indian culture.
                </p>
                <p>
                  We think that the character and intellectual excellence should
                  go hand in hand. Our devoted faculty works hard to instill
                  integrity, compassion, and respect in addition to knowledge.
                  In order to celebrate the festivals, customs, and legacy that
                  make Indian culture so distinctive, we urge our students to
                  embrace the rich tapestry of Indian traditions.
                </p>
                <p>
                  By working together, we are creating a generation that aspires
                  to the stars and embodies the best aspects of our heritage.
                  Have the privilege to walk alone on this holistic education
                  journey with us, where cultural wisdom coexists with academic
                  excellence.
                </p>
              </div>

              <div className="my-4 md:my-0 md:ms-12">
                <div className="w-full md:w-56">
                  <Image
                    src="/images/ourLeaders/our-leaders-1.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={300}
                  />
                </div>
                <div className="text-[#F4CE14] text-sm text-center">
                  <p className="font-bold">Dr. Anurag Singhal</p>
                  <p className="font-semibold">Director</p>
                </div>
              </div>
            </div>

            <div className="text-sm flex flex-col gap-4">
              <p>
                Inspiring Story Of
                <span className="font-semibold">
                  {" "}
                  The Doon Valley Public School.
                </span>
              </p>

              <p>
                Doon Valley has become a guiding light after the successful 26
                years. The founder Late Shri Harsh Singhal Ji established the
                school in a small town Deoband to enrich society with the true
                essence of education among young minds.{" "}
              </p>

              <p>
                His dedication and relentless efforts have transformed his dream
                into reality with the name of The Doon Valley Public School,
                making it one of the most esteemed and progressive educational
                institution in western Uttar Pradesh.
              </p>

              <p>
                With his vision and commitment to bridge the gap between
                international educational standards and the rich cultural
                heritage of India, his brother and the chairman of the school
                Shri Raj Kishore Gupta ji has converted this dream into reality
              </p>

              <p>
                Under the guidance of Chairman Shri Raj Kishor Gupta Ji and
                strenuous efforts Director Shri Anurag Singhal Ji, The Chief
                Branch has been growing to heights with four more branches in
                Muzzaffarnagar (U.P.). It will undoubtedly leave a lasting
                legacy and continue to positively impact the lives of many
                students, contributing to their personal growth and the
                betterment of society as a whole.{" "}
                <span className="font-semibold">
                  {" "}
                  Late Shri Harsh Singhal Ji’s{" "}
                </span>
                dream has indeed become a symbol of excellence and a source of
                inspiration for generations to come.
              </p>
            </div>
          </div>

          <div className="pb-8 md:pb-16 flex flex-col">
            <p className="font-bold text-lg md:text-2xl">PRINCIPAL MESSAGE</p>

            <div className="flex justify-start items-center w-full mt-2">
              <div className="bg-[#5272F2] h-[2px] w-40 rounded-full"></div>
              <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
            </div>

            <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-start my-4 md:my-8">
              <div className="text-sm flex flex-col gap-4">
                <p>
                  I am delighted to share that our school is steadfastly
                  committed to upholding the highest educational standards set
                  forth by the Central Board of Secondary Education (CBSE). As
                  the Principal, it brings me immense pleasure to announce that
                  we are wholeheartedly embracing and implementing the latest
                  educational practices.
                </p>
                <p>
                  The CBSE curriculum evolves to meet the dynamic needs of the
                  ever-changing academic landscape. In line with this, our
                  dedicated faculty and staff have diligently incorporated the
                  newest guidelines and methodologies. These initiatives are
                  designed not only to enhance academic rigor but also to foster
                  holistic development among our students.
                </p>
                <p>
                  Our commitment remains steadfast in providing an enriching
                  learning environment that encourages critical thinking,
                  creativity, and skill development. We prioritize the
                  well-being and growth of every student entrusted to us, and
                  our efforts align closely with the nurturing of well-rounded
                  individuals equipped to excel in the modern world.
                </p>
                <p>
                  We encourage open communication and collaboration between
                  teachers, students, and parents to ensure that we collectively
                  uphold these standards and facilitate a meaningful educational
                  journey for our students.
                </p>

                <p>
                  I extend my heartfelt gratitude to our dedicated educators,
                  supportive parents, and enthusiastic students for their
                  unwavering commitment to academic excellence. Together, let us
                  continue to embrace and foster an environment where every
                  individual thrives.
                </p>
                <p className="flex flex-col ">
                  <span>With warm regards,</span>
                  <span className="font-semibold">Ms. Seema Sharma</span>
                </p>
              </div>
              <div className="my-4 md:my-0 md:ms-12">
                <div className="w-full md:w-56">
                  <Image
                    src="/images/ourLeaders/our-leaders-3.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={300}
                  />
                </div>
                <div className="text-[#5272F2] text-sm text-center">
                  <p className="font-bold">Ms. Seema Sharma</p>
                  <p className="font-semibold">Principal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurLeaders;
