import StartPage from "@/components/general/StartPage";
import React from "react";
import VakanzenSection2 from "@/components/industries/VakanzenSection2";
// import StrategicQuote from "@/components/services/StrategicQuote";
import StackingCards from "@/components/industries/StackingCards";
import Strategische from "@/components/industries/Strategische";
import CorebergHero from "@/components/home/CorebergHero";

export const metadata = {
  title: "Industries | COREBERG",
  description:
    "Erfahrung und Expertise in vielfältigen Industrien und Sektoren.",
};

const page = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[40vh] p-3">
        <StartPage
          title="Branchenübergreifende\n"
          titleHighlight="Expertise"
          titleSuffix=""
          subheading="Ganzheitlicher Recruiting-Ansatz"
          imageSrc="/images/background4.png"
          description="Professional & Executive Search ist mehr als klassische Rekrutierung – es ist ein strategischer Prozess zur gezielten Besetzung von Schlüsselpositionen. Jede Vakanz beeinflusst Wachstum, Kultur und Innovationskraft. Deshalb arbeiten wir präzise, diskret und mit klarem Fokus auf nachhaltigen Unternehmenserfolg."
          statLabel="Branchenspezialisiert"
          statDescription="Mit COREBERG gewinnen Unternehmen einen Partner, der Talente gezielt identifiziert, Prozesse effizient gestaltet und strategische Beratung bietet. Wir sorgen für Qualität, Diskretion und nachhaltige Lösungen, die langfristig den Unternehmenserfolg sichern."
          buttonText="Jetzt Kontakt aufnehmen"
          statNumber="6+"
        />
      </div>
      <VakanzenSection2 />
      <StackingCards />
      <Strategische />
      <CorebergHero />
      {/* <StrategicQuote /> */}
    </div>
  );
};

export default page;
