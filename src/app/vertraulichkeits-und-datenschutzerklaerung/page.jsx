import React from "react";

export const metadata = {
  title: "Datenschutzerklärung | COREBERG",
  description: "Vertraulichkeits- und Datenschutzerklärung der COREBERG GmbH.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Simple Header */}
      <div className="bg-[#0A162C] pt-32 pb-20 px-6 md:px-16 text-white overflow-hidden relative">
        <div className="container mx-auto relative z-10">
          <p className="text-xs uppercase tracking-widest text-white/50 mb-4 font-sans">
            Rechtliche Hinweise
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Datenschutzerklärung
          </h1>
          <div className="h-px bg-white/20 w-32" />
        </div>
        
        {/* Subtle decorative element */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-16 px-6 md:px-16 mb-20">
        <div className="max-w-4xl">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#0A162C] mb-4">
              Vertraulichkeits- und Datenschutzerklärung
            </h2>
            <p className="text-gray-400 text-sm font-sans italic">
              Von Azir Spahiu / Oktober 31, 2025
            </p>
            <div className="mt-4 text-[#42484E] font-sans text-[15px]">
              <p className="font-semibold text-[#0A162C]">COREBERG GmbH</p>
              <p>E-Mail: <a href="mailto:info@coreberg.ch" className="underline underline-offset-4 hover:text-[#0A162C]">info@coreberg.ch</a></p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-[#42484E] font-sans text-[15px] leading-relaxed space-y-10">
            <section>
              <p>
                Diese Vertraulichkeits- und Datenschutzerklärung gilt für die COREBERG GmbH und deren Tochtergesellschaften, soweit vorhanden. Im Text werden sie als „Unternehmen“ bezeichnet.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-[#0A162C]">1. Vertraulichkeitsgrundsätze der COREBERG GmbH</h3>
              <p>
                Wenn Sie Ihre personenbezogenen Daten an die COREBERG GmbH übermitteln, erklären Sie sich damit einverstanden, dass wir diese Informationen verwenden, soweit dies für die Abwicklung von Verträgen, Dienstleistungen oder die Nutzung unserer Websites erforderlich ist. Die COREBERG GmbH behandelt Ihre Daten vertraulich und gibt sie nur für die vorgesehenen Zwecke an Dritte weiter.
              </p>
              <p>
                Wir beachten alle geltenden Datenschutzgesetze, insbesondere:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>das Bundesgesetz über den Datenschutz (DSG) vom 25. September 2020,</li>
                <li>die Datenschutz-Grundverordnung der EU (DSGVO, Verordnung (EU) 2016/679),</li>
                <li>weitere anwendbare Rechtsvorschriften.</li>
              </ul>
              <p>
                Diese Datenschutzerklärung informiert Sie darüber, welche Daten wir erheben, wie wir sie verwenden, wer Zugriff darauf hat und an wen sie weitergegeben werden. Sie enthält auch Informationen über Ihre Datenschutzrechte.
              </p>
              <p>
                Die verantwortliche Stelle für Ihre Daten ist die COREBERG GmbH. Ihre Daten werden zentral gespeichert und gemäß dieser Erklärung verarbeitet. Wir setzen angemessene technische und organisatorische Maßnahmen ein, um die Daten gegen unbefugten Zugriff, Verlust oder Veränderung zu schützen. Bitte beachten Sie jedoch, dass die Datenübertragung im Internet (z. B. per E-Mail) Sicherheitsrisiken bergen kann.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-[#0A162C]">2. Welche Daten erheben wir?</h3>
              <p>Wir erfassen und speichern folgende personenbezogenen Daten:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                <div className="space-y-4">
                  <h4 className="font-semibold text-[#0A162C]">Kontaktinformationen:</h4>
                  <p>Name, Adresse, E-Mail-Adresse, Telefonnummer</p>
                  
                  <h4 className="font-semibold text-[#0A162C]">Nutzungsinformationen (bei Website- oder App-Nutzung):</h4>
                  <p>IP-Adresse, Datum und Uhrzeit, angeforderte Dienste, Login-Informationen, wenn Sie ein persönliches Konto nutzen</p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-[#0A162C]">Bewerberdaten:</h4>
                  <p>Geburtsdatum, Geschlecht, Nationalität, Aufenthaltsstatus, Berufliche Qualifikationen, Diplome, Zeugnisse, Optional: Foto, Strafregisterauszüge, Betreibungsregisterauszüge</p>
                  
                  <h4 className="font-semibold text-[#0A162C]">Mitarbeiterdaten:</h4>
                  <p>Bankverbindung, Sozialversicherungsnummer, Ausweisdaten, Vertrags-, Lohn-, Steuer- und weitere arbeitsbezogene Informationen, Notfallkontakte</p>
                </div>
              </div>
              <p className="pt-2 italic">
                Besonders schützenswerte Daten (z. B. politische Meinungen, religiöse Überzeugungen, Gesundheit) werden nur verarbeitet, wenn Sie diese freiwillig bereitstellen.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-[#0A162C]">3. Zweck der Datenverarbeitung</h3>
              <p>Wir verarbeiten Ihre Daten auf Grundlage von:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Ihrem Einverständnis,</li>
                <li>gesetzlicher oder vertraglicher Pflichten,</li>
                <li>unseren berechtigten Interessen.</li>
              </ul>
              <p>Ihre Daten werden insbesondere verwendet, um:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Verträge und Arbeitsverhältnisse zu verwalten,</li>
                <li>Zahlungen und Sozialabgaben abzuwickeln,</li>
                <li>Bewerbungen zu prüfen und passende Stellenangebote zu unterbreiten,</li>
                <li>Direktmarketing, Newsletter und Umfragen durchzuführen,</li>
                <li>unsere Dienstleistungen zu betreiben, zu analysieren und zu verbessern,</li>
                <li>Anfragen oder Beschwerden zu bearbeiten,</li>
                <li>gesetzliche und vertragliche Vorgaben einzuhalten.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-[#0A162C]">4. Berechtigte Interessen</h3>
              <p>Zu unseren berechtigten Interessen gehört insbesondere:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Schutz vor Betrug und Sicherheitsrisiken,</li>
                <li>Optimierung unserer Dienstleistungen und Angebote,</li>
                <li>Direktmarketing und Effizienzbewertung von Kampagnen.</li>
              </ul>
              <p>Wir wägen Ihre Rechte stets gegen unsere berechtigten Interessen ab.</p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-[#0A162C]">5. Dauer der Speicherung</h3>
              <p>Wir speichern Ihre personenbezogenen Daten so lange, wie es für die genannten Zwecke und die Erfüllung gesetzlicher Verpflichtungen erforderlich ist.</p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-[#0A162C]">6. Weitergabe von Daten</h3>
              <p>Personendaten werden nur weitergegeben:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>innerhalb der COREBERG GmbH oder an Partnerunternehmen, soweit zur Dienstleistung erforderlich,</li>
                <li>an Dienstleister, die in unserem Auftrag tätig sind, unter vertraglicher Vertraulichkeitspflicht,</li>
                <li>bei rechtlicher Verpflichtung oder zur Verhinderung von Schäden oder Straftaten.</li>
              </ul>
              <p>Übermittlungen in Länder außerhalb der Schweiz oder der EU erfolgen nur mit angemessenem Datenschutzniveau. Sie können diese Einwilligung jederzeit widerrufen.</p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-[#0A162C]">7. Ihre Rechte</h3>
              <p>Sie haben das Recht auf:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Auskunft über Ihre gespeicherten Daten,</li>
                <li>Berichtigung unrichtiger Daten,</li>
                <li>Löschung oder Einschränkung der Verarbeitung,</li>
                <li>Widerruf Ihrer Einwilligung für die Zukunft.</li>
              </ul>
              <p className="pt-2">Für die Ausübung Ihrer Rechte kontaktieren Sie bitte die COREBERG GmbH direkt:</p>
              <p className="font-medium text-[#0A162C]">E-Mail: <a href="mailto:info@coreberg.ch" className="underline hover:text-[#0A162C]">info@coreberg.ch</a></p>
              <p className="text-sm italic">Bitte beachten Sie, dass der Widerruf Ihrer Einwilligung Auswirkungen auf unsere Fähigkeit haben kann, bestimmte Dienstleistungen zu erbringen.</p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-[#0A162C]">8. Änderungen der Datenschutzerklärung</h3>
              <p>Wir können diese Erklärung jederzeit anpassen. Maßgeblich ist die jeweils auf unserer Website veröffentlichte Version. Bei wesentlichen Änderungen werden wir Sie angemessen informieren.</p>
              <p className="font-medium text-[#0A162C]">Website: <a href="https://www.coreberg.ch" className="underline hover:text-[#0A162C]">www.coreberg.ch</a></p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}