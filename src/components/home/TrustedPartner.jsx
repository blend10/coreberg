// TrustedPartner.jsx
import React from "react";

const competencies = [
  {
    title: "Engineering & Manufacturing",
    description:
      "Im Engineering & Manufacturing unterstützt COMBERIQ Unternehmen bei der Optimierung von Produktionsprozessen, der Digitalisierung der Fertigung sowie bei der technischen Exzellenz und innovativen Lösungen.",
  },
  {
    title: "Banking & Insurance",
    description:
      "COMBERIQ begleitet Unternehmen in Banking & Insurance bei der Umsetzung von Fach- und Führungsaufgaben, die regulatorische Anforderungen sicher verstehen, Kundenschnittstellen und Prozesse effizienter gestalten.",
  },
  {
    title: "IT & Digital Excellence",
    description:
      "Im Bereich IT & Digital Excellence begleitet COMBERIQ Unternehmen gezielt bei der Umsetzung von Digitalisierungs- und Business Transformation Vorhaben und setzt auf innovative Technologien und Lösungen.",
  },
  {
    title: "Administration",
    description:
      "Im Bereich Administration unterstützt COMBERIQ Unternehmen dabei, die Suche nach Talenten, die organisatorischen Abläufe zu optimieren, Prozesse effizienter zu gestalten und Teams gezielt weiterzuentwickeln.",
  },
];

export default function TrustedPartner() {
  return (
    <section className="bg-[linear-gradient(to_left,#EEF1F3_58%,#ffffff_58%)] py-20 px-6 md:px-16">
      <div className="container  mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        {/* Left: Intro */}
        <div className="flex flex-col gap-10">
          <p className="text-[32px] font-semibold text-[#0A162C] ">
            Trusted Partner
          </p>
          <p className="text-[#42484E]">
            Mit COMBERIQ gewinnen Unternehmen einen <br /> Partner, der Talente
            gezielt identifiziert, Prozesse <br /> effizienter gestaltet und
            nachhaltige Lösungen entwickelt — <br /> die langfristig den
            Unternehmenserfolg sichern.
          </p>
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#223140] text-white  px-8 rounded-lg py-2.5 hover:bg-gray-800 hover:text-white transition-all duration-200"
            >
              Mehr erfahren →
            </a>
          </div>
        </div>

        {/* Right: Competencies */}
        <div className="flex flex-col gap-0">
          <p className="text-lg pl-6 font-semibold tracking-widest text-[#070707] uppercase mb-6">
            Kernkompetenzen
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {competencies.map((item, index) => (
              <div
                key={index}
                className="p-6 flex flex-col gap-3 group  transition-colors duration-200"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#223140] text-lg">→</span>
                  <h3 className="text-lg font-medium text-[#223140]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[#223140] leading-relaxed ">
                  {item.description}
                </p>
                <hr className="border-[#A7ADB3]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
