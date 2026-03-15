import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function ConnectTeam() {

  const phone = "966534591537";

  const message = encodeURIComponent(
    "Hello, I would like to inquire about your steel and plumbing products."
  );

  const whatsappLink = `https://wa.me/${phone}?text=${message}`;

  return (
    <section className="relative py-28 px-6 text-white overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/bg1.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F5A5F]/95 via-[#0F5A5F]/15 to-[#0F5A5F]/60"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center">

        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm"
        >
          Contact Our Experts
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mt-6"
        >
          Connect With Our Team
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-200 mt-6 max-w-2xl mx-auto"
        >
          Our specialists are ready to help you choose the right steel,
          plumbing, and construction products for your project.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 mt-10 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full font-medium shadow-lg transition"
        >
          <FaWhatsapp className="text-xl" />
          Connect on WhatsApp
        </motion.a>

      </div>

    </section>
  );
}