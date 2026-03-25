// components/ExperienceSection.jsx
"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const services = [
  {
    title: "Professional Search",
    description:
      "Identifikation und Gewinnung von Fachspezialisten. Wir finden die Köpfe, die Ihr operatives Kerngeschäft stärken – präzise und mit Blick für das Detail.",
    image: "/images/search.svg",
  },

  {
    title: "Executive Search",
    description:
      "Besetzung von Schlüsselpositionen auf Führungsebene. Mit Diskretion, Fingerspitzengefühl und einem Netzwerk, das über Jahrzehnte gewachsen ist.",
    image: "/images/search2.svg",
  },
  {
    title: "Talent Advisory",
    description:
      "Strategische Beratung rund um Talent und Organisation. Wir begleiten Sie bei der Entwicklung zukunftsfähiger Strukturen und Teams.",
  },
  {
    title: "Interim Management",
    description:
      "Schnelle Besetzung von Führungslücken mit erfahrenen Interim-Managern. Flexibel, kompetent und sofort einsatzbereit.",
  },
];

export default function ExperienceSection() {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.style.cursor = "grabbing";
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    sliderRef.current.style.cursor = "grab";
  };

  const onMouseUp = () => {
    setIsDragging(false);
    sliderRef.current.style.cursor = "grab";
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-[#0A162C] text-white py-20 px-6 md:px-16 overflow-hidden relative">
      {/* Globe background watermark */}
      <div className="absolute right-0  top-0 h-[220px] w-[600px] pointer-events-none select-none ">
        <Image
          src="/images/globe.svg"
          alt="Globe"
          fill
          className="object-contain"
        />
      </div>

      {/* Top label + heading */}
      <div className="mb-10 container mx-auto">
        <p className="text-xs text-white/40 uppercase tracking-widest mb-3">
          Strength at the Core of Talent.
        </p>
        <h2 className="text-3xl md:text-[42px] font-semibold leading-tight">
          Erfahrung ist durch nichts zu <br /> ersetzen
        </h2>
      </div>

      {/* Divider */}
      <hr className="border-white/10 mb-10 container mx-auto" />

      {/* Bottom grid: left text + draggable cards */}
      <div className="flex flex-col md:flex-row gap-10 container mx-auto">
        {/* Left text block */}
        <div className="w-1/2 flex flex-col gap-10 items-start justify-between">
          <p className="text-lg text-white leading-relaxed">
            Die heutige Rekrutierungswelt ist geprägt von <br /> technologischem
            Überfluss. Wir bei COREBERG <br /> nutzen Innovation dort, wo sie
            Prozesse beschleunigt. <br /> Unsere Arbeit beginnt dort, wo die
            Software an ihre br Grenzen stösst.
          </p>
          <p className="text-lg text-[#B1B9C1] leading-relaxed">
            Wir präsentieren Ihnen keine Auswahl von fünfzig <br /> Dossiers.
            Wir präsentieren Ihnen die Lösung. Unsere <br /> Klienten schätzen
            uns für eine Arbeitsweise, die auf Aufrichtigkeit und tiefer <br />
            Marktkenntnis fusst.
          </p>
          <button className="mt-4 bg-white text-[#0d1b2a] rounded-lg  border border-white text-sm px-5 py-2.5 flex items-center gap-2 hover:bg-transparent hover:text-white transition-colors duration-200">
            Beratung anfragen <span>→</span>
          </button>
        </div>

        {/* Draggable cards */}
        <div
          ref={sliderRef}
          className="flex gap-0 overflow-x-scroll scrollbar-hide cursor-grab select-none flex-1"
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="w-[510px] h-[410px] border border-white/15 bg-[#0A162C] hover:bg-[#2C3F51] p-7 flex flex-col justify-between gap-8 shrink-0"
            >
              <div className="space-y-4">
                <h3 className="text-[24px] font-semibold text-white">
                  {service.title}
                </h3>
                <hr className="border-white/15" />
                <p className="text-sm text-[#B1B9C1] leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <div className="relative w-12 h-12">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <div className="w-full h-full bg-white rounded-full" />
                  )}
                </div>
                <button className="w-10 h-10 rounded-full bg-white text-[#0d1b2a] flex items-center justify-center hover:bg-white/80 transition">
                  →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
