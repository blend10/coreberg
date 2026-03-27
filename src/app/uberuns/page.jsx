import StartPage from "@/components/general/StartPage";
import React from "react";
import HeroIntro from "@/components/uberuns/HeroIntro";
import TabsSection from "@/components/uberuns/TabsSection";
import FeaturesRow from "@/components/uberuns/FeaturesRow";
import CorebergHero from "@/components/home/CorebergHero";
import TrustedPartner from "@/components/home/TrustedPartner";
import StrategicQuote from "@/components/services/StrategicQuote";

const page = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[40vh] p-3">
        <StartPage
          title="Menschen und"
          titleHighlight="Talent"
          titleSuffix="im Mittelpunkt"
          subheading="Unser Anspruch"
          description="Unser Name steht für das, was uns antreibt, Menschen und Unternehmen im Kern zusammenzubringen. „Core“ symbolisiert das Herz jeder Organisation, das Zentrum von Kompetenz, Kultur und Strategie. „Berg“ steht für Stabilität, Orientierung und Weitblick. Werte, die wir in unserer Beratung leben."
          imageSrc="/images/background4.png"
          statLabel="Unsere Haltung"
          statNumber="2025"
          statDescription="COREBERG wurde mit der Überzeugung gegründet, dass erfolgreiche Personalberatung auf Vertrauen, Klarheit und unternehmerischem Denken basiert. Wir verbinden Marktverständnis mit einem ausgeprägten Gespür für Menschen und Organisationen."
          buttonText="Jetzt Kontakt Aufnehmen"
        />
      </div>
      <StrategicQuote />
      <HeroIntro />
      <TabsSection />
      <FeaturesRow />
      <CorebergHero />
      <TrustedPartner />
    </div>
  );
};

export default page;
