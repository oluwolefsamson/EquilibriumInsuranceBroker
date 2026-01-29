import { useState } from "react";
import ctaImg from "../../assets/website/cta.jpg";

export default function Cta() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <section className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-14 shadow-2xl lg:grid lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-16 items-center">
          {/* GREEN GLOW BG */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-green-500/25 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-green-400/15 blur-3xl" />
          </div>
          {/* LEFT TEXT */}
          <div className="max-w-xl text-center lg:text-left">
            <p className="inline-flex items-center rounded-full bg-green-500/10 px-4 py-1 text-sm font-semibold text-green-300">
              Get Protected Today
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Secure your future with Equilibrium Insurance.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              Protect what matters most with comprehensive insurance solutions.
              Get peace of mind today with Equilibrium Insurance Broker.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="/contact"
                className="w-full sm:w-auto rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-green-700 transition"
              >
                Get a Quote
              </a>

              <a
                href="/services"
                className="w-full sm:w-auto rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 transition text-center"
              >
                Learn More →
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mt-10 lg:mt-0 flex items-center justify-center">
            <div className="relative w-full overflow-hidden rounded-2xl ring-1 ring-white/10 flex items-center justify-center">
              {!isImageLoaded && (
                <div className="absolute inset-0 bg-white/10 animate-pulse" />
              )}

              <img
                src={ctaImg}
                alt="Equilibrium Insurance Broker"
                onLoad={() => setIsImageLoaded(true)}
                className={`w-full h-auto object-contain bg-slate-900 transition-opacity duration-500 ${
                  isImageLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
