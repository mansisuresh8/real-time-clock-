"use client";

import React, { useState } from "react";

const HeroSection = ({ imageSrc, title }) => {
  const [image, setImage] = useState(imageSrc);
  return (
    <div>
      <section
        style={{ backgroundImage: `url('${image}')` }}
        className="bg-cover bg-no-repeat bg-center h-60 md:h-96 w-full"
      >
        <div className="flex flex-col justify-center items-center h-60 md:h-96 w-full">
          <p className="uppercase text-white font-bold text-base md:text-4xl">
            {title}
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
