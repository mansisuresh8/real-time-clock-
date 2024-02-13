"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import {
  RiInstagramFill,
  RiYoutubeFill,
  RiFacebookCircleFill,
} from "react-icons/ri";
import { HiCurrencyRupee } from "react-icons/hi2";
import { IoMdCall } from "react-icons/io";
import {
  IoMenu,
  IoCloseSharp,
  IoLocationSharp,
  IoPrint,
} from "react-icons/io5";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  const closeNav = () => {
    setIsNavVisible(false);
  };

  return (
    <header className="sticky top-0 bg-white z-10 shadow-lg">
      <div className="px-4 md:px-20 bg-[#ff0d00] py-3">
        <div className="flex justify-between items-center">
          <section className="flex justify-center items-center gap-4">
            <div className="cursor-pointer">
              <Link
                href="https://www.instagram.com/thedoonvalleymzn/"
                target="_blank"
              >
                <div className="text-white text-base md:text-xl">
                  <RiInstagramFill />
                </div>
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link
                href="https://www.youtube.com/playlist?list=PLEodWoUPOCQoQabxIRJf5mXjZLzQ8wI4D"
                target="_blank"
              >
                <div className="text-white text-lg md:text-2xl">
                  <RiYoutubeFill />
                </div>
              </Link>
            </div>
            <div className="w-4 md:w-5 cursor-pointer">
              <Link
                href="https://www.facebook.com/thedoonvalleypublicschool"
                target="_blank"
              >
                <div className="text-white text-base md:text-xl">
                  <RiFacebookCircleFill />
                </div>
              </Link>
            </div>
          </section>

          <section className="flex justify-center items-center gap-3 md:gap-5">
            <Link
              href="https://paytm.com/education/Uttar%20Pradesh/Deoband/The%20Doon%20Valley%20Public%20School&utm_medium=smarturl&utm_source=smarturl&utm_term=web&utm_campaign=web"
              target="_blank"
            >
              <div className="flex justify-center items-center">
                <div className="text-white text-lg md:text-2xl me-1 md:me-2">
                  <HiCurrencyRupee />
                </div>
                <p className="text-white font-semibold text-sm">Pay Fees</p>
              </div>
            </Link>

            <div>
              <Link
                href="https://whatsapp.com/channel/0029VaDor31InlqTLpH7oX3B"
                target="_blank"
              >
                <div className="flex justify-center items-center">
                  <div className="w-4 md:w-5 me-1 md:me-2">
                    <Image
                      src="/images/header/whatsapp-icon.png"
                      alt=""
                      className="object-contain w-full"
                      width={20}
                      height={20}
                    />
                  </div>
                  <p className="text-white font-semibold text-sm">Contact</p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>

      {!isNavVisible && (
        <div className="px-4 md:px-20 flex justify-between items-start py-3">
          <div className="flex justify-start items-start gap-2 md:gap-5">
            <Link href={"/"}>
              <div className="w-10 md:w-14 ">
                <Image
                  src="/images/header/logo.png"
                  alt=""
                  className="object-contain w-full"
                  width={200}
                  height={20}
                />
              </div>
            </Link>

            <div className="lg:hidden">
              <Link href={"/"}>
                <p className="text-xs uppercase font-extrabold text-[#4184F2]">
                  The Doon Valley Public School
                </p>
                <p className="text-[10px] font-semibold uppercase text-[#FF0D00]">
                  (10+2) Affiliated to C.B.S.E, NEW DELHI
                </p>
              </Link>
            </div>

            <div className="hidden lg:flex justify-start items-center gap-5">
              <Link href={"/"}>
                <div className="flex justify-start items-end flex-col">
                  <p className="text-2xl uppercase font-extrabold text-[#4184F2]">
                    The Doon Valley Public School
                  </p>
                  <p className="text-[#FF0D00] font-semibold uppercase">
                    (10+2) Affiliated to C.B.S.E, NEW DELHI
                  </p>
                </div>
              </Link>
              <div className="w-[1.5px] h-12 bg-[#10171D;]"></div>
              <div>
                <p className="font-bold text-xl text-[#E2C771]">
                  AWARDED AS “A+”
                </p>
                <p className="font-semibold text-[#FF0D00] uppercase">
                  Category School C.B.S.E
                </p>
              </div>
            </div>
          </div>

          <div
            className="text-2xl md:text-3xl text-black cursor-pointer"
            onClick={toggleNavVisibility}
          >
            {isNavVisible ? <IoCloseSharp /> : <IoMenu />}
          </div>
        </div>
      )}

      {/* heder nav section */}
      {isNavVisible && (
        <section className="px-4 md:px-20 py-4">
          <div className="flex justify-between items-start ">
            <div className="flex justify-start items-start gap-2 md:gap-5">
              <Link href={"/"}>
                <div className="w-10 md:w-14 ">
                  <Image
                    src="/images/header/logo.png"
                    alt=""
                    className="object-contain w-full"
                    width={200}
                    height={20}
                  />
                </div>
              </Link>

              <div className="flex justify-start items-start flex-col gap-2 ">
                <Link href={"/"}>
                  <div className="flex justify-start items-start flex-col">
                    <p className="text-xs md:text-xl uppercase font-extrabold text-[#4184F2]">
                      The Doon Valley Public School
                    </p>
                    <p className="text-[#FF0D00] font-semibold uppercase text-[10px] md:text-sm">
                      (10+2) Affiliated to C.B.S.E, NEW DELHI
                    </p>
                  </div>
                </Link>

                <div className="hidden lg:flex justify-start items-start flex-col">
                  <div className="flex justify-start items-center w-full my-4 gap-4">
                    <div className="flex justify-start items-center">
                      <IoMdCall />
                      <p className="text-sm ps-2">01336 224041</p>
                    </div>

                    <div className="flex justify-start items-center">
                      <IoPrint />
                      <p className="text-sm ps-2">8272020510-11</p>
                    </div>
                  </div>

                  <div className="flex justify-start items-start">
                    <IoLocationSharp />
                    <p className=" text-sm ps-2">
                      Railway Road, Deoband, District - Saharanpur, Pin - 247554
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <section className="hidden lg:flex justify-between items-start gap-5">
              <div className="flex justify-between items-start gap-4">
                <div className="flex flex-col justify-start items-start gap-4">
                  <NavItem link="/" item="Home" onClick={closeNav} />
                </div>

                <div className="flex flex-col justify-start items-start gap-4">
                  <NavItem link="/about" item="About Us" onClick={closeNav} />
                  <NavItem
                    link="/our-leaders"
                    item="Our Leaders"
                    onClick={closeNav}
                  />
                  <NavItem link="/results" item="Results" onClick={closeNav} />
                  <NavItem
                    link="https://docs.google.com/forms/d/e/1FAIpQLScBdbWVSYH0uCopP22j-T63kaiyQwkAwnSrhnltTOO6t2Q6rg/viewform?c=0&w=1"
                    item="Alumni"
                    target="_blank"
                    onClick={closeNav}
                  />
                </div>

                <div className="flex flex-col justify-start items-start gap-4">
                  <NavItem
                    link="/infrastructure"
                    item="Infrastructure"
                    onClick={closeNav}
                  />
                  <NavItem link="/gallery" item="Gallery" onClick={closeNav} />
                </div>

                <div className="flex flex-col justify-start items-start gap-4">
                  <NavItem
                    link="/news-events"
                    item="News & Events"
                    onClick={closeNav}
                  />
                  <NavItem
                    link="/beyond-academics"
                    item="Beyond Academics"
                    onClick={closeNav}
                  />
                  <NavItem
                    link="/academics"
                    item="Academics"
                    onClick={closeNav}
                  />

                  <NavItem
                    link="/pdfFiles/mandatory-disclosure-details.pdf"
                    item="Mandatory Disclosure"
                    target="_blank"
                    onClick={closeNav}
                  />

                  <NavItem
                    link="/alumni-achievement"
                    item="Alumni Achievement"
                    onClick={closeNav}
                  />
                </div>

                <div className="flex flex-col justify-start items-start gap-4">
                  <NavItem
                    link="/pdfFiles/fee-structure-deoband-2023-24.pdf"
                    item="Fee Structure"
                    target="_blank"
                    onClick={closeNav}
                  />
                  <NavItem
                    link="/admission"
                    item="Admission"
                    onClick={closeNav}
                  />
                  <NavItem link="/enquiry" item="Enquiry" onClick={closeNav} />
                  <NavItem link="/srijan" item="Srijan" onClick={closeNav} />
                </div>
              </div>
            </section>

            <div
              className="text-2xl md:text-3xl text-black  cursor-pointer"
              onClick={toggleNavVisibility}
            >
              {isNavVisible ? <IoCloseSharp /> : <IoMenu />}
            </div>
          </div>

          {/* mobile nav*/}
          <section className="flex lg:hidden justify-center items-center my-4">
            <div className="flex justify-between items-start gap-2 w-full">
              <div className="flex flex-col justify-start items-start gap-4">
                <NavItem link="/" item="Home" onClick={closeNav} />
                <NavItem link="/about" item="About Us" onClick={closeNav} />
                <NavItem
                  link="/our-leaders"
                  item="Our Leaders"
                  onClick={closeNav}
                />
                <NavItem link="/results" item="Results" onClick={closeNav} />
                <NavItem
                  link="https://docs.google.com/forms/d/e/1FAIpQLScBdbWVSYH0uCopP22j-T63kaiyQwkAwnSrhnltTOO6t2Q6rg/viewform?c=0&w=1"
                  item="Alumni"
                  target="_blank"
                  onClick={closeNav}
                />
                <NavItem
                  link="/infrastructure"
                  item="Infrastructure"
                  onClick={closeNav}
                />
                <NavItem link="/gallery" item="Gallery" onClick={closeNav} />
              </div>

              <div className="flex flex-col justify-start items-start gap-4">
                <NavItem
                  link="/news-events"
                  item="News & Events"
                  onClick={closeNav}
                />
                <NavItem
                  link="/beyond-academics"
                  item="Beyond Academics"
                  onClick={closeNav}
                />
                <NavItem
                  link="/academics"
                  item="Academics"
                  onClick={closeNav}
                />

                <NavItem
                  link="/pdfFiles/mandatory-disclosure-details.pdf"
                  item="Mandatory Disclosure"
                  target="_blank"
                  onClick={closeNav}
                />
                <NavItem
                  link="/alumni-achievement"
                  item="Alumni Achievement"
                  onClick={closeNav}
                />
              </div>

              <div className="flex flex-col justify-start items-start gap-4">
                <NavItem
                  link="/pdfFiles/fee-structure-deoband-2023-24.pdf"
                  item="Fee Structure"
                  target="_blank"
                  onClick={closeNav}
                />

                <NavItem
                  link="/admission"
                  item="Admission"
                  onClick={closeNav}
                />
                <NavItem link="/enquiry" item="Enquiry" onClick={closeNav} />
                <NavItem link="/srijan" item="Srijan" onClick={closeNav} />
              </div>
            </div>
          </section>
        </section>
      )}
    </header>
  );
};

export default Header;

const NavItem = ({ link, item, target, onClick }) => {
  const pathname = usePathname();

  return (
    <div>
      <Link
        href={link}
        passHref
        target={target}
        onClick={onClick}
        className={`text-sm md:text-base font-semibold hover:text-[#FF0D00] border-b-2 hover:border-[#FF0D00] cursor-pointer ${
          pathname === link
            ? "border-[#FF0D00] text-[#FF0D00]"
            : "text-[#001C30] border-transparent"
        }`}
      >
        {item}
      </Link>
    </div>
  );
};
