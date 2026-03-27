// HeroIntro.jsx
import React from "react";

export default function HeroIntro() {
  return (
    <section className="bg-[#E4E9F14D] py-12 md:py-20 px-5 md:px-16">
      <div className="container mx-auto flex flex-col gap-6">
        <p className="text-xs md:text-sm text-[#42484E] font-medium  tracking-wider">
          Strategische Personalgewinnung für nachhaltigen Unternehmenserfolg
        </p>
        <h1 className="text-[20px] md:text-[24px] font-semibold text-[#091019] leading-snug">
          Bei COREBERG steht der Mensch im Mittelpunkt. Wir glauben, dass
          erfolgreiche Personalberatung nicht nur über Prozesse und Profile
          funktioniert, sondern über echtes Verständnis, Vertrauen und
          persönliche Begegnungen. Jede Zusammenarbeit beginnt mit Zuhören,
          Nachfragen und dem genauen Erfassen von Bedürfnissen – sei es auf
          Unternehmensseite oder bei Kandidatinnen und Kandidaten.
        </h1>

        {/* Body text */}
        <p className="text-sm md:text-base font-medium text-[#42484E] leading-relaxed">
          Unser Ansatz ist individuell und partnerschaftlich. Wir verbinden
          Marktkenntnis, Erfahrung und strategisches Denken mit einem
          persönlichen Zugang. So können wir Talente gezielt mit passenden
          Unternehmen zusammenbringen und gleichzeitig sicherstellen, dass jede
          Empfehlung nachhaltig Mehrwert schafft. Diskretion, Respekt und
          Transparenz begleiten uns in jedem Schritt. <br /> <br />
          COREBERG versteht sich als Begleiter und Berater. Wir beraten nicht
          nur, wir begleiten Menschen auf ihrem Karriereweg und Unternehmen bei
          der langfristigen Entwicklung ihrer Teams. Jede Entscheidung, die wir
          treffen, basiert auf Vertrauen, Erfahrung und dem Anspruch, Menschen
          und Organisationen optimal zusammenzubringen. <br />
          Mensch zu Mensch bedeutet für uns: Wir sehen die Persönlichkeit, nicht
          nur das Profil. Wir verstehen Ziele, Wünsche und Potenziale. Wir
          schaffen Verbindungen, die wirken, Bestand haben und langfristig
          Erfolg ermöglichen – für Menschen und Unternehmen gleichermaßen.
        </p>
      </div>
    </section>
  );
}
