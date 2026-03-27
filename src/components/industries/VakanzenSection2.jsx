"use client";
import { useState } from "react";
import { Plus, Minus, ArrowRight, Upload, X, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const accordionItems = [
  {
    id: 1,
    title: "Diskrete Karrierevermittlung",
    content:
      "Wir bringen Talente diskret mit passenden Unternehmen zusammen und ermöglichen Zugang zu Positionen, die nicht öffentlich ausgeschrieben sind.",
  },
  {
    id: 2,
    title: "Persönliche Karrierebegleitung",
    content:
      "Wir prüfen Ihr Profil, beraten Sie individuell und eröffnen Zugang zu strategisch relevanten Positionen auch ausserhalb des offenen Marktes.",
  },
];

export default function VakanzenSection2() {
  const [openItem, setOpenItem] = useState(2);
  const [file, setFile] = useState(null);
  const [isSent, setIsSent] = useState(false);

  const toggle = (id) => setOpenItem(openItem === id ? null : id);

  const handleSend = () => {
    setIsSent(true);
    // Here you would hook up the actual Formspree/backend logic.
    // Reset back to normal after 3.5 seconds.
    setTimeout(() => {
      setFile(null);
      setIsSent(false);
    }, 3500);
  };

  return (
    <section className="container mx-auto px-4 md:px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
      {/* Left: Image */}
      <div className="relative w-full hidden md:block">
        {/* Large background image */}
        <div className="w-[511px] h-[763px] relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/image1.jpg"
            alt="Matterhorn Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlapping foreground image */}
        <div className="absolute right-15 top-1/2 -translate-y-1/2 w-[289px] h-[434px] rounded-2xl overflow-hidden">
          <Image
            src="/images/image2.jpg"
            alt="Personal Handshake"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Mobile-only image: single stacked image */}
      <div className="relative w-full h-[260px] rounded-2xl overflow-hidden shadow-lg md:hidden">
        <Image
          src="/images/image2.jpg"
          alt="Personal Handshake"
          fill
          className="object-cover"
        />
      </div>

      {/* Right: Content */}
      <div className="flex flex-col gap-5 md:gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Beratung die verbindet
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed">
          Unternehmen und Talente können bei COREBERG jederzeit eine persönliche
          Anfrage stellen. Ob Sie eine Vakanz besetzen, Beratung zu
          Talentstrategien wünschen oder Ihren Lebenslauf hochladen möchten –
          wir prüfen Ihre Angaben sorgfältig und treten direkt mit Ihnen in
          Kontakt. Unser Ansatz ist individuell und diskret.
        </p>

        <p className="text-gray-600 text-sm leading-relaxed">
          Wir beraten professionell, zeigen Möglichkeiten auf und bringen
          Talente gezielt mit passenden Unternehmen zusammen. Jede Anfrage wird
          persönlich betreut, sodass Sie schnell Klarheit über passende Optionen
          erhalten. Mit COREBERG profitieren Sie von Erfahrung, Marktkenntnis
          und einem direkten Zugang zu unserem Netzwerk, ohne dass Stellen
          öffentlich ausgeschrieben werden.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 md:gap-4 mt-2">
          {!file && !isSent && (
            <>
              <label className="cursor-pointer flex items-center gap-2 bg-[#091019] text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-gray-800 transition">
                UPLOAD PDF <Upload size={16} />
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    const selected = e.target.files?.[0];
                    if (selected) setFile(selected);
                  }}
                />
              </label>
              <label className="cursor-pointer flex items-center gap-2 border border-gray-300 text-gray-800 text-sm font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition">
                UPLOAD JOB AD <Upload size={16} />
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    const selected = e.target.files?.[0];
                    if (selected) setFile(selected);
                  }}
                />
              </label>
            </>
          )}

          {file && !isSent && (
            <div className="flex items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-300">
              <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 text-gray-800 text-sm font-medium px-4 py-3 rounded-md">
                <span className="truncate max-w-[120px] md:max-w-[180px]">
                  {file.name}
                </span>
                <button
                  onClick={() => setFile(null)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
              <button
                onClick={handleSend}
                className="flex items-center gap-2 bg-[#091019] text-white text-sm font-medium px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
              >
                SENDEN <ArrowRight size={16} />
              </button>
            </div>
          )}

          {isSent && (
            <div className="flex items-center gap-2 bg-green-600 text-white text-sm font-medium px-6 py-3 rounded-md animate-in fade-in zoom-in-95 duration-300">
              <Check size={18} /> Erfolgreich gesendet!
            </div>
          )}
        </div>

        {/* Accordion */}
        <div className="mt-3 md:mt-4 border-t border-gray-200">
          {accordionItems.map((item) => (
            <div key={item.id} className="border-b border-gray-200">
              <button
                onClick={() => toggle(item.id)}
                className="w-full flex items-center justify-between py-4 text-left text-gray-900 font-bold text-sm hover:text-gray-600 transition gap-4"
              >
                <span>{item.title}</span>
                {openItem === item.id ? (
                  <Minus size={16} className="text-gray-500 flex-shrink-0" />
                ) : (
                  <Plus size={16} className="text-gray-500 flex-shrink-0" />
                )}
              </button>

              {openItem === item.id && (
                <p className="pb-4 text-sm text-[#42484E] leading-relaxed">
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
