import React from "react";
import { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import { skillslist } from "./skills";


export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto lg:px-8 mt-8 py-24">
      <div className="mt-32">
        <h2 className="text-2xl text-center font-medium mb-4 tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
          Skills
        </h2>
        <div className="mt-24">
          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={5}
            autoplay={{ delay: 1000 }}
            pagination={{
              clickable: true,
              el: ".swiper-custom-pagination",
            }}
          >
            <div >
              {skillslist.map((skill) => (
                <SwiperSlide>
                  <img
                    src={`/assets/${skill}.png`}
                    width="100px"
                    height="100px"
                    alt="error"
                  />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
