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
        <StartPage
          title="Mensch zu Mensch."
          titleHighlight="Beratung"
          titleSuffix="die verbindet."
          subheading="Human Solutions"
          description="In einem Markt, der sich in Algorithmen und digitalen Versprechen verliert, setzen wir auf das Fundament: Die menschliche Urteilskraft.

Wir arbeiten für Unternehmen, die keine Lebensläufe sammeln, sondern Lösungen realisieren wollen.

Pragmatisch in der Umsetzung, exzellent im Ergebnis."
          buttonText="Jetzt Kontakt Aufnehmen"
          statNumber="10+"
          statLabel="Innovativ & Strategisch"
          statDescription="Die heutige Rekrutierungswelt ist geprägt von technologischem Überfluss. Wir bei COREBERG nutzen Innovation dort, wo sie Prozesse beschleunigt. Unsere Arbeit beginnt dort, wo die Software an ihre Grenzen stösst."
        />
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
