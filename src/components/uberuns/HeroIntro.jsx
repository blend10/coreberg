// HeroIntro.jsx
import React from "react";

export default function HeroIntro() {
  return (
    <section className="bg-[#E4E9F14D] py-12 md:py-20 px-5 md:px-16">
      <div className="container mx-auto flex flex-col gap-6">
        <p className="text-xs md:text-sm text-[#42484E] font-medium uppercase tracking-wider">
          Strategische Personalgewinnung für nachhaltigen Unternehmenserfolg
        </p>
        <h1 className="text-[20px] md:text-[24px] font-semibold text-[#091019] leading-snug">
          COREBERG unterstützt Unternehmen dabei, Schlüsselpositionen gezielt zu
          besetzen mit einem klaren Fokus auf Qualität, langfristige Wirkung und
          kulturelle Passung.
        </h1>

        {/* Body text */}
        <p className="text-sm md:text-base font-medium text-[#42484E] leading-relaxed">
          Durch unsere langjährige Erfahrung verstehen wir Personalgewinnung als
          strategischen Erfolgsfaktor – nicht nur als operativen Prozess. Wir
          entwickeln kontinuierlich neue Ansätze, um Unternehmen nachhaltig zu
          stärken.
        </p>
      </div>
    </section>
  );
}
