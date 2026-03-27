"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01.",
    label: "Professional Search",
    title: "Professional Search",
    description:
      "Identifikation und Gewinnung von Fachspezialisten. Wir finden die Köpfe, die Ihr operatives Kerngeschäft stärken – präzise und mit Blick für das Detail.",
    bullets: [
      "Identifikation von Fach- und Spezialistenprofilen",
      "Gezielte Ansprache im relevanten Marktumfeld",
      "Nachhaltige Besetzungen für langfristigen Erfolg",
    ],
    image: "/images/step1.png",
    cta: "Kontakt aufnehmen →",
  },
  {
    number: "02.",
    label: "Executive Search",
    title: "Executive Search",
    description:
      "Besetzung von Schlüsselpositionen auf Führungsebene. Mit Diskretion, Fingerspitzengefühl und einem Netzwerk, das über Jahrzehnte gewachsen ist.",
    bullets: [
      "Diskrete Besetzung von Schlüsselpositionen",
      "Auswahl auf Führungs- und Managementebene",
      "Strategische Begleitung im gesamten Prozess",
    ],
    image: "/images/step2.png",
    cta: "Kontakt aufnehmen →",
  },
  {
    number: "03.",
    label: "Talent Advisory",
    title: "Talent Advisory",
    description:
      "Besetzung von Schlüsselpositionen auf Führungsebene. Mit Diskretion, Fingerspitzengefühl und einem Netzwerk, das über Jahrzehnte gewachsen ist.",
    bullets: [
      "Entwicklung von Recruiting-Strategien",
      "Unterstützung beim Talentaufbau",
      "Optimierung von Auswahlprozessen",
    ],
    image: "/images/step3.png",
    cta: "Kontakt aufnehmen →",
  },
];

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
                      ? part.activeColor || "#B1B9C1"
                      : "rgba(177, 185, 193, 0.25)",
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

export default function AccordionServices() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="accordion-services"
      className="bg-[#051423] text-white py-12 md:py-20 px-4 md:px-16"
    >
      <div className="container mx-auto flex flex-col gap-2">
        {/* Header */}
        <p className="text-[#B1B9C1] mb-6 md:mb-10">
          Strength at the Core of Talent
        </p>
        <h2 className="text-[24px] md:text-[32px] font-semibold text-white mb-8 md:mb-10">
          Unsere Expertise
        </h2>
        <div className="flex flex-col gap-6 md:gap-8 mb-6 md:mb-10">
          <ScrollRevealText
            as="p"
            className="text-xs md:text-sm leading-relaxed font-medium whitespace-pre-wrap"
            parts={[
              {
                text: "Unternehmen erhalten Zugang zu einem breiten Marktpotenzial. Viele hochqualifizierte Kandidaten sind nicht aktiv auf Stellensuche. Sie sind zufrieden in ihrer aktuellen Position, offen für neue Perspektiven, wenn sich die Gelegenheit richtig anfühlt, aber nicht erreichbar über klassische Kanäle. Durch unsere Expertise und unsere Netzwerke identifizieren wir diese Talente, sprechen sie direkt an und führen gezielte Gespräche. Diese Vorgehensweise erhöht die Chance, die passenden Personen zu gewinnen. \n\n Zweitens sparen Unternehmen wertvolle Ressourcen. Die Besetzung von Schlüsselpositionen ist zeitaufwendig. Jede Stelle erfordert sorgfältige Analyse, Interviews, Referenzprüfungen und oft auch Verhandlungen über Arbeitsverträge. Durch die Auslagerung dieses Prozesses an COREBERG können sich Ihre internen Teams auf Kernaufgaben konzentrieren. Wir übernehmen die gesamte Prozesssteuerung, sorgen für eine konsistente Kommunikation mit Kandidaten und stellen sicher, dass jede Phase effizient abläuft. \n\n Drittens profitieren Unternehmen von objektiver Expertise. Als externe Partner betrachten wir das Profil jedes Kandidaten unabhängig von internen Vorlieben oder bestehenden Netzwerkbindungen. Unsere Einschätzungen basieren auf fundierten Kriterien, Marktkenntnis und Erfahrung in der Beurteilung von Fähigkeiten, Potenzial und kultureller Passung. Diese Neutralität reduziert das Risiko von Fehlbesetzungen, die auf lange Sicht teuer sein können.",
                activeColor: "#ffffff",
              },
            ]}
          />
        </div>

        {/* Accordion Items */}
        {services.map((service, index) => (
          <div key={index} className="border-t border-white/10">
            {/* Row Header */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between py-4 md:py-5 text-left group"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <span className="text-[16px] md:text-[20px] text-white">
                  {service.number}
                </span>
                <span className="text-[16px] md:text-[20px] text-white">
                  {service.label}
                </span>
              </div>
              {/* Indicator */}
              {/* <span
                className="text-white/50 text-xl transition-transform duration-300 flex-shrink-0"
                style={{
                  transform:
                    openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                +
              </span> */}
            </button>

            {/* Expanded Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "max-h-[1200px] opacity-100 pb-8 md:pb-10"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start md:items-center justify-between pt-2">
                {/* Left: Text */}
                <div className="flex flex-col w-full md:w-1/2 gap-4 md:gap-5">
                  <h3 className="text-[22px] md:text-[26px] font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-[15px] md:text-[17px] text-white leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 text-sm rounded-lg text-white border border-white/30 px-5 py-2.5 w-fit hover:bg-white hover:text-[#0f1a2e] transition-all duration-200"
                  >
                    {service.cta}
                  </Link>
                  <ul className="flex flex-col gap-3 mt-6 md:mt-10">
                    {service.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex mb-2 border-b border-white/10 pb-4 items-center gap-3 text-[15px] md:text-[17px] text-white"
                      >
                        <Image
                          src="/images/tik2.svg"
                          alt="Check"
                          width={20}
                          height={20}
                          className="flex-shrink-0"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Image */}
                <div className="relative w-full h-[220px] md:w-[590px] md:h-[550px] overflow-hidden rounded-sm flex-shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Last border */}
        <div className="border-t border-white/10" />
      </div>
    </section>
  );
}
