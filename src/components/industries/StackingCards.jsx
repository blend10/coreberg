"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const industries = [
  {
    number: "01",
    label: "Engineering & Manufacturing",
    description:
      "In Engineering & Manufacturing unterstützt COREBERG Unternehmen gezielt bei der Gewinnung von Fach- und Führungskräften, die Produktionsprozesse optimieren, Innovationen vorantreiben und technische Exzellenz sicherstellen. Wir verstehen die Anforderungen dieser Branche und identifizieren Talente, die sowohl fachlich als auch strategisch zum Unternehmenserfolg beitragen.",
    detail:
      "Durch unser Netzwerk erreichen wir auch passive Kandidaten, die aktiv wertvolle Impulse für Projekte und Prozesse liefern. Unsere Beratung geht über die reine Besetzung hinaus: Wir unterstützen bei Nachfolgeplanung, Talentpools und strategischer Personalentwicklung, sodass Unternehmen langfristig ihre Innovationskraft und Wettbewerbsfähigkeit sichern.",
  },
  {
    number: "02",
    label: "IT & Digital Excellence",
    description:
      "Im Bereich IT & Digital Excellence begleitet COREBERG Unternehmen bei der Rekrutierung von Spezialisten, die digitale Transformationsprozesse vorantreiben und innovative Technologien umsetzen. Wir identifizieren Talente, die sowohl technisches Know-how als auch strategisches Denken vereinen, und sprechen auch passive Kandidaten direkt an.",
    detail:
      "Unser Ansatz unterstützt Unternehmen, schnell auf Marktveränderungen zu reagieren, digitale Projekte effizient umzusetzen und die passenden Kompetenzen im Team zu stärken. Neben der Besetzung von Vakanzen beraten wir strategisch zu Talentpools, Nachfolgeplanung und langfristiger Personalentwicklung. Mit COREBERG gewinnen Unternehmen in IT & Digital Excellence Fachkräfte, die nachhaltigen Mehrwert schaffen und Transformation erfolgreich gestalten.",
  },
  {
    number: "03",
    label: "Finance & Controlling",
    description:
      "COREBERG unterstützt Unternehmen in Finance & Controlling bei der Gewinnung von Fachkräften, die Zahlen präzise analysieren, Prozesse optimieren und finanzielle Transparenz sicherstellen. Wir identifizieren Kandidaten mit analytischem Denken, strategischem Verständnis und hoher Umsetzungsstärke.",
    detail:
      "Unser Ansatz unterstützt Unternehmen, schnell auf Marktveränderungen zu reagieren, digitale Projekte effizient umzusetzen und die passenden Kompetenzen im Team zu stärken. Neben der Besetzung von Vakanzen beraten wir strategisch zu Talentpools, Nachfolgeplanung und langfristiger Personalentwicklung. Mit COREBERG gewinnen Unternehmen in IT & Digital Excellence Fachkräfte, die nachhaltigen Mehrwert schaffen und Transformation erfolgreich gestalten.",
  },
  {
    number: "04",
    label: "Administration",
    description:
      "Im Bereich Administration unterstützt COREBERG Unternehmen bei der Suche nach Talenten, die organisatorische Abläufe optimieren, Prozesse effizient gestalten und Teams professionell koordinieren.",
    detail:
      "Wir identifizieren Fachkräfte, die Struktur, Organisationstalent und Kommunikationsstärke verbinden. Unser Fokus liegt auf Kandidaten, die das Tagesgeschäft zuverlässig meistern und gleichzeitig strategische Impulse geben können. Durch direkte Ansprache und Netzwerkzugang sichern wir die passenden Talente, auch wenn sie nicht aktiv auf Stellensuche sind. Mit COREBERG profitieren Unternehmen von Diskretion, Effizienz und einer langfristigen Personalplanung, die den reibungslosen Ablauf der administrativen Funktionen sicherstellt",
  },
  {
    number: "05",
    label: "Banking & Insurance",
    description:
      "COREBERG begleitet Unternehmen in Banking & Insurance bei der Gewinnung von Fach- und Führungskräften, die regulatorische Anforderungen verstehen, Risiken einschätzen und Prozesse effizient steuern.",
    detail:
      "Wir identifizieren Talente mit branchenspezifischem Know-how, analytischem Denken und hoher Integrität. Unser Netzwerk ermöglicht es, auch passive Kandidaten zu erreichen, die strategische Impulse liefern und langfristig Verantwortung übernehmen. Neben der Besetzung offener Vakanzen beraten wir zu Talentpools, Nachfolgeplanung und strategischer Personalentwicklung. Mit COREBERG sichern sich Unternehmen in Banking & Insurance kompetente Fachkräfte, die Stabilität, Compliance und nachhaltigen Geschäftserfolg gewährleisten..",
  },
  {
    number: "06",
    label: "Sales & Marketing",
    description:
      "Im Bereich Sales & Marketing unterstützt COREBERG Unternehmen bei der Suche nach Talenten, die Marken aufbauen, Märkte entwickeln und Umsatz nachhaltig steigern. Wir identifizieren Kandidaten mit strategischem Denken, Kreativität und ausgeprägter Kommunikationsfähigkeit, die Teams motivieren und erfolgreich führen.",
    detail:
      "Auch passive Kandidaten sprechen wir gezielt an, um Unternehmen die besten verfügbaren Talente zu sichern. Neben der Besetzung offener Vakanzen beraten wir zu Talententwicklung, Nachfolgeplanung und strategischer Personalstrategie. Mit COREBERG gewinnen Unternehmen in Sales & Marketing Fachkräfte, die langfristig Wachstum fördern, Marken stärken und Wettbewerbsvorteile sichern.",
  },
];

export default function StackingCards() {
  return (
    <div id="stacking-cards" className="bg-[#0A162C]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT: Static on mobile, sticky on desktop */}
        <div className="lg:sticky lg:top-0 lg:h-screen text-white p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center gap-5 md:gap-6 pt-10 md:pt-12">
          <h2 className="text-[26px] md:text-[28px] lg:text-[28px] xl:text-[40px] leading-snug">
            Unabhängig von der Branche wir besetzen entscheidende Positionen mit
            Präzision.
          </h2>
          <p className="text-[15px] md:text-[14px] lg:text-[14px] xl:text-[17px] text-[#B1B9C1] leading-relaxed max-w-xl">
            Bei COREBERG steht die Qualität der Kandidaten immer an erster
            Stelle. Wir liefern keine endlosen Listen, sondern sorgfältig
            ausgewählte Profile, die Ihren Anforderungen entsprechen. Jede
            Empfehlung ist das Ergebnis eines strukturierten Auswahlprozesses,
            persönlicher Gespräche und fundierter Beurteilungen.
          </p>
          <p className="text-[15px] md:text-[13px] lg:text-[13px] xl:text-[16px] text-[#B1B9C1] leading-relaxed max-w-xl">
            Wir prüfen fachliche Qualifikationen, Erfahrungen, Erfolge, aber
            auch Motivation, Persönlichkeit und kulturelle Passung. Unser Ziel
            ist es, Kandidaten zu präsentieren, die nicht nur die erforderlichen
            Skills mitbringen, sondern auch das Potenzial haben, sich
            langfristig in Ihrem Unternehmen zu entwickeln.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f1a2e] rounded-lg border border-white/30 px-7 py-2.5 w-fit bg-white hover:bg-[#0f1a2e] hover:text-white transition-all duration-200"
          >
            Kontakt aufnehmen →
          </Link>
          <ul className="flex flex-col gap-3 mt-4">
            {[
              "Zugang zu qualifizierten Fach- und \nFührungskräften",
              "Strukturierte und effiziente \nBesetzungsprozesse",
              "Diskrete Zusammenarbeit und nachhaltige \nLösungen",
            ].map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-[15px] md:text-[15px] lg:text-[15px] xl:text-[19px] text-[#B1B9C1] border-b border-[#B1B9C1] pb-4 whitespace-pre-line"
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
              <div className="pt-5 md:pt-8 min-h-[auto] md:min-h-[400px] lg:min-h-[440px] xl:min-h-[480px] flex flex-col justify-between gap-4 md:gap-6">
                {/* Label */}
                <div className="w-full">
                  <h3 className="text-[14px] px-3 md:px-5 md:text-[14px] lg:text-[14px] xl:text-[16px] font-semibold border-b border-[#B1B9C1] pb-3 md:pb-4 text-[#091019]">
                    {service.label}
                  </h3>
                </div>

                {/* Number + Descriptions */}
                <div className="flex flex-col px-3 md:px-5 lg:flex-row lg:justify-between lg:items-end gap-3 md:gap-0">
                  {/* Large number */}
                  <div className="lg:w-[20%]">
                    <span className="text-[48px] md:text-[60px] lg:text-[54px] xl:text-[80px] font-medium text-[#B1B9C1] leading-none select-none">
                      {service.number}
                    </span>
                  </div>
                  {/* Text */}
                  <div className="flex flex-col gap-3 lg:flex-1 lg:max-w-[65%] xl:max-w-[55%]">
                    <p className="text-[10px] md:text-[12px] lg:text-[11px] xl:text-[14px] text-[#42484E] leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-[10px] md:text-[12px] lg:text-[11px] xl:text-[14px] text-[#42484E] leading-relaxed">
                      {service.detail}
                    </p>
                  </div>
                </div>

                {/* Bottom bar */}
                <div
                  className="w-full h-[28px] md:h-[40px] bg-[#B1B9C1] mt-2"
                  style={{ width: "calc(100% + 2.5rem)" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
