// TabsSection.jsx
"use client";
import { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    label: "Vakanzen nachhaltig und gezielt besetzen",
    content: {
      title: "Vakanzen nachhaltig und gezielt besetzen",
      paragraphs: [
        "In der heutigen Arbeitswelt stehen Unternehmen vor komplexen Herausforderungen. Märkte verändern sich schneller, technologische Innovationen verschieben Geschäftsmodelle und die Ansprüche von Fach- und Führungskräften entwickeln sich ständig weiter.",
        "Wer Schlüsselpositionen mit den richtigen Talenten besetzen will, muss mehr tun als klassische Stellenausschreibungen aufzugeben oder auf Empfehlungen zu hoffen. Wir verstehen Personalgewinnung als strategischen Prozess, der auf langfristigen Unternehmenserfolg ausgerichtet ist. Jede Vakanz, insbesondere auf Führungs- und Spezialistenebene, kann den Kurs eines Unternehmens entscheidend beeinflussen.",
      ],
      bullets: [
        "Gezielte Besetzung von Schlüsselpositionen",
        "Strategischer Ansatz statt klassischer Rekrutierung",
        "Langfristiger Unternehmenserfolg im Fokus",
      ],
      image: "/images/tab1.jpg",
    },
  },
  {
    label: "Individuelle Strategie für jedes Mandat",
    content: {
      title: "Individuelle Strategie für jedes Mandat",
      paragraphs: [
        "Jedes Unternehmen ist einzigartig – daher entwickeln wir für jedes Mandat eine massgeschneiderte Suchstrategie. Wir analysieren Ihre Unternehmenskultur, die Anforderungen der Position und den relevanten Talentmarkt.",
        "Unser strukturierter Prozess stellt sicher, dass wir nicht nur fachlich qualifizierte, sondern auch kulturell passende Kandidaten identifizieren und präsentieren.",
      ],
      bullets: [
        "Massgeschneiderte Suchstrategie",
        "Kulturelle und fachliche Passung",
        "Strukturierter, transparenter Prozess",
      ],
      image: "/images/tab2.jpg",
    },
  },
  {
    label: "Flexibilität",
    content: {
      title: "Flexibilität",
      paragraphs: [
        "Wir passen uns den Bedürfnissen unserer Kunden an – ob kurzfristige Besetzung, langfristige Partnerschaft oder projektbasierte Zusammenarbeit.",
        "Unsere flexiblen Modelle ermöglichen es, auf veränderte Marktbedingungen und interne Anforderungen schnell zu reagieren.",
      ],
      bullets: [
        "Flexible Zusammenarbeitsmodelle",
        "Schnelle Reaktionsfähigkeit",
        "Skalierbare Lösungen",
      ],
      image: "/images/tab3.jpg",
    },
  },
  {
    label: "Trusted Partner",
    content: {
      title: "Trusted Partner",
      paragraphs: [
        "Wir verstehen uns als langfristiger Partner unserer Kunden – nicht als einmaliger Dienstleister. Vertrauen, Diskretion und Professionalität sind die Grundlage jeder Zusammenarbeit.",
        "Unsere Kunden schätzen die offene Kommunikation und die nachhaltige Begleitung über den gesamten Besetzungsprozess hinaus.",
      ],
      bullets: [
        "Langfristige Partnerschaft",
        "Diskretion und Professionalität",
        "Offene und ehrliche Kommunikation",
      ],
      image: "/images/tab4.jpg",
    },
  },
];

export default function TabsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = tabs[activeIndex].content;

  return (
    <section className="bg-white py-16 px-6 md:px-16">
      {/* Tab Headers */}
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-200">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`text-center text-sm font-medium px-4 py-4 transition-colors duration-200 leading-snug
                ${
                  activeIndex === index
                    ? "border-b-2 border-gray-900 text-gray-900"
                    : "text-gray-400 hover:text-gray-700 border-b-2 border-transparent"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-bold text-gray-900">{active.title}</h2>
            {active.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[#091019] leading-relaxed">
                {p}
              </p>
            ))}
            <ul className="flex flex-col gap-3 mt-2">
              {active.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-[#091019] border-b border-[#E4E9F1] pb-2 "
                >
                  <Image
                    src="/images/tikIcon.svg"
                    alt="tikIcon"
                    width={25}
                    height={25}
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Image */}
          <div className="w-full h-72 md:h-[560px] overflow-hidden rounded-sm">
            <img
              src={active.image}
              alt={active.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
