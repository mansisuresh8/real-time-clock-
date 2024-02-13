import React from "react";
import Image from "next/image";

import HeroSection from "../components/HeroSection";

const Admission = () => {
  return (
    <div>
      <HeroSection
        imageSrc="/images/admission/admission-hero.png"
        title="Admission"
      />

      <section
        className={`bg-[url("/images/admission/admission-bg-1.png")] bg-cover bg-no-repeat bg-center w-full`}
      >
        <div className="px-4 md:px-28 py-2 md:py-10">
          <div className="my-4 md:my-8">
            <p className="text-lg md:text-3xl text-[#10171D]">
              Admissions to various classes are carried out as per the vacancies
              and guidelines issued by the Directorate of Education time to
              time.
            </p>
          </div>

          <section className="my-4 md:my-8">
            <p className="font-semibold md:font-bold text-lg md:text-2xl">
              Admission Procedure
            </p>
            <div className="flex justify-start items-center w-full mt-2">
              <div className="bg-[#FF0D00] h-[2px] w-40 rounded-full"></div>
              <div className="bg-[#D4D4D0] h-[1px] w-full"></div>
            </div>

            <section className="my-3 md:my-6">
              <div className="flex justify-start items-center">
                <div className="me-4 w-4 md:w-6">
                  <Image
                    src="/images/admission/admission-icon-1.png"
                    alt=""
                    className="object-contain w-full"
                    width={20}
                    height={20}
                  />
                </div>
                <p className="text-[#FF0D00] text-base md:text-lg font-semibold">
                  Entrance Tests / Interviews / Interaction
                </p>
              </div>

              <div className="my-2 md:my-4">
                <ul className="list-disc list-outside leading-loose ms-5 text-sm md:text-base text-[#3C5567]">
                  <li className="">
                    Students seeking admission in classes UKG & upwards, have to
                    appear in a written test.
                  </li>
                  <li className="">
                    After clearing the completing the written test, The Student
                    will be interacted to get a view about his/her oratory
                    skills, general knowledge and confidence.
                  </li>
                  <li className="">
                    After successfully completing the process, the candidates
                    will be informed to appear on the dates specified by the
                    admission department for admission process.
                  </li>
                  <li className="">
                    No written test for classes Nursery & LKG. (Only interaction
                    with child and parents will be conducted).
                  </li>
                </ul>
              </div>
            </section>

            <section className="my-3 md:my-6">
              <div className="flex justify-start items-center">
                <div className="me-4 w-4 md:w-6">
                  <Image
                    src="/images/admission/admission-icon-2.png"
                    alt=""
                    className="object-contain w-full"
                    width={20}
                    height={20}
                  />
                </div>
                <p className="text-[#FF0D00] text-base md:text-lg font-semibold">
                  Admission Formalities:
                </p>
              </div>

              <div className="my-2 md:my-4">
                <ul className="list-disc list-outside leading-loose ms-5 text-sm md:text-base  text-[#3C5567]">
                  <li className="">
                    Successful candidates whose names are included in the list
                    must pay the fees by the dates indicated on the list,
                    displayed on the School Notice Board, otherwise admission
                    will automatically stand cancelled.
                  </li>
                  <li className="">
                    Parents are requested to carefully fill and submit the
                    Admission Form, Transportation Form (as applicable) at the
                    time of payment of fees.
                  </li>
                  <li className="">
                    In case of admission in Nursery, L.K.G and U.K.G the date of
                    birth of the child is required to be supported by the birth
                    certificate in original as issued by the Municipal
                    Corporation / Local bodies along with a certified photostat
                    copy thereof. (An affidavit or any other evidence is not
                    acceptable in support of birth certificate) Whereas for
                    classes I & above, Transfer Certificate is to be attached.
                  </li>
                  <li className="">
                    The admission card will be issued to parents only after the
                    completion of all the documentation formalities and
                    submission of fee.
                  </li>
                  <li className="">
                    Your ward has to report in school in complete School Uniform
                    and bag as intimated by the school admission department.
                  </li>
                </ul>
              </div>
            </section>

            <section className="my-2 md:my-4">
              <div className="flex justify-start items-center">
                <div className="me-4 w-6">
                  <Image
                    src="/images/admission/admission-icon-3.png"
                    alt=""
                    className="object-contain w-full"
                    width={20}
                    height={20}
                  />
                </div>
                <p className="text-[#FF0D00] text-base md:text-lg font-semibold">
                  Document Required:
                </p>
              </div>

              <div className="my-4">
                <ul className="list-disc list-outside leading-loose ms-5 text-sm md:text-base  text-[#3C5567]">
                  <li className="">
                    Four Passport Size Photographs of the Child & Two passport
                    size photographs of mother, father and guardian.
                  </li>
                  <li className="">Birth Certificate</li>
                  <li className="">
                    Aadhar Cards of the child and parents as well
                  </li>
                  <li className="">Address Proof</li>
                  <li className="">
                    Previous School Report Card & Transfer Certificate
                  </li>
                </ul>
              </div>
            </section>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Admission;
