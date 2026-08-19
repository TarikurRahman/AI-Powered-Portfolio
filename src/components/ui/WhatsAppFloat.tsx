// src/components/WhatsAppFloat.jsx
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const WhatsAppFloat = () => {
  const iconRef = useRef(null);

  useEffect(() => {
    const el = iconRef.current;

    // Floating animation
    gsap.to(el, {
      y: -10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Soft glowing pulse
    gsap.to(el, {
      boxShadow: "0px 0px 25px 6px rgba(34,197,94,0.6)",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <a
      ref={iconRef}
      href="https://wa.me/8801633003462"  // 🔥 Replace with your number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed lg:bottom-20 bottom-5 lg:right-20 right-5 z-[999] bg-green-500 p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
    >
      <FaWhatsapp size={28} className="text-white" />
    </a>
  );
};

export default WhatsAppFloat;