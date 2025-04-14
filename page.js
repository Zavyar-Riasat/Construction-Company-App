"use client";
import Image from "next/image";
import React, { useState } from "react";
import Footerpage from "./Footer/page";

const Page = () => {
  const [hoverImage, setHoverImage] = useState("");
  const defaultImage = "/images/joe-holland-80zZ1s24Nag-unsplash-1024x797.jpg";

  // Define the services array BEFORE JSX
  const services = [
    { imgSrc: "/images/1-1.png", hoverText: "New Constructions" },
    { imgSrc: "/images/2-1.png", hoverText: "Bathrooms" },
    { imgSrc: "/images/3-1.png", hoverText: "Renovation" },
  ];

  return (
    <div className="relative">
      {/* Hero Page */}
      <div
        id="home"
        className="flex flex-wrap w-full h-screen overflow-hidden items-center bg-black fixed top-0 left-0"
      >
        {/* Left Text Section */}
        <div id="text" className="text-white w-full lg:w-[40%] py-32">
          <div className="ml-12 text-3xl lg:text-6xl xl:text-7xl font-bold text-center">
            AM BOUW &
            <div>RENOVATIE</div>
          </div>
        </div>

        {/* Image Section */}
        <div id="images" className="relative w-full lg:w-[60%] h-screen">
          {/* Default Image */}
          <img
            className="w-full h-full object-cover transition-opacity duration-500"
            src={defaultImage}
            alt="Main"
          />

          {/* Overlay Image (Fades in on Hover) */}
          <img
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
              hoverImage ? "opacity-100" : "opacity-0"
            }`}
            src={hoverImage || defaultImage}
            alt="Hover"
          />

          {/* Hover Partitions */}
          <div
            className="absolute top-0 left-0 w-1/3 h-full transition duration-300"
            onMouseEnter={() =>
              setHoverImage("/images/hero_bg_1_2-1024x651.jpg")
            }
            onMouseLeave={() => setHoverImage("")}
          ></div>

          <div
            className="absolute top-0 left-1/3 w-1/3 h-full transition duration-300 opacity-100"
            onMouseEnter={() =>
              setHoverImage("/images/joe-holland-80zZ1s24Nag-unsplash-1024x797.jpg")
            }
            onMouseLeave={() => setHoverImage("")}
          ></div>

          <div
            className="absolute top-0 left-2/3 w-1/3 h-full transition duration-500 opacity-100"
            onMouseEnter={() => setHoverImage("/images/3.jpg")}
            onMouseLeave={() => setHoverImage("")}
          ></div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="relative z-10 mt-[100vh]">
        <div className="p-28 bg-black bg-[url('/images/Wood-Textures-17-1.png')] text-white text-center font-bold md:text-5xl text-3xl">
          <p className="">Wij zijn al jaren een betrouwbaar bouwbedrijf Nederland.</p>
        </div>

        {/* Our Services Section */}
        <div className="bg-white h-[50vh] p-24">
          <div className="md:text-6xl text-5xl font-bold md:text-left text-center">OUR SERVICES</div>
        </div>

        {/* Services List */}
        <div className="bg-black flex flex-wrap gap-5 p-20 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden border-black p-3 bg-slate-700 -top-[30vh]"
            >
              {/* Image */}
              <Image
                width={200}
                height={100}
                alt={`service-${index + 1}`}
                src={service.imgSrc}
                className="w-full h-auto"
              />

              {/* Overlay Effect */}
              <div className="absolute bottom-0 left-0 w-full h-0 bg-black/60 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:h-full group-hover:opacity-100">
                <span className="text-white text-xl font-semibold">
                  {service.hoverText}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="z-50"><Footerpage/></div> */}
        <Footerpage />
      </div>
    </div>
  );
};

export default Page;