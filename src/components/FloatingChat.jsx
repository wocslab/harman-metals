import { useState } from "react";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Chat Message Bubble */}
      {open && (
        <div className="bg-white shadow-2xl rounded-2xl px-4 py-3 w-[240px] animate-bounce">
          <p className="text-sm text-gray-700">
            👋 Hello! Need help? <br /> Chat with us on WhatsApp.
          </p>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
              href="https://wa.me/966534591537"
        target="_blank"
        rel="noopener noreferrer"
        className="relative"
      >
        {/* Pulse Ring Animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>

        {/* Button */}
        <button
          onClick={() => setOpen(!open)}
          className="relative w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-xl hover:scale-110 transition"
        >
          {open ? <X size={26} /> : <FaWhatsapp size={28} />}
        </button>
      </a>
    </div>
  );
}