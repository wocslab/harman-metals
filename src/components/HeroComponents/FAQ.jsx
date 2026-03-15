import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "What types of products do you offer?",
    answer:
      "We offer a wide range of steel, plumbing, and construction accessories designed for durability and industrial performance."
  },
  {
    question: "Do you supply to both small-scale and large-scale projects?",
    answer:
      "Yes. We support both small contractors and large industrial or infrastructure projects with reliable product supply."
  },
  {
    question: "Which brands do you partner with?",
    answer:
      "We collaborate with trusted international and regional brands known for quality steel and plumbing products."
  },
  {
    question: "How can I place an order or inquire about products?",
    answer:
      "You can contact us directly through our website contact form, email, or phone to place orders or request product information."
  }
];

export default function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-[#0F5A5F] py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-white/10 text-sm px-4 py-2 rounded-full">
            Your Questions, Answered
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Frequently <br /> Asked Questions
          </h2>

          <p className="text-gray-300 mt-6 max-w-md">
            Find answers to common questions about our products, supply
            capabilities, and how we support construction and industrial
            projects.
          </p>

          {/* CTA CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-xl mt-10"
          >
            <h3 className="text-xl font-semibold mb-3">
              Still Have Questions?
            </h3>

            <p className="text-gray-300 text-sm">
              Our team is ready to assist you with product inquiries,
              specifications, and project requirements.
            </p>

         <a
  href="https://wa.me/966534591537"
  target="_blank"
  rel="noopener noreferrer"
>
  <motion.button
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    className="mt-5 bg-orange-500 text-white font-medium px-6 py-2 rounded-lg"
  >
    Book a Demo
  </motion.button>
</a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE FAQ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="space-y-5"
        >

          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -4 }}
              className={`rounded-xl overflow-hidden border transition ${
                active === index
                  ? "bg-white/15 border-white/20"
                  : "bg-white/10 border-white/10"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-medium">{faq.question}</span>

                <motion.div
                  animate={{ rotate: active === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="px-5 pb-5 text-gray-300 text-sm"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}