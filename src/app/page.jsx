import StartPage from "@/components/general/StartPage";
import Strategy from "@/components/home/Strategy";
import ServicesList from "@/components/home/ServicesList";
import ExperienceSection from "@/components/home/ExperienceSection";
import VakanzenSection from "@/components/home/Vakanzen";
import CorebergHero from "@/components/home/CorebergHero";
import TrustedPartner from "@/components/home/TrustedPartner";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[40vh] p-3">
        <StartPage />
      </div>
      <Strategy />
      <ServicesList />
      <ExperienceSection />
      <VakanzenSection />
      <CorebergHero />
      <TrustedPartner />
    </div>
  );
}
