import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Business Owner, Los Angeles",
    text: "Equilibrium Insurance Broker ensured I got the best coverage for my business. Highly recommended for their professionalism and care!",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=faces&fit=crop&w=150&h=150&q=80",
  },
  {
    id: 2,
    name: "Michael Lee",
    position: "Homeowner, Chicago",
    text: "The team at Equilibrium made choosing home insurance stress-free. Their expertise gave me peace of mind for my family.",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=faces&fit=crop&w=150&h=150&q=80",
  },
  {
    id: 3,
    name: "Emily Davis",
    position: "Car Owner, Houston",
    text: "Equilibrium helped me find car insurance that saves money without compromising coverage. A truly seamless experience.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&w=150&h=150&q=80",
  },
];

const Testimonial = () => {
  var settings = {
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
    <div className="py-[100px] bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <div
          data-aos="fade-up"
          className="max-w-screen-xl mx-auto gap-6 text-center"
        >
          <h2 className="text-4xl font-bold text-blue-600 dark:text-white  mb-6">
            What Our Clients Say
          </h2>
          <Slider {...settings}>
            {testimonialData.map(({ id, name, position, text, img }) => (
              <div key={id} className="relative gap-4">
                {/* Card */}
                <div className="flex flex-col items-center gap-5 p-6 sm:p-8 bg-white  rounded-3xl shadow-lg relative transform transition duration-500 hover:scale-105">
                  {/* Image */}
                  <img
                    src={img}
                    alt={name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-green-500 shadow-md object-cover"
                  />
                  {/* Text */}
                  <p className="text-gray-600  italic text-sm sm:text-lg text-center">
                    “{text}”
                  </p>
                  {/* Name */}
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 ">
                    {name}
                  </h3>
                  <p className="text-blue-500 text-xs sm:text-sm">{position}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
