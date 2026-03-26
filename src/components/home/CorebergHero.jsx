"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out quad
      const easing = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easing * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <>{count}</>;
};

const stats = [
  {
    label: "Erfolgreiche Besetzungen",
    value: 99,
    unit: "%",
    icon: <Image src="/images/Up Icon.svg" width={18} height={18} alt="Up" />,
    description:
      "Unsere Mandate werden innerhalb 22 Tage erfolgreich abgeschlossen.",
    cardTheme: "bg-[#FEF8FF36] backdrop-blur-xl text-[#0A162C]",
    labelTheme: "text-[#0A162C]",
    unitTheme: "text-[#ffff]",
    descTheme: "text-[#0A162C]",
  },
  {
    label: "Branchenkompetenzen",
    value: 97,
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
    cardTheme: "bg-[#FEF8FF36] backdrop-blur-xl text-white",
    labelTheme: "text-white",
    unitTheme: "text-[#627C9F]",
    descTheme: "text-white/70",
  },
];

export default function CorebergHero() {
  return (
    <section className="relative w-full flex flex-col md:flex-row md:min-h-screen">
      
      {/* Left: Team Image — hidden on mobile, shown on md+ */}
      <div className="hidden md:block md:w-[38%] relative">
        <Image
          src="/images/leftPart.jpg"
          alt="Coreberg Team"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 38vw"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Mobile-only hero image */}
      <div className="relative w-full h-[260px] md:hidden">
        <Image
          src="/images/leftPart.jpg"
          alt="Coreberg Team"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Fade into dark section below */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A162C]" />
      </div>

      {/* Right: Dark content area */}
      <div className="flex-1 bg-[#0A162C] flex flex-col justify-start py-10 md:py-16 px-5 md:px-12 lg:px-20 pb-8 md:pb-[460px]">
        <div className="max-w-[900px]">
          <h1 className="text-white text-[22px] md:text-[29px] font-light leading-snug mb-5 md:mb-6">
            Wir haben COREBERG nicht ins Leben gerufen, um das Recruiting{" "}
            <span className="font-semibold">
              neu zu erfinden. Wir haben es gegründet, um die klassischen
              Tugenden der Personalberatung mit der Agilität der modernen
              Wirtschaft zu vereinen.
            </span>
          </h1>

          <p className="text-gray-400 text-sm leading-relaxed mb-6 md:mb-8">
            Hinter COREBERG stehen Experten, die die massgebenden Stationen der
            modernen Personalgewinnung nicht nur durchlaufen, sondern aktiv
            mitgestaltet haben.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-3 md:gap-4 flex-wrap">
            <button className="flex items-center gap-2 text-[#223140] px-5 md:px-6 py-2.5 md:py-3 text-sm bg-white rounded-sm hover:bg-[#0A162C] hover:text-white hover:border-white border transition-all duration-200">
              Warum uns wählen <ArrowRight size={16} />
            </button>
            <button className="bg-[#0A162C] text-white px-5 md:px-6 py-2.5 md:py-3 text-sm hover:bg-white rounded-sm hover:text-[#0A162C] hover:border-[#0A162C] border transition-all duration-200">
              Kontakt aufnehmen
            </button>
          </div>
        </div>
      </div>

      {/* Stat Cards — absolute on desktop, static flow on mobile */}
      <div className="
        flex flex-col md:flex-row gap-3 md:gap-4
        w-full
        bg-[#0A162C] md:bg-transparent
        px-5 md:px-0
        pb-8 md:pb-0
        md:absolute md:bottom-10 md:left-0 md:right-0 md:container md:mx-auto
      ">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`
              relative w-full md:flex-1 md:min-w-[378px]
              h-auto md:h-[400px] mt-2
              p-6 md:p-10
              flex flex-col justify-end
              transition-transform duration-300 hover:scale-[0.98] md:hover:scale-[0.92]
              ${stat.cardTheme}
            `}
          >
            <div className="mb-auto">
              <p className={`text-base md:text-[20px] font-medium uppercase tracking-widest ${stat.labelTheme}`}>
                {stat.label}
              </p>
            </div>

            <div>
              <div className="flex items-end gap-1 mb-4 md:mb-6">
                <div className="flex flex-row items-center justify-between w-full border-b border-white py-4 md:py-5">
                  <span className="text-xl font-light opacity-60 mb-4 md:mb-8 block">
                    {stat.icon}
                  </span>
                  <div className="flex flex-row items-end justify-between">
                    <span className="text-[48px] md:text-[64px] leading-none tracking-tighter">
                      <CountUp end={stat.value} />
                    </span>
                    <span className={`text-[28px] md:text-[40px] font-light leading-10 mb-2 ${stat.unitTheme}`}>
                      {stat.unit}
                    </span>
                  </div>
                </div>
              </div>
              <p className={`text-[13px] md:text-[15px] max-w-full md:max-w-[280px] leading-relaxed ${stat.descTheme}`}>
                {stat.description}
              </p>
            </div>
          </div>
        ))}

        {/* Third card: image */}
        <div className="relative w-full md:flex-1 md:min-w-[180px] h-[200px] md:h-auto overflow-hidden transition-transform duration-300 hover:scale-[0.98] md:hover:scale-[0.92]">
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