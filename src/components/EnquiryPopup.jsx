import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import ElectricBorder from "../components/animationComponents/ElectricBorder";

export default function EnquiryPopup({ open, setOpen }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    const text = `Hello, I would like to enquire.

Name: ${form.name}
Phone: ${form.phone}
Message: ${form.message}`;

    const whatsappURL = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(text)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-[100] p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ElectricBorder
            color="#7df9ff"
            speed={1}
            chaos={0.12}
            thickness={2}
            style={{ borderRadius: 24 }}
          >
            <motion.div
              initial={{ scale: 0.7, y: 100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.7, y: 80, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full max-w-xs sm:max-w-sm p-5 rounded-2xl
                         bg-white/10 backdrop-blur-xl
                         border border-white/20
                         shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
            >
              {/* Glow effect */}
              <div className="absolute -top-8 -left-8 w-28 h-28 sm:w-32 sm:h-32 bg-[#0F5A5F]/30 blur-[90px] rounded-full"></div>
              <div className="absolute -bottom-8 -right-8 w-28 h-28 sm:w-32 sm:h-32 bg-orange-400/30 blur-[90px] rounded-full"></div>

              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 text-white/70 hover:text-white z-10"
              >
                <X size={20} />
              </button>

              <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                Quick Enquiry
              </h2>

              <div className="space-y-3">

                <input
                  name="name"
                  placeholder="Your Name"
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg
                             bg-white/10 border border-white/20
                             text-white placeholder-white/60
                             focus:outline-none focus:border-[#0F5A5F] transition"
                />

                <input
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg
                             bg-white/10 border border-white/20
                             text-white placeholder-white/60
                             focus:outline-none focus:border-[#0F5A5F] transition"
                />

                <textarea
                  name="message"
                  rows="3"
                  placeholder="Message"
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg
                             bg-white/10 border border-white/20
                             text-white placeholder-white/60
                             focus:outline-none focus:border-[#0F5A5F] transition resize-none"
                />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmit}
                  className=" px-5 py-2 rounded-full
                             bg-orange-500
                             text-white font-medium shadow-md"
                >
                  Send via WhatsApp
                </motion.button>

              </div>
            </motion.div>
          </ElectricBorder>
        </motion.div>
      )}
    </AnimatePresence>
  );
}