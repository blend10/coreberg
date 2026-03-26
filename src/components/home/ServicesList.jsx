"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ── Scroll Reveal ────────────────────────────────────────────────────────────
const ScrollRevealText = ({ parts = [], className = "" }) => {
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
    <h2 ref={containerRef} className={className}>
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
                      ? part.activeColor || "#111827" // gray-900
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
    </h2>
  );
};

// ── Services Data ─────────────────────────────────────────────────────────────
const services = [
  {
    number: "01.",
    title: "Vakanzen nachhaltig und gezielt besetzen",
    description:
      "In der heutigen Arbeitswelt stehen Unternehmen vor komplexen Herausforderungen. Märkte verändern sich schneller, technologische Innovationen verschieben Geschäftsmodelle und die Ansprüche von Fach- und Führungskräften entwickeln sich ständig weiter. Wer Schlüsselpositionen mit den richtigen Talenten besetzen will, muss mehr tun als klassische Stellenausschreibungen aufzugeben oder auf Empfehlungen zu hoffen.",
    image: "/images/service-1.jpg",
  },
  {
    number: "02.",
    title: "Individuelle Strategie für jedes Mandat",
    description:
      "Jedes Mandat beginnt mit einer präzisen Analyse. Wir arbeiten eng mit Ihnen zusammen, um die Anforderungen der Position zu verstehen, die Unternehmenskultur zu erfassen und die Schlüsselkompetenzen zu definieren. Dabei geht es nicht nur um fachliche Qualifikationen. Soft Skills, Führungsstil, Motivation und langfristige Entwicklungsperspektiven sind entscheidend für den nachhaltigen Erfolg einer Besetzung.",
    image: "/images/service-2.jpg",
  },
  {
    number: "03.",
    title: "Flexibilität",

    description:
      "Ein weiterer zentraler Vorteil unserer Arbeit ist die Flexibilität. Wir passen unsere Dienstleistungen an Ihre spezifischen Bedürfnisse an. Ob punktuelle Unterstützung bei einer kritischen Vakanz, langfristige Begleitung über mehrere Positionen oder strategische Beratung für den gesamten Talentbereich: coreberg bietet Lösungen, die genau auf Ihre Situation zugeschnitten sind.",
    image: "/images/service-3.jpg",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function ServicesList() {
  return (
    <section className="container mx-auto px-6 py-16 space-y-20">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-10 items-start"
        >
          {/* Left: Text */}
          <div className="md:w-1/2 space-y-4">
            <p className="text-lg text-[#42484E] font-light">
              {service.number}
            </p>

            <ScrollRevealText
              className="text-[24px]  leading-snug"
              parts={[
                {
                  text: service.titleHighlight
                    ? service.title + " "
                    : service.title,
                  activeColor: "#111827", // gray-900 — normal title color
                },
              ]}
            />

            <p className="text-sm text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2 relative h-[300px] md:h-[480px] rounded-sm overflow-hidden shadow-md">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
