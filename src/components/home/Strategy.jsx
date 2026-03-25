import React from "react";
import Image from "next/image";

const Strategy = () => {
  return (
    <div className="flex flex-col container mx-auto py-10">
      <div className="flex flex-col items-start justify-between gap-5">
        <h1 className="text-[#42484E] text-sm ">
          Strategische Personalgewinnung für nachhaltigen Unternehmenserfolg
        </h1>
        <h1 className="text-[#091019] text-[24px] font-semibold ">
          COREBERG unterstützt Unternehmen dabei, Schlüsselpositionen <br />{" "}
          gezielt zu besetzen mit einem klaren Fokus auf Qualität, <br />{" "}
          langfristige Wirkung und kulturelle Passung.
        </h1>
      </div>
      <div className="flex flex-col items-start  mt-20 self-end">
        <h1 className="text-[#42484E] font-semibold ">
          Durch unsere langjährige Erfahrung verstehen wir Personalgewinnung als{" "}
          <br />
          strategischen Erfolgsfaktor – nicht nur als operativen Prozess. <br />
          Wir entwickeln kontinuierlich neue Ansätze, um Unternehmen nachhaltig
          zu <br /> stärken.
        </h1>
        <p className="text-[#42484E] mt-5">
          Erfolgreiche Besetzungen entstehen nicht durch Geschwindigkeit,
          sondern <br /> durch Präzision, Verständnis und die richtige
          Strategie.
        </p>
        <div className="flex flex-row gap-5 mt-4">
          <button className="flex items-center gap-2 bg-[#0B1F3B] px-6 py-2 rounded-lg text-white hover:bg-[#1a2744] transition-all group cursor-pointer font-sans text-sm">
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
          <div className="relative">
            <Image
              src="/images/nenshkrimi.png"
              alt="Unterschrift"
              width={400}
              height={200}
              className="absolute   -right-12  pointer-events-none select-none z-0"
            />
            <h1 className="font-bold text-[#091019] relative z-10">
              Azir Spahiu
            </h1>
            <h1 className="text-[#42484E] relative z-10">Der Gründer</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
