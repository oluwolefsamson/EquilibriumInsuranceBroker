import { useState } from "react";
import outlook from "../../assets/website/businessOutlook.png";

export default function BusinessOutlook() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <section className="relative isolate overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
      {/* Header */}
      <div className="text-center space-y-4 mb-14 sm:mb-20">
        <p className="inline-flex items-center rounded-full bg-green-50 px-4 py-1 text-sm font-semibold text-green-700">
          Business Outlook
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          Our Business Outlook
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Delivering exceptional insurance and consultancy services tailored to
          individuals and businesses, with a strong focus on innovation,
          reliability, and customer satisfaction.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            Why Choose Equilibrium
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We provide trusted insurance solutions designed around your needs.
            From risk management and claims administration to retail marketing
            and comprehensive coverage, we combine expertise, innovation, and
            responsive support you can rely on.
          </p>

          <a
            href="/services"
            className="inline-flex items-center justify-center rounded-xl bg-green-700 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg hover:bg-green-800 transition"
          >
            Explore Our Services →
          </a>
        </div>

        {/* RIGHT — IMAGE */}
        <div
          data-aos="fade-left"
          className="relative flex justify-center"
        >
          {!isImageLoaded && (
            <div className="absolute inset-0 rounded-3xl bg-slate-200 animate-pulse" />
          )}

          <img
            src={outlook}
            alt="Equilibrium Insurance Business Outlook"
            onLoad={() => setIsImageLoaded(true)}
            className={`relative w-full max-w-xl h-[520px] object-cover rounded-3xl shadow-2xl transition-opacity duration-500 ${
              isImageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
