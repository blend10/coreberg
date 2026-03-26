import React from "react";
import Image from "next/image";

const points = [
  {
    number: "Erstens",
    text: "erhalten Unternehmen Zugang zu einem breiten Marktpotenzial. Viele hochqualifizierte Kandidatinnen und Kandidaten sind nicht aktiv auf Stellensuche.",
  },
  {
    number: "Zweitens",
    text: "sparen Unternehmen wertvolle Ressourcen. Die Besetzung von Schlüsselpositionen ist zeitaufwendig. Jede Stelle erfordert sorgfältige Analyse, Interviews, Referenzprüfungen und oft auch Verhandlungen über Arbeitsverträge.",
  },
  {
    number: "Drittens",
    text: "profitieren Unternehmen von objektiver Expertise. Als externe Partner betrachten wir das Profil jedes Kandidaten unabhängig von internen Vorlieben oder bestehenden Netzwerkbindungen.",
  },
];

const StrategicQuote = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-start py-12 md:py-20 px-4 md:px-6 justify-start gap-8 md:gap-0">
      
      {/* Left: Author block */}
      <div className="flex flex-row md:flex-col items-center md:items-start gap-5 md:gap-0 w-full md:w-[20%]">
        <div className="relative w-[80px] h-[110px] md:w-[120px] md:h-[160px] flex-shrink-0">
          <Image
            src="/images/azir.png"
            alt="Azir Spahiu"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute bottom-0 right-0">
            <Image src="/images/quote.svg" alt="Quote" width={40} height={40} />
          </div>
        </div>

        {/* Name + title — inline on mobile, stacked below image on desktop */}
        <div className="md:mt-10">
          <div className="relative">
            <h1 className="text-[#091019] text-[15px] md:text-[17px] font-semibold">
              Azir Spahiu
            </h1>
            <h1 className="text-[#42484E] text-[13px] md:text-[15px]">
              Founder & Managing Partner
            </h1>
            {/* Signature — only show on desktop where space allows */}
            <div className="absolute bottom-0 left-20 w-[171px] h-[67px] hidden md:block">
              <Image src="/images/nenshkrimi.png" alt="Signature" fill />
            </div>
          </div>
        </div>
      </div>

      {/* Right: Content */}
      <div className="w-full md:w-[80%]">
        <section>
          <div className="flex flex-col gap-7 md:gap-10">
            <h2 className="text-[22px] md:text-[32px] font-medium text-[#091019] leading-snug">
              Die Besetzung von Schlüsselpositionen ist ein strategischer Hebel
              für nachhaltigen Unternehmenserfolg.
            </h2>

            {/* Two-column content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left: Body text + CTA */}
              <div className="flex flex-col gap-5">
                <p className="text-sm text-[#42484E] leading-relaxed">
                  Die Suche nach Fach- und Führungskräften extern zu vergeben
                  ist nicht nur eine praktische Entlastung für interne
                  HR-Abteilungen. Sie ist ein strategischer Schritt, der viele
                  Vorteile mit sich bringt.
                </p>
                <p className="text-sm text-[#42484E] leading-relaxed">
                  Bei COREBERG steht die Qualität der Kandidaten immer an erster
                  Stelle. Wir liefern keine endlosen Listen, sondern sorgfältig
                  ausgewählte Profile, die Ihren Anforderungen entsprechen. Jede
                  Empfehlung ist das Ergebnis eines strukturierten
                  Auswahlprozesses, persönlicher Gespräche und fundierter
                  Beurteilungen.
                </p>
                <div className="mt-2">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm rounded-lg text-white bg-gray-900 px-6 py-3 hover:bg-gray-700 transition-colors duration-200"
                  >
                    Mehr erfahren →
                  </a>
                </div>
              </div>

              {/* Right: Checkmark points */}
              <div className="flex flex-col gap-5 md:gap-6">
                {points.map((point, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <Image
                      src="/images/tikIcon.svg"
                      alt="Check"
                      width={22}
                      height={22}
                      className="mt-0.5 flex-shrink-0"
                    />
                    <p className="text-sm text-[#42484E] leading-relaxed">
                      <span className="font-medium">{point.number} </span>
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StrategicQuote;