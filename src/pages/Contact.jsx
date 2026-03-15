"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import SplitText from "../components/animationComponents/SplitText";

export default function ContactPage() {

const fadeUp = {
  hidden:{opacity:0,y:40},
  visible:{opacity:1,y:0,transition:{duration:0.6}}
}

const stagger = {
  hidden:{},
  visible:{transition:{staggerChildren:0.2}}
}

  return (
    <div className="bg-gray-100 min-h-screen overflow-hidden">

<section className="relative text-white py-32 px-6 overflow-hidden">

{/* background image */}

<motion.img
src="/bg1.jpg"
className="absolute inset-0 w-full h-full object-cover"
animate={{scale:[1,1.05,1]}}
transition={{duration:12,repeat:Infinity}}
/>

{/* overlay */}

<div className="absolute inset-0 bg-[#0F5A5F]/80"></div>

{/* glow lights */}

<div className="absolute w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
<div className="absolute w-[400px] h-[400px] bg-teal-400/20 blur-[120px] rounded-full bottom-[-120px] right-[-120px]" />

<motion.div
variants={stagger}
initial="hidden"
animate="visible"
className="relative max-w-6xl mx-auto text-center"
>

<div className="text-4xl md:text-6xl font-semibold mb-6 flex justify-center">
  <SplitText
    text="Contact Us"
    className="text-center"
    delay={80}
    duration={0.6}
  />
</div>

<motion.p
variants={fadeUp}
className="text-gray-200 max-w-2xl mx-auto leading-relaxed text-lg"
>
We are always ready to assist you with premium metal solutions.
Reach out to Harman Metals for product enquiries, partnerships,
or any support from our expert team.
</motion.p>

{/* SINGLE CTA */}

<motion.div
variants={fadeUp}
className="flex justify-center mt-8"
>

<a
href="#contact"
className="bg-orange-500 hover:bg-orange-600 transition px-8 py-3 rounded-full font-semibold"
>
Contact Our Team
</a>

</motion.div>

</motion.div>

</section>


      {/* CONTACT CARD */}
      <motion.div
        initial={{opacity:0,y:80}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:0.7}}
        className="max-w-6xl mx-auto -mt-16 bg-white shadow-xl rounded-2xl p-10"
      >

        <h3 className="font-semibold mb-6 text-gray-700 text-lg">
          Contact Information
        </h3>

        {/* INFO GRID */}
        <div className="grid md:grid-cols-3 gap-8 text-center">

          {/* Phone */}
          <motion.div whileHover={{y:-5}}>
            <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-700 mb-3">
              <Phone size={20}/>
            </div>

            <p className="font-semibold">053 537 0665</p>
            <p className="text-sm text-gray-500">Customer Support</p>
          </motion.div>


          {/* Email */}
          <motion.div whileHover={{y:-5}}>
            <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-700 mb-3">
              <Mail size={20}/>
            </div>

            <p className="font-semibold">harmanmetals.ksa@gmail.com</p>
            <p className="text-sm text-gray-500">Email us anytime</p>
          </motion.div>


          {/* Address */}
          <motion.div whileHover={{y:-5}}>
            <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-700 mb-3">
              <MapPin size={20}/>
            </div>

            <p className="font-semibold text-sm">
              Baladiyah Street
            </p>

            <p className="text-sm text-gray-500">
              Al Aziziyah Dist, Jeddah
            </p>

          </motion.div>

        </div>


        {/* FORM + MAP */}
        <div className="grid md:grid-cols-2 gap-10 mt-12">

          {/* FORM */}
          <motion.div
            initial={{opacity:0,x:-50}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.6}}
            className="bg-[#2F3F44] text-white p-8 rounded-2xl shadow-lg"
          >

            <h3 className="font-semibold mb-4 text-lg">
              Get In Touch
            </h3>

            <p className="text-sm text-gray-300 mb-6">
              Send us your enquiry and our team will get back to you shortly.
            </p>

            <form className="space-y-4">

              <input
                placeholder="Name"
                className="w-full bg-transparent border border-gray-500 rounded-full px-4 py-3 outline-none focus:border-green-400"
              />

              <input
                placeholder="Email"
                className="w-full bg-transparent border border-gray-500 rounded-full px-4 py-3 outline-none focus:border-green-400"
              />

              <textarea
                placeholder="Message"
                rows="4"
                className="w-full bg-transparent border border-gray-500 rounded-xl px-4 py-3 outline-none focus:border-green-400"
              />

              <motion.button
                whileHover={{scale:1.05}}
                whileTap={{scale:0.95}}
                className="bg-green-400 text-black px-6 py-3 rounded-full text-sm font-semibold"
              >
                SEND NOW
              </motion.button>

            </form>

          </motion.div>


          {/* MAP + SOCIAL */}
          <motion.div
            initial={{opacity:0,x:50}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.6}}
          >

            <h3 className="font-semibold text-gray-700 mb-3">
              Our Location
            </h3>

            <p className="text-sm text-gray-500 mb-4">
              Visit our store in Jeddah for premium metal products and fittings.
            </p>

          <iframe
  src="https://www.google.com/maps?q=Baladiyah%20Street%20Al%20Aziziyah%20Jeddah&output=embed"
  className="w-full h-[260px] rounded-xl shadow-md "
  loading="lazy"
/>

            {/* SOCIAL */}
            <div className="mt-6">

              <p className="font-semibold text-sm mb-3">
                Social Media
              </p>

              <div className="flex gap-4">

                <a
                  href="https://www.facebook.com/share/1Cj3Do1cAb/?mibextid=wwXIfr"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2F3F44] text-white hover:bg-green-500 transition"
                >
                  <Facebook size={18}/>
                </a>

                <a
                  href="https://www.instagram.com/harmanmetalsksa"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2F3F44] text-white hover:bg-green-500 transition"
                >
                  <Instagram size={18}/>
                </a>

                <a
                  href="https://www.linkedin.com/in/harman-metals-9436a73b6"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2F3F44] text-white hover:bg-green-500 transition"
                >
                  <Linkedin size={18}/>
                </a>

              </div>

            </div>

          </motion.div>

        </div>

      </motion.div>

    </div>
  );
}