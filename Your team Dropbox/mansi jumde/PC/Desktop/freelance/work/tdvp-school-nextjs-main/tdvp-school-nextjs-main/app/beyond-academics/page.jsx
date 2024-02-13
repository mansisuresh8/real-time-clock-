import React from "react";
import Image from "next/image";

import HeroSection from "../components/HeroSection";

const BeyondAcademics = () => {
  return (
    <div>
      <HeroSection
        imageSrc="/images/beyondAcademics/b-academics-hero-1.png"
        title="Beyond Academics"
      />

      <section
        className={`bg-[url("/images/beyondAcademics/b-academics-bg-1.png")] bg-cover bg-no-repeat bg-center w-full px-4 md:px-28 py-2 md:py-6`}
      >
        {/* mun */}
        <section className="my-8">
          <div className="flex justify-start items-center">
            <p className="font-semibold md:font-bold text-lg md:text-2xl ms-2 ">
              MUN
            </p>
          </div>

          <div className="flex justify-start items-center w-full mt-2">
            <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
            <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
          </div>

          <div className="my-4 md:my-8">
            <p className="text-sm text-[#3C5567]">
              <span className="text-[#FF0D00]">
                Model United Nations (MUN){" "}
              </span>{" "}
              serves as an educational simulation of the United Nations,
              designed to offer participants insights into current global
              affairs, international relations, diplomacy, and the UN&apos;s
              agenda.
            </p>
            <p className="text-sm text-[#3C5567] my-2">
              This platform encourage interaction and a deeper appreciation of
              diverse cultures and perspectives. It equips students with the
              ability to address and resolve pressing global crises and issues.
              MUN serves as a stage for aspiring young diplomats to showcase
              their diplomatic skills.
            </p>
            <p className="text-sm text-[#3C5567]">
              Throughout a conference, delegates must employ a wide range of
              essential skills, including effective public speaking,
              collaborative group communication, thorough research, meticulous
              policy analysis, attentive listening, adept negotiation,
              proficient conflict resolution, accurate note-taking, and precise
              technical writing.
            </p>
          </div>

          <section className="mb-8 md:mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex justify-center items-center flex-col">
                <div>
                  <Image
                    src="/images/beyondAcademics/ba-mun-1.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div>
                  <Image
                    src="/images/beyondAcademics/ba-mun-2.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div>
                  <Image
                    src="/images/beyondAcademics/ba-mun-3.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div>
                  <Image
                    src="/images/beyondAcademics/ba-mun-4.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </section>
        </section>

        {/*G-20*/}
        <section className="mb-8 md:mb-12">
          <div className="flex justify-start items-center">
            <p className="font-semibold md:font-bold text-lg md:text-2xl ms-2">
              G-20
            </p>
          </div>

          <div className="flex justify-start items-center w-full mt-2">
            <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
            <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
          </div>

          <div className="my-4 md:my-8">
            <p className="text-sm text-[#3C5567]">
              India&apos;s G20 presidency has marked a significant milestone in
              its global leadership role. With, India taking the presidency for
              the first time, it is steering discussions and initiatives among
              the world&apos;s major economies to address complex challenges.
            </p>
            <p className="text-sm text-[#3C5567] mt-2">
              To make our future leaders more aware and connected with the
              world, here in school students participated in replica of G 20
              summit by being the representatives of Group20 countries
            </p>
          </div>

          <section className="my-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex justify-center items-center flex-col">
                <div>
                  <Image
                    src="/images/beyondAcademics/ba-g20-1.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div>
                  <Image
                    src="/images/beyondAcademics/ba-g20-2.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div>
                  <Image
                    src="/images/beyondAcademics/ba-g20-3.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div>
                  <Image
                    src="/images/beyondAcademics/ba-g20-4.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* Dada Dadi Ki Kahani */}
        <section className="mb-8 md:mb-12">
          <div className="flex justify-start items-center">
            <p className="font-semibold md:font-bold text-lg md:text-2xl ms-2">
              Dada Dadi Ki Kahani
            </p>
          </div>

          <div className="flex justify-start items-center w-full mt-2">
            <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
            <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
          </div>

          <div className="my-4 md:my-8">
            <p className="text-sm text-[#3C5567]">
              Grandparents are a source of unconditional love, a wealth of
              knowledge & have positive influence on the life of their
              grandchildren. So we invite our beloved grandparent for a
              storytelling session in which they share their experiences,
              stories and wisdom with students. This is a wonderful way to
              bridge generations and preserve cultural heritage through oral
              traditions. It also provides students with a unique opportunity to
              learn from their.
            </p>
          </div>

          <section className="my-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex justify-center items-center flex-col">
                <div>
                  <Image
                    src="/images/beyondAcademics/ba-ddkk-1.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div>
                  <Image
                    src="/images/beyondAcademics/ba-ddkk-2.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div>
                  <Image
                    src="/images/beyondAcademics/ba-ddkk-3.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div>
                  <Image
                    src="/images/beyondAcademics/ba-ddkk-4.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* Educational Trips And Excursions */}
        <section className="my-8 md:mb-12">
          <div className="flex justify-start items-center">
            <p className="font-semibold md:font-bold text-lg md:text-2xl ms-2">
              Educational Trips And Excursions
            </p>
          </div>

          <div className="flex justify-start items-center w-full mt-2">
            <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
            <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
          </div>

          <div className="my-4 md:my-8">
            <p className="text-sm text-[#3C5567]">
              We believe that learning extends far beyond the classroom, and our
              carefully curated trips are designed to provide students with
              enriching experiences that complement their academic journey.
            </p>
          </div>

          <section className="mb-8 md:mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex justify-center items-center flex-col">
                <div>
                  <Image
                    src="/images/beyondAcademics/ba-etae-1.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div>
                  <Image
                    src="/images/beyondAcademics/ba-etae-2.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div>
                  <Image
                    src="/images/beyondAcademics/ba-etae-3.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div>
                  <Image
                    src="/images/beyondAcademics/ba-etae-4.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div>
                  <Image
                    src="/images/beyondAcademics/ba-etae-5.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div>
                  <Image
                    src="/images/beyondAcademics/ba-etae-6.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div>
                  <Image
                    src="/images/beyondAcademics/ba-etae-7.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div>
                  <Image
                    src="/images/beyondAcademics/ba-etae-8.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* Trip For Supportive Staff */}
        <section className="mb-8 md:mb-12">
          <div className="flex justify-start items-center">
            <p className="font-semibold md:font-bold text-lg md:text-2xl ms-2">
              Trip For Supportive Staff
            </p>
          </div>

          <div className="flex justify-start items-center w-full mt-2">
            <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
            <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
          </div>

          <div className="my-4 md:my-8">
            <p className="text-sm text-[#3C5567]">
              The primary objective of organizing trips and excursions for our
              supporting staff is to create an environment of companionship,
              professional growth, and relaxation. These outings serve as an
              avenue for team building, fostering new friendships, and promoting
              a positive work atmosphere.
            </p>
          </div>

          <section className="my-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex justify-center items-center flex-col">
                <div>
                  <Image
                    src="/images/beyondAcademics/ba-tfss-1.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div>
                  <Image
                    src="/images/beyondAcademics/ba-tfss-2.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div>
                  <Image
                    src="/images/beyondAcademics/ba-tfss-3.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div>
                  <Image
                    src="/images/beyondAcademics/ba-tfss-4.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default BeyondAcademics;
