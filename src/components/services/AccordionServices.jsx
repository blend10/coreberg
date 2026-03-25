// AccordionServices.jsx
"use client";
import { useState } from "react";
import Image from "next/image";

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
      "Besetzung von Führungspositionen auf höchstem Niveau. Wir identifizieren Führungspersönlichkeiten, die Ihr Unternehmen strategisch voranbringen.",
    bullets: [
      "Diskretion und Vertraulichkeit als Grundlage",
      "Netzwerkbasierte Direktansprache",
      "Strukturierter Auswahlprozess auf Führungsebene",
    ],
    image: "/images/executive-search.jpg",
    cta: "Kontakt aufnehmen →",
  },
  {
    number: "03.",
    label: "Talent Advisory",
    title: "Talent Advisory",
    description:
      "Strategische Beratung rund um Talentgewinnung und Personalstrategie. Wir begleiten Unternehmen dabei, ihre HR-Prozesse zukunftsfähig aufzustellen.",
    bullets: [
      "Analyse und Optimierung von Rekrutierungsprozessen",
      "Aufbau nachhaltiger Talentpipelines",
      "Beratung zu Employer Branding und Positionierung",
    ],
    image: "/images/talent-advisory.jpg",
    cta: "Kontakt aufnehmen →",
  },
];

export default function AccordionServices() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#051423] text-white py-20 px-6 md:px-16">
      <div className="container mx-auto flex flex-col gap-2">
        {/* Header */}
        <p className="text-[#B1B9C1] mb-10">Strength at the Core of Talent</p>
        <h2 className="text-[32px] font-semibold text-white mb-10">
          Erfahrung ist durch nichts zu <br /> ersetzen
        </h2>

        {/* Accordion Items */}
        {services.map((service, index) => (
          <div key={index} className="border-t border-white/10">
            {/* Row Header — always visible */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between py-5 text-left group"
            >
              <div className="flex items-center gap-4">
                <span className="text-[20px]  text-white">
                  {service.number}
                </span>
                <span className="text-[20px]  text-white">{service.label}</span>
              </div>
              {/* <span
                className="text-gray-500 text-lg transition-transform duration-300"
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
                  ? "max-h-[600px] opacity-100 pb-10"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-row gap-10 items-center justify-between pt-2">
                {/* Left */}
                <div className="flex flex-col w-1/2 gap-5">
                  <h3 className="text-[26px] font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-[17px] text-white leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm rounded-lg text-white border border-white/30 px-5 py-2.5 w-fit hover:bg-white hover:text-[#0f1a2e] transition-all duration-200"
                  >
                    {service.cta}
                  </a>
                  <ul className="flex flex-col  gap-3 mt-10">
                    {service.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex mb-2 border-b border-white/10 pb-4  items-center gap-3 text-[17px] text-white"
                      >
                        <Image
                          src="/images/tik2.svg"
                          alt="Check"
                          width={20}
                          height={20}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Image */}
                <div className="relative w-full h-64 md:w-[590px] md:h-[550px] overflow-hidden flex items-end rounded-sm">
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
