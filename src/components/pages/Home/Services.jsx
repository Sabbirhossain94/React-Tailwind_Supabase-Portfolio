import { WebDesign, Frontend, FullStack } from "../../SVG/SvgComponents";
import { RightGradient } from "../../helpers/Gradient";

export default function Services() {

  return (
    <div className='relative py-20'>
      <RightGradient />
      <div className="max-w-7xl mx-auto sm:px-10 xl:px-24">
        <div className="flex flex-col items-center">
          <h2
            data-aos="fade-up"
            className="text-center capitalize tracking-normal font-bold mb-12 text-zinc-800 dark:text-zinc-100 text-3xl">
            Services
          </h2>
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 ">
            <div
              data-aos={window.innerWidth < 640 ? "fade-up" : "fade-right"}
              className="relative border dark:border-zinc-700/90 rounded-xl col-span-1 w-80 sm:w-96 md:w-80 lg:w-72 xl:w-80 h-96 flex flex-col justify-center items-center">
              <WebDesign className="w-20 h-20 lg:w-16 xl:w-20 lg:h-16 xl:h-20 text-sky-400 dark:text-teal-500" />
              <span className="dark:text-white mt-4">Figma To Website</span>
            </div>
            <div
              data-aos="fade-up"
              className="relative border dark:border-zinc-700/90 rounded-xl col-span-1 w-80 sm:w-96 md:w-80 lg:w-72 xl:w-80 h-96 flex flex-col justify-center items-center">
              <Frontend className="w-20 h-20 lg:w-16 xl:w-20 lg:h-16 xl:h-20 text-sky-400 dark:text-teal-500" />
              <span className="dark:text-white mt-4">Frontend Development</span>
            </div>
            <div
              data-aos={window.innerWidth < 640 ? "fade-up" : "fade-left"}
              className="relative border dark:border-zinc-700/90 rounded-xl col-span-1 w-80 sm:w-96 md:w-80 lg:w-72 xl:w-80 h-96 flex flex-col justify-center items-center">
              <FullStack className="w-20 h-20 lg:w-16 xl:w-20 lg:h-16 xl:h-20 text-sky-400 dark:text-teal-500" />
              <span className="dark:text-white mt-4">Full Stack Development</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
