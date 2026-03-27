"use client";
import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Was ist Professional & Executive Search?",
    answer:
      "Professional & Executive Search ist ein strategischer Prozess zur gezielten Besetzung von Schlüsselpositionen. Dabei identifizieren und gewinnen wir Fach- und Führungskräfte, die nicht aktiv auf Stellensuche sind, aber optimal zu den Anforderungen und zur Unternehmenskultur passen.",
  },
  {
    question: "Wie finden Sie die passenden Kandidaten?",
    answer:
      "Wir nutzen unser Netzwerk, Marktkenntnis und gezielte Direktansprache, um qualifizierte Talente zu identifizieren. Viele Kandidaten befinden sich in festen Positionen und sind über klassische Kanäle nicht erreichbar.",
  },
  {
    question: "Wie stellen Sie die Qualität der Kandidaten sicher?",
    answer:
      "Jede Empfehlung basiert auf einem strukturierten Auswahlprozess mit persönlichen Gesprächen, Referenzprüfungen und einer fundierten Bewertung von Qualifikationen, Persönlichkeit und kultureller Passung.",
  },
  {
    question: "Warum sollten Unternehmen den Suchprozess auslagern?",
    answer:
      "Unternehmen sparen Zeit und interne Ressourcen, während gleichzeitig der Zugang zu einem erweiterten Talentpool ermöglicht wird. Zudem profitieren Unternehmen von einer objektiven, externen Einschätzung.",
  },
  {
    question: "Was unterscheidet COREBERG von klassischen Recruiting-Ansätzen?",
    answer:
      "Wir arbeiten diskret, individuell und strategisch. Statt öffentlicher Ausschreibungen konzentrieren wir uns auf gezielte Direktansprache und nachhaltige Besetzungen.",
  },
  {
    question: "Was bedeutet Diskretion im Suchprozess?",
    answer:
      "Insbesondere bei leitenden Positionen behandeln wir alle Informationen vertraulich und kommunizieren sensibel mit Kandidaten und Unternehmen.",
  },
  {
    question: "Für welche Positionen ist COREBERG geeignet?",
    answer:
      "Unsere Leistungen sind besonders wertvoll für Fach- und Führungspositionen, bei denen Qualität, Diskretion und strategische Passung entscheidend sind.",
  },
];

export default function Strategische() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-white py-14 md:py-20 px-4 md:px-16">
      <div className="container mx-auto">
        {/* Top: two-column intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 lg:gap-16 mb-12 md:mb-16 items-start">
          {/* Left label */}
          <p className="text-[#42484E] text-sm leading-relaxed ">
            Über Profile hinaus zum passenden Talent.
          </p>

          {/* Right: heading + body + CTA */}
          <div className="flex flex-col gap-5">
            <h2 className="text-[26px] md:text-[30px] lg:text-[36px] font-bold text-gray-900 leading-snug">
              Strategische Beratung für nachhaltige Personalentscheidungen.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Wir unterstützen Unternehmen dabei, Fach- und Führungskräfte
              gezielt zu identifizieren und langfristig zu binden. Durch
              fundierte Marktkenntnis, strukturierte Prozesse und diskrete
              Direktansprache schaffen wir Zugang zu Talenten, die über
              klassische Wege nicht erreichbar sind.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-[#0d1b2a] text-white text-sm font-medium px-6 py-3 rounded-md hover:opacity-85 transition w-fit"
            >
              Kontakt aufnehmen <ArrowRight size={16} />
            </Link>
            <div className="border-t border-gray-200 mt-20">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-200">
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between py-5 text-left gap-6 group"
                  >
                    <span className="text-sm md:text-base font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                      {faq.question}
                    </span>
                    {openIndex === i ? (
                      <Minus
                        size={18}
                        className="text-gray-400 flex-shrink-0"
                      />
                    ) : (
                      <Plus size={18} className="text-gray-400 flex-shrink-0" />
                    )}
                  </button>

                  {openIndex === i && (
                    <p className="pb-5 text-sm text-gray-500 leading-relaxed max-w-[75ch]">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
      </div>
    </section>
  );
}
