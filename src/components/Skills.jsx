import React from "react";
import { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";

export default function Skills() {
  return (
    <div>
      <div className="mt-32">
        <h2 className="text-2xl text-center font-medium mb-4 tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
          Skills
        </h2>
        <div className="mt-12">
          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={5}
            autoplay={{ delay: 1500 }}
            pagination={{
              clickable: true,
              el: ".swiper-custom-pagination",
            }}
          >
            <div className="">
              <SwiperSlide>
                <img src="/JS.png" width="100px" height="100px" className="" />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/HTML5.png"
                  width="110px"
                  height="110px"
                  className=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/CSS3.png"
                  width="110px"
                  height="110px"
                  className=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/react.png"
                  width="120px"
                  height="110px"
                  className=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/Next.png"
                  width="120px"
                  height="110px"
                  className=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/MUI.png" width="120px" height="110px" className="" />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/Bootstrap.png"
                  width="120px"
                  height="140px"
                  className=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/tailwind.png"
                  width="120px"
                  height="110px"
                  className=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/git.png" width="150px" height="140px" className="" />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/supabase.png"
                  width="150px"
                  height="140px"
                  className=""
                />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
