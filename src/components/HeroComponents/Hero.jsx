import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import SplitText from "../animationComponents/SplitText";

export default function ConstructionHero() {

  const images = ["/bg.jpg"];
  const metals = [
    "/A1.png",
    "/A2.png",
    
  ];

  const [index, setIndex] = useState(0);
  const [metalIndex, setMetalIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % images.length), 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setMetalIndex((prev) => (prev + 1) % metals.length), 2500);
    return () => clearInterval(interval);
  }, []);

  const handleAnimationComplete = () => console.log("Hero text animation completed");

  return (
    <div className="w-full relative bg-gray-100">
      <section className="relative min-h-[600px] sm:min-h-[720px] pb-20 overflow-hidden">

        {/* BACKGROUND IMAGES */}
        <div className="absolute inset-0">
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              className="absolute w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: index === i ? 1 : 0, scale: index === i ? 1 : 1.1 }}
              transition={{ duration: 1.5 }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F5A5F]/90 via-[#0F5A5F]/70 to-[#0F5A5F]/40"></div>
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-auto lg:h-[560px] max-w-7xl pt-50 lg:pt-36 mx-auto px-6 sm:px-8">

          {/* LEFT CONTENT */}
          <div className="text-white max-w-xl w-full lg:w-1/2 mb-12 lg:mb-0">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex bg-white/20 backdrop-blur px-4 py-1 rounded-full text-sm mb-4 sm:mb-6"
            >
              Reliable metal trading partner
            </motion.div>

            <SplitText
              text="Delivering strength, precision, and quality"
              className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              delay={60}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
            />

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-200 mt-4 sm:mt-6 text-sm sm:text-base"
            >
              We provide a wide range of premium metal fittings, pipes, valves,
              and industrial hardware designed to meet the highest standards of durability, safety, and performance.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 sm:mt-8 bg-orange-500 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-medium hover:bg-orange-600 transition"
            >
              Get Free Consultation →
            </motion.button>
          </div>

          {/* METAL IMAGE SLIDER */}
          <div className="w-full lg:w-[420px] h-[520px] flex items-center justify-center relative lg:absolute lg:right-16 lg:top-1/2 lg:-translate-y-1/2">

            <AnimatePresence mode="wait">
              <motion.img
                key={metalIndex}
                src={metals[metalIndex]}
                className="w-[200px] sm:w-[300px] lg:w-[360px] object-contain drop-shadow-2xl absolute"
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -150, opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>

          </div>

        </div>

      </section>
    </div>
  );
}