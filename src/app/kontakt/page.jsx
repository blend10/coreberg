import React from "react";
import StartPage from "@/components/general/StartPage";
import ContactSection from "@/components/kontakt/ContactSection";
import Maps from "@/components/kontakt/Maps";

const page = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center justify-center min-h-[40vh] p-3">
        <StartPage
          title="Zusammen\n"
          titleHighlight="Berge"
          titleSuffix="versetzen"
          subheading="Strategische Talentlösungen"
          imageSrc="/images/background3.png"
          description="Ob es um die Besetzung von Schlüsselpositionen, strategische Unterstützung im Recruiting oder individuelle Karrierefragen geht – wir stehen Ihnen als vertrauensvoller Partner zur Seite."
          statLabel="Strategische Recruiting-Lösungen"
          statDescription="Ob Schlüsselpositionen, strategische Recruiting-Themen oder individuelle Karriereschritte – wir begleiten Sie persönlich, diskret und mit klarem Fokus auf nachhaltige Ergebnisse."
          buttonText="Mit Beratern sprechen"
        />
      </div>
      <ContactSection />
      <Maps />
    </div>
  );
};

export default page;
