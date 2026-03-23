import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const products = [
  {
    name: "BMI & GI Fittings",
    slug: "bmi-gi-fittings",
    img:"/products/Bmi.png" ,
  },
  {
    name: "Forged & SS Fittings",
    slug: "forged-ss-fittings",
    img: "/products/forged.png",
  },
  {
    name: "Grooved Fittings",
    slug: "grooved-fittings",
    img: "/products/grooved.png",
  },
  {
    name: "Pipes (ERW, SMLS, GI)",
    slug: "pipes-erw-smls-gi",
    img: "/products/pipes.png",
  },
  {
    name: "Valves",
    slug: "valves",
    img: "/products/valves.png",
  },
  {
    name: "CS Welded Fittings",
    slug: "cs-welded-fittings",
    img: "/products/welded.png",
  },
  {
    name: "Flanges & Fittings",
    slug: "flanges-fittings",
    img: "/products/flanges.png",
  },
  {
    name: "Bolt, Nut, Washer",
    slug: "bolt-nut-washer",
    img: "/products/bolt.png",
  },
  {
    name: "Gaskets & Glue",
    slug: "gaskets-glue",
    img: "/products/gaskets.png",
  },
  {
    name: "Copper & Brass Fittings",
    slug: "copper-brass-fittings",
    img: "/products/copper.png",
  },
  {
    name: "Safety Valves",
    slug: "safety-valves",
    img: "/products/safety-valves.png",
  },
  {
    name: "PVC / CPVC / PPR / HDPE",
    slug: "pvc-cpvc-ppr-hdpe",
    img: "/products/pvc.png",
  },
  {
    name: "Flexible Joints",
    slug: "flexible-joints",
    img: "/products/flexible.png",
  },
  {
    name: "Guages & Water Meters",
    slug: "guages-water-meters",
    img: "/products/meteres.png",
  },
  {
    name: "Hardware & Tools",
    slug: "hardware-tools",
    img: "/products/hardware.png",
  },
  {
    name: "Safety Items",
    slug: "safety-items",
    img: "/products/safety.png",
  },
];

export default function ProductsSection() {
  const [index, setIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="max-w-xl mb-12 md:mb-16">
          <span className="text-xs bg-teal-100 text-teal-700 px-4 py-2 rounded-full uppercase">
            Offered Products
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Our Products
          </h2>
          <p className="text-gray-500 mt-4">
            Explore our wide range of industrial products.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative flex items-center justify-center">

          {/* LEFT */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 bg-[#0F5A5F] text-white shadow p-3 rounded-full"
          >
            <FiChevronLeft />
          </button>

          {/* SLIDES */}
          <div className="flex items-center justify-center w-full h-[400px] relative overflow-hidden">

            <AnimatePresence>
              {products.map((product, i) => {
                const isActive = i === index;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8, x: 100 }}
                    animate={{
                      opacity: isActive ? 1 : 0.4,
                      scale: isActive ? 1 : 0.8,
                      x: (i - index) * 300,
                      zIndex: isActive ? 10 : 1,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, info) => {
                      if (info.offset.x < -100) nextSlide();
                      if (info.offset.x > 100) prevSlide();
                    }}
                    className="absolute w-[260px] sm:w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden cursor-grab active:cursor-grabbing"
                  >
                    <img
                      src={product.img}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-gray-800">
                        {product.name}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

          </div>

          {/* RIGHT */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 bg-[#0F5A5F] text-white shadow p-3 rounded-full"
          >
            <FiChevronRight />
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-6 gap-2">
          {products.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === index ? "bg-[#0F5A5F]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Link to="/products">
            <button className="px-8 py-4 bg-[#0F5A5F] text-white rounded-xl flex items-center gap-2">
              Find Out More <FiArrowRight />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}