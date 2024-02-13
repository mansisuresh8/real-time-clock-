import React from "react";
import Image from "next/image";

import HeroSection from "../components/HeroSection";

const Infrastructure = () => {
  return (
    <div>
      <HeroSection
        imageSrc="/images/infrastructure/infrastructure-hero-1.png"
        title="Infrastructure"
      />

      <section
        className={`bg-[url("/images/infrastructure/infrastructure-bg-1.png")] bg-cover bg-no-repeat bg-center w-full px-4 md:px-28 py-2 md:py-6`}
      >
        {/* Science labs */}
        <section className="my-8">
          <div className="flex justify-start items-center">
            <div className="w-5 md:w-6">
              <Image
                src="/images/infrastructure/infrastructure-icon-1.png"
                alt=""
                className="object-contain w-full"
                width={20}
                height={20}
              />
            </div>
            <p className="font-semibold md:font-bold text-lg md:text-2xl ms-2">
              Vigyanshala - Science labs
            </p>
          </div>

          <div className="flex justify-start items-center w-full mt-2">
            <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
            <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
          </div>

          <div className="my-4 md:my-8">
            <p className="text-sm text-[#3C5567]">
              The saying goes, &quot;I hear, I forget. I see, I remember. I do,
              I understand.&quot; Our PHYSICS, CHEMISTRY AND BIOLOGY labs offer
              students the invaluable opportunity to directly engage with
              materials and data using cutting-edge equipment, data collection
              techniques, models, and scientific theories. Our well-equipped
              labs empower students to immerse themselves in hands-on learning,
              enhancing their retention of subject matter, instilling a sense of
              accomplishment upon task completion, and facilitating the transfer
              of their experiences to other educational contexts. Our science
              education curriculum is designed to promote scientific literacy
              for all, forming an integral part of a liberal education, and
              equipping students with the skills necessary for further study and
              research endeavors.
            </p>
          </div>

          <section className="mb-8 md:mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ImageWithCaption
                src="/images/infrastructure/infrastructure-1.png"
                caption="Physics Lab"
              />
              <ImageWithCaption
                src="/images/infrastructure/infrastructure-2.png"
                caption="Biology Lab"
              />
              <ImageWithCaption
                src="/images/infrastructure/infrastructure-3.png"
                caption="Chemistry Lab"
              />
            </div>
          </section>
        </section>

        {/* Creative Art Studio*/}
        <section className="mb-8 md:mb-12">
          <div className="flex justify-start items-center">
            <div className="w-5 md:w-6">
              <Image
                src="/images/infrastructure/infrastructure-icon-2.png"
                alt=""
                className="object-contain w-full"
                width={20}
                height={20}
              />
            </div>
            <p className="font-semibold md:font-bold text-lg md:text-2xl ms-2">
              Kalakriti - Creative Art Studio
            </p>
          </div>

          <div className="flex justify-start items-center w-full mt-2">
            <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
            <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
          </div>

          <div className="my-4 md:my-8">
            <p className="text-sm text-[#3C5567]">
              Our Creative Art Studio is an aesthetically designed space to
              nurture the creative thinking of our learners. It is fully
              equipped with a variety of materials for learners to explore art
              using different mediums. The art gallery in the studio showcases
              and celebrates learner’s creativity and artistic expression.
            </p>
          </div>

          <section className="my-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ImageWithCaption
                src="/images/infrastructure/infrastructure-4.png"
                caption=""
              />
              <ImageWithCaption
                src="/images/infrastructure/infrastructure-5.png"
                caption=""
              />
              <ImageWithCaption
                src="/images/infrastructure/infrastructure-6.png"
                caption=""
              />
            </div>
          </section>
        </section>

        {/* Dance Studio */}
        <section className="mb-8 md:mb-12">
          <div className="flex justify-start items-center">
            <div className="w-5 md:w-6">
              <Image
                src="/images/infrastructure/infrastructure-icon-3.png"
                alt=""
                className="object-contain w-full"
                width={20}
                height={20}
              />
            </div>
            <p className="font-semibold md:font-bold text-lg md:text-2xl ms-2">
              Nritya Manjari - Dance Studio
            </p>
          </div>

          <div className="flex justify-start items-center w-full mt-2">
            <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
            <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
          </div>

          <div className="my-4 md:my-8">
            <p className="text-sm text-[#3C5567]">
              Our Dance Studio is designed keeping in mind the different dance
              techniques, expressions and performances. It is a spacious
              well-lit room equipped with features like mirror wall and sound
              system for a wholesome creative experience where our learners
              become confident performers.
            </p>
          </div>

          <section className="my-5">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-5">
              <ImageWithCaption
                src="/images/infrastructure/infrastructure-nritya-1.png"
                caption=""
              />
              <ImageWithCaption
                src="/images/infrastructure/infrastructure-nritya-2.png"
                caption=""
              />
              <ImageWithCaption
                src="/images/infrastructure/infrastructure-nritya-3.png"
                caption=""
              />
              <ImageWithCaption
                src="/images/infrastructure/infrastructure-nritya-4.png"
                caption=""
              />
              <div className="hidden md:block">
                <ImageWithCaption
                  src="/images/infrastructure/infrastructure-nritya-5.png"
                  caption=""
                />
              </div>
            </div>
          </section>
        </section>

        {/* Multipurpose Performing Art Auditorium */}
        <section className="my-8 md:mb-12">
          <div className="flex justify-start items-center">
            <div className="w-5 md:w-6">
              <Image
                src="/images/infrastructure/infrastructure-icon-4.png"
                alt=""
                className="object-contain w-full"
                width={20}
                height={20}
              />
            </div>
            <p className="font-semibold md:font-bold text-lg md:text-2xl ms-2">
              Rangmanch - Multipurpose Performing Art Auditorium
            </p>
          </div>

          <div className="flex justify-start items-center w-full mt-2">
            <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
            <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
          </div>

          <div className="my-4 md:my-8">
            <p className="text-sm text-[#3C5567]">
              Our auditorium isn&apos;t just a room with seats; it&apos;s a
              place where dreams take flight. It serves as the backdrop for a
              wide range of events including cultural events, debates, and
              presentations, CBSE workshops, training sessions and many more.
              Our auditorium ensures that every event is a success. Whether
              you&apos;re a performer or audience, you&apos;ll enjoy a seamless
              experience.
            </p>
          </div>

          <section className="mb-8 md:mb-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <ImageWithCaption
                src="/images/infrastructure/infrastructure-10.png"
                caption=""
              />
              <ImageWithCaption
                src="/images/infrastructure/infrastructure-11.png"
                caption=""
              />
              <ImageWithCaption
                src="/images/infrastructure/infrastructure-12.png"
                caption=""
              />
              <ImageWithCaption
                src="/images/infrastructure/infrastructure-7.png"
                caption=""
              />
              <ImageWithCaption
                src="/images/infrastructure/infrastructure-8.png"
                caption=""
              />
              <ImageWithCaption
                src="/images/infrastructure/infrastructure-9.png"
                caption=""
              />
            </div>
          </section>
        </section>

        {/* Unique World Of Books */}
        <section className="mb-8 md:mb-12">
          <div className="flex justify-start items-center">
            <div className="w-5 md:w-6">
              <Image
                src="/images/infrastructure/infrastructure-icon-5.png"
                alt=""
                className="object-contain w-full"
                width={20}
                height={20}
              />
            </div>
            <p className="font-semibold md:font-bold text-lg md:text-2xl ms-2">
              Pustakalya - Unique World Of Books
            </p>
          </div>

          <div className="flex justify-start items-center w-full mt-2">
            <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
            <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
          </div>

          <div className="my-4 md:my-8">
            <p className="text-sm text-[#3C5567]">
              The Doon Valley Public School believes in developing a thirst for
              knowledge and a voracious appetite for reading by providing a
              plethora of books, interactive events, workshops, and other
              programmes in this regard, students can access the library as per
              their allotted timetable and get books issued as per the school
              policy. Our objective is to assist students tap into their latent
              talents and help them actualize their potential.
            </p>
            <p className="text-sm text-[#3C5567]">
              Our state-of-the-art infrastructure comprises of ample space for
              students/facilitators. The comfortable seating arrangement helps
              the readers focus and concentrate while reading. Its ambience
              facilitates their physical, mental, spiritual, aesthetic and
              ethical growth.
            </p>
          </div>

          <section className="my-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ImageWithCaption
                src="/images/infrastructure/infrastructure-13.png"
                caption=""
              />
              <ImageWithCaption
                src="/images/infrastructure/infrastructure-14.png"
                caption=""
              />
              <ImageWithCaption
                src="/images/infrastructure/infrastructure-15.png"
                caption=""
              />
            </div>
          </section>
        </section>

        {/* Music Studio */}
        <section className="mb-8 md:mb-12">
          <div className="flex justify-start items-center">
            <div className="w-5 md:w-6">
              <Image
                src="/images/infrastructure/infrastructure-icon-6.png"
                alt=""
                className="object-contain w-full"
                width={20}
                height={20}
              />
            </div>
            <p className="font-semibold md:font-bold text-lg md:text-2xl ms-2">
              Aalap - Music Studio
            </p>
          </div>

          <div className="flex justify-start items-center w-full mt-2">
            <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
            <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
          </div>

          <div className="my-4 md:my-8">
            <p className="text-sm text-[#3C5567]">
              Our Music Studio is a large space that includes a learning space
              and a performance area. It is well equipped with an interactive
              whiteboard, sound system to provide a stimulating musical
              environment. Our learners have access to a variety of musical
              instruments such as guitars, keyboards, tabla and many more.
            </p>
          </div>
          <section className="my-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ImageWithCaption
                src="/images/infrastructure/infrastructure-16.png"
                caption=""
              />
              <ImageWithCaption
                src="/images/infrastructure/infrastructure-17.png"
                caption=""
              />
              <ImageWithCaption
                src="/images/infrastructure/infrastructure-18.png"
                caption=""
              />
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Infrastructure;

const ImageWithCaption = ({ src, caption }) => (
  <div className="flex justify-center items-center flex-col">
    <Image
      src={src}
      alt=""
      className="object-contain w-full"
      width={200}
      height={200}
    />
    <div className="mt-2">
      <p className="text-[#10171D] text-base md:text-lg font-medium">
        {caption}
      </p>
    </div>
  </div>
);
