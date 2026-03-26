import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-white p-3">
      <footer className="bg-[#0A162C] p-3  rounded-[36px] md:rounded-2xl text-white">
        {/* CTA Section */}
        <div className="container mx-auto bg-[#B1B9C1] rounded-[30px] mt-0 md:mt-5 px-6 md:px-16 py-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 pointer-events-none z-0">
            <Image
              src="/images/Vector.svg"
              alt=""
              width={350}
              height={350}
              className="w-[200px] md:w-[350px] opacity-20 md:opacity-100"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left: Text + Buttons */}
            <div className="flex flex-col gap-5 md:gap-6">
              <h2 className="text-[26px] md:text-[40px] leading-tight text-[#0A162C] relative z-10">
                Zusammen Berge <br /> versetzen.
              </h2>
              <p className="text-sm text-[#42484E] leading-relaxed">
                Bei COREBERG steht der Mensch im Mittelpunkt. Wir glauben, dass
                erfolgreiche Personalberatung auf Vertrauen, Klarheit und
                persönlichem Austausch basiert. Jede Zusammenarbeit beginnt mit
                Zuhören, Verstehen und einer präzisen Analyse der individuellen
                Bedürfnisse – sowohl auf Unternehmensseite als auch bei
                Talenten.
              </p>
              <p className="text-sm text-[#42484E] leading-relaxed">
                Wir verbinden Marktkenntnis mit strategischem Denken und einer
                partnerschaftlichen Haltung. Unser Anspruch ist es, nachhaltige
                Lösungen zu schaffen, die langfristig aktiven und echten
                Mehrwert gewähren. Diskretion, Professionalität und
                Verbindlichkeit prägen unsere Arbeitsweise.
              </p>
              <div className="flex flex-wrap gap-3 mt-2 z-10 relative">
                <a
                  href="#"
                  className="px-7 py-2.5 bg-[#0A162C] rounded-lg text-white text-sm font-medium border border-[#0A162C] hover:bg-transparent hover:text-[#0A162C] hover:border-[#0A162C] transition-colors duration-200"
                >
                  Suche starten
                </a>
                <a
                  href="#"
                  className="px-7 py-2.5 border border-[#0A162C] text-[#0A162C] text-sm rounded-lg font-medium hover:border-[#0A162C] hover:bg-[#0A162C] hover:text-white transition-colors duration-200"
                >
                  Mehr erfahren
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-[#B1B9C1] shadow-lg border border-white/10 rounded-md p-6 md:p-8 flex flex-col gap-4">
              <h3 className="text-[20px] md:text-[24px] font-semibold text-[#42484E]">
                Nehmen Sie Kontakt auf
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-[#42484E]">Ihr Name</label>
                  <input
                    type="text"
                    className="bg-transparent border-b border-[#42484E] text-sm text-[#0A162C] py-2 outline-none focus:border-[#42484E] transition-colors placeholder-gray-500"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-[#42484E]">E-Mail-Adresse</label>
                  <input
                    type="email"
                    className="bg-transparent border-b border-[#42484E] text-sm text-[#0A162C] py-2 outline-none focus:border-[#42484E] transition-colors placeholder-gray-500"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs text-[#42484E]">Service</label>
                <select className="bg-[#B1B9C1] text-sm text-[#0A162C] py-2 px-3 outline-none border-b border-[#42484E] focus:border-[#42484E] transition-colors">
                  <option value="">Service</option>
                  <option value="executive-search">Executive Search</option>
                  <option value="talent-advisory">Talent Advisory</option>
                  <option value="other">Sonstiges</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs text-[#42484E]">Nachricht</label>
                <textarea
                  rows={3}
                  className="bg-transparent border-b border-[#42484E] text-sm text-[#0A162C] py-2 outline-none focus:border-[#42484E] transition-colors resize-none"
                />
              </div>
              <div className="flex justify-start mt-2">
                <button className="bg-[#0A162C] hover:bg-[#334570] text-white text-sm px-7 rounded-lg py-2.5 flex items-center gap-2 transition-colors duration-200 w-full sm:w-auto justify-center sm:justify-start">
                  Anfrage absenden →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="container mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {/* Brand — full width on smallest screens */}
            <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo.svg"
                  alt="Logo"
                  width={120}
                  height={120}
                />
              </div>
              <p className="text-xs text-white">
                © {new Date().getFullYear()} COREBERG GmbH
              </p>
              <p className="text-xs text-white">
                Seite von:{" "}
                <a
                  href="https://syn-tech.ch/"
                  className="underline hover:text-gray-300"
                >
                  Syntech Solutions AG
                </a>
              </p>
            </div>

            {/* Schnellzugriffe */}
            <div className="flex flex-col gap-3">
              <p className="tracking-widest text-[#D8D8D8] uppercase text-xs md:text-sm">
                Schnellzugriffe
              </p>
              {[
                { label: "Startseite", href: "/" },
                { label: "Über uns", href: "/uberuns" },
                { label: "Dienstleistungen", href: "/dienstleistungen" },
                { label: "Kontakt", href: "/kontakt" },
                { label: "Impressum", href: "/impressum" },
                { label: "Datenschutzerklärung", href: "/vertraulichkeits-und-datenschutzerklaerung" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[13px] text-white hover:underline transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Adresse */}
            <div className="flex flex-col gap-3">
              <p className="tracking-widest text-[#D8D8D8] uppercase text-xs md:text-sm">
                Adresse
              </p>
              <p className="text-[13px] text-white leading-relaxed">
                Talestrasse 24C
                <br />
                8962 Altendorf CH
              </p>
            </div>

            {/* Kontakt */}
            <div className="flex flex-col gap-3">
              <p className="tracking-widest text-[#D8D8D8] uppercase text-xs md:text-sm">
                Kontakt
              </p>
              <a
                href="tel:+41415473140"
                className="text-[13px] text-white hover:underline transition-colors"
              >
                +41 415 473 140
              </a>
              <a
                href="mailto:info@coreberg.ch"
                className="text-[13px] text-white hover:underline transition-colors"
              >
                info@coreberg.ch
              </a>
              <a
                href="https://www.linkedin.com/company/coreberg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-white hover:underline transition-colors break-all"
              >
                linkedin.com/company/coreberg
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="container mx-auto px-6 py-6 text-center">
            <p className="text-white text-[10px] md:text-sm">
              COREBERG &nbsp;|&nbsp; Professional & Executive Search
              &nbsp;|&nbsp; Talent Advisory
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}