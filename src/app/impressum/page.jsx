import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Impressum | COREBERG",
  description: "Rechtliche Informationen und Impressum der COREBERG GmbH.",
};

export default function ImpressumPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Simple Header */}
      <div className="bg-[#0A162C] pt-32 pb-20 px-6 md:px-16 text-white overflow-hidden relative">
        <div className="container mx-auto relative z-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-all duration-300 mb-10 group"
          >
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </div>
            <span className="text-xs uppercase tracking-[0.2em] font-sans">Zurück zur Startseite</span>
          </Link>
          <p className="text-xs uppercase tracking-widest text-white/50 mb-4 font-sans">
            Rechtliche Hinweise
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Impressum
          </h1>
          <div className="h-px bg-white/20 w-32" />
        </div>
        
        {/* Subtle decorative element */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-16 px-6 md:px-16 mb-20">
        <div className="max-w-3xl">
          <p className="text-gray-400 text-sm mb-12 font-sans italic">
            Von Azir Spahiu / Oktober 31, 2025
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-[#0A162C] border-b border-gray-100 pb-2">
                Kontakt-Adresse
              </h2>
              <div className="text-[#42484E] leading-relaxed font-sans text-[15px]">
                <p className="font-semibold text-[#0A162C]">COREBERG GmbH</p>
                <p>Mühlebachhof 8</p>
                <p>8852 Altendorf</p>
                <p>Schweiz</p>
                <p className="mt-4">
                  <span className="font-medium text-[#0A162C]">E-Mail:</span>{" "}
                  <a href="mailto:info@coreberg.ch" className="hover:text-[#0A162C] transition-colors underline underline-offset-4">
                    info@coreberg.ch
                  </a>
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-[#0A162C] border-b border-gray-100 pb-2">
                Geschäftsleitung
              </h2>
              <p className="text-[#42484E] font-sans text-[15px]">Azir Spahiu</p>
            </section>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-[#0A162C] border-b border-gray-100 pb-2">
                Vertretungsberechtigte Person(en)
              </h2>
              <p className="text-[#42484E] font-sans text-[15px]">Azir Spahiu</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-[#0A162C] border-b border-gray-100 pb-2">
                Handelsregister-Eintrag
              </h2>
              <div className="text-[#42484E] font-sans text-[15px] space-y-1">
                <p>Eingetragener Firmenname: COREBERG GmbH</p>
                <p>Handelsregister Nr: CH-130-4035921-9</p>
                <p className="pt-2">
                  <span className="font-medium text-[#0A162C]">Mehrwertsteuer-Nummer:</span><br />
                  CHE-176.511.374
                </p>
              </div>
            </section>
          </div>

          <div className="space-y-12">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-[#0A162C] border-b border-gray-100 pb-2">
                Haftungsausschluss
              </h2>
              <div className="text-[#42484E] leading-relaxed font-sans text-[15px] space-y-4">
                <p>
                  Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
                </p>
                <p>
                  Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
                </p>
                <p>
                  Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne besondere Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-[#0A162C] border-b border-gray-100 pb-2">
                Haftungsausschluss für Links
              </h2>
              <p className="text-[#42484E] leading-relaxed font-sans text-[15px]">
                Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des jeweiligen Nutzers.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-[#0A162C] border-b border-gray-100 pb-2">
                Urheberrechte
              </h2>
              <p className="text-[#42484E] leading-relaxed font-sans text-[15px]">
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website, gehören ausschliesslich der Firma COREBERG GmbH oder den speziell genannten Rechteinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}