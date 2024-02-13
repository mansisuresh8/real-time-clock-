"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "../components/HeroSection";
import { fetchData } from "../api/gallery-data/route";
import Placeholder from "../components/Placeholder";

const Gallery = () => {
  const categories = [
    "schoolLab",
    "talentDay",
    "independenceDay",
    "eventsAndCelebration",
    "dadiMaaKikahani",
    "annualFunction",
    "news",
  ];

  const [selectedCategory, setSelectedCategory] = useState("schoolLab");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData()
      .then((resultData) => {
        setData(resultData);
        setFilteredData(resultData[selectedCategory] || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [selectedCategory]);

  const handleCategoryClick = async (category) => {
    try {
      setLoading(true);
      setFilteredData([]);

      // Fetch data based on the selected category
      const resultData = await fetchData(category);
      setData(resultData);
      setFilteredData(resultData[selectedCategory] || []);
      setSelectedCategory(category);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const transformCategoryName = (category) => {
    const words = category.split(/(?=[A-Z])/);
    const formattedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    return formattedWords.join(" ");
  };

  return (
    <div>
      <HeroSection
        imageSrc={"/images/gallery/gallery-hero-1.png"}
        title={"Gallery"}
      />

      <section
        className={`bg-[url("/images/gallery/gallery-bg-1.png")] bg-cover bg-no-repeat bg-center w-full py-2 md:py-6 px-4 md:px-28`}
      >
        <section className="flex justify-start md:justify-center items-center my-6 gap-2 md:gap-4 whitespace-nowrap overflow-x-scroll hidden-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              className={`font-medium text-sm px-4 py-2 border rounded hover:border-[#2188D3] hover:bg-[#2188D3] hover:text-white outline-none ${
                selectedCategory === category
                  ? "border-[#2188D3] bg-[#2188D3] text-white"
                  : "border-[#D3D3D3] bg-transparent text-[#22333B]"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {transformCategoryName(category)}
            </button>
          ))}
        </section>

        <section className="my-4 md:my-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4">
              {/* <p className="text-center text-gray-500">Loading...</p> */}
              <Placeholder className={"h-36 md:h-44 w-96"} />
              <Placeholder className={"h-36 md:h-44 w-96"} />
              <Placeholder className={"h-36 md:h-44 w-96"} />
              <Placeholder className={"h-36 md:h-44 w-96"} />
              <Placeholder className={"h-36 md:h-44 w-96"} />
              <Placeholder className={"h-36 md:h-44 w-96"} />
            </div>
          ) : filteredData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4">
              {filteredData.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center w-full"
                >
                  <div className="">
                    <Link href={item.image} target="_blank">
                      <Image
                        src={item.image}
                        alt=""
                        className="object-cover h-36 md:h-44 w-96"
                        width={200}
                        height={100}
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-10 md:py-20">
              Images upload soon!
            </div>
          )}
        </section>
      </section>
    </div>
  );
};

export default Gallery;
