import { motion } from "framer-motion";
import { FaShieldAlt, FaBoxes, FaTruck } from "react-icons/fa";
import ElectricBorder from "../animationComponents/ElectricBorder";

const features = [
  {
    title: "Uncompromised Quality",
    desc: "We source and deliver only the best-in-class products to ensure durability and performance.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Diverse Product Range",
    desc: "From pipes to fittings, our extensive inventory caters to all your plumbing and steel accessory needs.",
    icon: <FaBoxes />,
  },
  {
    title: "Timely Delivery",
    desc: "With a reliable logistics network, we ensure prompt delivery to your site in the best and satisfying way.",
    icon: <FaTruck />,
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#0F5A5F] via-[#0c4a4f] to-[#072f33]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >

          {/* Badge */}
          <span className="inline-block bg-orange-500 text-white text-sm px-4 py-2 rounded-full mb-4">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug">
            Our Main Features
          </h2>

          <p className="text-gray-300 mt-4">
      Harman metals company  provides fire sprinkler pipe
            and fittings approved by UL and FM with high reliability.
          </p>

        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <ElectricBorder
                color="#7df9ff"
                speed={1}
                chaos={0.12}
                thickness={2}
                style={{ borderRadius: 20 }}
              >
                <div className="bg-[#0d3f43] rounded-2xl p-10 text-center h-full">

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-xl flex items-center justify-center text-3xl text-[#7df9ff]">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm">
                    {item.desc}
                  </p>

                </div>
              </ElectricBorder>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}