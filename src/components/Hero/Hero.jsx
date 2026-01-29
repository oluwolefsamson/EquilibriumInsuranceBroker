"use client";

import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-950">
     <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20 lg:py-24 min-h-[80vh] flex items-center">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT: Copy */}
          <div className="lg:col-span-6">
            {/* Small label (not flashy) */}
            <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <span className="h-2 w-2 rounded-full bg-green-700" />
              Insurance made clear and dependable
            </div>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.08]">
              Protect what you’ve built {" "}
              <span className="text-green-800 dark:text-green-300">
                with coverage that fits.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Equilibrium Insurance Broker helps you choose the right plan for your
              health, property, or business with straightforward guidance from start
              to claim.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-green-800 px-6 py-3 text-sm font-semibold text-white hover:bg-green-900 transition shadow-sm"
              >
                Request a Quote
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-xl border border-green-800 px-6 py-3 text-sm font-semibold text-green-800 hover:bg-green-50 dark:hover:bg-white/5 transition"
              >
                View Services
              </Link>
            </div>

            {/* Practical trust row (subtle, not “stats cards”) */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-300">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-700" />
                Clear recommendations
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-700" />
                Fast support
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-700" />
                Business & personal plans
              </span>
            </div>
          </div>

<div className="lg:col-span-6 h-full">
  <div className="relative h-full min-h-[360px] sm:min-h-[420px] lg:min-h-[520px]">
    <img
      src="/heroImg.png"
      alt="Insurance consultation"
      className="absolute inset-0 w-full h-full object-contain"
    />
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
