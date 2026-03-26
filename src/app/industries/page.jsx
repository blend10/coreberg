import StartPage from "@/components/general/StartPage";
import React from "react";
import VakanzenSection from "@/components/home/Vakanzen";
import StrategicQuote from "@/components/services/StrategicQuote";
import StackingCards from "@/components/industries/StackingCards";

const page = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[40vh] p-3">
        <StartPage
          title="Branchenübergreifende\n"
          titleHighlight="Expertise"
          titleSuffix=""
          subheading="Ganzheitlicher Recruiting-Ansatz"
          imageSrc="/images/background3.png"
          description="Professional & Executive Search ist mehr als klassische Rekrutierung – es ist ein strategischer Prozess zur gezielten Besetzung von Schlüsselpositionen. Jede Vakanz beeinflusst Wachstum, Kultur und Innovationskraft. Deshalb arbeiten wir präzise, diskret und mit klarem Fokus auf nachhaltigen Unternehmenserfolg."
          statLabel="Unser Ansatz"
          statDescription="Jede Zusammenarbeit beginnt mit einer präzisen Analyse von Anforderungen und Kontext. So entsteht die Grundlage für gezielte Besetzungen und nachhaltige Entscheidungen."
          buttonText="Branchen entdecken"
        />
      </div>
      <VakanzenSection />
      <StackingCards />
      <StrategicQuote />
    </div>
  );
};

export default page;
