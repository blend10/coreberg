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
      "Wir bringen Talente diskret mit ausgewählten Unternehmen zusammen und berücksichtigen dabei auch Positionen ausserhalb des offenen Marktes. So erhalten Sie Zugang zu relevanten Karrieremöglichkeiten, die nicht öffentlich ausgeschrieben sind.",
  },
  {
    id: 2,
    title: "Persönliche Karrierebegleitung",
    content:
      "Wir prüfen Ihr Profil, beraten Sie individuell und begleiten Sie gezielt bei Ihrer nächsten Karrierestufe. Dabei eröffnen wir Ihnen Zugang zu strategisch relevanten Positionen, die zu Ihrem Profil passen.",
  },
];

export default function VakanzenSection() {
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
    <section className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 xl:gap-24 items-center overflow-hidden">
      {/* Left: Image */}
      <div className="relative w-full hidden md:flex justify-center">
        {/* Large background image */}
        <div className="relative w-full max-w-[400px] xl:max-w-[511px] aspect-[511/763] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/maunt.png"
            alt="Matterhorn Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlapping foreground image */}
        <div className="absolute right-0 xl:-right-10 top-1/2 -translate-y-1/2 w-[200px] xl:w-[289px] aspect-[289/434] rounded-2xl overflow-hidden shadow-2xl ">
          <Image
            src="/images/handshake.jpg"
            alt="Personal Handshake"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Mobile-only image: single stacked image */}
      <div className="relative w-full h-[260px] rounded-2xl overflow-hidden shadow-lg md:hidden">
        <Image
          src="/images/handshake.jpg"
          alt="Personal Handshake"
          fill
          className="object-cover"
        />
      </div>

      {/* Right: Content */}
      <div className="flex flex-col gap-5 md:gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Unternehmensphilosophie
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed">
          Bei COREBERG publizieren wir keine offenen Stellen. Unser Ansatz ist
          diskret und individuell – wir konzentrieren uns darauf, Talente
          gezielt mit passenden Unternehmen zusammenzubringen. Wenn Sie Ihren
          Lebenslauf hochladen, prüfen wir Ihre Qualifikationen, sprechen Sie
          persönlich an und beraten Sie professionell zu passenden
          Karrieremöglichkeiten.
        </p>

        <p className="text-gray-600 text-sm leading-relaxed">
          So stellen wir sicher, dass Ihre Fähigkeiten optimal eingesetzt werden
          und Sie die Chance erhalten, sich für strategisch relevante Positionen
          zu empfehlen. Unser Netzwerk ermöglicht es, auch Vakanzen zu
          berücksichtigen, die nicht öffentlich ausgeschrieben sind. Mit
          COREBERG profitieren Sie von einer diskreten, individuellen Betreuung
          und einem persönlichen Zugang zu spannenden Karrierechancen.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 md:gap-4 mt-2">
          {!file && !isSent && (
            <label className="cursor-pointer flex items-center gap-2 bg-[#091019] text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-gray-800 transition">
              UPLOAD CV <Upload size={16} />
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

          <Link
            href="/dienstleistungen"
            className="flex items-center gap-2 border border-gray-300 text-gray-800 text-sm font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition"
          >
            Unsere Leistungen
          </Link>
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
