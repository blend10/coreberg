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
      image: "/images/service11.png",
    },
  },
  {
    label: "Individuelle Strategie für jedes Mandat",
    content: {
      title: "Individuelle Strategie für jedes Mandat",
      paragraphs: [
        "Jedes Mandat beginnt mit einer präzisen Analyse. Wir arbeiten eng mit Ihnen zusammen, um die Anforderungen der Position zu verstehen, die Unternehmenskultur zu erfassen und die Schlüsselkompetenzen zu definieren. Dabei geht es nicht nur um fachliche Qualifikationen. Soft Skills, Führungsstil, Motivation und langfristige Entwicklungsperspektiven sind entscheidend für den nachhaltigen Erfolg einer Besetzung.",
        "Wir erstellen daraus ein detailliertes Profil und entwickeln eine gezielte Ansprache für potenzielle Kandidaten. Dieser Ansatz erlaubt es, nicht nur kurzfristig eine Vakanz zu füllen, sondern auch ein Netzwerk aufzubauen, das langfristig für ähnliche Positionen genutzt werden kann. Viele unserer Kundinnen und Kunden profitieren von diesem Talentpool, der kontinuierlich gepflegt wird und auf den sie bei zukünftigen Vakanzen zurückgreifen können.",
      ],
      bullets: [
        "Fundierte Analyse für passgenaue Besetzungen",
        "Fokus auf Persönlichkeit, Potenzial und Cultural Fit",
        "Nachhaltiger Talentpool statt kurzfristiger Lösungen",
      ],
      image: "/images/service22.png",
    },
  },
  {
    label: "Flexibilität",
    content: {
      title: "Flexibilität",
      paragraphs: [
        "Ein weiterer zentraler Vorteil unserer Arbeit ist die Flexibilität. Wir passen unsere Dienstleistungen an Ihre spezifischen Bedürfnisse an. Ob punktuelle Unterstützung bei einer kritischen Vakanz, langfristige Begleitung über mehrere Positionen oder strategische Beratung für den gesamten Talentbereich: coreberg bietet Lösungen, die genau auf Ihre Situation zugeschnitten sind.",
        "Diese Flexibilität ermöglicht es, schnell auf Marktveränderungen zu reagieren, interne Ressourcen zu schonen und gleichzeitig höchste Qualität in der Personalgewinnung zu gewährleisten.",
      ],
      bullets: [
        "Maximale Flexibilität für komplexe Anforderungen",
        "Agiles Handeln bei sich verändernden Rahmenbedingungen",
        "Qualitätssicherung trotz hoher Dynamik",
      ],
      image: "/images/service33.png",
    },
  },
  {
    label: "Trusted Partner",
    content: {
      title: "Trusted Partner",
      paragraphs: [
        "Die Zusammenarbeit mit COREBERG steht für Vertrauen und Diskretion. Wir verstehen uns nicht als reine Dienstleister, sondern als strategische Partner. Unser Netzwerk, unsere Erfahrung und unsere Marktkenntnis ermöglichen es, auch schwierige Positionen erfolgreich zu besetzen. Dabei achten wir jederzeit auf die Interessen beider Seiten: Unternehmen und Kandidaten.",
        "Unsere Kundinnen und Kunden wissen, dass sie sich auf uns verlassen können. Jede Empfehlung ist sorgfältig geprüft, jede Ansprache respektvoll und jede Information vertraulich behandelt. Dies schafft eine solide Grundlage für nachhaltige, langfristige Partnerschaften.",
      ],
      bullets: [
        "Vertrauensvolle Zusammenarbeit auf Augenhöhe",
        "Diskrete Prozesse und sensible Kommunikation",
        "Nachhaltige Partnerschaften statt kurzfristiger Lösungen",
      ],
      image: "/images/service44.png",
    },
  },
];

export default function TabsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = tabs[activeIndex].content;

  return (
    <section id="tabs-section" className="bg-white py-16 px-6 md:px-16">
      {/* Tab Headers */}
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-200">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`text-center text-sm font-medium px-4 py-4 transition-colors duration-200 leading-snug
                ${activeIndex === index
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
          <div className="relative w-full h-72 md:h-[560px] overflow-hidden rounded-sm shadow-md bg-gray-50">
            <Image
              src={active.image}
              alt={active.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
