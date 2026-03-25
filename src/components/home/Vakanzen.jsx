"use client";
import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Image from "next/image";
const accordionItems = [
  {
    id: 1,
    title: "Diskrete Karrierevermittlung",
    content:
      "Wir vermitteln Sie diskret und gezielt an passende Unternehmen – ohne öffentliche Ausschreibungen. Unser Netzwerk ermöglicht es, exklusive Vakanzen zu besetzen, die nicht öffentlich zugänglich sind.",
  },
  {
    id: 2,
    title: "Persönliche Karrierebegleitung",
    content:
      "Wir prüfen Ihr Profil, beraten Sie individuell und eröffnen Zugang zu strategisch relevanten Positionen auch ausserhalb des offenen Marktes.",
  },
];

export default function VakanzenSection() {
  const [openItem, setOpenItem] = useState(2); // second item open by default

  const toggle = (id) => setOpenItem(openItem === id ? null : id);

  return (
    <section className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left: Image */}
      <div className="relative h-full">
        {/* Large background image */}
        <div className="w-[511px] h-[763px] relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/maunt.png"
            alt="Matterhorn Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overlapping foreground image */}
        <div className="absolute right-15 top-1/2 -translate-y-1/2 w-[289px] h-[434px] rounded-2xl overflow-hidden ">
          <Image
            src="/images/handshake.jpg"
            alt="Personal Handshake"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right: Content */}
      <div className="flex flex-col gap-6">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-gray-900">Vakanzen</h2>

        {/* Description paragraphs */}
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
        <div className="flex gap-4 mt-2">
          <button className="flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-gray-700 transition">
            UPLOAD CV <ArrowRight size={16} />
          </button>
          <button className="flex items-center gap-2 border border-gray-300 text-gray-800 text-sm font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition">
            Unsere Leistungen
          </button>
        </div>

        {/* Accordion */}
        <div className="mt-4 border-t border-gray-200">
          {accordionItems.map((item) => (
            <div key={item.id} className="border-b border-gray-200">
              <button
                onClick={() => toggle(item.id)}
                className="w-full flex items-center justify-between py-4 text-left text-gray-900 font-bold text-sm hover:text-gray-600 transition"
              >
                {item.title}
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
