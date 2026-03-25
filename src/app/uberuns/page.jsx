import StartPage from "@/components/general/StartPage";
import React from "react";
import HeroIntro from "@/components/uberuns/HeroIntro";
import TabsSection from "@/components/uberuns/TabsSection";
import FeaturesRow from "@/components/uberuns/FeaturesRow";
import CorebergHero from "@/components/home/CorebergHero";
import TrustedPartner from "@/components/home/TrustedPartner";

const page = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[40vh] p-3">
        <StartPage />
      </div>
      <HeroIntro />
      <TabsSection />
      <FeaturesRow />
      <CorebergHero />
      <TrustedPartner />
    </div>
  );
};

export default page;
