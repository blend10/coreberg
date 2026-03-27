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
          imageSrc="/images/background4.png"
          subheading="Strategischer Recruiting-Ansatz"
          description="Professional & Executive Search ist mehr als klassische Rekrutierung. Es ist ein strategischer Prozess zur gezielten Besetzung von Schlüsselpositionen – individuell, diskret und mit klarem Fokus auf nachhaltigen Unternehmenserfolg. Dabei verbinden wir Marktkenntnis, Erfahrung und ein starkes Netzwerk, um die richtigen Talente zu identifizieren und langfristig zu gewinnen."
          statLabel="COREBERG als Sparringpartner"
          statDescription="Die Suche nach Fach- und Führungskräften extern zu vergeben ist nicht nur eine praktische Entlastung für interne HR-Abteilungen. Sie ist ein strategischer Schritt, der viele Vorteile mit sich bringt."
          buttonText="Jetzt Kontakt Aufnehmen"
          statNumber="100+"
        />
      </div>
      <StrategicQuote />
      <AccordionServices />
      <TrustedPartner />
    </div>
  );
};

export default page;
