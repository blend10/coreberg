import StartPage from "@/components/general/StartPage";
import React from "react";
import StrategicQuote from "@/components/services/StrategicQuote";
import AccordionServices from "@/components/services/AccordionServices";
import TrustedPartner from "@/components/home/TrustedPartner";

const page = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center justify-center min-h-[40vh] p-3">
        <StartPage
          title="Recruitment.\n"
          titleHighlight="Excellence"
          titleSuffix=""
          imageSrc="/images/background3.png"
          subheading="Strategischer Recruiting-Ansatz"
          description="Professional & Executive Search ist mehr als klassische Rekrutierung. Es ist ein strategischer Prozess zur gezielten Besetzung von Schlüsselpositionen – individuell, diskret und mit klarem Fokus auf nachhaltigen Unternehmenserfolg. Dabei verbinden wir Marktkenntnis, Erfahrung und ein starkes Netzwerk, um die richtigen Talente zu identifizieren und langfristig zu gewinnen."
          statLabel="Strategischer Ansatz"
          statDescription="Jede Zusammenarbeit beginnt mit einer präzisen Analyse von Anforderungen und Kontext.So definieren wir ein klares Profil für gezielte und nachhaltige Besetzungen."
          buttonText="Dienstleistungen entdecken"
        />
      </div>
      <StrategicQuote />
      <AccordionServices />
      <TrustedPartner />
    </div>
  );
};

export default page;
