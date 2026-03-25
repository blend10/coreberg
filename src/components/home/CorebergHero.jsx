// components/CorebergHero.jsx
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const stats = [
  {
    label: "Erfolgreiche Besetzungen",
    value: "99",
    unit: "%",
    icon: <Image src="/images/Up Icon.svg" width={18} height={18} alt="Up" />,
    description:
      "Unsere Mandate werden innerhalb 22 Tage erfolgreich abgeschlossen.",
    cardTheme: "bg-[#FEF8FF36] backdrop-blur-xl text-[#0A162C] ",
    labelTheme: "text-[#0A162C]",
    unitTheme: "text-[#ffff]",
    descTheme: "text-[#0A162C]",
  },
  {
    label: "Branchenkompetenzen",
    value: "97",
    unit: "%",
    icon: (
      <Image
        src="/images/Up Icon.svg"
        width={18}
        height={18}
        alt="Up"
        className="rotate-180"
      />
    ),
    description: "Unser vermittelten Kandidaten bleiben länger als drei Jahre.",
    cardTheme: "bg-[#FEF8FF36] backdrop-blur-xl  text-white",
    labelTheme: "text-white",
    unitTheme: "text-[#627C9F]",
    descTheme: "text-white/70",
  },
];

export default function CorebergHero() {
  return (
    <section className="relative w-full min-h-screen flex">
      {/* Left: Team Image */}
      <div className="w-[38%] relative">
        <Image
          src="/images/leftPart.jpg"
          alt="Coreberg Team"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 38vw"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay blending into dark bg */}
      </div>

      {/* Right: Dark content area */}
      <div className="flex-1 bg-[#0A162C] flex flex-col justify-start py-16 px-12 lg:px-20 ">
        {/* Headline */}
        <div className="max-w-[900px]">
          <h1 className="text-white text-[29px] font-light leading-snug mb-6">
            Wir haben COREBERG nicht ins Leben gerufen, um das Recruiting{" "}
            <span className="font-semibold">
              neu zu erfinden. Wir haben es gegründet, um die klassischen
              Tugenden der Personalberatung mit der Agilität der modernen
              Wirtschaft zu vereinen.
            </span>
          </h1>

          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Hinter COREBERG stehen Experten, die die massgebenden Stationen der
            modernen Personalgewinnung nicht nur durchlaufen, sondern aktiv
            mitgestaltet haben.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button className="flex items-center gap-2 text-[#223140] px-6 py-3 text-sm bg-white rounded-sm hover:bg-[#0A162C] hover:text-white hover:border-white border transition-all duration-200">
              Warum uns wählen <ArrowRight size={16} />
            </button>
            <button className="bg-[#0A162C] text-white px-6 py-3 text-sm hover:bg-white rounded-sm hover:text-[#0A162C] hover:border-[#0A162C] border transition-all duration-200">
              Kontakt aufnehmen
            </button>
          </div>
        </div>

        {/* Stat Cards Row */}
      </div>
      <div className="flex gap-4 mt-12 flex-wrap absolute bottom-10 left-0 right-0 container mx-auto">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`relative flex-1 min-w-[378px] h-[400px] p-10 flex flex-col justify-end transition-transform duration-300 hover:scale-[0.92] ${stat.cardTheme}`}
          >
            <div className="mb-auto">
              <p
                className={`text-[20px] font-medium uppercase tracking-widest ${stat.labelTheme}`}
              >
                {stat.label}
              </p>
            </div>

            <div>
              <div className="flex items-end gap-1 mb-6">
                <div className="flex flex-row items-center justify-between w-full border-b border-white py-5">
                  <span className={`text-xl font-light opacity-60 mb-8 block `}>
                    {stat.icon}
                  </span>
                  <div className="flex flex-row items-end justify-between ">
                    <span
                      className={`text-[64px] leading-none tracking-tighter`}
                    >
                      {stat.value}
                    </span>
                    <span
                      className={`text-[40px] font-light leading-10 mb-2 ${stat.unitTheme}`}
                    >
                      {stat.unit}
                    </span>
                  </div>
                </div>
              </div>
              <p
                className={`text-[15px] max-w-[280px] leading-relaxed ${stat.descTheme}`}
              >
                {stat.description}
              </p>
            </div>
          </div>
        ))}

        {/* Third card: dark image placeholder */}
        <div className="relative flex-1 min-w-[180px] overflow-hidden transition-transform duration-300 hover:scale-[0.92]">
          <Image
            src="/images/card3.png"
            alt="Office"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 38vw"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>
    </section>
  );
}
