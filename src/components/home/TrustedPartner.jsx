import React from "react";
import Link from "next/link";

const competencies = [
  {
    title: "Engineering & Manufacturing",
    description:
      "In Engineering & Manufacturing unterstützt COREBERG Unternehmen gezielt bei der Gewinnung von Fach- und Führungskräften, die Produktionsprozesse optimieren, Innovationen vorantreiben und technische Exzellenz sicherstellen",
  },
  {
    title: "Banking & Insurance",
    description:
      "COREBERG begleitet Unternehmen in Banking & Insurance bei der Gewinnung von Fach- und Führungskräften, die regulatorische Anforderungen verstehen, Risiken einschätzen und Prozesse effizient steuern.",
  },
  {
    title: "IT & Digital Excellence",
    description:
      "Im Bereich IT & Digital Excellence begleitet COREBERG Unternehmen bei der Rekrutierung von Spezialisten, die digitale Transformationsprozesse vorantreiben und innovative Technologien umsetzen.",
  },
  {
    title: "Sales and Marketing",
    description:
      "Im Bereich Sales & Marketing unterstützt COREBERG Unternehmen bei der Suche nach Talenten, die Marken aufbauen, Märkte entwickeln und Umsatz nachhaltig steigern.",
  },
];

export default function TrustedPartner() {
  return (
    <section className="bg-white md:bg-[linear-gradient(to_right,#ffffff_50%,#EEF1F3_50%)] py-12 md:py-20 lg:py-24 px-4 md:px-10 lg:px-16 xl:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 xl:gap-32 items-center">
        {/* Left: Intro */}
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
          <p className="text-[28px] md:text-[32px] lg:text-[32px] xl:text-[40px] font-semibold text-[#0A162C]">
            Trusted Partner
          </p>
          <p className="text-[#42484E] leading-relaxed max-w-lg lg:text-base xl:text-lg">
            Mit COREBERG gewinnen Unternehmen einen Partner, der Talente gezielt
            identifiziert, Prozesse effizienter gestaltet und nachhaltige
            Lösungen entwickelt — die langfristig den Unternehmenserfolg
            sichern.
          </p>
          <div>
            <Link
              href="/industries#stacking-cards"
              className="inline-flex items-center gap-2 bg-[#223140] text-white px-8 rounded-lg py-2.5 hover:bg-gray-800 transition-all duration-200"
            >
              Mehr erfahren →
            </Link>
          </div>
        </div>

        {/* Right: Competencies */}
        <div className="flex flex-col gap-0 bg-[#EEF1F3] md:bg-transparent rounded-2xl md:rounded-none px-4 md:px-0 py-8 md:py-0">
          <p className="text-lg font-semibold tracking-widest text-[#070707] uppercase mb-6 md:mb-8 md:pl-6">
            Kernkompetenzen
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 xl:gap-2">
            {competencies.map((item, index) => (
              <div
                key={index}
                className="p-5 md:p-6 lg:p-8 flex flex-col gap-3 group transition-colors duration-200"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#223140] text-lg">→</span>
                  <h3 className="text-base md:text-lg font-medium text-[#223140]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[#223140] leading-relaxed">
                  {item.description}
                </p>
                <hr className="border-[#A7ADB3] mt-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
