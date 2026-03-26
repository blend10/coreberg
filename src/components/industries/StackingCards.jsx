"use client";
import { useState } from "react";
import Image from "next/image";

const industries = [
  {
    number: "01",
    label: "Engineering & Manufacturing",
    description:
      "Im Bereich Engineering & Manufacturing unterstützt COREBERG Unternehmen bei der Suche nach Talenten, die technische Exzellenz mit unternehmerischem Denken verbinden.",
    detail:
      "Passive Kandidaten sprechen wir gezielt an, um Unternehmen die besten verfügbaren Talente zu sichern. Mit strukturierten Prozessen gewinnen wir Fachkräfte, die langfristig Wachstum fördern.",
  },
  {
    number: "02",
    label: "Finance & Controlling",
    description:
      "Im Finance & Controlling Bereich vermitteln wir erfahrene Fach- und Führungskräfte, die komplexe Finanzstrukturen verstehen und strategisch agieren können.",
    detail:
      "Von CFO-Besetzungen bis hin zu spezialisierten Controlling-Profilen – wir liefern Kandidaten mit der nötigen Tiefe und Marktkenntnis.",
  },
  {
    number: "03",
    label: "Administration",
    description:
      "Effiziente Administrative Strukturen sind das Rückgrat jedes Unternehmens. Wir besetzen Positionen, die Prozesse am Laufen halten und Organisationen stabil machen.",
    detail:
      "Wir verstehen die Anforderungen moderner Verwaltungsrollen und liefern Profile, die sowohl fachlich als auch kulturell überzeugen.",
  },
  {
    number: "04",
    label: "Banking & Insurance",
    description:
      "Im stark regulierten Umfeld von Banking & Insurance vermitteln wir Talente mit tiefem Branchenwissen und regulatorischem Verständnis.",
    detail:
      "Von Compliance über Risk Management bis hin zu Vertriebsführung – wir finden die richtigen Persönlichkeiten für anspruchsvolle Mandate.",
  },
  {
    number: "05",
    label: "Sales & Marketing",
    description:
      "Im Bereich Sales & Marketing unterstützt COREBERG Unternehmen bei der Suche nach Talenten, die Märkte entwickeln und Umsatz nachhaltig steigern.",
    detail:
      "Mit COREBERG gewinnen Unternehmen Fachkräfte, die langfristig Wachstum fördern, Marken stärken und Wettbewerbsvorteile sichern.",
  },
];

export default function StackingCards() {
  return (
    <div className="bg-[#0A162C]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">

        {/* LEFT: Static on mobile, sticky on desktop */}
        <div className="md:sticky md:top-0 md:h-screen text-white p-6 md:p-12 flex flex-col justify-center gap-5 md:gap-6 pt-10 md:pt-12">
          <h2 className="text-[26px] md:text-[40px] leading-snug">
            Unabhängig von der Branche wir besetzen entscheidende Positionen mit
            Präzision.
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#B1B9C1] leading-relaxed">
            COREBERG unterstützt Unternehmen in unterschiedlichen Branchen
            dabei, Schlüsselpositionen gezielt zu besetzen – mit fundierter
            Marktkenntnis, strukturierten Prozessen und einem klaren Fokus auf
            Qualität und langfristigen Erfolg.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f1a2e] rounded-lg border border-white/30 px-7 py-2.5 w-fit bg-white hover:bg-[#0f1a2e] hover:text-white transition-all duration-200"
          >
            Kontakt aufnehmen →
          </a>
          <ul className="flex flex-col gap-3 mt-2">
            {[
              "Zugang zu qualifizierten Fach- und \nFührungskräften",
              "Strukturierte und effiziente \nBesetzungsprozesse",
              "Diskrete Zusammenarbeit und nachhaltige \nLösungen",
            ].map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-[15px] md:text-[19px] text-[#B1B9C1] border-b border-[#B1B9C1] pb-4 whitespace-pre-line"
              >
                <Image
                  src="/images/tik3.svg"
                  alt="Check"
                  width={10}
                  height={10}
                  className="mt-2 flex-shrink-0"
                />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: Stacking cards */}
        <div className="flex flex-col gap-0 pt-8 md:pt-10 px-3 md:px-4">
          {industries.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md overflow-hidden mb-4"
              style={{
                position: "sticky",
                top: `${12 + index * 16}px`,
                zIndex: index + 1,
              }}
            >
              <div className="pt-5 md:pt-8  min-h-[auto] md:min-h-[480px] flex flex-col justify-between gap-4 md:gap-6">
                {/* Label */}
                <div className="w-full">
                  <h3 className="text-[14px] px-3 md:px-5 md:text-[16px] font-semibold border-b border-[#B1B9C1] pb-3 md:pb-4 text-[#091019]">
                    {service.label}
                  </h3>
                </div>

                {/* Number + Descriptions */}
                <div className="flex flex-col px-3 md:px-5 md:flex-row md:justify-between md:items-end gap-3 md:gap-0">
                  {/* Large number */}
                  <div className="md:w-[20%]">
                    <span className="text-[48px] md:text-[80px] font-medium text-[#B1B9C1] leading-none select-none">
                      {service.number}
                    </span>
                  </div>
                  {/* Text */}
                  <div className="flex flex-col gap-3 md:flex-1 md:max-w-[50%]">
                    <p className="text-[14px] md:text-[16px] text-[#42484E] leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-[14px] md:text-[16px] text-[#42484E] leading-relaxed">
                      {service.detail}
                    </p>
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="w-full  h-[28px] md:h-[40px] bg-[#B1B9C1] mt-2" style={{ width: "calc(100% + 2.5rem)" }} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}