"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
      "Mehr als reine Personalvermittlung. Es ist ein strategischer Ansatz, der Unternehmen dabei unterstützt, ihre Talentstrategie zu optimieren, zukünftige Personalbedarfe vorherzusehen und gezielt auf Marktveränderungen zu reagieren",
    image: "/images/search3.svg",
  },
];

export default function ExperienceSection() {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    // Only auto-slide if not dragging and not hovered
    if (isDragging || isHovered) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, clientWidth } = sliderRef.current;
        const cardWidth = sliderRef.current.firstChild?.offsetWidth || 510;

        // Calculate how many cards can actually be shown and how many scroll steps we have
        const cardsToShow = clientWidth / cardWidth;
        const maxIndex = Math.max(0, services.length - Math.round(cardsToShow));
        
        // Calculate the current index based on scroll position
        const currentIndex = Math.round(scrollLeft / cardWidth);
        const nextIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;

        const nextScroll = nextIndex * cardWidth;

        sliderRef.current.scrollTo({
          left: nextScroll,
          behavior: "smooth",
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isDragging, isHovered]);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.style.cursor = "grabbing";
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
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

  // Touch support for mobile swipe
  const onTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const onTouchEnd = () => {
    setIsDragging(false);
  };

  const onTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-[#0A162C] text-white py-12 md:py-20 px-4 md:px-16 overflow-hidden relative">
      {/* Globe background watermark */}
      <div className="absolute right-0 top-0 h-[140px] w-[300px] md:h-[220px] md:w-[600px] pointer-events-none select-none">
        <Image
          src="/images/globe.svg"
          alt="Globe"
          fill
          className="object-contain"
        />
      </div>

      {/* Top label + heading */}
      <div className="mb-8 md:mb-10 container mx-auto">
        <p className="text-xs text-white/40 uppercase tracking-widest mb-3">
          Strength at the Core of Talent.
        </p>
        <h2 className="text-2xl md:text-[32px] lg:text-[42px] font-semibold leading-tight">
          Unsere Expertise
        </h2>
      </div>

      {/* Divider */}
      <hr className="border-white/10 mb-8 md:mb-10 container mx-auto" />

      {/* Bottom grid: left text + draggable cards */}
      <div className="flex flex-col lg:flex-row gap-8 md:gap-10 container mx-auto">
        {/* Left text block */}
        <div className="w-full lg:w-[40%] flex flex-col gap-6 md:gap-10 items-start justify-between">
          <p className="text-base md:text-lg text-white leading-relaxed">
            Die Zusammenarbeit mit COREBERG steht für Vertrauen und Diskretion.
            Wir verstehen uns nicht als reine Dienstleister, sondern als
            strategische Partner. Unser Netzwerk, unsere Erfahrung und unsere
            Marktkenntnis ermöglichen es, auch schwierige Positionen erfolgreich
            zu besetzen.
          </p>
          <p className="text-base md:text-lg text-[#B1B9C1] leading-relaxed">
            Wir arbeiten eng mit Unternehmen zusammen, um die Anforderungen der
            Position zu verstehen, die Unternehmenskultur zu erfassen und die
            Schlüsselkompetenzen zu definieren. Dabei geht es nicht nur um
            fachliche Qualifikationen.
          </p>
          <Link href="/dienstleistungen#accordion-services" className="mt-2 md:mt-4 bg-white text-[#0d1b2a] rounded-lg border border-white text-sm px-5 py-2.5 flex items-center gap-2 hover:bg-transparent hover:text-white transition-colors duration-200 w-fit">
            Beratung anfragen <span>→</span>
          </Link>
        </div>

        {/* Draggable / swipeable cards */}
        <div
          ref={sliderRef}
          className="flex gap-0 overflow-x-scroll scrollbar-hide cursor-grab select-none flex-1  md:mx-0 px-1 md:px-0 scroll-smooth snap-x snap-mandatory"
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={onMouseLeave}
        >
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/dienstleistungen#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group w-full sm:w-1/2 h-auto md:h-[340px] lg:h-[410px] border border-white/15 bg-[#0A162C] hover:bg-[#2C3F51] p-5 md:p-7 flex flex-col justify-between gap-6 md:gap-8 shrink-0 transition-colors duration-300 snap-start"
            >
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-[20px] md:text-[24px] font-semibold text-white">
                  {service.title}
                </h3>
                <hr className="border-white/15" />
                <p className="text-sm text-[#B1B9C1] leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <div className="relative w-10 h-10 md:w-12 md:h-12">
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
                <button
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#223140] text-white flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:scale-110 md:hover:scale-175 transition-all duration-300 pointer-events-none"
                >
                  →
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
