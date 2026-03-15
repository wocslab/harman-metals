import { FaLinkedinIn, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {

  const phone = "966534591537";

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const text = encodeURIComponent(
      `Hello Harman Metals,\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    );

    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <footer className="relative text-gray-300 overflow-hidden bg-gradient-to-br from-[#0F5A5F] via-[#0c4c50] to-[#083739]">

      {/* glow background */}
      <div className="absolute w-[500px] h-[500px] bg-teal-400/20 blur-[140px] rounded-full -top-40 -left-40"></div>
      <div className="absolute w-[400px] h-[400px] bg-green-400/20 blur-[140px] rounded-full -bottom-40 -right-40"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* ABOUT */}
        <div>
          <h3 className="text-orange-400 font-semibold mb-4 text-lg">
            About Harman Metals
          </h3>

          <p className="text-sm leading-relaxed">
            Harman Metals is a trusted supplier of premium steel,
            plumbing and industrial materials based in Jeddah.
            We provide reliable supply solutions for construction
            and industrial projects across the region.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-orange-400 font-semibold mb-4 text-lg">
            Contact
          </h3>

          <div className="space-y-4 text-sm">

            <p>
              Harman Metals <br />
              Baladiyah Street, Al Aziziyah <br />
              Jeddah, Saudi Arabia
            </p>

            <div>
              <p className="font-medium">Phone</p>
              <p>053 457 0063</p>
              <p>+966 53 459 1537</p>
            </div>

            <div>
              <p className="font-medium">Email</p>
              <p>harmanmetals.ksa@gmail.com</p>
            </div>

            <div>
              <p className="font-medium">Website</p>
              <p>www.harmanmetals.com</p>
            </div>

          </div>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-orange-400 font-semibold mb-4 text-lg">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>

          {/* social icons */}
          <div className="flex gap-4 mt-6">

            <a
              href="https://www.facebook.com/share/1Cj3Do1cAb/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-400 w-9 h-9 flex items-center justify-center rounded-full hover:scale-110 transition"
            >
              <FaFacebookF className="text-white text-sm" />
            </a>

            <a
              href="https://www.linkedin.com/in/harman-metals-9436a73b6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-400 w-9 h-9 flex items-center justify-center rounded-full hover:scale-110 transition"
            >
              <FaLinkedinIn className="text-white text-sm" />
            </a>

            <a
              href="https://www.instagram.com/harmanmetalsksa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-400 w-9 h-9 flex items-center justify-center rounded-full hover:scale-110 transition"
            >
              <FaInstagram className="text-white text-sm" />
            </a>

            <a
              href="https://wa.me/966534591537"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 w-9 h-9 flex items-center justify-center rounded-full hover:scale-110 transition"
            >
              <FaWhatsapp className="text-white text-sm" />
            </a>

          </div>
        </div>

        {/* CONTACT FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full bg-white/20 text-white placeholder-gray-300 px-4 py-3 rounded-md outline-none"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full bg-white/20 text-white placeholder-gray-300 px-4 py-3 rounded-md outline-none"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full bg-white/20 text-white placeholder-gray-300 px-4 py-3 rounded-md outline-none"
          />

          <button
            type="submit"
            className="bg-orange-400 text-white px-6 py-3 rounded-full hover:bg-orange-500 transition"
          >
            Send Message
          </button>

        </form>

      </div>

      {/* bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-center text-gray-400">
          © 2026 Harman Metals. All Rights Reserved
        </div>
      </div>

    </footer>
  );
}