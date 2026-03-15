import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import CircularGallery from "../CircularGallery";

const products = [
  {
    name: "BMI & GI Fittings",
    img: "https://image.made-in-china.com/202f0j00cjUhaQZSZKps/Plumbing-Fittings-Malleable-Iron-Pipe-Fitting-Gi-Fittings-Threaded-Fittings.webp",
  },
  {
    name: "Forged & SS Fittings",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8aUimNbuB_fGUMrMji8C9_0yILHR1liW0AQ&s",
  },
  {
    name: "Grooved Fittings",
    img: "https://web.s-cdn.boostkit.dev/webaction-files/_Brochure/grooved-pipe-fittings-98-6868ce770156e3070742ebb0.jpg",
  },
  {
    name: "Pipes (ERW, SMLS, G.I)",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/5/309211238/JD/OO/TU/132364101/alloy-steel-astm-a335-grade-p11-seamless-pipes-500x500.png",
  },
];

export default function ProductsSection() {
  const galleryItems = products.map((p) => ({
    image: p.img,
    text: p.name,
  }));

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-xl mb-12 md:mb-16"
        >
          <span className="text-xs md:text-sm bg-teal-100 text-teal-700 px-4 py-2 rounded-full uppercase tracking-wide">
            Offered Products
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
            Our Products
          </h2>

          <p className="text-gray-500 mt-4 text-sm md:text-base">
            Explore our wide range of industrial steel and plumbing accessories.
          </p>
        </motion.div>

        {/* CIRCULAR GALLERY */}
        <div className="relative w-full h-[350px] sm:h-[420px] md:h-[500px] lg:h-[520px]">
          <CircularGallery
            items={galleryItems}
            bend={3}
            textColor="black"
            borderRadius={0.05}
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </div>

        {/* CTA BUTTON */}
        <div className="flex justify-center mt-12 md:mt-16">
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#0F5A5F] hover:bg-[#0c474a] transition text-white rounded-xl flex items-center gap-2 shadow-lg"
            >
              Find Out More
              <FiArrowRight />
            </motion.button>
          </Link>
        </div>

      </div>
    </section>
  );
}