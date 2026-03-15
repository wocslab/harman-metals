"use client";

import { motion } from "framer-motion";
import { Package, Eye } from "lucide-react";

export default function TradingAbout() {
  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="/bg1.jpg"
            alt="Industrial materials supplier"
            className="rounded-2xl shadow-2xl object-cover h-[460px] w-full"
          />

          {/* STATS CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-lg text-white p-6 rounded-xl w-[75%] md:w-[65%]"
          >
            <h3 className="text-3xl font-bold">1000+</h3>

            <p className="text-sm opacity-80">
              Industrial Products Delivered
            </p>

            <div className="flex mt-3 text-yellow-400 text-sm">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-xs mt-2">
              Trusted by contractors & industries
            </p>
          </motion.div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* BADGE */}
          <span className="inline-block bg-[#0F5A5F] text-white text-xs tracking-wide px-5 py-2 rounded-full mb-6">
            About Our Company
          </span>

          <h2 className="text-4xl font-bold leading-snug">
            Reliable supplier of
            <span className="italic block">
              premium industrial materials
            </span>
          </h2>

          <p className="text-gray-500 mt-5 text-sm leading-relaxed">
            We are a trusted trading company specializing in the supply
            of high-quality industrial materials including pipes,
            fittings, valves, fasteners and structural components.
            With a strong network of manufacturers and suppliers,
            we ensure consistent quality, competitive pricing and
            timely delivery for every project we support.
          </p>

          {/* FEATURES */}
          <div className="mt-10 space-y-8">

            {/* MISSION */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <Package size={20} className="text-orange-500"/>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  Our Mission
                </h4>

                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                  Our mission is to deliver superior industrial
                  products that combine durability, reliability,
                  and performance while providing exceptional
                  service and long-term value to our customers.
                </p>
              </div>
            </motion.div>

            {/* VISION */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <Eye size={20} className="text-orange-500"/>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  Our Vision
                </h4>

                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                  Our vision is to become a leading global trading
                  partner recognized for innovation, product quality
                  and dependable supply solutions across the
                  industrial and construction sectors.
                </p>
              </div>
            </motion.div>

          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-6 mt-10">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0F5A5F] hover:bg-[#0b474b] transition text-white px-7 py-3 rounded-full text-sm font-medium"
            >
              Learn More →
            </motion.button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full"></div>

              <span className="text-sm font-medium">
                +91 98765 43210
              </span>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}