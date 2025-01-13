import React from "react";
import { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import { skillslist } from "../../helpers/skills";

export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto p-10 xl:p-24">
      <div className="">
        <h2 data-aos="fade-up" className="text-center font-semibold mb-4 tracking-normal text-zinc-800 dark:text-zinc-100 text-3xl">
          Skills
        </h2>
        <div className="mt-24">
          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={50}
            breakpoints={{
              320: {
                slidesPerView: 3,
              },
              640: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            autoplay={{ delay: 1000 }}
            pagination={{
              clickable: true,
              el: ".swiper-custom-pagination",
            }}
          >
            <div >
              {skillslist.map((skill, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`/assets/${skill}.png`}
                    className="h-24 w-auto"
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
