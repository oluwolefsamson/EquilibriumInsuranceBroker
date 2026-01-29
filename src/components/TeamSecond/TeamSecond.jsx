
import { useEffect, useState } from "react";
import data from "../../Utils/Team.json";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

const TeamSecond = () => {
  const [activeMember, setActiveMember] = useState(null);

  useEffect(() => {
    if (!activeMember) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveMember(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeMember]);

  return (
    <section className="py-20 sm:py-24 px-4 md:px-16 mx-auto bg-slate-50">
      {/* Header */}
      <div className="text-center mb-10 space-y-3">
        <p className="inline-flex items-center rounded-full bg-green-50 px-4 py-1 text-sm font-semibold text-green-700">
          Leadership
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          The Management Team
        </h2>

        <p className="text-slate-600 max-w-2xl mx-auto">
          Meet the experienced professionals driving Equilibrium Insurance
          Broker’s strategy, operations, and service excellence.
        </p>
      </div>

      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        spaceBetween={24}
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          depth: 140,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full py-10"
      >
        {data.map((man, i) => (
          <SwiperSlide
            key={i}
            className="max-w-[340px] w-full"
          >
            <button
              type="button"
              onClick={() => setActiveMember(man)}
              className="group w-full text-left bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition overflow-hidden p-6"
              aria-label={`View profile: ${man.name}`}
            >
              {/* Avatar */}
              <div className="flex justify-center mb-5">
                <img
                  src={man.image}
                  alt={man.name}
                  className="w-28 h-28 rounded-full object-cover ring-4 ring-green-100"
                />
              </div>

              {/* Text */}
              <div className="text-center space-y-2">
                <p className="text-lg font-semibold text-slate-900">
                  {man.name}
                </p>

                <p className="text-green-700 text-sm font-semibold">
                  {man.position}
                </p>

                <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">
                  {man.detail}
                </p>
              </div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {activeMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label="Team member profile"
        >
          <button
            type="button"
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setActiveMember(null)}
            aria-label="Close profile modal"
          />

          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="flex items-start gap-6 p-6 sm:p-8">
              <img
                src={activeMember.image}
                alt={activeMember.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover ring-4 ring-green-100"
              />

              <div className="flex-1">
                <p className="text-xl sm:text-2xl font-semibold text-slate-900">
                  {activeMember.name}
                </p>
                <p className="mt-1 text-green-700 text-sm font-semibold">
                  {activeMember.position}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveMember(null)}
                className="ml-auto inline-flex items-center justify-center rounded-full h-10 w-10 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition"
                aria-label="Close profile modal"
              >
                ×
              </button>
            </div>

            <div className="px-6 sm:px-8 pb-8 text-slate-600 leading-relaxed">
              {activeMember.detail}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSecond;
