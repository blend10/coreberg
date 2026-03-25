// ContactSection.jsx
"use client";
import { useState } from "react";

const services = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
        />
      </svg>
    ),
    title: "Executive & Professional Search",
    description:
      "Gezielte Besetzung von Schlüsselpositionen mit Fach- und Führungskräften.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
    title: "Talent Advisory",
    description:
      "Strategische Unterstützung bei Talentthemen, Karriereentscheidungen und langfristiger Entwicklung.",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT: Info panel */}
        <div className="bg-gray-50 rounded-xl p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-gray-900">
              Kontakt aufnehmen
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Wenn Sie Schlüsselpositionen besetzen, Ihr Recruiting strategisch
              weiterentwickeln oder ein konkretes Anliegen besprechen möchten,
              stehen wir Ihnen persönlich zur Verfügung.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Jede Anfrage behandeln wir diskret und mit höchster Sorgfalt.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold text-gray-800 mb-3">
              Wie können wir Sie unterstützen?
            </p>
            {services.map((s, i) => (
              <div key={i} className="flex gap-3 items-start py-3">
                <div className="mt-0.5">{s.icon}</div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-semibold text-gray-800">
                    {s.title}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact buttons */}
          <div className="grid grid-cols-2 gap-3 mt-2">
            <a
              href="tel:+41415472140"
              className="flex flex-col gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <div>
                <p className="text-xs font-semibold text-gray-800">
                  Rufen Sie uns an ↗
                </p>
                <p className="text-xs text-gray-400">+61 415 472 140</p>
              </div>
            </a>
            <a
              href="mailto:info@coreberg.ch"
              className="flex flex-col gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <div>
                <p className="text-xs font-semibold text-gray-800">
                  E-Mail senden ↗
                </p>
                <p className="text-xs text-gray-400">info@coreberg.ch</p>
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT: Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-700">
              E-Mail-Adresse <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="ihre.email@beispiel.ch"
              required
              className="border border-gray-200 rounded-md px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-gray-400 transition-colors"
            />
          </div>

          {/* Name + Phone */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-700">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ryan"
                required
                className="border border-gray-200 rounded-md px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-gray-400 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-700">
                Telefonnummer <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="(+41) 000 000-00000"
                required
                className="border border-gray-200 rounded-md px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-gray-400 transition-colors"
              />
            </div>
          </div>

          {/* Company + Service */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-700">
                Unternehmen
              </label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Name Ihres Unternehmens"
                className="border border-gray-200 rounded-md px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-gray-400 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-700">
                Serviceinteresse
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="border border-gray-200 rounded-md px-4 py-2.5 text-sm text-gray-500 outline-none focus:border-gray-400 transition-colors bg-white"
              >
                <option value="">Service</option>
                <option value="executive-search">Executive Search</option>
                <option value="professional-search">Professional Search</option>
                <option value="talent-advisory">Talent Advisory</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-700">
              Nachricht <span className="text-red-400">*</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Wie können wir Sie unterstützen?"
              required
              className="border border-gray-200 rounded-md px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-gray-400 transition-colors resize-none"
            />
          </div>

          {/* Consent */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="agreed"
              checked={form.agreed}
              onChange={handleChange}
              required
              className="mt-0.5 accent-gray-800"
            />
            <p className="text-xs text-gray-400 leading-relaxed">
              Mit dem Absenden des Formulars bestätige ich, dass ich die
              Datenschutzerklärung gelesen habe und ihr zustimme.
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gray-900 text-white text-sm font-semibold py-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors duration-200"
          >
            Anfrage senden →
          </button>
        </form>
      </div>
    </section>
  );
}
