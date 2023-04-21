import React from "react";

export default function Services() {
  return (
    <div>
      <div className="flex flex-col mt-24 items-center">
        <h2 className="text-2xl text-center font-medium mb-12 tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
          Services
        </h2>

        <div className="mx-auto grid grid-cols-1 grid-rows-3 gap-y-12 lg:grid lg:grid-cols-3 lg:grid-rows-1 gap-x-8">
          <div className="shadow-lg relative border dark:border-zinc-700/90 rounded-xl h-64 w-64 md:h-80 md:w-80 flex flex-col items-center ">
            <img src="/assets/webdesign.svg" className=" opacity-70" alt="error" />
            <p className="-mt-12 text-center font-medium dark:text-white">
              Web Design
            </p>
          </div>
          <div className="shadow-lg border dark:border-zinc-700/90 rounded-xl md:h-80 h-64 w-64 md:w-80 flex flex-col items-center">
            <img src="/assets/frontend.svg" className=" opacity-70" alt="error" />
            <p className="-mt-12 text-center font-medium dark:text-white">
              Frontend Development
            </p>
          </div>
          <div className="shadow-lg border dark:border-zinc-700/90 rounded-xl md:h-80 h-64 w-64 md:w-80 flex flex-col items-center">
            <img src="/assets/fullstack.svg" className=" opacity-70" alt="error" />
            <p className="-mt-12 text-center font-medium dark:text-white">
              Full Stack Development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
