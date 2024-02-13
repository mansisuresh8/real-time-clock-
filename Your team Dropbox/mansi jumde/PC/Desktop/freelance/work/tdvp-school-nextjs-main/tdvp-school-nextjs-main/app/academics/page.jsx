import React from "react";
import Image from "next/image";

import HeroSection from "../components/HeroSection";

const Academics = () => {
  return (
    <div>
      <HeroSection
        imageSrc="/images/academics/academics-hero-1.png"
        title="Academics"
      />

      <section
        className={`bg-[url("/images/academics/academics-bg-1.png")] bg-cover bg-no-repeat bg-center w-full px-4 md:px-28 py-2 md:py-6`}
      >
        <section className="mt-4 md:mt-10 mb-8 md:mb-16">
          <div className="flex justify-start items-start flex-col">
            <p className="font-semibold md:font-bold text-lg md:text-2xl">
              Pre-primary (Objective)
            </p>

            <p className="text-sm text-[#3C5567] mt-2 md:mt-3">
              The initial learning year of a young child must be eased with
              effective teaching aids for lifelong and overall development of a
              child across physical cognitive and social-emotional dimensions.
            </p>

            <p className="text-sm text-[#3C5567] mt-2 md:mt-3">
              To induce appropriate care and stimulation in the child’s early
              years, we believe to promote healthy foundation providing high
              quality pre-school education.
            </p>
          </div>

          <div className="my-4 md:my-8 w-full flex justify-center items-center ">
            <div className="w-full md:w-3/4">
              <Image
                src="/images/academics/academics-1.png"
                alt=""
                className="object-contain w-full"
                width={600}
                height={600}
              />
            </div>
          </div>

          <section className="my-4 md:my-8">
            <div className="flex justify-start items-center">
              <p className="font-semibold text-base md:text-lg">Circle Time</p>
            </div>

            <div className="flex justify-start items-center w-full mt-2">
              <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
              <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
            </div>

            <div className="my-2 md:my-4">
              <p className="text-sm text-[#3C5567]">
                Each day, in the morning, we conduct a{" "}
                <span className="font-semibold"> “Circle Time” </span> activity
                period. During this sessions, children are engaged in various
                activities such as discussions, storytelling, puppet shows,
                role-playing, show-and-tell, question and answer sessions, and
                quizzes. These activities are designed to introduce children to
                different monthly themes, life skills, moral values, and ethics.
                Moreover, these sessions serve to strengthen the connection
                between teachers and students
              </p>
            </div>
          </section>

          <section className="my-4 md:my-8">
            <div className="flex justify-start items-center">
              <p className="font-semibold text-base md:text-lg">
                Thematic Based Assemblies
              </p>
            </div>

            <div className="flex justify-start items-center w-full mt-2">
              <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
              <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
            </div>

            <div className="my-2 md:my-4">
              <p className="text-sm text-[#3C5567]">
                Assemblies, especially at the pre-primary level, are another
                powerful means of inculcating good moral values and enhancing
                their knowledge. During this, the children are exposed to
                various aspects of life.
              </p>
            </div>
          </section>

          <section className="my-4 md:my-8">
            <div className="flex justify-start items-center">
              <p className="font-semibold text-base md:text-lg">
                Events And Celebrations
              </p>
            </div>

            <div className="flex justify-start items-center w-full mt-2">
              <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
              <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
            </div>

            <div className="my-2 md:my-4">
              <p className="text-sm text-[#3C5567]">
                Many theme based activities and celebrations are organized in
                the school such as celebration of National and religious
                festivals, Colours day, Hey market etc. These help the children
                understand the significance and traditional values related to
                various festivals and inculcate respect for our culture, customs
                and religions
              </p>
            </div>
          </section>

          <section className="my-4 md:my-8">
            <div className="flex justify-start items-center">
              <p className="font-semibold text-base md:text-lg">
                Integrated Learning
              </p>
            </div>

            <div className="flex justify-start items-center w-full mt-2">
              <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
              <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
            </div>

            <div className="my-2 md:my-4">
              <p className="text-sm text-[#3C5567]">
                These hold the children’s attention, interdisciplinary learning
                model is adopted. To create excitement in the classroom,
                students are encouraged to talking and using new vocabulary in
                the class room. Different subjects are intermingled to provide
                opportunities to teach skills in an interesting context.
              </p>
            </div>
          </section>

          <section className="my-4 md:my-10">
            <div className="flex justify-start items-center">
              <p className="font-semibold text-base md:text-lg">
                Learning Centres
              </p>
            </div>

            <div className="flex justify-start items-center w-full mt-2">
              <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
              <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
            </div>

            <div className="my-2 md:my-4">
              <p className="text-sm text-[#3C5567]">
                Learning centres are the well planned setups. These include
                Literacy Language Centre, Science Centre, Maths Centre,
                Construction/Block Centre, Music Centre, Art and Craft Center
                and Reading Centre. Each centre is equipped with the learning
                materials like Montessori Apparatus, Abacus, Science Experiment
                Equipment and other materials related to different subjects and
                themes, which are used to further enhance the knowledge of the
                children.
              </p>
            </div>
          </section>
        </section>

        <section className="mt-4 md:mt-10 mb-8 md:mb-16">
          <div className="flex justify-start items-start flex-col">
            <p className="font-semibold md:font-bold text-lg md:text-2xl">
              Middle
            </p>

            <p className="text-sm text-[#3C5567] mt-2 md:mt-3">
              The Middle Wing of The Doon Valley Public School believes in
              experiential learning methodology in order to make learning fun
              filled, interesting and meaningful. We encourage students to ask
              questions and explore answers to become critical thinkers of the
              future generation.
            </p>
          </div>

          <div className="my-4 md:my-8 w-full flex justify-center items-center">
            <div className="w-full md:w-3/4">
              <Image
                src="/images/academics/academics-2.png"
                alt=""
                className="object-contain w-full"
                width={600}
                height={600}
              />
            </div>
          </div>

          <section className="my-4 md:my-8">
            <div className="flex justify-start items-center">
              <p className="font-semibold text-base md:text-lg">
                Assemblies and Celebrations
              </p>
            </div>

            <div className="flex justify-start items-center w-full mt-2">
              <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
              <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
            </div>

            <div className="my-2 md:my-4">
              <p className="text-sm text-[#3C5567]">
                Theme based assemblies and celebrations are organized to help
                students understand the significance and traditional values
                related to various festivals and inculcate respect for our
                culture, customs and religions.
              </p>
            </div>
          </section>

          <section className="my-4 md:my-8">
            <div className="flex justify-start items-center">
              <p className="font-semibold text-base md:text-lg">
                Project Atulya Bharat
              </p>
            </div>

            <div className="flex justify-start items-center w-full mt-2">
              <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
              <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
            </div>

            <div className="my-2 md:my-4">
              <p className="text-sm text-[#3C5567]">
                The Programe seeks to encourage and expose the young children to
                develop understanding and appreciation for our rich cultural
                legacy by understanding diverse culture different states through
                a wide array of activities. This programe is an important part
                of the learning process. It inculcates respect for diversity and
                integration.
              </p>
            </div>
          </section>

          <section className="my-4 md:my-8">
            <div className="flex justify-start items-center">
              <p className="font-semibold text-base md:text-lg">
                Media Literacy
              </p>
            </div>

            <div className="flex justify-start items-center w-full mt-2">
              <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
              <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
            </div>

            <div className="my-2 md:my-4">
              <p className="text-sm text-[#3C5567]">
                In today’s digital age media education holds an important place
                in teaching learning process. It helps in developing critical
                and creative abilities of young students. To enhance critical
                and creative writing skills students are encouraged to provide
                articles, poems or any creative peace in “REFLECTION” an in
                house magzine by the students and for the students. Times to
                time workshops are conducted to guide students about various
                aspects of print media.
              </p>
            </div>
          </section>

          <section className="my-4 md:my-8">
            <div className="flex justify-start items-center">
              <p className="font-semibold text-base md:text-lg">
                Interdisciplinary Learning Activities
              </p>
            </div>

            <div className="flex justify-start items-center w-full mt-2">
              <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
              <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
            </div>

            <div className="my-2 md:my-4">
              <p className="text-sm text-[#3C5567]">
                Values are guiding principles that shape our outlook, attitudes
                and conduct. The aim of including these skills in curriculum is
                to empower students to face the challenges of life. To make
                students self reliant, stress free and to develop a sense of
                purpose number of activities like social service, spiritual and
                motivational talks are organized time to time.
              </p>
            </div>
          </section>
        </section>

        <section className="mt-4 md:mt-10 mb-8 md:mb-16">
          <div className="flex justify-start items-start flex-col">
            <p className="font-semibold md:font-bold text-lg md:text-2xl">
              Senior-secondary
            </p>

            <p className="text-sm text-[#3C5567] mt-2 md:mt-3">
              We adopt modern outlook towards educating our students. Learning
              is oriented through number of activities, projects, social service
              activities and variety of cultural exchange programmes.
            </p>
          </div>

          <div className="my-4 md:my-8 w-full flex justify-center items-center">
            <div className="w-full md:w-3/4">
              <Image
                src="/images/academics/academics-3.png"
                alt=""
                className="object-contain w-full"
                width={600}
                height={600}
              />
            </div>
          </div>

          <section className="my-4 md:my-8">
            <div className="flex justify-start items-center">
              <p className="font-semibold  text-base md:text-lg">
                Activity Led Learning
              </p>
            </div>

            <div className="flex justify-start items-center w-full mt-2">
              <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
              <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
            </div>

            <div className="my-2 md:my-4">
              <p className="text-sm text-[#3C5567]">
                The children are exposed to various science based activities
                like Germination, Evaporation and experiments based on the
                concepts like Water Cycle, Fine Senses, Gravity Magnets and
                Colours. This helps the children understand different concepts
                through experiments and acquire knowledge using their sensory
                skills.
              </p>
            </div>
          </section>

          <section className="my-4 md:my-8">
            <div className="flex justify-start items-center">
              <p className="font-semibold text-base md:text-lg">
                Educational Trips
              </p>
            </div>

            <div className="flex justify-start items-center w-full mt-2">
              <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
              <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
            </div>

            <div className="my-2 md:my-4">
              <p className="text-sm text-[#3C5567]">
                These trips are organized to make the children aware of their
                environment, to know their mother nature better along with its
                benefits and to make the children independent. These trips are
                organized to visit places like zoological park, amusement parks,
                museums, historical places etc.
              </p>
            </div>
          </section>

          <section className="my-4 md:my-8">
            <div className="flex justify-start items-center">
              <p className="font-semibold text-base md:text-lg">
                Technology Integration
              </p>
            </div>

            <div className="flex justify-start items-center w-full mt-2">
              <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
              <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
            </div>

            <div className="my-2 md:my-4">
              <p className="text-sm text-[#3C5567]">
                To enhance learning experience, technology is integrated with in
                curriculum. Teachers use presentations, simulations and virtual
                labs. These help the children to grasp the concepts in a better
                way through visual and audio effects.
              </p>
            </div>
          </section>

          <section className="my-4 md:my-8">
            <div className="flex justify-start items-center">
              <p className="font-semibold text-base md:text-lg">
                Spiritual Development
              </p>
            </div>

            <div className="flex justify-start items-center w-full mt-2">
              <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
              <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
            </div>

            <div className="my-2 md:my-4">
              <p className="text-sm text-[#3C5567]">
                The school authorities, on regular intervals, organize Hawan in
                school. The children are made aware of the different Vedas,
                Moral Values and Mantras.
              </p>
            </div>
          </section>

          <section className="my-4 md:my-8">
            <div className="flex justify-start items-center">
              <p className="font-semibold text-base md:text-lg">
                Interdisciplinary Curriculum
              </p>
            </div>

            <div className="flex justify-start items-center w-full mt-2">
              <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
              <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
            </div>

            <div className="my-2 md:my-4">
              <p className="text-sm text-[#3C5567]">
                Interdisciplinary Curriculum integrates one or more disciplines
                to examine a central theme, issue, problem topic or experience
                through a variety of activities / experiments.
              </p>
            </div>
          </section>

          <section className="my-4 md:my-10">
            <div className="flex justify-start items-center">
              <p className="font-semibold text-base md:text-lg">
                Administrative Leadership
              </p>
            </div>

            <div className="flex justify-start items-center w-full mt-2">
              <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
              <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
            </div>

            <div className="my-2 md:my-4">
              <p className="text-sm text-[#3C5567]">
                Students learn to shoulder responsibilities and be effective
                leaders as Head Girl / Head Boy, House Captains, Vice Captains,
                Cultural, Literary and Sports Secretaries and Pre
              </p>
            </div>
          </section>
          <section className="my-4 md:my-10">
            <div className="flex justify-start items-center">
              <p className="font-semibold text-base md:text-lg">
                Cultural Awareness
              </p>
            </div>

            <div className="flex justify-start items-center w-full mt-2">
              <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
              <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
            </div>

            <div className="my-2 md:my-4">
              <p className="text-sm text-[#3C5567]">
                Cultural Education forms an important part of a broad and
                balanced curriculum. This is achieved through a variety of
                programmes like Art education, visits to museums, exchange
                programmes and International events like Odyssey of the Mind,
                World’s Scholars Cup, Model United Nations.
              </p>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Academics;
