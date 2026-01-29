import {
  FaHome,
  FaUser,
  FaMedkit,
  FaBriefcase,
  FaHandsHelping,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const servicesData = [
  {
    name: "Personal Insurance",
    icon: FaUser,
    description:
      "Protect individuals and families with home, auto, life, health, and personal liability coverage—tailored to your needs.",
    route: "/personal-insurance",
    aosDelay: "0",
  },
  {
    name: "Commercial Insurance",
    icon: FaBriefcase,
    description:
      "Insurance solutions for businesses—property, liability, workers’ compensation, professional liability, and business interruption.",
    route: "/commercial-insurance",
    aosDelay: "200",
  },
  {
    name: "Risk Assessment & Analysis",
    icon: FaHandsHelping,
    description:
      "We identify vulnerabilities and design risk management strategies, ensuring your coverage remains strong and complete.",
    route: "/risk-assesment",
    aosDelay: "400",
  },
  {
    name: "Claims Assistance",
    icon: FaHome,
    description:
      "Dedicated support through the claims process—filing, follow-up, and advocacy for fair and timely settlements.",
    route: "/claims-assistance",
    aosDelay: "600",
  },
  {
    name: "Insurance Consulting",
    icon: FaMedkit,
    description:
      "Expert guidance on coverage optimization, program design, and risk planning for individuals and organizations.",
    route: "/insurance-consulting",
    aosDelay: "800",
  },
  {
    name: "Client Relationship Management",
    icon: FaHandsHelping,
    description:
      "Built on trust and transparency—ongoing support and periodic reviews as your needs evolve.",
    route: "/client-relationship-management",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-20 dark:text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1 text-sm font-semibold text-green-700 dark:bg-green-500/10 dark:text-green-300">
            Our Services
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 dark:text-white">
            Explore Our Insurance Services
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Tailored insurance solutions designed to protect your personal and
            business assets—backed by expert guidance and reliable support.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {servicesData.map((service) => {
            const Icon = service.icon;

            return (
              <div
                data-aos="zoom-in-down"
                data-aos-delay={service.aosDelay}
                key={service.name}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                {/* subtle green hover glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-gradient-to-br from-green-500/12 via-transparent to-transparent" />

                {/* Icon */}
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-700 ring-1 ring-green-100 dark:bg-green-500/10 dark:text-green-300 dark:ring-white/10">
                  <Icon className="text-2xl" />
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {service.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300 line-clamp-4">
                  {service.description}
                </p>

                <div className="mt-5">
                  <Link
                    to={service.route}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 dark:text-green-300"
                  >
                    Learn More <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
