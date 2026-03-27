import React from "react";
import Image from "next/image";

const points = [
  {
    text: "Unternehmen sollen nicht nur Kandidaten erhalten, sondern echte Lösungen. Talente sollen nicht einfach vermittelt werden, sondern in Umfelder gelangen, in denen sie langfristig wirken können.",
  },
  {
    text: "Diese Haltung prägt COREBERG bis heute, diskret, präzise und mit einem klaren Blick für das Wesentliche.",
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
              Der Gründer
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
              COREBERG wurde mit der Überzeugung gegründet, dass erfolgreiche
              Personalberatung auf Vertrauen, Klarheit und unternehmerischem
              Denken basiert.
            </h2>

            {/* Two-column content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left: Body text + CTA */}
              <div className="flex flex-col gap-5">
                <p className="text-sm text-[#42484E] leading-relaxed">
                  Der Gründer verbindet Marktverständnis mit einem ausgeprägten
                  Gespür für Menschen und Organisationen
                </p>
                <p className="text-sm text-[#42484E] leading-relaxed">
                  Mit dem Anspruch, Qualität über Quantität zu stellen, entstand
                  COREBERG als Boutique für Professional und Executive Search.
                  Der Fokus liegt auf nachhaltigen Besetzungen, strategischer
                  Beratung und einer persönlichen Begleitung auf Augenhöhe.
                </p>
                {/* <div className="mt-2">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm rounded-lg text-white bg-gray-900 px-6 py-3 hover:bg-gray-700 transition-colors duration-200"
                  >
                    Mehr erfahren →
                  </a>
                </div> */}
              </div>

              {/* Right: Checkmark points */}
              <div className="flex flex-col gap-5 md:gap-6">
                {points.map((point, index) => (
                  <div key={index} className="flex gap-3 items-center">
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
