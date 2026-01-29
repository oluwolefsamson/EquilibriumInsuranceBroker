import {
  FaRegStar,
  FaNetworkWired,
  FaBook,
  FaCheckCircle,
  FaGraduationCap,
} from "react-icons/fa";

import whyChooseImg from "../../assets/choose.png"; 

const FEATURES = [
  {
    title: "Personalized Approach",
    description:
      "We deliver tailored solutions by understanding your needs, preferences, and risk tolerance.",
    icon: FaRegStar,
  },
  {
    title: "Extensive Network",
    description:
      "Access to reputable insurance providers gives you more options at competitive rates.",
    icon: FaNetworkWired,
  },
  {
    title: "Expertise & Experience",
    description:
      "Seasoned professionals providing informed advice and reliable service.",
    icon: FaBook,
  },
  {
    title: "Claims Advocacy",
    description:
      "We act as your advocate to ensure claims are handled promptly and fairly.",
    icon: FaCheckCircle,
  },
  {
    title: "Client Education",
    description:
      "We empower clients with resources and guidance to make confident decisions.",
    icon: FaGraduationCap,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT — IMAGE */}
        <div className="relative mt-8 lg:mt-0">
          {/* soft green glow */}
          <div className="absolute -inset-4 rounded-3xl bg-green-100/40 blur-3xl" />

          <img
            src={whyChooseImg}
            alt="Why choose Equilibrium Insurance Brokerage"
            className="relative rounded-3xl shadow-2xl object-cover w-full h-full"
          />
        </div>

        {/* RIGHT — TEXT */}
        <div>
          <div className="mb-8 space-y-3">
            <p className="inline-flex rounded-full bg-green-50 px-4 py-1 text-sm font-semibold text-green-700">
              Why Choose Equilibrium
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Why Choose Us
            </h2>

            <p className="text-slate-600 max-w-xl">
              We’re more than a broker—we’re your trusted partner for protection,
              clarity, and long-term support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700 ring-1 ring-green-100">
                    <Icon className="text-xl" />
                  </div>

                  <h3 className="text-md font-semibold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
