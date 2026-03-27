"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ── Scroll Reveal ────────────────────────────────────────────────────────────
const ScrollRevealText = ({
  parts = [],
  className = "",
  as: Component = "div",
}) => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Flatten all parts into one string to calculate total chars
  const fullText = parts.map((p) => p.text).join("");
  const totalChars = fullText.length;

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        if (!containerRef.current) {
          rafId = null;
          return;
        }

        const { top } = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const start = windowHeight * 0.9;
        const end = windowHeight * 0.2;

        let p = (start - top) / (start - end);
        if (p < 0) p = 0;
        if (p > 1) p = 1;

        setProgress(p);
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  let runningCharCount = 0;

  return (
    <Component ref={containerRef} className={className}>
      {parts.map((part, partIdx) => {
        const chars = part.text.split("");

        const renderedPart = (
          <span key={partIdx} className={part.className || ""}>
            {chars.map((char, i) => {
              const currentCharIndex = runningCharCount + i;
              const charThreshold = currentCharIndex / totalChars;
              const isVisible = progress > charThreshold;

              return (
                <span
                  key={i}
                  className="transition-colors duration-100"
                  style={{
                    color: isVisible
                      ? part.activeColor || "#091019"
                      : "#d4d4d4",
                  }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        );

        runningCharCount += chars.length;
        return renderedPart;
      })}
    </Component>
  );
};

const Strategy = () => {
  return (
    <div className="flex flex-col container mx-auto py-10 px-4 md:px-6">
      {/* Top Section */}
      <div className="flex flex-col items-start justify-between gap-5">
        <p className="text-[#42484E] text-sm uppercase tracking-wider font-medium">
          Professional & Executive Search
        </p>
        <ScrollRevealText
          as="h2"
          className="text-[#091019] text-[20px] md:text-[24px] leading-snug max-w-4xl"
          parts={[
            {
              text: "COREBERG wurde gegründet, um die klassischen Tugenden der Personalberatung mit der Agilität der modernen Wirtschaft zu vereinen.",
              activeColor: "#091019",
            },
          ]}
        />
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-start mt-10 md:mt-24 md:self-end md:max-w-[50%]">
        <div className="space-y-6">
          <p className="text-[#42484E] font-semibold leading-relaxed">
            Durch unsere langjährige Erfahrung verstehen wir Personalgewinnung
            als strategischen Erfolgsfaktor – nicht nur als operativen Prozess.
            Wir entwickeln kontinuierlich neue Ansätze, um Unternehmen
            nachhaltig zu stärken.
          </p>
          <p className="text-[#42484E] leading-relaxed ">
            Erfolgreiche Besetzungen entstehen nicht durch Geschwindigkeit,
            sondern durch Präzision, Verständnis und die richtige Strategie.
          </p>
        </div>

        <div className="flex flex-row gap-8 mt-10 items-center">
          <Link
            href="/uberuns#tabs-section"
            className="flex items-center gap-3 bg-[#0B1F3B] px-12 py-4 rounded-xl text-white hover:bg-[#1a2744] transition-all group cursor-pointer font-sans text-sm font-medium whitespace-nowrap shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1"
          >
            Mehr lesen
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Signature + Name */}
          <div className="relative flex flex-col items-start">
            <div className="relative">
              <Image
                src="/images/nenshkrimi.png"
                alt="Unterschrift"
                width={140}
                height={60}
                className="absolute top-0 left-15 pointer-events-none select-none z-0 "
              />
              <div className="relative z-10 pt-4">
                <p className="font-bold text-[#091019] text-base">
                  Azir Spahiu
                </p>
                <p className="text-[#42484E] text-sm font-light">Der Gründer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
