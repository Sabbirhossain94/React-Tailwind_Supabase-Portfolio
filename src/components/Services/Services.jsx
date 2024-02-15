import React from "react";
import { WebDesign, Frontend, FullStack } from "../SVG/SvgComponents";

export default function Services() {
  return (
    <div className=" max-w-6xl mx-auto lg:px-8">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl text-center font-medium mb-12 tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
          Services
        </h2>
        <div className="mx-auto grid grid-cols-1 grid-rows-3 gap-y-12 lg:grid-cols-2 xl:grid-cols-3 lg:grid-rows-1 gap-x-8">
          <div className="py-4 shadow-lg relative border dark:border-zinc-700/90 rounded-xl h-64 w-64 md:h-80 md:w-80 flex flex-col items-center ">
            <WebDesign />
            <div className="flex justify-center items-center">
              <span className="absolute top-[150px] md:top-[190px] dark:text-white">Web Design</span>
            </div>
          </div>
          <div className="py-4 shadow-lg relative border dark:border-zinc-700/90 rounded-xl h-64 w-64 md:h-80 md:w-80 flex flex-col items-center ">
            <Frontend />
            <div className="flex justify-center items-center">
              <span className="absolute top-[150px] md:top-[190px] dark:text-white">Frontend Development</span>
            </div>
          </div>
          <div className="py-4 shadow-lg relative border dark:border-zinc-700/90 rounded-xl h-64 w-64 md:h-80 md:w-80 flex flex-col items-center ">
            <FullStack />
            <div className="flex justify-center items-center">
              <span className="absolute top-[150px] md:top-[190px] dark:text-white">Full Stack Development</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
