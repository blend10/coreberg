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
    <section className="bg-white py-16 px-6 md:px-16 border-t border-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-row items-center gap-4">
            {/* Icon */}
            <div>
              <div className=" w-[48px] h-[48px] relative flex items-center justify-center text-gray-400 ">
                {feature.icon}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {/* Title */}
              <h3 className="text-lg font-medium text-[#091019]">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-[15px] text-[#42484E] leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
