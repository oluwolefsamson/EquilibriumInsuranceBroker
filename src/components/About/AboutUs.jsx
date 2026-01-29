import { useEffect } from "react";
import { Link } from "react-router-dom";
import aboutImage from "../../assets/website/aboutImg.jpg";
import {
  FaTrophy,
  FaBriefcase,
  FaClipboardCheck,
  FaUsers,
  FaLightbulb,
  FaHandsHelping,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const values = [
  {
    title: "Excellence",
    desc: "We aim for high standards in every engagement, delivering dependable outcomes.",
    icon: FaTrophy,
  },
  {
    title: "Professionalism",
    desc: "We act with integrity, clarity, and respect—earning trust through consistency.",
    icon: FaBriefcase,
  },
  {
    title: "Accountability",
    desc: "We take responsibility for decisions and follow through, every step of the way.",
    icon: FaClipboardCheck,
  },
  {
    title: "Customer Focus",
    desc: "We listen first, then recommend what fits—prioritizing your needs and goals.",
    icon: FaUsers,
  },
  {
    title: "Innovation",
    desc: "We adopt better ways of working to serve clients faster and more effectively.",
    icon: FaLightbulb,
  },
  {
    title: "Teamwork",
    desc: "We collaborate across roles to deliver smooth, reliable service to every client.",
    icon: FaHandsHelping,
  },
];

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section id="about" className="bg-white dark:bg-gray-950">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        {/* Top: About intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Text */}
          <div className="lg:col-span-6" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <span className="h-2 w-2 rounded-full bg-green-800" />
              About Equilibrium Insurance Broker
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Built on trust. Focused on protection.
            </h2>

            <div className="mt-5 space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Equilibrium Insurance Broker (EIB) is a liability company incorporated
                on 18th July 2022, with an authorized share capital of N5 Million,
                as prescribed by the Insurance Act of 2003.
              </p>
              <p>
                A professional indemnity of N10 Million is in place to protect the
                liability of the firm and the interests of clients against loss or
                damage that may arise.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-green-800 px-6 py-3 text-sm font-semibold text-white hover:bg-green-900 transition shadow-sm"
              >
                Speak to an Advisor
              </Link>

              <Link
                to="/brochure"
                className="inline-flex items-center justify-center rounded-xl border border-green-800 px-6 py-3 text-sm font-semibold text-green-800 hover:bg-green-50 dark:hover:bg-white/5 transition"
              >
                View Brochure
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-6" data-aos="fade-up" data-aos-delay="100">
            <div className="rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg">
              <img
                src={aboutImage}
                alt="Equilibrium Insurance"
                className="w-full h-[360px] sm:h-[420px] lg:h-[480px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Subtle accent blocks (light green only, not background) */}
            <div className="pointer-events-none absolute hidden lg:block" />
          </div>
        </div>

        {/* Mission (clean card, no gradient background) */}
        <div
          className="mt-14 md:mt-16 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900/30 p-7 md:p-10"
          data-aos="fade-up"
        >
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-green-800 dark:text-green-300">
              Our Mission
            </div>
            <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              Insurance solutions that are clear, accessible, and reliable.
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              Our mission is to provide insurance solutions that meet the diverse
              needs of our clients with transparency and professionalism—ensuring
              every customer feels supported and protected.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-14 md:mt-16">
          <div className="flex items-end justify-between gap-6 flex-wrap" data-aos="fade-up">
            <div>
              <div className="text-sm font-semibold text-green-800 dark:text-green-300">
                Our Core Values
              </div>
              <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                What guides how we work.
              </h3>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 h-full" data-aos="fade-up">
              <div className="h-full rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg">
                <img
                  src="/core-values.png"
                  alt="Our core values"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              {values.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    data-aos="fade-up"
                    data-aos-delay={idx * 60}
                    className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900/20 p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-11 w-11 rounded-xl bg-green-50 dark:bg-green-900/30 flex items-center justify-center">
                        <Icon className="text-green-800 dark:text-green-300" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {v.title}
                        </h4>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {v.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
      
      </div>
    </section>
  );
};

export default AboutUs;
