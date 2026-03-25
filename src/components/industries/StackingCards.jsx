// StackingCards.jsx
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
        {/* LEFT: Sticky static panel */}
        <div className="sticky top-0 h-screen text-white p-10 md:p-12 flex flex-col justify-center gap-6">
          <h2 className="text-[40px] leading-snug">
            Unabhängig von der Branche wir besetzen entscheidende Positionen mit
            Präzision.
          </h2>
          <p className="text-[17px] text-[#B1B9C1] leading-relaxed">
            COREBERG unterstützt Unternehmen in unterschiedlichen Branchen
            dabei, Schlüsselpositionen gezielt zu besetzen – mit fundierter
            Marktkenntnis, strukturierten Prozessen und einem klaren Fokus auf
            Qualität und langfristigen Erfolg.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f1a2e] rounded-lg  border border-white/30 px-7 py-2.5 w-fit bg-white hover:bg-[#0f1a2e] hover:text-white transition-all duration-200"
          >
            Kontakt aufnehmen →
          </a>
          <ul className="flex flex-col gap-3 mt-2 ">
            {[
              "Zugang zu qualifizierten Fach- und \nFührungskräften",
              "Strukturierte und effiziente \nBesetzungsprozesse",
              "Diskrete Zusammenarbeit und nachhaltige \nLösungen",
            ].map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-[19px] text-[#B1B9C1] border-b border-[#B1B9C1] pb-4 whitespace-pre-line"
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

        {/* RIGHT: Stacking cards on scroll */}
        <div className="flex flex-col gap-0 py-10 px-4">
          {industries.map((service, index) => (
            <div
              key={index}
              className="sticky bg-white shadow-md  overflow-hidden mb-4"
              style={{ top: `${20 + index * 24}px`, zIndex: index + 1 }}
            >
              <div className="p-8 min-h-[480px] flex flex-col justify-between gap-6 ">
                {/* Top row: label left, description right */}
                <div className="flex flex-col gap-6">
                  {/* Label */}
                  <div className="w-full flex-shrink-0">
                    <h3 className="text-[16px] font-semibold border-b border-[#B1B9C1] pb-4 text-[#091019]">
                      {service.label}
                    </h3>
                  </div>
                  {/* Descriptions */}
                  <div className="flex flex-row justify-between items-end">
                    <div className="w-[20%]">
                      <span className="text-[80px] font-medium text-[#B1B9C1] leading-none select-none">
                        {service.number}
                      </span>
                    </div>
                    <div className="flex flex-col gap-3 flex-1 max-w-[50%] ">
                      <p className="text-[16px] text-[#42484E] leading-relaxed">
                        {service.description}
                      </p>
                      <p className="text-[16px] text-[#42484E] leading-relaxed">
                        {service.detail}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom: large number */}

                <div className="w-full absolute bottom-0 left-0 h-[40px] bg-[#B1B9C1]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
