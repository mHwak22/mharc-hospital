"use client";
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { TrophyIcon } from "@heroicons/react/20/solid";

const Awards = () => {
  return (
    <div className="bg-[#f8f9f9] lg:pt-[2rem] md:pt-[8rem] pb-[1rem] flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-6">
          <TrophyIcon className="text-yellow-300 w-[3.5rem] h-[3.5rem] mx-4 animate-pulse" />
          <h1 className="heading text-blue-500">Awards</h1>
        </div>
        <div className="flex items-center w-[80%]">
          <p>
            Our comprehensive diagnostics, technology-aided consultations with
            eminent doctors and quality healthcare at affordable cost are some
            of the many reasons Max Healthcare is every patient's first choice.
          </p>
        </div>
      </div>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
        <div data-aos="fade-up">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] flex flex-col">
            <div className="flex">
              <Image
                src="/images/award1.png"
                alt="project1"
                layout="fill"
                className="object-contain mt-3"
              />
            </div>
            <div className="bg-blue-400 h-8 flex items-center justify-center">
              <h1>award 1</h1>
            </div>
          </div>
        </div>
        <div data-aos="zoom-out" data-aos-delay="300">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] flex flex-col">
            <div className="flex">
              <Image
                src="/images/award1.png"
                alt="project1"
                layout="fill"
                className="object-contain mt-3"
              />
            </div>
            <div className="bg-blue-400 h-8 flex items-center justify-center">
              <h1>award 1</h1>
            </div>
          </div>
        </div>
        <div data-aos="fade-down">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] flex flex-col">
            <div className="flex">
              <Image
                src="/images/awards2.png"
                alt="project1"
                layout="fill"
                className="object-contain mt-3"
              />
            </div>
            <div className="bg-blue-400 h-8 flex items-center justify-center">
              <h1>award 2</h1>
            </div>
          </div>
        </div>
        <div data-aos="zoom-out" data-aos-delay="300">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] flex flex-col">
            <div className="flex">
              <Image
                src="/images/awards3.png"
                alt="project1"
                layout="fill"
                className="object-contain mt-3"
              />
            </div>
            <div className="bg-blue-400 h-8 flex items-center justify-center">
              <h1>award 3</h1>
            </div>
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] flex flex-col">
            <div className="flex">
              <Image
                src="/images/awards4.png"
                alt="project1"
                layout="fill"
                className="object-contain mt-3"
              />
            </div>
            <div className="bg-blue-400 h-8 flex items-center justify-center z-10">
              <h1>award 4</h1>
            </div>
          </div>
        </div>
        <div data-aos="zoom-out" data-aos-delay="300">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] flex flex-col">
            <div className="flex">
              <Image
                src="/images/awards5.jpg"
                alt="project1"
                layout="fill"
                className="object-contain mt-3"
              />
            </div>
            <div className="bg-blue-400 h-8 flex items-center justify-center">
              <h1>award 5</h1>
            </div>
          </div>
        </div>
        <div data-aos="fade-down">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] flex flex-col">
            <div className="flex">
              <Image
                src="/images/award6.jpg"
                alt="project1"
                layout="fill"
                className="object-contain mt-3"
              />
            </div>
            <div className="bg-blue-400 h-8 flex items-center justify-center">
              <h1>award 6</h1>
            </div>
          </div>
        </div>
        <div data-aos="zoom-out" data-aos-delay="300">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] flex flex-col">
            <div className="flex">
              <Image
                src="/images/awards8.jpg"
                alt="project1"
                layout="fill"
                className="object-contain mt-3"
              />
            </div>
            <div className="bg-blue-400 h-8 flex items-center justify-center z-10">
              <h1>award 8</h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex w-[80%] pt[4rem] items-center justify-center">
      <button type="button" 
      className="bg-blue-500 cursor-pointer p-4">
      View All Awards
    </button>
      </div>
    </div>
  );
};

export default Awards;
