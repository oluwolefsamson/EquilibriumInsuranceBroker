
import Brand1 from "../../assets/brands/1.png";
import Brand2 from "../../assets/brands/2.png";
import Brand3 from "../../assets/brands/3.png";
import Brand4 from "../../assets/brands/4.jpg";
import Brand5 from "../../assets/brands/5.png";

const BrandsLogo = () => {
  return (
    <section className="bg-white dark:bg-gray-950">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle divider */}
        <div className="border-t border-b border-gray-200 dark:border-white/10 py-10">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {[Brand1, Brand4, Brand2, Brand5, Brand3].map((brand, index) => (
              <img
                key={index}
                src={brand}
                alt={`Partner ${index + 1}`}
                className="
                  h-10 sm:h-12 md:h-14
                  w-auto
                  opacity-80
                  grayscale
                  transition-opacity
                  hover:opacity-100
                  dark:invert-[0.85]
                "
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsLogo;
