"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SplitText from "../components/animationComponents/SplitText";

const products = [
  {
    name: "BMI & GI Fittings",
    slug: "bmi-gi-fittings",
    img:"/products/Bmi.png" ,
  },
  {
    name: "Forged & SS Fittings",
    slug: "forged-ss-fittings",
    img: "/products/forged.png",
  },
  {
    name: "Grooved Fittings",
    slug: "grooved-fittings",
    img: "/products/grooved.png",
  },
  {
    name: "Pipes (ERW, SMLS, GI)",
    slug: "pipes-erw-smls-gi",
    img: "/products/pipes.png",
  },
  {
    name: "Valves",
    slug: "valves",
    img: "/products/valves.png",
  },
  {
    name: "CS Welded Fittings",
    slug: "cs-welded-fittings",
    img: "/products/welded.png",
  },
  {
    name: "Flanges & Fittings",
    slug: "flanges-fittings",
    img: "/products/flanges.png",
  },
  {
    name: "Bolt, Nut, Washer",
    slug: "bolt-nut-washer",
    img: "/products/bolt.png",
  },
  {
    name: "Gaskets & Glue",
    slug: "gaskets-glue",
    img: "/products/gaskets.png",
  },
  {
    name: "Copper & Brass Fittings",
    slug: "copper-brass-fittings",
    img: "/products/copper.png",
  },
  {
    name: "Safety Valves",
    slug: "safety-valves",
    img: "/products/safety-valves.png",
  },
  {
    name: "PVC / CPVC / PPR / HDPE",
    slug: "pvc-cpvc-ppr-hdpe",
    img: "/products/pvc.png",
  },
  {
    name: "Flexible Joints",
    slug: "flexible-joints",
    img: "/products/flexible.png",
  },
  {
    name: "Guages & Water Meters",
    slug: "guages-water-meters",
    img: "/products/meteres.png",
  },
  {
    name: "Hardware & Tools",
    slug: "hardware-tools",
    img: "/products/hardware.png",
  },
  {
    name: "Safety Items",
    slug: "safety-items",
    img: "/products/safety.png",
  },
];

export default function ProductsPage() {

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const floatAnimation = {
  y: [0, -8, 0],
  rotate: [0, 1, -1, 0],
};

return (
<div>

{/* HERO */}

<section className="relative h-[420px] flex items-center justify-center text-white text-center overflow-hidden">

<motion.img
src="bg1.jpg"
className="absolute w-full h-full object-cover"
animate={{ scale: [1, 1.05, 1] }}
transition={{ duration: 12, repeat: Infinity }}
/>

<div className="absolute inset-0 bg-[#0f2f36]/80"></div>

<motion.div
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="relative z-10"
>
<div className="text-4xl md:text-6xl font-semibold mb-6 flex justify-center">
  <SplitText
    text="Products"
    className="text-center" 
    delay={80}
    duration={0.6}
  />
</div>

<p className="text-sm mt-2">
Home ➜ Products
</p>

</motion.div>

</section>



{/* PRODUCTS INTRO */}

<section className="py-20 bg-gray-50 px-6">

<div className="max-w-7xl mx-auto">

<motion.span
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="inline-block bg-orange-500 text-white text-sm px-4 py-2 rounded-full mb-4"
>
Our Products
</motion.span>

<motion.h2
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: 0.1 }}
className="text-4xl font-bold mb-6"
>
Building Industrial Excellence
</motion.h2>

<motion.p
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: 0.2 }}
className="text-gray-600 max-w-4xl leading-relaxed mb-12"
>
We have been delivering superior pipeline products for various
projects for the last 3 decades. Our extensive inventory includes
pipes, pipe fittings, valves and fittings and other miscellaneous
accessories for industrial purposes across all verticals in the
market such as construction, petrochemical industries, contracting
or agricultural farms.
</motion.p>



{/* PRODUCT GRID */}

<motion.div
variants={container}
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
className="grid md:grid-cols-4 gap-8"
>

{products.map((product,index)=>(

<Link to={`/products/${product.slug}`}>

<motion.div
variants={item}
whileHover={{ y:-10, scale:1.05 }}
className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition"
>

<motion.img
src={product.img}
className="w-full h-[220px] object-cover"
/>

<div className="p-4 text-center">
<h3 className="font-semibold text-gray-800">
{product.name}
</h3>
</div>

</motion.div>

</Link>

))}

</motion.div>

</div>

</section>

</div>
);
}