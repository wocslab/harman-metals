import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import EnquiryPopup from "../components/EnquiryPopup";

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full flex justify-center fixed top-6 z-50"
      >
        <div className="flex items-center justify-between w-[92%] max-w-7xl 
        bg-white shadow-md
        px-6 py-3 rounded-full">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Harman Metals"
              className="h-13 object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10 text-sm text-gray-800 font-medium">
            <li>
              <Link to="/" className="hover:text-teal-600 transition">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-teal-600 transition">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-teal-600 transition">
                PRODUCTS
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-teal-600 transition">
                CONTACT US
              </Link>
            </li>
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => setOpen(true)}
              className="bg-[#0F5A5F] text-white px-6 py-2 rounded-full text-sm hover:bg-[#083C40] transition"
            >
              Let's Talk
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={26} />
          </button>

        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* DARK OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMenuOpen(false)}
            />

            {/* MENU PANEL */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed top-0 left-0 h-full w-full bg-white z-50 p-8"
            >

              {/* CLOSE BUTTON */}
              <div className="flex justify-end mb-10">
                <button onClick={() => setMenuOpen(false)}>
                  <X size={26} className="text-gray-800" />
                </button>
              </div>

              {/* MENU ITEMS */}
              <ul className="flex flex-col gap-8 text-gray-800 text-lg font-medium">
                <li>
                  <Link to="/" onClick={() => setMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => setMenuOpen(false)}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/products" onClick={() => setMenuOpen(false)}>
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => setMenuOpen(false)}>
                    Contact
                  </Link>
                </li>
              </ul>

              {/* CTA */}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setOpen(true);
                }}
                className="mt-10 bg-[#0F5A5F] text-white px-6 py-3 rounded-full w-full"
              >
                Let's Talk
              </button>

            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* POPUP */}
      <EnquiryPopup open={open} setOpen={setOpen} />
    </>
  );
}