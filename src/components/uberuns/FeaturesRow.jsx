import React from "react";
import Image from "next/image";

const features = [
  {
    icon: <Image src="/images/icon1.svg" alt="Icon 1" fill />,
    title: "Schlüsselpositionen identifizieren",
    description:
      "Wir identifizieren gezielt Spezialisten und Führungskräfte, die Fachkompetenz, Leadership und kulturelle Passung vereinen – für nachhaltige Besetzungen mit Wirkung.",
  },
  {
    icon: <Image src="/images/icon2.svg" alt="Icon 2" fill />,
    title: "Strategische Rekrutierungsansätze",
    description:
      "Mit strukturierten Suchprozessen, fundierter Marktkenntnis und klarer Strategie gewinnen wir die richtigen Talente für anspruchsvolle Positionen.",
  },
  {
    icon: <Image src="/images/icon3.svg" alt="Icon 3" fill />,
    title: "Partnerschaftliche Zusammenarbeit",
    description:
      "Wir arbeiten eng mit Unternehmen zusammen, um Kultur, Ziele und Anforderungen zu verstehen – und so langfristig erfolgreiche Teams aufzubauen.",
  },
];

export default function FeaturesRow() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-28 px-5 md:px-10 lg:px-20 xl:px-32 border-t border-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20 xl:gap-24">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col xl:flex-row items-start xl:items-center gap-6 md:gap-8 xl:gap-5"
          >
            {/* Icon */}
            <div className="shrink-0">
              <div className="w-[42px] h-[42px] md:w-[48px] md:h-[48px] xl:w-[54px] xl:h-[54px] relative flex items-center justify-center text-gray-400">
                {feature.icon}
              </div>
            </div>
            <div className="flex flex-col gap-3 md:gap-4">
              {/* Title */}
              <h3 className="text-[18px] md:text-lg lg:text-[20px] font-semibold text-[#091019] leading-tight">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#42484E] leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
