import React from "react";
import data from "../../Utils/Team.json";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

const TeamSecond = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
  };

  return (
    <section className="lg:py-12 px-4 md:px-16 mx-auto bg-gray-100 ">
      <div className="text-center pt-[70px] mb-8">
        <span className="text-3xl font-bold text-blue-600 dark:text-white">
          THE MANAGEMENT
        </span>
        <br />
        <span className="text-green-500 text-xl font-medium dark:text-white">
          TEAM
        </span>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
          },
        }}
        modules={[EffectCoverflow]}
        className="w-full py-12"
      >
        {data.map((man, i) => (
          <SwiperSlide
            key={i}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden p-4 max-w-[370px] sm:max-w-[300px] md:max-w-[280px] w-full"
          >
            <div className="flex justify-center items-center mb-4">
              <img
                src={man.image}
                alt={man.name}
                className="w-40 h-40 rounded-full object-cover"
              />
            </div>
            <div className="text-center">
              <span className="block text-lg font-semibold text-gray-900">
                {man.name}
              </span>
              <span className="text-green-500 text-sm font-medium">
                {man.position}
              </span>
              <br />
              <span className="text-gray-600 text-xs mt-2">{man.detail}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TeamSecond;
