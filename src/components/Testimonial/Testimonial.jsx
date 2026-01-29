import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "John Praise",
    position: "Entrepreneur, Abuja",
    text: "Equilibrium Insurance Broker guided me through choosing the best insurance for my business. Their professionalism and attention to detail are exceptional.",
    img: "/test1.jpg",
  },
  {
    id: 2,
    name: "Aisha Brown",
    position: "Homeowner, Lagos",
    text: "I found the perfect home insurance plan for my family. The team was supportive, transparent, and genuinely cared about my needs.",
    img: "/test2.jpg",
  },
  {
    id: 3,
    name: "Muhammed Hassan",
    position: "Car Owner, Abuja",
    text: "Getting car insurance was effortless with Equilibrium. They handled everything smoothly and explained every step clearly.",
    img: "/test3.jpg",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div
          data-aos="fade-up"
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          {/* Badge */}
          <p className="inline-flex items-center rounded-full bg-green-50 px-4 py-1 text-sm font-semibold text-green-700">
            Testimonials
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            What Our Clients Say
          </h2>

          <p className="text-slate-600 max-w-xl mx-auto">
            Trusted by individuals and businesses across Nigeria for reliable,
            transparent, and professional insurance services.
          </p>

          <Slider {...settings} className="mt-10">
            {testimonialData.map(({ id, name, position, text, img }) => (
              <div key={id} className="px-2">
                <div className="relative flex flex-col items-center gap-6 p-8 bg-white rounded-3xl shadow-md hover:shadow-xl transition">
                  {/* Avatar */}
                  <img
                    src={img}
                    alt={name}
                    className="w-24 h-24 rounded-full border-4 border-green-600 object-cover shadow"
                  />

                  {/* Quote */}
                  <p className="text-slate-600 italic text-sm sm:text-base leading-relaxed">
                    “{text}”
                  </p>

                  {/* Name */}
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {name}
                    </h3>
                    <p className="text-green-700 text-sm">{position}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
