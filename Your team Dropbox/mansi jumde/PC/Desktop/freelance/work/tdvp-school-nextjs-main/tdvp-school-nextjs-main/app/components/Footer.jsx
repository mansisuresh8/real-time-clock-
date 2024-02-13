import React from "react";
import Image from "next/image";
import Link from "next/link";

import { IoLocationSharp } from "react-icons/io5";

import {
  RiInstagramFill,
  RiYoutubeFill,
  RiFacebookCircleFill,
} from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer
        className={`bg-[url("/images/footer/footer-bg-image.png")] bg-cover bg-no-repeat bg-center`}
      >
        <div className="py-6 md:py-12 px-4 md:px-40">
          <section className="flex justify-center md:justify-between items-start flex-col md:flex-row">
            <div className="flex justify-start items-center">
              <section className="flex justify-start items-center flex-col">
                <div className="flex justify-start items-center">
                  <div className="w-10 md:w-20">
                    <Image
                      src="/images/footer/footer-logo.png"
                      alt=""
                      className="object-contain w-full"
                      width={200}
                      height={20}
                    />
                  </div>
                  <div className="w-100 md:w-72 ms-3 md:ms-8">
                    <p className="text-xl md:text-3xl font-medium text-white">
                      The Doon Valley Public School
                    </p>
                  </div>
                </div>

                <div className="flex justify-start items-center gap-3 md:gap-4 mt-6 w-full">
                  <div>
                    <p className="text-white opacity-50">Social Media</p>
                  </div>
                  <Link
                    href="https://www.facebook.com/thedoonvalleypublicschool"
                    target="_blank"
                  >
                    <div className="text-white md:text-lg">
                      <RiFacebookCircleFill />
                    </div>
                  </Link>
                  <Link
                    href="https://www.youtube.com/playlist?list=PLEodWoUPOCQoQabxIRJf5mXjZLzQ8wI4D"
                    target="_blank"
                  >
                    <div className="text-white text-lg md:text-xl">
                      <RiYoutubeFill />
                    </div>
                  </Link>

                  <Link
                    href="https://www.instagram.com/thedoonvalleymzn/"
                    target="_blank"
                  >
                    <div className="text-white md:text-lg">
                      <RiInstagramFill />
                    </div>
                  </Link>
                </div>
              </section>
            </div>

            <div className="mt-6 md:m-0">
              <div className="flex justify-start items-start">
                <div className="text-white text-lg md:text-2xl">
                  <IoLocationSharp />
                </div>

                <p className="text-white text-sm ps-2 md:ps-4">
                  Railway Road, Deoband, District - Saharanpur,{" "}
                  <span className="whitespace-nowrap"> Pin - 247554</span>
                </p>
              </div>

              <div className=" my-4 flex flex-col justify-start items-start">
                <div className="flex justify-start items-start md:items-center">
                  <div className="text-white text-lg md:text-2xl">
                    <IoMdCall />
                  </div>
                  <div>
                    <p className="text-white text-sm ps-4">
                      +91 98370 71911; +91 8272020510,11 (Deoband);
                    </p>
                    <p className="text-white text-sm ps-4 mt-1">
                      +91 8865900060 (Muzaffarnagar)
                    </p>
                  </div>
                </div>
              </div>

              <div className=" my-4 flex flex-col justify-start items-start">
                <div className="flex justify-start items-center">
                  <div className="text-white md:text-lg">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-white text-sm ps-4">
                      Info@thedoonvalley.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="h-[1px] bg-white w-full my-6 md:my-8 opacity-20"></div>

          <section className="flex justify-center md:justify-between items-center flex-col md:flex-row">
            <div className="flex justify-start items-center gap-3 md:gap-4 ">
              <Link href={"/about"}>
                <p className="text-white font-medium text-xs md:text-sm uppercase">
                  About us
                </p>
              </Link>

              <Link href={"/enquiry"}>
                <p className="text-white font-medium text-xs md:text-sm uppercase">
                  Contact us
                </p>
              </Link>

              <Link
                href="https://docs.google.com/forms/d/1OsjMXwr_IXE-9Uz311IfNd4YUzk0_1d0e2Y2c6-8POQ/viewform?edit_requested=true"
                target="_blank"
              >
                <p className="text-white font-medium text-xs md:text-sm uppercase">
                  Admission
                </p>
              </Link>

              <Link
                href="https://paytm.com/education/Uttar%20Pradesh/Deoband/The%20Doon%20Valley%20Public%20School&utm_medium=smarturl&utm_source=smarturl&utm_term=web&utm_campaign=web"
                target="_blank"
              >
                <p className="text-white font-medium text-xs md:text-sm uppercase">
                  Pay Fee
                </p>
              </Link>
            </div>

            <div className="mt-2 md:mt-0">
              <p className="text-white text-xs md:text-sm text-center opacity-50">
                Copyright © {new Date().getFullYear()} - All Rights Reserved -
                The Doon Valley Public School
              </p>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
