       
"use client";

import { motion } from "framer-motion";
import ElectricBorder from "../components/animationComponents/ElectricBorder";
import BrandSection from "../components/HeroComponents/Client";
import SplitText from "../components/animationComponents/SplitText";

export default function AboutPage() {

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

return (
<div className="bg-gray-50 min-h-screen">

{/* HERO */}

<section className="relative min-h-[300px] md:h-[360px] flex items-center justify-center text-center text-white overflow-hidden">

<img
src="bg1.jpg"
className="absolute w-full h-full object-cover"
/>

<div className="absolute inset-0 bg-[#0F5A5F]/80"></div>

<motion.div
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="relative z-10 px-4"
>

<div className="text-3xl md:text-6xl font-semibold mb-6 flex justify-center">
  <SplitText
    text="About Us"
    className="text-center"
    delay={80}
    duration={0.6}
  />
</div>

<p className="text-sm text-gray-200">
Home ➜ About Us
</p>

</motion.div>

</section>


{/* ABOUT SECTION */}

<section className="max-w-7xl mx-auto py-16 md:py-24 px-6">

<div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

{/* TEXT */}

<motion.div
variants={fadeUp}
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
>

<span className="inline-block bg-orange-500 text-white text-sm px-4 py-2 rounded-full mb-4">
About Us
</span>

<h2 className="text-3xl md:text-4xl font-bold mb-6">
Harman Metals TRD EST
</h2>

<p className="text-gray-600 leading-relaxed mb-6">
<b>HARMAN METALS TRD EST.</b> is one of the leading trading companies in
Saudi Arabia in the field of pipes, fittings and hardware. We are looking
ahead to be the ever-expanding stockist and project distributor of steel
pipes, pipe fittings, valves, flanges, pressure gauges, temperature gauges
and other mechanical materials required for industrial and construction
sectors.
</p>

<p className="text-gray-600 leading-relaxed mb-6">
<b>HARMAN METALS TRD EST.</b> is dedicated to providing the best quality
line of products at fair prices while meeting the diverse needs of our
customers. Our team ensures fast delivery through dedicated professionals
who bring strong knowledge and industry expertise to support projects of
different scales.
</p>

<p className="text-gray-600 leading-relaxed mb-6">
We supply a comprehensive range of industrial materials including welded
and seamless pipes such as carbon steel, galvanized iron and stainless
steel pipes, as well as copper pipes, PVC, CPVC, HDPE pipes, flexible
pipes and related fittings.
</p>

<p className="text-gray-600 leading-relaxed mb-6">
Our inventory also includes flanges, valves such as ball valves, gate
valves, globe valves, check valves, butterfly valves, float valves and
foot valves, along with butt-welding pipe fittings and various types of
fittings made from GI, forged steel, copper, brass and stainless steel.
</p>

<p className="text-gray-700 font-semibold">
Regards,<br />
HARMAN METALS TRD EST.
</p>

</motion.div>


{/* IMAGE */}

<motion.div
variants={fadeUp}
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
className="rounded-xl overflow-hidden shadow-xl"
>

<img
src="bg1.jpg"
className="w-full h-[280px] md:h-[420px] object-cover"
/>

</motion.div>

</div>

</section>


{/* MISSION & VISION */}

<section className="bg-[#2F3F44] py-16 md:py-24 px-6 text-white">

<motion.div
variants={fadeUp}
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
className="max-w-6xl mx-auto text-center mb-14"
>

<h2 className="text-3xl md:text-4xl font-bold">
Mission & Vision
</h2>

<p className="text-gray-300 mt-4 max-w-2xl mx-auto">
Driven by quality, reliability, and innovation, we strive to support
industries with trusted materials and long-term partnerships.
</p>

</motion.div>


<motion.div
variants={stagger}
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10"
>

{/* MISSION */}

<motion.div variants={fadeUp}>

<ElectricBorder
color="#7df9ff"
speed={1}
chaos={0.12}
thickness={2}
style={{ borderRadius: 16 }}
>

<div className="p-8 md:p-10">

<h3 className="text-xl md:text-2xl font-bold mb-4">
Our Mission
</h3>

<p className="text-gray-300 leading-relaxed">
Our mission is to deliver unparalleled value to our customers by
providing top-notch brand materials and equipment across various
categories.
</p>

</div>

</ElectricBorder>

</motion.div>


{/* VISION */}

<motion.div variants={fadeUp}>

<ElectricBorder
color="#7df9ff"
speed={1}
chaos={0.12}
thickness={2}
style={{ borderRadius: 16 }}
>

<div className="p-8 md:p-10">

<h3 className="text-xl md:text-2xl font-bold mb-4">
Our Vision
</h3>

<p className="text-gray-300 leading-relaxed">
Our vision is to set the industry standard for excellence in brand
materials and equipment provision while building long-term partnerships
with our clients.
</p>

</div>

</ElectricBorder>

</motion.div>

</motion.div>

</section>

{/* CLIENT / BRAND SECTION */}

<BrandSection/>

</div>
);
}

