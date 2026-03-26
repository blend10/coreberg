import React from "react";
import Image from "next/image";

const Strategy = () => {
  return (
    <div className="flex flex-col container mx-auto py-10 px-4 md:px-6">
      {/* Top Section */}
      <div className="flex flex-col items-start justify-between gap-5">
        <h1 className="text-[#42484E] text-sm">
          Strategische Personalgewinnung für nachhaltigen Unternehmenserfolg
        </h1>
        <h1 className="text-[#091019] text-[20px] md:text-[24px] font-semibold leading-snug">
          COREBERG unterstützt Unternehmen dabei, Schlüsselpositionen{" "}
          <br className="hidden md:block" />
          gezielt zu besetzen mit einem klaren Fokus auf Qualität,{" "}
          <br className="hidden md:block" />
          langfristige Wirkung und kulturelle Passung.
        </h1>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-start mt-10 md:mt-20 md:self-end md:max-w-[60%]">
        <h1 className="text-[#42484E] font-semibold leading-relaxed">
          Durch unsere langjährige Erfahrung verstehen wir Personalgewinnung als{" "}
          <br className="hidden md:block" />
          strategischen Erfolgsfaktor – nicht nur als operativen Prozess.{" "}
          <br className="hidden md:block" />
          Wir entwickeln kontinuierlich neue Ansätze, um Unternehmen nachhaltig
          zu <br className="hidden md:block" /> stärken.
        </h1>
        <p className="text-[#42484E] mt-5 leading-relaxed">
          Erfolgreiche Besetzungen entstehen nicht durch Geschwindigkeit,
          sondern <br className="hidden md:block" /> durch Präzision,
          Verständnis und die richtige Strategie.
        </p>

        <div className="flex flex-row gap-5 mt-4 items-center">
          <button className="flex items-center gap-2 bg-[#0B1F3B] px-8 py-3 rounded-lg text-white hover:bg-[#1a2744] transition-all group cursor-pointer font-sans text-sm whitespace-nowrap">
            Mehr lesen
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          {/* Signature + Name */}
          <div className="relative pl-2">
            <Image
              src="/images/nenshkrimi.png"
              alt="Unterschrift"
              width={500}
              height={200}
              className="absolute -right-12  pointer-events-none select-none z-0 "
            />
            <h1 className="font-bold text-[#091019] relative z-10 text-sm md:text-base">
              Azir Spahiu
            </h1>
            <h1 className="text-[#42484E] relative z-10 text-sm md:text-base">
              Der Gründer
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
