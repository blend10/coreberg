"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[9999] w-12 h-12 flex items-center justify-center rounded-full bg-[#0A162C]/90 backdrop-blur-lg border border-white/10 text-white shadow-2xl transition-all duration-500 ease-in-out hover:bg-[#1a2744] hover:scale-110 active:scale-90 ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-50 pointer-events-none"
      }`}
    >
      <div className="relative w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1">
        <Image
          src="/images/up.svg"
          alt="Arrow Up"
          fill
          className="brightness-0 invert object-contain"
        />
      </div>
    </button>
  );
};

export default ScrollToTop;
