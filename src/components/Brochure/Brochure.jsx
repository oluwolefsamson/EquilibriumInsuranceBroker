
// Import Swiper React components
import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

// Import required modules
import { EffectCards } from "swiper/modules";

const Brochure = () => {
  const handleDownload = () => {
    const brochureUrl = "/EquilibriumInsuranceBrochure.pdf";
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = "EquilibriumInsuranceBrochure.pdf";
    link.click();
  };

  const slides = useMemo(
    () => [
      { src: "/bro1.jpg", alt: "Equilibrium brochure cover" },
      { src: "/bro2.jpg", alt: "Coverage highlights spread" },
      { src: "/bro3.jpg", alt: "Business protection overview" },
      { src: "/bro4.jpg", alt: "Personal insurance plans" },
      { src: "/bro5.jpg", alt: "Claims support and service" },
      { src: "/bro6.jpg", alt: "Risk assessment and advisory" },
      { src: "/bro7.jpg", alt: "Commercial lines overview" },
      { src: "/bro8.jpg", alt: "Family protection plans" },
      { src: "/bro9.jpg", alt: "Industry partners and carriers" },
      { src: "/bro10.jpg", alt: "Get started with Equilibrium" },
    ],
    []
  );

  const [loadedCount, setLoadedCount] = useState(0);
  const showSkeleton = loadedCount === 0;

  return (
    <section className="relative bg-[#f4f7f3] text-slate-900">

      <div className="container relative mx-auto px-6 py-10 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
              Equilibrium Insurance Brokerage
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Built for families and businesses who want
                <span className="block text-slate-700">clear coverage and calm decisions.</span>
              </h1>
              <p className="max-w-xl text-lg text-slate-700">
                We design insurance strategies that balance protection, cost, and
                long-term confidence. Our independent brokers compare carriers,
                explain trade-offs, and secure policies that actually fit.
              </p>
            </div>

            <div className="grid max-w-xl grid-cols-3 gap-4 rounded-2xl border border-slate-900/10 bg-white/80 p-5 text-center text-sm shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
              <div>
                <p className="text-2xl font-semibold">30+</p>
                <p className="text-slate-600">Carrier partners</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">24/7</p>
                <p className="text-slate-600">Claims support</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">100%</p>
                <p className="text-slate-600">Custom plans</p>
              </div>
            </div>

            <ul className="space-y-3 text-slate-700">
              {[
                "Independent brokerage with transparent comparisons",
                "Personal, family, and commercial coverage in one place",
                "Annual policy reviews to keep you protected as you grow",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleDownload}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_20px_rgba(5,150,105,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
              >
                <span className="absolute inset-0 translate-x-full bg-emerald-300 transition-transform duration-300 group-hover:translate-x-0" />
                <span className="relative">Download brochure</span>
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-slate-900/15 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900/30 hover:text-slate-900">
                Talk with an advisor
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 left-10 h-24 w-24 rotate-12 rounded-3xl border border-slate-900/10 bg-white/80 shadow-[0_18px_35px_rgba(15,23,42,0.12)]" />
            <div className="absolute -bottom-12 right-6 h-28 w-28 -rotate-6 rounded-3xl border border-slate-900/10 bg-white/70 shadow-[0_18px_35px_rgba(15,23,42,0.12)]" />

            <div className="relative mx-auto max-w-sm">
              {showSkeleton && (
                <div
                  className="absolute inset-0 z-10 flex h-[440px] w-[300px] flex-col overflow-hidden rounded-3xl border border-emerald-900/10 bg-white/70 shadow-[0_25px_45px_rgba(15,23,42,0.2)]"
                  aria-busy="true"
                  aria-label="Loading brochure previews"
                >
                  <div className="h-full w-full animate-pulse bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-50" />
                  <div className="absolute left-6 top-6 h-4 w-28 rounded-full bg-emerald-200/70" />
                  <div className="absolute left-6 top-14 h-3 w-40 rounded-full bg-emerald-200/60" />
                  <div className="absolute bottom-6 left-6 h-3 w-24 rounded-full bg-emerald-200/60" />
                </div>
              )}
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className={`mySwiper h-[440px] w-[300px] ${showSkeleton ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
              >
                {slides.map((slide) => (
                  <SwiperSlide
                    key={slide.src}
                    className="flex items-center justify-center rounded-3xl bg-slate-900 text-white shadow-[0_25px_45px_rgba(15,23,42,0.35)]"
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="h-full w-full rounded-3xl object-cover"
                      onLoad={() => setLoadedCount((count) => count + 1)}
                      loading="lazy"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-900/10 bg-white/80 p-4 text-sm text-slate-700 shadow-[0_18px_30px_rgba(15,23,42,0.08)]">
              <p className="font-semibold text-slate-900">What’s inside</p>
              <p className="mt-2">
                Coverage options, real client scenarios, and a step-by-step
                guide to choosing the right policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brochure;
