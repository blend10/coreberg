"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const StartPage = ({
  title = "Mensch zu Mensch.",
  titleHighlight = "Beratung",
  titleSuffix = "die verbindet.",
  subheading = "Strategische Personalgewinnung",
  description = "In einer dynamischen Arbeitswelt reicht klassische Rekrutierung nicht mehr aus. Wir verstehen Personalgewinnung als strategischen Prozess – für gezielte Besetzungen und nachhaltigen Unternehmenserfolg.",
  videoSrc = "/videos/videoBg.mp4",
  imageSrc = "",
  statNumber = "80+",
  statLabel = "Strategische Personalgewinnung",
  statDescription = "Jede Zusammenarbeit beginnt mit einer präzisen Analyse. Wir verstehen Anforderungen, Kultur und Schlüsselkompetenzen – als Grundlage für gezielte und nachhaltige Besetzungen.",
  buttonText = "Jetzt Kontakt Aufnehmen",
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    const numericPart = parseInt(statNumber.toString().replace(/[^0-9]/g, "")) || 0;
    const duration = 1500; // 1.5 seconds
    const fps = 60;
    const totalFrames = (duration / 1000) * fps;
    let currentFrame = 0;

    const animate = () => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const nextValue = Math.floor(easeOutQuad * numericPart);

      if (currentFrame <= totalFrames) {
        setDisplayNumber(nextValue);
        requestAnimationFrame(animate);
      } else {
        setDisplayNumber(numericPart);
      }
    };

    requestAnimationFrame(animate);
  }, [statNumber]);

  const suffix = statNumber.toString().replace(/[0-9]/g, "");

  return (
    <div className="relative h-screen rounded-2xl max-sm:rounded-none w-full overflow-hidden font-serif">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
      ) : (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover z-0 -scale-x-100"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-black/30 max-sm:bg-black/40 z-0" />

      <div
        className={`absolute inset-0 z-50 flex ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute w-[50%] max-md:w-full h-full bg-[#FEF8FF36] backdrop-blur-2xl transition-transform duration-700 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ transitionDelay: menuOpen ? "0ms" : "400ms" }}
        />

        <div
          className={`relative z-20 flex flex-col justify-between items-center h-full border-r border-white/10 w-[10%] max-md:w-[20%] max-sm:w-[25%] py-10 max-sm:py-6 shrink-0 transition-all duration-700 ease-out ${
            menuOpen
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
          style={{ transitionDelay: menuOpen ? "100ms" : "250ms" }}
        >
          <div>
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={120}
              height={120}
              className="brightness-0 invert max-sm:w-[70px] max-sm:h-auto"
            />
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="relative z-50 text-white hover:opacity-60 transition-opacity pointer-events-auto cursor-pointer"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col gap-4 items-center">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
            >
              <Image
                src="/images/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
                className="brightness-0 invert"
              />
            </a>
          </div>
        </div>

        <div
          className={`relative z-10 flex flex-col justify-center px-16 max-md:px-8 max-sm:px-6 h-full transition-all duration-700 ease-out ${
            menuOpen ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
          style={{ transitionDelay: menuOpen ? "200ms" : "150ms" }}
        >
          <nav className="flex flex-col gap-6 max-sm:gap-5">
            {[
              { label: "Startseite", href: "/" },
              { label: "Über uns", href: "/uberuns" },
              { label: "Dienstleistungen", href: "/dienstleistungen" },
              { label: "Industries", href: "/industries" },
              { label: "Kontakt", href: "/kontakt" },
            ].map((item, i) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={i}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    transitionDelay: menuOpen
                      ? `${i * 40 + 300}ms`
                      : `${(4 - i) * 30}ms`,
                  }}
                  className={`font-sans text-lg max-sm:text-base tracking-wide transition-all duration-500 ${
                    menuOpen
                      ? "translate-y-0 opacity-100 pointer-events-auto"
                      : "translate-y-4 opacity-0 pointer-events-none"
                  } ${
                    isActive
                      ? "text-white underline underline-offset-4"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="relative z-10 flex h-full">
        <div className="flex flex-col justify-between items-center h-full border-r border-white/10 w-[10%] py-10  shrink-0 max-md:hidden">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={120}
              height={120}
              className="brightness-0 invert"
            />
          </Link>

          <button
            onClick={() => setMenuOpen(true)}
            className="hover:opacity-75 transition-opacity"
          >
            <Image
              src="/images/Menu Icon.svg"
              alt="Menu Icon"
              width={20}
              height={20}
              className="brightness-0 invert "
            />
          </button>

          <div className="flex flex-col gap-4 items-center">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
            >
              <Image
                src="/images/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
                className="brightness-0 invert"
              />
            </a>
          </div>
        </div>

        <div className="hidden max-md:flex absolute top-0 left-0 right-0 z-20 items-center justify-between px-5 max-sm:px-4 py-4 max-sm:py-3 backdrop-blur-sm bg-white/5 border-b border-white/10">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={120}
              height={120}
              className="brightness-0 invert "
            />
          </Link>
          <div className="flex items-center gap-4 max-sm:gap-3 px-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity hidden"
            >
              <Image
                src="/images/linkedin.svg"
                alt="LinkedIn"
                width={20}
                height={20}
                className="brightness-0 invert"
              />
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="hover:opacity-75 transition-opacity"
            >
              <Image
                src="/images/Menu Icon.svg"
                alt="Menu Icon"
                width={18}
                height={18}
                className="brightness-0 invert rotate-90"
              />
            </button>
          </div>
        </div>
        <div className="flex flex-1 relative overflow-hidden max-md:flex-col">
          <div className="flex flex-col justify-center px-16 w-[61.8%] max-md:w-full max-md:px-6 max-md:pt-20 max-sm:pt-20 max-md:justify-center max-md:flex-1">
            <h1 className="text-white text-5xl xl:text-6xl font-light leading-tight mb-6 tracking-tight max-md:text-4xl max-sm:text-[26px] max-md:mb-4 max-sm:mb-3">
              {title.split("\\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < title.split("\\n").length - 1 && <br />}
                </React.Fragment>
              ))}
              <span className="inline-flex items-center gap-2 mt-1 max-sm:gap-1">
                <span className="border border-white rounded-full px-7 py-2 text-white font-light italic max-md:px-5 max-md:py-1.5 max-sm:px-3 max-sm:py-1 max-sm:text-[22px]">
                  {titleHighlight.split("\\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < titleHighlight.split("\\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>{" "}
                {titleSuffix.split("\\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < titleSuffix.split("\\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </span>
            </h1>

            <div className="flex items-center mb-6 w-full -ml-0.5 max-md:mb-4 max-sm:mb-3 ">
              <div className="h-px flex-1 bg-white" />
              <div className="relative flex items-center justify-center">
                <div className="absolute w-2 h-2 rounded-full bg-white opacity-40 animate-ping" />
                <div className="relative w-4 h-4 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.7)]" />
              </div>
            </div>

            <div className="mb-10 max-md:mb-6 max-sm:mb-5">
              <div className="flex items-center gap-2 mb-3 max-sm:mb-2">
                <span className="w-6 h-[8px] bg-white/80 rounded-xl max-sm:w-4 max-sm:h-[6px]" />
                <p className="text-white/80 text-[14px] tracking-[0.2em] uppercase font-sans max-md:text-[12px] max-sm:text-[10px] max-sm:tracking-[0.15em]">
                  {subheading}
                </p>
              </div>
              <p className="text-white/80 text-sm font-sans font-light leading-relaxed max-md:text-[13px] max-sm:text-xs max-sm:leading-relaxed">
                {description.split("\\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < description.split("\\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>

            <div className="max-md:static">
              <Link
                href="/kontakt"
                className="group flex items-center gap-3 font-medium text-[#0B1F3B] text-sm font-sans px-1 py-1 rounded-lg w-fit bg-white max-sm:gap-2 transition-all duration-500 hover:scale-[1.03] active:scale-[0.97] shadow-xl hover:shadow-2xl hover:bg-[#F9FAFB] cursor-pointer"
              >
                <p className="px-4 max-md:px-3 max-sm:text-xs">
                  {buttonText}
                </p>
                <span className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#1a2744] max-sm:w-9 max-sm:h-9 transition-transform duration-500 group-hover:bg-[#0B1F3B]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-[45%] flex items-end justify-end p-10 max-md:relative max-md:w-full max-md:h-auto max-md:min-h-[200px] max-md:p-0 max-md:mt-auto">
            <div className="relative h-full w-full border border-white rounded-lg max-md:rounded-none max-md:border-x-0 max-md:border-b-0 max-md:border-t max-md:border-white/30">
              <div className="absolute top-5 left-5 w-10 h-10 bg-white [clip-path:polygon(0%_0%,100%_0%,0%_100%)] max-md:hidden" />
              <div className="absolute bottom-0 max-md:relative backdrop-blur-md bg-white/10 border border-white/20 rounded-b-lg p-6 shadow-xl max-md:p-4 max-sm:p-3 max-md:rounded-none w-full">
                <div className="flex items-center justify-between mb-3 max-md:mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-[6px] bg-[#0B1F3B] max-md:hidden" />
                    <p className="text-white text-[16px] tracking-[0.2em] uppercase font-sans max-md:text-[11px] max-sm:text-[10px] max-sm:tracking-[0.12em]">
                      {statLabel}
                    </p>
                  </div>
                  <Image
                    src="/images/arrow.svg"
                    alt="Arrow"
                    width={24}
                    height={24}
                    className="max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4"
                  />
                </div>
                <p className="text-[#0B1F3B] text-[80px] font-sans mb-2 max-md:text-[56px] max-sm:text-[42px] max-md:mb-1 max-md:leading-none">
                  {displayNumber}{suffix}
                </p>
                <p className="text-white text-sm font-sans font-light leading-relaxed max-md:text-xs max-sm:text-[11px] max-sm:leading-relaxed">
                  {statDescription.split("\\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < statDescription.split("\\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
