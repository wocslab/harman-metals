"use client";

const brands1 = [
  "/clients/client1.png",
  "/clients/client2.png",
  "/clients/client3.png",
  "/clients/client4.png",
  "/clients/client5.png",
  "/clients/client6.png",
];

const brands2 = [
  "/clients/client7.png",
  "/clients/client8.png",
  "/clients/client9.png",
  "/clients/client10.png",
  "/clients/client11.png",
  "/clients/client12.png",
];

export default function BrandSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-14 max-w-xl">
          <span className="inline-block bg-orange-500 text-white text-sm px-4 py-2 rounded-full mb-4">
            Our Clients
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted By Leading Brands
          </h2>

          <p className="text-gray-500 mt-3">
            We proudly collaborate with industry leaders and trusted partners
            who rely on our steel and plumbing solutions.
          </p>
        </div>

        {/* Row 1 */}
        <div className="overflow-hidden">
          <div className="flex items-center gap-16 animate-marquee">
            {[...brands1, ...brands1].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="brand"
                className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden mt-12">
          <div className="flex items-center gap-16 animate-marquee-reverse">
            {[...brands2, ...brands2].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="brand"
                className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
} 