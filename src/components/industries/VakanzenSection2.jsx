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
  const [pdfFile, setPdfFile] = useState(null);
  const [jobFile, setJobFile] = useState(null);
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const toggle = (id) => setOpenItem(openItem === id ? null : id);

  const handleSend = async () => {
    if ((!pdfFile && !jobFile) || !email || isSubmitting) return;
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData();
    if (pdfFile) formData.append("files", pdfFile);
    if (jobFile) formData.append("files", jobFile);
    formData.append("email", email);
    formData.append("type", "Industries Combined Upload");

    try {
      const res = await fetch("/api/send-job", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setIsSent(true);
        setPdfFile(null);
        setJobFile(null);
        setEmail("");
        setTimeout(() => setIsSent(false), 3500);
      } else {
        const data = await res.json();
        setError(data.error || "Etwas ist schiefgelaufen.");
      }
    } catch {
      setError("Netzwerkfehler. Bitte erneut versuchen.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 lg:gap-20 xl:gap-24 items-center overflow-hidden">
      {/* Left: Image */}
      <div className="relative w-full hidden md:flex justify-center">
        {/* Large background image */}
        <div className="relative w-full max-w-[400px] xl:max-w-[511px] aspect-[511/763] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/image1.jpg"
            alt="Matterhorn Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlapping foreground image */}
        <div className="absolute right-0 xl:-right-10 top-1/2 -translate-y-1/2 w-[200px] xl:w-[289px] aspect-[289/434] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/imageright.png"
            alt="Personal Handshake"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Mobile-only image: single stacked image */}
      <div className="relative w-full h-[260px] rounded-2xl overflow-hidden shadow-lg md:hidden">
        <Image
          src="/images/imageright.png"
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
          {/* Buttons or File Chips */}
          {!isSent && (
            <div className="flex flex-col gap-3 w-full">
              {/* Conditional Email Field (only if something is selected) */}
              {(pdfFile || jobFile) && (
                <div className="flex flex-col gap-1 w-full max-w-sm animate-in fade-in slide-in-from-left-2 duration-300">
                  <label className="text-xs text-gray-500 font-medium">Ihre E-Mail Adresse *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-Mail"
                    className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-gray-300/50 transition"
                  />
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                {/* PDF Slot */}
                {!pdfFile ? (
                  <label className="cursor-pointer flex items-center gap-2 bg-[#091019] text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-gray-800 transition">
                    UPLOAD PDF <Upload size={16} />
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => {
                        const selected = e.target.files?.[0];
                        if (selected) setPdfFile(selected);
                      }}
                    />
                  </label>
                ) : (
                  <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 text-gray-800 text-sm font-medium px-4 py-3 rounded-md animate-in zoom-in-95 duration-200">
                    <span className="truncate max-w-[120px]">PDF: {pdfFile.name}</span>
                    <button onClick={() => setPdfFile(null)} className="text-gray-400 hover:text-red-500 transition-colors">
                      <X size={16} />
                    </button>
                  </div>
                )}

                {/* Job Slot */}
                {!jobFile ? (
                  <label className="cursor-pointer flex items-center gap-2 border border-gray-300 text-gray-800 text-sm font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition">
                    UPLOAD JOB AD <Upload size={16} />
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => {
                        const selected = e.target.files?.[0];
                        if (selected) setJobFile(selected);
                      }}
                    />
                  </label>
                ) : (
                  <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 text-gray-800 text-sm font-medium px-4 py-3 rounded-md animate-in zoom-in-95 duration-200">
                    <span className="truncate max-w-[120px]">JOB: {jobFile.name}</span>
                    <button onClick={() => setJobFile(null)} className="text-gray-400 hover:text-red-500 transition-colors">
                      <X size={16} />
                    </button>
                  </div>
                )}

                {/* Send Button */}
                {(pdfFile || jobFile) && (
                  <button
                    onClick={handleSend}
                    disabled={isSubmitting || !email}
                    className="flex items-center gap-2 bg-[#091019] text-white text-sm font-medium px-6 py-3 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
                  >
                    {isSubmitting ? "WIRD GESENDET…" : "SENDEN"} <ArrowRight size={16} />
                  </button>
                )}
              </div>
              {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
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
