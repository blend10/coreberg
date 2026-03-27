"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

// ── Scroll Reveal ────────────────────────────────────────────────────────────
const ScrollRevealText = ({
  parts = [],
  className = "",
  as: Component = "div",
}) => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Flatten all parts into one string to calculate total chars
  const fullText = parts.map((p) => p.text).join("");
  const totalChars = fullText.length;

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        if (!containerRef.current) {
          rafId = null;
          return;
        }

        const { top } = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const start = windowHeight * 0.9;
        const end = windowHeight * 0.2;

        let p = (start - top) / (start - end);
        if (p < 0) p = 0;
        if (p > 1) p = 1;

        setProgress(p);
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  let runningCharCount = 0;

  return (
    <Component ref={containerRef} className={className}>
      {parts.map((part, partIdx) => {
        const chars = part.text.split("");

        const renderedPart = (
          <span key={partIdx} className={part.className || ""}>
            {chars.map((char, i) => {
              const currentCharIndex = runningCharCount + i;
              const charThreshold = currentCharIndex / totalChars;
              const isVisible = progress > charThreshold;

              return (
                <span
                  key={i}
                  className="transition-colors duration-100"
                  style={{
                    color: isVisible
                      ? part.activeColor || "#ffffff"
                      : "rgba(255,255,255,0.25)",
                  }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        );

        runningCharCount += chars.length;
        return renderedPart;
      })}
    </Component>
  );
};

export default function CorebergHero() {
  const pathname = usePathname();

  return (
    <section className="relative w-full flex flex-col md:flex-row md:min-h-screen">
      {/* Left: Team Image — hidden on mobile, shown on md+ */}
      <div className="hidden md:block md:w-[38%] relative">
        <Image
          src="/images/leftone.png"
          alt="Coreberg Team"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 38vw"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Mobile-only hero image */}
      <div className="relative w-full h-[260px] md:hidden">
        <Image
          src="/images/leftone.png"
          alt="Coreberg Team"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Fade into dark section below */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A162C]" />
      </div>

      {/* Right: Dark content area */}
      <div className="flex-1 bg-[#0A162C] flex flex-col justify-start py-10 md:py-20 lg:py-28 px-5 md:px-12 lg:px-20 pb-8 md:pb-[380px] lg:pb-[360px] xl:pb-[480px]">
        <div className="max-w-[700px] xl:max-w-[900px]">
          <ScrollRevealText
            as="h1"
            className="text-[22px] md:text-[26px] lg:text-[28px] xl:text-[40px] font-light leading-snug mb-5 md:mb-6"
            parts={[
              {
                text: "Wir haben COREBERG nicht ins Leben gerufen, um das Recruiting neu zu erfinden. Wir haben es gegründet, um die klassischen Tugenden der Personalberatung mit der Agilität der modernen Wirtschaft zu vereinen. ",
                activeColor: "#ffffff",
              },
            ]}
          />

          <p className="text-gray-400 text-sm md:text-base lg:text-base xl:text-lg leading-relaxed mb-6 md:mb-8 lg:max-w-xl">
            Hinter COREBERG stehen Experten, die die massgebenden Stationen der
            modernen Personalgewinnung nicht nur durchlaufen, sondern aktiv
            mitgestaltet haben.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-3 md:gap-4 flex-wrap">
            {pathname !== "/uberuns" && (
              <Link
                href="/uberuns"
                className="flex items-center gap-2 text-[#223140] px-5 md:px-8 py-2.5 md:py-3.5 text-sm bg-white rounded-sm hover:bg-[#0A162C] hover:text-white hover:border-white border transition-all duration-200 w-fit font-medium"
              >
                Warum uns wählen <ArrowRight size={16} />
              </Link>
            )}
            <Link
              href="/kontakt"
              className="bg-[#0A162C] text-white px-5 md:px-8 py-2.5 md:py-3.5 text-sm hover:bg-white rounded-sm hover:text-[#0A162C] hover:border-[#0A162C] border transition-all duration-200 w-fit"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </div>

      {/* Stat Cards — absolute on desktop, static flow on mobile */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full bg-[#0A162C] md:bg-transparent px-5 md:px-5 lg:px-10 xl:px-0 pb-8 md:pb-0 md:absolute md:bottom-10 md:left-0 md:right-0 md:container md:mx-auto">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`
              relative w-full md:flex-1 md:min-w-[300px] lg:min-w-[300px] xl:min-w-[378px]
              h-auto md:h-[350px] lg:h-[320px] xl:h-[400px] mt-2
              p-6 md:p-8 lg:p-8 xl:p-10
              flex flex-col justify-end
              transition-transform duration-300 hover:scale-[0.98] md:hover:scale-[0.92]
              ${stat.cardTheme}
            `}
          >
            <div className="mb-auto">
              <p
                className={`text-base md:text-[18px] lg:text-[18px] xl:text-[20px] font-medium uppercase tracking-widest ${stat.labelTheme}`}
              >
                {stat.label}
              </p>
            </div>

            <div>
              <div className="flex items-end gap-1 mb-4 md:mb-6">
                <div className="flex flex-row items-center justify-between w-full border-b border-white py-4 md:py-5">
                  <span className="text-xl font-light opacity-60 mb-2 md:mb-5 block">
                    {stat.icon}
                  </span>
                  <div className="flex flex-row items-end justify-between">
                    <span className="text-[40px] md:text-[48px] lg:text-[48px] xl:text-[64px] leading-none tracking-tighter">
                      <CountUp end={stat.value} />
                    </span>
                    <span
                      className={`text-[24px] md:text-[28px] lg:text-[28px] xl:text-[40px] font-light leading-10 mb-2 ${stat.unitTheme}`}
                    >
                      {stat.unit}
                    </span>
                  </div>
                </div>
              </div>
              <p
                className={`text-[13px] md:text-[14px] lg:text-[13px] xl:text-[15px] max-w-full md:max-w-[280px] leading-relaxed ${stat.descTheme}`}
              >
                {stat.description}
              </p>
            </div>
          </div>
        ))}

        {/* Third card: image */}
        <div className="relative mt-2 w-full md:flex-1 md:min-w-[180px] h-[200px] md:h-auto overflow-hidden transition-transform duration-300 hover:scale-[0.98] md:hover:scale-[0.92]">
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
